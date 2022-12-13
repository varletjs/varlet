import { defineComponent, toRefs } from 'vue'
import { colorBallProps, ColorBallProps } from './color-preview-dots-types'
import './color-preview-dots.less'

export default defineComponent({
  name: 'ColorBall',
  props: colorBallProps,
  setup(props: ColorBallProps, { emit }) {
    const { modelValue } = toRefs(props)
    return () => {
      return <div class="var-color-picker-ball" style={{ backgroundColor: modelValue.value.hexa }}></div>
    }
  },
})
