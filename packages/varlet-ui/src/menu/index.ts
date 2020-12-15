import Menu from './Menu.vue'

Menu.install = function(app: any) {
  app.component(Menu.name, Menu)
}

export default Menu
