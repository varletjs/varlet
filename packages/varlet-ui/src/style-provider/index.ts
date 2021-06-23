import { defineComponent, h, PropType } from 'vue'
import { kebabCase } from '../utils/shared'

export default defineComponent({
  name: 'VarStyleProvider',
  props: {
    themeVars: {
      type: Object as PropType<Partial<Record<string, string | number>>>,
      default: () => {}
    }
  },
  setup(props, { slots }) {
    const styles: Record<string, string | number> = Object.entries(props.themeVars).reduce((styles, style) => {
      const cssVar = `--${kebabCase(style[0])}`
      styles[cssVar] = style[1] as string | number

      return styles
    }, {} as Record<string, string | number>)

    return () => h('div', { style: styles }, slots.default?.())
  }
})
