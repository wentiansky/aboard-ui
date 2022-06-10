import Vue from 'vue'
import App from './App.vue'
// import AboardUI from '../packages'
import { Loading, AbCheckbox, DefaultCheckbox } from '../packages'
// import { Loading } from '../lib/index.umd.min.js'
// import '../lib/index.css'

Vue.config.productionTip = false
// Vue.use(AboardUI)
Vue.use(Loading)
Vue.use(AbCheckbox)
Vue.use(DefaultCheckbox)

new Vue({
  render: h => h(App),
}).$mount('#app')
