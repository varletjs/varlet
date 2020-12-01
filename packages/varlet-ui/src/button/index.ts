import Button from './Button.vue'

Button.install = function(app: any) {
  app.component(Button.name, Button)
}

export default Button
