<template>
<v-layout align-start>
  <v-flex xs6 sm3>
<v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#111b1d"
      dark
    >
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
         <img src="../assets/logo.png" width="200" height="80"/>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        label="Buscar"
        class="hidden-sm-and-down"
        v-model='search'
        append-icon='search'
      >
      </v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>perfil</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn
        icon
        large
        @click="mini = !mini"
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="../assets/logo2.png"
            alt="Vuetify"
          >
          </v-img></v-avatar>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" temporary color="#111b1d" dark>
      <v-list dense>
      <v-list-item :to="{name: 'home'}">
          <v-list-item-action>
            <v-icon color="#11879a">mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{name: 'Login'}">
          <v-list-item-action>
            <v-icon color="#11879a">mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Iniciar Sesion</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{name: 'Perfil'}">
          <v-list-item-action>
            <v-icon color="#11879a">mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Perfil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{name: 'Categoria'}">
          <v-list-item-action>
            <v-icon color="#11879a">mdi-format-list-bulleted</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Categorias</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{name: 'Publicar'}">
          <v-list-item-action>
            <v-icon color="#11879a">mdi-newspaper-variant-multiple</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Publicaciones</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item :to="{name: ''}">
          <v-list-item-action>
            <v-icon color="#11879a">mdi-help-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Ayuda</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>
  </v-flex>
</v-layout>
</template>
<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    search: '',
    drawer: null,
    mini: null
  })
}
</script>
