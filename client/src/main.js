import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
// import contactList from './components/contact/ContactList.vue'
Vue.config.productionTip = false

Vue.use(Vuetify)
// Vue.components('contact-list', contactList)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})