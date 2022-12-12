import { defineComponent, toRefs } from 'vue'
import { colorBallProps, ColorBallProps } from './color-ball-types'
import './color-ball.less'

export default defineComponent({
  name: 'ColorBall',
  props: colorBallProps,
  setup(props: ColorBallProps, { emit }) {
    const { modelValue } = toRefs(props)
    console.log(modelValue.value)

    return () => {
      return <div class="var-color-picker-ball" style={{ backgroundColor: modelValue.value.hexa }}></div>
    }
  },
})
