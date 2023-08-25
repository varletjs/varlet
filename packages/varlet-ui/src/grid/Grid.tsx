import { computed, defineComponent } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { GridProvider, useGridItem } from './provide'
import { toPxNum } from '../utils/elements'
import { toNumber } from '@varlet/shared'

import './grid.less'

const { n } = createNamespace('grid')

export default defineComponent({
  name: 'VarGrid',
  props,
  setup(props, { slots }) {
    const { bindItem } = useGridItem()

    const gutter = computed(() => toPxNum(props.gutter))

    const gridProvide: GridProvider = {
      iconSize: computed(() => props.iconSize || 24),
      center: computed(() => props.center),
      gutter,
      border: computed(() => props.border),
      column: computed(() => toNumber(props.column) || 4),
      square: computed(() => props.square),
      ripple: computed(() => props.ripple),
      direction: computed(() => props.direction),
      elevation: computed(() => toNumber(props.elevation) || 0),
    }
    bindItem(gridProvide)

    const customStyle = computed(() => {
      const style = {
        margin: `-${gutter.value / 2}px`,
      }
      return style
    })

    return () => (
      <div class={n()} style={customStyle.value}>
        {slots.default?.()}
      </div>
    )
  },
})
