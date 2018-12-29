import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
Vue.config.productionTip = false

Vue.use(Vuetify)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})