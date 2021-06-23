import { defineComponent, h, PropType } from 'vue'
import { Themes } from '../../themes'
import { isPlainObject, kebabCase } from '../utils/shared'

export default defineComponent({
  name: 'VarStyleProvider',
  props: {
    themeVars: Object as PropType<Partial<Record<keyof Themes, string | number>>>
  },
  setup(props, { slots }) {
    if (!isPlainObject(props.themeVars)) {
      console.error('[Varlet] style-provider: themeVars is not a Object')
      return
    }

    const styles: Record<string, string | number> = Object.entries(props.themeVars).reduce((styles, style) => {
      const cssVar = `--${kebabCase(style[0])}`
      styles[cssVar] = style[1] as string | number

      return styles
    }, {} as Record<string, string | number>)

    return () => h('div', { style: styles }, slots.default?.())
  }
})
