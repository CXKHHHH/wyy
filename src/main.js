import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import  Tailwind from "@/assets/Tailwind.css"
import store from "@/store/index"
import { Icon } from '@iconify/vue2'
//vant组件
import 'vant/lib/index.css'
import Vat from 'vant';
import AudioPlayer from   '@/components/AudioPlayer'
Vue.use(AudioPlayer) 
Vue.use(Vat) 

// vueConfig.use(moudle)的要求是什么
// 1 module 本身是函数
// 2 module不是函数但是具备一个install方法
// Vue.$use = function(module){
//   if(typeof module == "function"){
//     module(this)
//   }else if(typeof module.install =="function"){
//     module.install(this)
//   }
// }
Vue.config.productionTip = false
Vue.component('Icon',Icon)

new Vue({
  render: h => h(App),
  router,
  store,
  Tailwind,
}).$mount('#app')
