import type { App } from 'vue'
import Countdown from './Countdown.vue'

Countdown.install = function (app: App) {
  app.component(Countdown.name, Countdown)
}

export const _CountdownComponent = Countdown

export default Countdown
