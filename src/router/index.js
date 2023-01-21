import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Home from '../views/Home.vue'
import Login from '../views/account/Login.vue'

const routes = [
  {
    path: '/',
    name: "app",
    component: App,
    // children: [{ path: '/home', component: Home }],
  },  {
    path: '/home',
    name: "home",
    component: Home,
  },
  {
    path: '/login',
    name: "login",
    component: Login,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  })