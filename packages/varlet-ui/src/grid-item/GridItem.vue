<script lang="ts">
import { StyleValue, computed, defineComponent, ref, watch, h, withDirectives } from 'vue'
import { props } from './props'
import { call, createNamespace } from '../utils/components'
import { GridItemProvider, useGrid } from './provide'
import { toNumber } from '@varlet/shared'
import Icon from '../icon'
import Badge from '../badge'
import Ripple from '../ripple'
import { onSmartMounted } from '@varlet/use'
import type { BadgeProps } from '../../types'

const { n, classes } = createNamespace('grid-item')

const defaultBadgeProps = {
  type: 'danger',
  dot: true,
}

export default defineComponent({
  name: 'VarGridItem',
  directives: {
    Ripple,
  },
  components: {
    Icon,
    Badge,
  },
  props,
  setup(props, { slots }) {
    const { index, grid, bindGrid } = useGrid()
    const { iconSize, center, gutter, border, column, square, ripple, direction, elevation } = grid
    const gridElement = ref<HTMLDivElement | null>(null)
    const badgeProps = ref({})
    const badge = computed<boolean | BadgeProps>(() => props.badge)
    const icon = computed<string | undefined>(() => props.icon)
    const iconColor = computed<string | undefined>(() => props.iconColor)
    const text = computed<string | undefined>(() => props.text)

    const gridItemProvider: GridItemProvider = {
      index,
    }
    bindGrid(gridItemProvider)

    const customStyle = () => {
      const size = toNumber((100 / column.value).toFixed(2))
      const style: StyleValue = {
        flexBasis: `calc(${size}% - ${gutter.value}px)`,
      }

      if (gutter && gutter.value > 0) {
        style.margin = `${gutter.value / 2}px`
      }
      return style
    }

    const handleClick = (e: Event) => {
      call(props.onClick, e)
    }

    const watchSquare = () => {
      if (gridElement.value) {
        gridElement.value.style.height = square.value ? `${gridElement.value.offsetWidth}px` : 'unset'
      }
    }

    onSmartMounted(watchSquare)

    watch(() => square.value, watchSquare)
    watch(
      () => badge.value,
      (newValue) => {
        badgeProps.value = newValue === true ? defaultBadgeProps : badge.value
      },
      { immediate: true }
    )

    return () => {
      const sortSlots = [
        slots.icon?.(),
        h(Icon, { vIf: icon.value, name: icon.value, size: iconSize.value, color: iconColor.value, class: n('icon') }),
        slots.text?.(),
        h('span', { class: 'var-grid-item__text' }, text.value),
        slots.default?.(),
      ]
      const children = badge.value ? h(Badge, { ...badgeProps.value }, sortSlots) : sortSlots
      return withDirectives(
        h(
          'div',
          {
            ref: gridElement,
            style: customStyle(),
            class: classes(
              n(),
              n(`--${direction.value}`),
              [center.value, n('center')],
              [border.value, n('border')],
              [square.value, n('square')],
              [gutter.value, n('radius')],
              [elevation.value || gutter.value > 0, `var-elevation--${elevation.value || 2}`]
            ),
            onClick: handleClick,
          },
          children
        ),
        [[Ripple, { disabled: !ripple.value }]]
      )
    }
  },
})
</script>
<style lang="less">
@import '../badge/badge';
@import '../icon/icon';
@import './gridItem';
@import '../ripple/ripple';
@import '../styles/elevation';
</style>
