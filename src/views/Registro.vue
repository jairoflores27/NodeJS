<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-xs3 style="height:120px">
        <img src="../assets/logo3.png" height="120"/>
      </v-flex>
      <v-flex xs12 sm6 offset-xs3>
        <h1> Registro </h1>
        <v-form enctype="multipart/form-data">
          <v-row align="center" justify="center">
                <v-text-field
                   v-model="form.nombre"
                   id="nombre"
                   color="#11879a"
                   label="Nombre"
                   name="Nombre"
                   type="text"
                   :rules="nameRules">
                </v-text-field>
                <v-spacer></v-spacer>
                <v-text-field
                v-model="form.apellido"
                   id="apellido"
                   color="#11879a"
                   label="Apellido"
                   name="Apellido"
                   type="text">
                </v-text-field>
            </v-row>
          <v-row align="center" justify="center">
                <v-text-field
                  v-model="form.email"
                   id="correo"
                   color="#11879a"
                   label="Correo"
                   name="Correo"
                   type="text"
                   :rules="emailRules">
                </v-text-field>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="form.direccion"
                   id="direccion"
                   color="#11879a"
                   label="Direccion"
                   name="Direccion"
                   type="text">
                </v-text-field>
                </v-row>
          <v-row align="center" justify="center">
                <v-text-field
                  v-model="form.telefono"
                   id="telefono"
                   color="#11879a"
                   label="Telefono"
                   name="Telefono"
                   type="text">
                </v-text-field>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="form.password"
                  id="password"
                  color="#11879a"
                  label="Contraseña"
                  name="contraseña"
                  type="password"
                  :rules="passwordRules">
               </v-text-field>
               </v-row>
          <v-spacer></v-spacer>
          <v-row align="center" justify="center">
            <v-col cols="6">
                <v-btn color= "#11879a" @click='save()' dark><v-icon>save</v-icon>Registrar</v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="6">
           <v-btn color="#11879a" @click='save()' dark><v-icon>close</v-icon>Cancelar</v-btn>
            </v-col>
             </v-row>
           <v-row align="center" justify="center">
            <h3>¿Ya tienes cuenta? <a href="./Login" style="color:#12ceeb;">has click aquí</a></h3>
            </v-row>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Api from '@/services/methods'
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    form: {
      nombre: '',
      apellido: '',
      email: '',
      direccion: '',
      telefono: '',
      password: ''
    },
    nameRules: [
      v => !!v || 'Nombre es requerido',
      v => (v && v.length <= 10) || 'máximo 10 caracteres'
    ],
    emailRules: [
      v => !!v || 'E-mail es requerido',
      v => /.+@.+\..+/.test(v) || 'E-mail es inválido'
    ],
    passwordRules: [
      v => !!v || 'Contraseña es requerida',
      v => (v && v.length <= 10) || 'máximo 8 caracteres'
    ]
  }),
  created () {
    this.initialize()
  },
  methods: {
    initialize () {
    },
    save () {
      Api.post('/usuario', this.form)
        .then(res => {
          if (res.data.status === 'denied') {
            this.$swal(
              'Oops...',
              'El usuario ya existe, por favor verifique su información',
              'error'
            )
          } else {
            this.$swal(
              'Felicidades.!',
              'Te has registrado exitosamente',
              'success'
            )
            this.initialize()
            window.location.href = '/login'
          }
        })
        .catch(err => {
          console.log(err)
          this.$swal(
            'Oops...',
            'Error encontrado, verifique su información',
            'error'
          )
        })
    }
  }
}
</script>
