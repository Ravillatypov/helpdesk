import Vue from 'vue'
import Vuex from 'vuex'
import contacts from './modules/contacts'
import articles from './modules/articles'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        contacts,
        articles
    }
})