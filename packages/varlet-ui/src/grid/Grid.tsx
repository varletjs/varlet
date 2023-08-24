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

    const iconSize = computed(() => props.iconSize || 24)
    const center = computed(() => props.center)
    const gutter = computed(() => toPxNum(props.gutter))
    const border = computed(() => props.border)
    const column = computed(() => toNumber(props.column) || 4)
    const square = computed(() => props.square)
    const ripple = computed(() => props.ripple)
    const direction = computed(() => props.direction)

    const gridProvide: GridProvider = {
      iconSize,
      center,
      gutter,
      border,
      column,
      square,
      ripple,
      direction,
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
