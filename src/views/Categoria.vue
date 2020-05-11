<template>
  <v-layout align-start>
    <v-flex>
      <v-data-table
        :headers="headers"
        :items="categorias"
        :search="search"
        sort-by="nombre"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="indigo" dark>
            <v-toolbar-title>Categorias</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-text-field
              class="text-xs-center"
              v-model="search"
              label="Búsqueda"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on }">
                <v-btn color="success" fab dark small class="mb-2" v-on="on">
                  <v-icon title="Agregar">mdi-plus</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field v-model="editedItem.nombre" label="Nombre"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="error" small dark @click="close">
                    <v-icon>mdi-close</v-icon>Cancelar
                  </v-btn>
                  <v-btn color="success" small dark @click="save">
                    <v-icon>mdi-content-save</v-icon>Guardar
                  </v-btn>
                </v-card-actions>
                 </v-card-text>
              </v-card>
            </v-dialog>
            <!-- View show -->
            <v-dialog v-model="dialogShow" max-width="500px">
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitleShow }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field v-model="editedItem.nombre" disabled="true" label="Nombre"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-dialog>
            <!-- View show -->
          </v-toolbar>
        </template>
        <template v-slot:item.action="{ item }">
          <v-icon color="indigo" title="Ver" class="mr-2" @click="ShowItem(item)">mdi-eye</v-icon>
          <v-icon color="warning" title="Editar"  class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon color="error" title="Eliminar"  @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
        <template v-slot:no-data>
          <!-- <v-btn color="primary" @click="initialize">Reset</v-btn> -->
          <h1>No hay categorias registradas</h1>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialogShow: false,
    headers: [
      { text: 'Nombre', value: 'nombre' }, /* value es el nombre del  modelo */
      { text: 'Acciones', value: 'action', sortable: false }
    ],
    categorias: [],
    search: '',
    editedIndex: -1,
    editedItem: {
      _id: '',
      nombre: ''
    },
    defaultItem: {
      _id: '',
      nombre: ''
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1
        ? 'Nueva Categoria'
        : 'Modificar Categoria'
    },
    formTitleShow () {
      return 'Información de al Categoria'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogShow (val) {
      val || this.close()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.listarCategoria()/* inicia el metodo de listar */
    },
    /* muestra en la tabla los categorias */
    listarCategoria () {
      this.axios
        .get('/api/categorias')
        .then(response => {
          this.categorias = response.data
        })
        .catch(e => {
          console.log('se ejecuta error')
          console.log('error' + e)
        })
    },

    editItem (item) {
      this.editedIndex = this.categorias.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    ShowItem (item) {
      this.editedIndex = this.categorias.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogShow = true
    },

    deleteItem (item) {
      const index = this.categorias.indexOf(item)
      confirm('¿Esta seguro que desea Eliminar?') &&
        this.categorias.splice(index, 1)
      this.axios.delete('/api/categorias/' + item._id).then(response => {
        console.log(response)
      })
    },

    close () {
      this.dialog = false
      this.dialogShow = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        console.log('Datos guardados')
        console.log(this.editedItem)
        console.log(this.editedItem._id)
        this.axios
          .put('/api/categorias/' + this.editedItem._id, {
            nombre: this.editedItem.nombre
          })
          .then(response => {
            console.log(response)
          })

        Object.assign(this.categorias[this.editedIndex], this.editedItem)
      } else {
        this.axios
          .post('/api/categorias', {
            nombre: this.editedItem.nombre
          })
          .then(response => {
            console.log(response)
          })
        this.categorias.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
