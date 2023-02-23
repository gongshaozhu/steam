import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Slider, InfiniteScroll } from 'element-ui';
import App from './App.vue'
import router from './router'
import store from './store'
import api from './axios'
import './index.less'
import 'swiper/css/swiper.min.css'
import 'element-ui/lib/theme-chalk/slider.css';
import { bus, busActions } from './bus'

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$bus = bus
Vue.prototype.$busActions = busActions
Vue.use(VueAwesomeSwiper)
Vue.use(Slider)
Vue.use(InfiniteScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
