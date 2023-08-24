import { StyleValue, computed, defineComponent, ref, watchEffect } from 'vue'
import { props } from './props'
import { call, createNamespace } from '../utils/components'
import Badge from '../badge'
import Icon from '../icon'
import { GridItemProvide, useGrid } from './provide'
import Ripple from '../ripple'

import '../badge/badge.less'
import '../icon/icon.less'
import './gridItem.less'
import '../ripple/ripple.less'

const { n, classes } = createNamespace('grid-item')

export default defineComponent({
  name: 'VarGridItem',
  directives: {
    Ripple,
  },
  props,
  setup(props, { slots }) {
    const { index, grid, bindGrid } = useGrid()
    const { iconSize, center, gutter, border, column, square, ripple, direction } = grid
    const gridElement = ref<HTMLDivElement | null>(null)

    const IconComp = computed(() => {
      const defaultContent = [slots.icon?.(), slots.text?.(), <span>{props.text}</span>, slots.default?.()]
      if (props.icon) {
        defaultContent.unshift(<Icon name={props.icon} size={iconSize.value} class={n('icon')} />)
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
      const style: StyleValue = {
        flex: `0 0 ${(100 / column.value).toFixed(2)}%`,
      }

      if (gutter) {
        const padding = gutter.value / 2
        style.padding = `${padding}px`
      }

      return style
    })

    const gridItemProvide: GridItemProvide = {
      index,
    }
    bindGrid(gridItemProvide)

    watchEffect(() => {
      if (square.value) {
        const width = gridElement.value?.offsetWidth
        if (width) {
          gridElement.value!.style.height = `${width}px`
        }
      }
    })

    const handleClick = (e: Event) => {
      call(props.onClick, e)
    }

    return () => (
      <div ref={gridElement} style={customStyle.value} class={classes(n())}>
        <div
          v-ripple={{ disabled: !ripple.value }}
          class={classes(
            n('content'),
            n('content--' + direction.value),
            [center.value, n('content-center')],
            [border.value, n('content-border')],
            [square.value, n('content-square')]
          )}
          onClick={handleClick}
        >
          {BadgeComp.value}
        </div>
      </div>
    )
  },
})
