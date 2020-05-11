<template lang="pug">
  v-container(grid-list-xl, text-xs-center)
    v-layout(row, wrap)
      v-flex(xs6, offset-xs3)
        img( src="../assets/logo3.png" height="120" )
      v-flex(xs6, offset-xs3)
        h1 Inicio de Sesión
        v-form(enctype="multipart/form-data", @submit.prevent="login")
          v-text-field(id="email"
            v-model="form.email"
            prepend-icon="chevron_right",
            required
            label="Usuario:")

          v-text-field.input-group--focused(:append-icon="show3 ? 'visibility' : 'visibility_off'",
           :type="show3 ? 'text' : 'password'",
            placeholder='Contraseña'
            prepend-icon="chevron_right",
            v-model="form.password"
            outline=''
            @click:append='show3 = !show3')
              v-spacer
          v-btn(color="#11879a", dark, @click.native='login') Entrar
          v-row(align="center", justify="center")
            h3
              | ¿Aun no tienes cuenta?
              a(href='./Registro', style='color:#12ceeb;') has click aquí
</template>

<script>
import Api from '@/services/methods'
export default {
  name: 'login',
  props: {
    source: String
  },
  data: () => ({
    show3: false,
    drawer: null,
    form: {
      email: '',
      password: ''
    }
  }),
  created () {
    this.initialize()
  },
  methods: {
    initialize () {},
    login () {
      Api.post('/login', this.form)
        .then(res => {
          if (res.data.status === 'Success') {
            console.log('pasa por aqui')
            this.$store.dispatch('login', res.data)
            this.$cookies.set('token', res.data.token, '5D', '')
            window.location.href = '/home'
          } else {
            this.$swal(
              'Oops...',
              'Error encontrado, usuario o contraseña incorrecta.',
              'error'
            )
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
