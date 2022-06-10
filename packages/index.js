import Loading from './loading/index.js'
import AbCheckbox from './checkbox/index.js'
import DefaultCheckbox from './default-checkbox/index.js'

const components = [Loading, AbCheckbox, DefaultCheckbox]
const install = function(Vue) {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== undefined && window.Vue) {
  install(window.Vue)
}

export default install
export {
  install,
  Loading,
  AbCheckbox,
  DefaultCheckbox
}