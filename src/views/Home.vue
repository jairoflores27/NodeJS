<template>
<v-container>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src"
    >
    </v-carousel-item>
  </v-carousel>
  <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
 <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      shrink-on-scroll
      prominent
      src="../assets/OfertaloTodo.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
        ></v-img>
      </template>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon></v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon></v-icon>
      </v-btn>

      <template v-slot:extension>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
      max-height=""
    >
      <v-container style="height: 225px;"></v-container>
    </v-sheet>
  </v-card>
 <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
<v-banner two-line>
    <v-avatar
      slot="icon"
      color="deep-purple accent-4"
      size="40"
    >
      <v-icon
        icon="mdi-lock"
        color="white"
      >
        mdi-lock
      </v-icon>
    </v-avatar>

   Disfruta de todas nuestras ofertas y productos, descarga nuestra aplicación. En OfertaloTodo tenemos los mejores vendedores y la mejor reputación en ventas.

    <template v-slot:actions>
      <v-btn text color="deep-purple accent-4"></v-btn>
      <v-btn text color="deep-purple accent-4"></v-btn>
    </template>
  </v-banner>
<v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cardst"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
<v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
    <v-container>
      <v-row dense>
        <v-col cols="6">
          <v-card
            color="#FF80AB"
            dark
          >
            <v-card-title class="headline">Encuentra las mejores ofertas</v-card-title>

            <v-card-subtitle>Precios Increibles</v-card-subtitle>

            <v-card-actions>
              <v-btn text></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col
          v-for="(item, i) in itemst"
          :key="i"
          cols="6"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
<v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

  <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cardsd"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-card-title class="headline">Ofertas Exclusivas. Tiempo Limitado</v-card-title>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
<v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      slides: [
        {
          src: 'https://img.global.news.samsung.com/in/wp-content/uploads/2019/02/295-A-Series-KV-Banner-36x24inch-e1551339667384.jpg'
        },
        {
          src: 'https://www.lg.com/mx/images/MC/features/MC-G8SThinQ-MirrorBlack-HeroBanner-Desktop-new123.jpg'
        },
        {
          src: 'http://marketing.timesinternet.in/images/samsung-qled-featured-image.png'
        },
        {
          src: 'https://accesorioslg.com/images/banner2.jpg'
        }
      ],
      cards: [
        { title: 'Impresora', src: 'https://www.officedepot.com.mx/medias/84251.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDM4NDQ1fGltYWdlL2pwZWd8aDlhL2hiZS85NTY2NjE4MDkxNTUwLmpwZ3wxMDE2YjUzNGEwZTk2OGNkNmNlNTg5N2VhODI3NTBjMzczMzMxYjI3YzA3ZTY0NTVjMzBkODMyMDNmODVjMGYx', flex: 4 },
        { title: 'Ropa', src: 'https://stylelovely.com/wp-content/uploads/marcas_ropa_juvenil-736x412.jpg', flex: 4 },
        { title: 'Cosmeticos', src: 'https://http2.mlstatic.com/cosmeticos-chinos-mayoreo-calidad-y-precio-gana-dinero-ya-D_NQ_NP_895622-MLM31223285293_062019-F.jpg', flex: 4 }
      ],
      cardst: [
        { title: '', src: 'https://img.global.news.samsung.com/co/wp-content/uploads/2019/02/Regional_Galaxy_Banner2_704x160.jpg', flex: 12 },
        { title: '', src: 'https://www.lg.com/au/promotions/images/LG016%20-%203844%20-%20PromotionsPage%20-%20banner.jpg', flex: 12 }
      ],
      itemst: [
        {
          color: '#90CAF9',
          src: 'https://img.freepik.com/vector-gratis/letras-feliz-navidad-brillantes-confeti-brillantes-adornos_1262-16808.jpg?size=338&ext=jpg',
          title: 'MAGIA NAVIDEÑA',
          artist: 'Decora tu casa con nosotros'
        },
        {
          color: '#26c6da',
          src: 'https://www.lanacion.com.co/wp-content/uploads/2019/01/licores.png',
          title: 'Lo mejor en bebidas',
          artist: 'Semana de licores, prohibida la venta a menores de 18 años'
        },
        {
          color: '#952175',
          src: 'https://static.websguru.com.ar/var/m_6/67/676/39145/598947-salper-repuestos-accesorios-y-repuestos-para-vehiculo.png',
          title: 'Todo para tu vehiculo',
          artist: 'Ofertas increibles'
        }
      ],
      cardsd: [
        { title: '', src: 'https://tiendas.gamarra.com.pe/wp-content/uploads/2010/01/banner3.jpg', flex: 12 },
        { title: '', src: 'https://eratecnologica.com/wp-content/uploads/2015/10/ventas-computadoras.jpg', flex: 12 }
      ]
    }
  }
}
</script>
