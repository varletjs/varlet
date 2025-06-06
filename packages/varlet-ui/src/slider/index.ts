import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as sliderProps } from './props'
import Slider from './Slider.vue'

withInstall(Slider)
withPropsDefaultsSetter(Slider, sliderProps)

export { sliderProps }

export const _SliderComponent = Slider

export default Slider
