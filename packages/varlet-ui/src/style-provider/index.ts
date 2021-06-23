import { defineComponent, h, PropType } from 'vue'
import { kebabCase } from '../utils/shared'

type StyleVars = Record<string, string>

export default defineComponent({
  name: 'VarStyleProvider',
  props: {
    styleVars: {
      type: Object as PropType<StyleVars>,
      default: () => {},
    },
  },
  setup(props, { slots }) {
    return () => {
      const styles: StyleVars = Object.entries(props.styleVars).reduce((styles, [key, value]) => {
        styles[`--${kebabCase(key)}`] = value
        return styles
      }, {} as StyleVars)

      return h('div', { style: styles }, slots.default?.())
    }
  },
})
