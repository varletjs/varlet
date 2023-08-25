import { StyleValue, computed, defineComponent, ref, watch } from 'vue'
import { props } from './props'
import { call, createNamespace } from '../utils/components'
import { GridItemProvide, useGrid } from './provide'
import { toNumber } from '@varlet/shared'
import Icon from '../icon'
import Badge from '../badge'
import Ripple from '../ripple'

import '../badge/badge.less'
import '../icon/icon.less'
import './gridItem.less'
import '../ripple/ripple.less'
import '../styles/elevation.less'

const { n, classes } = createNamespace('grid-item')

export default defineComponent({
  name: 'VarGridItem',
  directives: {
    Ripple,
  },
  props,
  setup(props, { slots }) {
    const { index, grid, bindGrid } = useGrid()
    const { iconSize, center, gutter, border, column, square, ripple, direction, elevation } = grid
    const gridElement = ref<HTMLDivElement | null>(null)

    const IconComp = computed(() => {
      const defaultContent = [
        <Icon name={props.icon} size={iconSize.value} color={props.iconColor} class={n('icon')} />,
        slots.icon?.(),
        slots.text?.(),
        props.text,
        slots.default?.(),
      ]
      if (!props.icon) {
        defaultContent.shift()
      }
      return defaultContent.map((item) => item)
    })

    const BadgeComp = computed(() => {
      if (props.badge || props.badgeProps || props.dot) {
        return (
          <Badge dot={props.dot} type="danger" value={props.badge} {...props.badgeProps}>
            {IconComp.value}
          </Badge>
        )
      }
      return IconComp.value
    })

    const customStyle = computed(() => {
      const size = toNumber((100 / column.value).toFixed(2))
      const style: StyleValue = {
        flex: `0 calc(${size}% - ${gutter.value}px)`,
      }

      if (gutter && gutter.value > 0) {
        style.margin = `${gutter.value / 2}px`
      }

      return style
    })

    const elevationCls = computed(() => {
      if (elevation.value || gutter.value > 0) {
        return `var-elevation--${elevation.value || 2}`
      }
      return ''
    })

    const gridItemProvide: GridItemProvide = {
      index,
    }
    bindGrid(gridItemProvide)

    watch(
      () => [square.value, gridElement.value],
      () => {
        if (square.value && gridElement.value) {
          const width = gridElement.value.offsetWidth
          gridElement.value.style.height = `${width}px`
        }
      },
      {
        immediate: true,
      }
    )

    const handleClick = (e: Event) => {
      call(props.onClick, e)
    }

    return () => (
      <div
        ref={gridElement}
        v-ripple={{ disabled: !ripple.value }}
        style={customStyle.value}
        class={classes(
          n(),
          n(`--${direction.value}`),
          [center.value, n('center')],
          [border.value, n('border')],
          [square.value, n('square')],
          [gutter.value, n('radius')],
          elevationCls.value
        )}
        onClick={handleClick}
      >
        {BadgeComp.value}
      </div>
    )
  },
})
