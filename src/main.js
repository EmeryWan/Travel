// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
// 解决移动端边框问题
import './assets/styles/border.css'
// iconfont
import './assets/styles/iconfont.css'
// awesome swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store'

Vue.config.productionTip = false
// 解决移动端点击事件延迟 300ms
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
