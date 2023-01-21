import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Home from '../views/Home.vue'
import Login from '../views/account/Login.vue'
import NewsDetail from '../views/index/NewsDetail.vue'
import About from '../views/index/About.vue'
import News from '../views/index/News.vue'
import Publish from '../views/index/Publish.vue'
import Feedback from '../views/index/Feedback.vue'

const routes = [
  {
    path: '/',
    name: "app",
    component: App,
    meta:{showFooter:true }
    // children: [{ path: '/home', component: Home }],
  },  {
    path: '/home',
    name: "home",
    component: Home,
    // meta:{showFooter:true },
    children:[]
  },
  {
    path: '/news',
    name: "news",
    component: News,
    // meta:{showFooter:false },
  },
  {
    path: '/newsdetail',
    name: "newsdetail",
    component: NewsDetail,
    // meta:{showFooter:false },
  },
  {
    path: '/about',
    name: "about",
    component: About,
    // meta:{showFooter:false },
  },
  {
    path: '/publish',
    name: "publish",
    component: Publish,
    // meta:{showFooter:false },
  },
  {
    path: '/feedback',
    name: "feedback",
    component: Feedback,
    // meta:{showFooter:false },
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