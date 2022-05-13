import Loading from './loading/index.js'

const components = [Loading]
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
  Loading
}