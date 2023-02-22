import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './axios'
import './index.less'
import 'swiper/css/swiper.min.css'
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
