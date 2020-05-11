<template>
  <v-app>
    <Barra app></Barra>
    <v-content>
      <div class="container">
        <router-view/>
      </div>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Barra from './components/barra.vue'
import Footer from './components/footer.vue'
export default {
  name: 'App',
  components: { Barra, Footer },
  created () {
    this.initialize()
  },
  methods: {
    initialize () {}
  }
}
</script>
