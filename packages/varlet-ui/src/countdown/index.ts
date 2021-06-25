import type { App } from 'vue'
import Countdown from './Countdown.vue'

Countdown.install = function (app: App) {
  app.component(Countdown.name, Countdown)
}

export default Countdown
