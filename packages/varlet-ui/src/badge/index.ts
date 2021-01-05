import Badge from './Badge.vue'

Badge.install = function(app: any) {
  app.component(Badge.name, Badge)
}

export default Badge
