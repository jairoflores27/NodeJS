import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2'
import axios from 'axios'
import VueAxios from 'vue-axios'
import cookies from 'vue-cookies'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)
Vue.use(cookies)
axios.defaults.baseURL = 'http://localhost'
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
