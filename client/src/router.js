import Vue from 'vue'
import Router from 'vue-router'
import contactList from './components/contact/ContactList.vue'
import articleEdit from './components/article/ArticleEdit.vue'
import articleView from './components/article/ArticleView.vue'
import articleList from './components/article/ArticleList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'contacts',
      component: contactList
    },
    {
      path: '/kb',
      name: 'articles',
      component: articleList,
      children: [{
        path: ':id',
        name: 'article-view',
        props: true,
        component: articleView
      }, {
        path: ':id/edit',
        name: 'article-edit',
        props: true,
        component: articleEdit
      }, ]
    },
  ]
})