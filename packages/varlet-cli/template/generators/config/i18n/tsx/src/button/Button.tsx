import { defineComponent, PropType } from 'vue'
// i18n for component's internal
import { t } from '../locale'
import './button.less'
import { createNamespace } from '../utils/components'

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
    const handleClick = (e: Event) => {
      props.onClick?.(e)
    }

    return () => {
      const { color } = props

      return (
        <button class={n()} style={{ background: color }} onClick={handleClick}>
          {t('button')}
          {slots.default?.()}
        </button>
      )
    }
  },
})
