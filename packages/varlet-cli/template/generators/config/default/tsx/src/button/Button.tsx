import { defineComponent, PropType } from 'vue'
import { createNamespace } from '../utils/components'

import './button.less'

const { name, n, classes } = createNamespace('button')

export default defineComponent({
  name,
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
        <button class={n()} style={{ background: color }} onClick={handleClick}>
          {slots.default?.()}
        </button>
      )
    }
  },
})
