import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Brand from '../views/Brand.vue'
import Shop from '../views/Shop.vue'
import Gro from '../views/Gro.vue'
import High from '../views/High.vue'
import Event from '../views/Event.vue'
import Store from '../views/Store.vue'
import Intro from '../views/Intro.vue'
import Basket from '../views/Basket.vue'
import Mypage from '../views/Mypage.vue'
import Login from '../views/Login.vue'
import Find_id from '../views/Find_id.vue'
import Find_passwd from '../views/Find_passwd.vue'
import Register1 from '../views/Register1.vue'
import Register2 from '../views/Register2.vue'
import Register3 from '../views/Register3.vue'
import Register4 from '../views/Register4.vue'
import Point from '../views/Point.vue'
import Coupon from '../views/Coupon.vue'
import QnA from '../views/QnA.vue'
import FAQ from '../views/FAQ.vue'
import Buy from '../views/Buy.vue'
import Kakao from '../views/Kakao.vue'
import Face from '../views/Face.vue'
import Insta from '../views/Insta.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/brand',
    name: 'Brand',
    component: Brand
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/gro',
    name: 'Gro',
    component: Gro
  },
  {
    path: '/high',
    name: 'High',
    component: High
  },
  {
    path: '/event',
    name: 'Event',
    component: Event
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
  {
    path: '/intro',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: Mypage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/find_id',
    name: 'Find_id',
    component: Find_id
  },
  {
    path: '/find_passwd',
    name: 'Find_passwd',
    component: Find_passwd
  },
  {
    path: '/register1',
    name: 'Register1',
    component: Register1
  },
  {
    path: '/register2',
    name: 'Register2',
    component: Register2
  },
  {
    path: '/register3',
    name: 'Register3',
    component: Register3
  },
  {
    path: '/register4',
    name: 'Register4',
    component: Register4
  },
  {
    path: '/point',
    name: 'Point',
    component: Point
  },
  {
    path: '/coupon',
    name: 'Coupon',
    component: Coupon
  },
  {
    path: '/QnA',
    name: 'QnA',
    component: QnA
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/buy',
    name: 'Buy',
    component: Buy
  },
  {
    path: '/kakao',
    name: 'Kakao',
    component: Kakao
  },
  {
    path: '/face',
    name: 'Face',
    component: Face
  },
  {
    path: '/insta',
    name: 'Insta',
    component: Insta
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
