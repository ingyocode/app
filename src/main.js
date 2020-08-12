import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';
import router from './router'

Vue.config.productionTip = false

Vue.use(VueRouter);
/*
const routes = [
  // 이곳에 router 를 등록할 것 입니다.
];

// router 객체생성
const router = new VueRouter({
routes
});
*/
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
