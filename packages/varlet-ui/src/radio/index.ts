import type { App } from 'vue'
import Radio from './Radio.vue'

Radio.install = function (app: App) {
  app.component(Radio.name, Radio)
}

export { props as radioProps } from './props'

export const _RadioComponent = Radio

export default Radio
