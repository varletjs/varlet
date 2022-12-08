import { defineComponent } from 'vue'
import { props } from './props'
import './colorPicker.less'

export default defineComponent({
  name: 'VarColorPicker',
  props,
  setup(props, { slots }) {
    return () => {
      return <div class="var-color-picker">{slots.default?.()}</div>
    }
  },
})
