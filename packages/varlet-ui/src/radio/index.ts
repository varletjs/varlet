import { App } from 'vue'
import Radio from './Radio.vue'

Radio.install = function (app: App) {
  app.component(Radio.name, Radio)
}

export default Radio
