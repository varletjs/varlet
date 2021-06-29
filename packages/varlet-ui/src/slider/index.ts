import type { App } from 'vue'
import Slider from './Slider.vue'

Slider.install = function (app: App) {
  app.component(Slider.name, Slider)
}

export const _SliderComponent = Slider

export default Slider
