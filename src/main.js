import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppPosts from './components/AppPosts.vue'
import SinglePost from './components/SinglePost'
import AddPost from './components/AddPost.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/posts' },
  { path: '/posts', component: AppPosts, name: 'posts' },
  { path: '/posts/:id', component: SinglePost, name: 'singlePost' },
  { path: '/add', component: AddPost, name: 'add' },
  { path: '/edit/:id', component: AddPost, name: 'edit' },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

