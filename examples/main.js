import Vue from 'vue'
import App from './App.vue'
// import AboardUI from '../packages'
// import { Loading } from '../packages'
import { Loading } from '../lib/index.umd.min.js'
import '../lib/index.css'

Vue.config.productionTip = false
// Vue.use(AboardUI)
Vue.use(Loading)

new Vue({
  render: h => h(App),
}).$mount('#app')
