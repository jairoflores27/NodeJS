<template>
  <div>
    <tbody>
      <tr>
         <td>celda</td>
         <td>celda</td>
         <td>celda</td>
      </tr>
    </tbody>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      Usuario: null
    }
  },
  mounted () {
    this.getUsuario()
  },
  methods: {
    getUsuario () {
      axios
        .get('/api/usuario')
        .then(response => {
          this.usuario = response.data
        })
        .catch(e => console.log(e))
    }
  }
}
</script>
