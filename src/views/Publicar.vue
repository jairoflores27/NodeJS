<template>
<v-container :items="publicaciones">
<v-row align="center" justify="center">
<v-col cols="12" sm="8" md="4">
   <v-card >
     <v-toolbar flat color="indigo" dark>
    <v-toolbar-title >Publica un articulo</v-toolbar-title>
    <v-spacer></v-spacer>
     </v-toolbar>
     <v-card-text>
  <v-form  ref="form" v-model="valid" lazy-validation>
    <v-text-field  v-model="editedItem.titulo" :counter="20"  :rules="nameRules" label="Titulo de la publicacion"  required></v-text-field>
    <img :src='ruta + img' v-if='img && !form.imagen.imageUrl' style='width:310px;height:auto'/>
    <img :src='editedItem.imagen.imageUrl' v-if='editedItem.imagen.imageUrl' style='width:310px;height:auto'/>
                          <v-text-field style='height: 56px;margin: 0px 0px 10px;' outline label='Seleccione la Foto' @click='pickFile' v-model='img' ></v-text-field>
                          <input
                              type="file"
                              style="display: none;"
                              ref="image"
                              accept="image/*"
                              @change="onFilePicked">
    <v-textarea  solo  v-model="editedItem.descripcion" name="input-7-4"   label="Descripcion" ></v-textarea>
    <v-select   v-model="editedItem.categoria" :items="idCategoriasArray" :rules="[v => !!v || 'Seleccione una categoria']"  label="Categoria"  required ></v-select>
    <v-text-field   v-model="editedItem.precio"   label="Pon un precio"  required></v-text-field>
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'selecciona la casilla para  continuar!']"
      label="seguro desea publicar?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="save"
    >
      Publicar
    </v-btn>

    <v-btn  color="error" class="mr-4"  @click="reset">Cancelar</v-btn>
  </v-form>
  </v-card-text>
   </v-card>
   </v-col>
   <v-col cols="12" sm="8" md="8">
   <v-card >
   <v-toolbar flat color="indigo" dark>
    <v-toolbar-title >Mis ultimas publicaciones</v-toolbar-title>
    <v-spacer></v-spacer>
     </v-toolbar>
     <v-card-text>

  <v-row align="center" justify="center">
    <!-- publicacion 1 -->
    <v-col cols="12" sm="8" md="6"  v-for="publicacion in publicaciones" :key="publicacion._id">
      <v-card>
      <v-form enctype="">
    <v-list-item  :items="publicaciones">
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title value="titulo" v-model="editedItem.titulo" class="headline">{{publicacion.titulo}}</v-list-item-title>
        <v-list-item-subtitle>Publicado por:Usuario  </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <img :src='ruta + `${publicacion.imagen}`' style='width: 300px; height: 250px;'>
    <v-card-text>
      {{publicacion.descripcion}}
      {{publicacion.categoria}}
    </v-card-text>
    <v-card-text>
      ${{publicacion.precio}}
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Editar
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Eliminar
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        {{publicacion.likes}}
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        {{publicacion.vistas}}
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
    </v-form>
    </v-card>
  </v-col>
  </v-row>
   </v-card-text>
  </v-card>
   </v-col>
  </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    ruta: 'http://localhost:9004/',
    publicaciones: [],
    img: '',
    editedIndex: -1,
    categorias: [],
    idCategoriasArray: [],
    editedItem: {
      _id: '',
      titulo: '',
      descripcion: '',
      categoria: '',
      precio: '',
      imagen: {
        imageName: '',
        imageUrl: '',
        imageFile: ''
      }
    },
    defaultItem: {
      _id: '',
      titulo: '',
      descripcion: '',
      precio: '',
      categoria: '',
      imagen: {
        imageName: '',
        imageUrl: '',
        imageFile: ''
      }
    },
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'El nombre es requerido',
      v => (v && v.length <= 20) || 'limite maximo de 20 caracteres'
    ],
    foto: '',
    fotoRules: [
      v => !!v || 'Se necesita una foto'
    ],
    email: '',
    emailRules: [
      v => !!v || 'El correo es requerido',
      v => /.+@.+\..+/.test(v) || 'El correo no es valido'
    ],
    select: null,
    checkbox: false
  }),
  created () {
    this.initialize()
  },
  methods: {
    listarCategorias () {
      this.axios.get('/api/categorias')
        .then((response) => {
          this.categorias = response.data
          console.log(this.categorias)
          this.categorias.map((data) => {
            this.idCategoriasArray.push({ text: data.nombre, value: data._id })
          })
          console.log(this.idCategoriasArray)
        })
        .catch((e) => {
          console.log('error' + e)
        })
    },
    pickFile () {
      this.$refs.image.click()
    },
    onFilePicked (e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        let peso = false
        for (let j = 0; j < files.length; j++) {
          if (files[j].size > 4194304) {
            peso = true
          }
        }
        if (peso === false) {
          this.editedItem.imagen.imageName = files[0].name
          if (this.editedItem.imagen.imageName.lastIndexOf('.') <= 0) {
            return
          }
          const fr = new FileReader()
          fr.readAsDataURL(files[0])
          fr.addEventListener('load', () => {
            this.editedItem.imagen.imageUrl = fr.result
            this.editedItem.imagen.imageFile = files[0] // this is an image file that can be sent to server...
            console.log('url' + this.editedItem.imagen.imageUrl)
          })
        } else {
          this.$swal.fire(
            'Oops...',
            'Error encontrado, la imagen debe pesar menos de 5MB.',
            'error'
          )
          this.files = []
          this.editedItem.imagen = []
        }
      } else {
        this.editedItem.imagen.imageName = ''
        this.editedItem.imagen.imageFile = ''
        this.editedItem.imagen.imageUrl = ''
      }
    },
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    initialize () {
      this.editedItem.imagen.imageName = ''
      this.editedItem.imagen.imageFile = ''
      this.editedItem.imagen.imageUrl = ''
      this.listarCategorias()
      this.listarPublicaciones()/* inicia el metodo de listar */
    },
    /* muestra en la tabla los proveedores */
    listarPublicaciones () {
      this.axios
        .get('/api/publicaciones')
        .then(response => {
          this.publicaciones = response.data
          console.log(this.publicaciones)
          console.log('ruta completa: ' + this.axios.defaults.baseURL)
        })
        .catch(e => {
          console.log('se ejecuta error')
          console.log('error' + e)
        })
    },
    save () {
      this.loading = true
      const data = new FormData()
      Object.keys(this.editedItem).map(key => {
        if (Array.isArray(this.editedItem[key])) {
          this.editedItem[key].forEach(val => {
            if (typeof val === 'object' && val !== null) {
              return data.append(`${key}[]`, JSON.stringify(val))
            }
            return data.append(`${key}[]`, val)
          })
        } else if (
          typeof this.editedItem[key] === 'object' &&
          this.editedItem[key] !== null
        ) {
          return data.append(key, JSON.stringify(this.editedItem[key]))
        } else {
          return data.append(key, this.editedItem[key])
        }
      })
      if (this.editedItem.imagen.imageFile) {
        data.append('imagen', this.editedItem.imagen.imageFile)
      }
      if (this.editedIndex > -1) {
        this.axios.put('/api/publicaciones', data)
          .then(response => {
            this.editedItem = Object.assign({}, this.defaultItem)
            console.log(response)
          })
        Object.assign(this.publicaciones[this.editedIndex], this.editedItem)
      } else {
        this.axios.post('/api/publicaciones', data)
          .then(response => {
            console.log(response.data)
            this.publicaciones.push(response.data)
          })
      }
      console.log('Datos guardados')
      this.close()
    }
  }
}
</script>
