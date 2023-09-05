import { defineComponent, PropType } from 'vue'
import './button.less'

export default defineComponent({
  name: 'VaButton',
  props: {
    color: {
      type: String,
    },
    onClick: {
      type: Function as PropType<(e: Event) => void>,
    },
  },
  setup(props, { slots }) {
    const handleClick = (e: Event) => props.onClick?.(e)

    return () => {
      const { color } = props

      return (
        <button class="va-button" style={{ background: color }} onClick={handleClick}>
          {slots.default?.()}
        </button>
      )
    }
  },
})
