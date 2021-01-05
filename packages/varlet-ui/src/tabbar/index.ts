import Tabbar from './Tabbar.vue'

Tabbar.install = function(app: any) {
  app.component(Tabbar.name, Tabbar)
}

export default Tabbar
