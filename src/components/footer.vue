<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
      color="#111b1d"
    >
      <v-card-title>
        <strong class="subheading">¡Conéctate con nosotros en las redes sociales!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          color="#11879a"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>OfertaloTodo</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-instagram',
      'mdi-gmail'
    ]
  })
}
</script>
