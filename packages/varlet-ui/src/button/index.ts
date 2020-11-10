import Button from './Button.vue'

Button.install = function(app) {
  app.component(Button.name, Button)
}

export default Button
