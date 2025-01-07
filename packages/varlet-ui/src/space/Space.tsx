import { defineComponent, VNodeChild } from 'vue'
import { call, isArray } from '@varlet/shared'
import { createNamespace, flatFragment } from '../utils/components'
import { padStartFlex, toSizeUnit } from '../utils/elements'
import { computeMargin } from './margin'
import { props, type SpaceSize } from './props'
import '../styles/common.less'
import './space.less'

const isInternalSize = (size: any) => ['mini', 'small', 'normal', 'large'].includes(size)

const { name, n, classes } = createNamespace('space')

function getSize(size: SpaceSize, isInternalSize: boolean): string[] {
  return isInternalSize
    ? [`var(--space-size-${size}-y)`, `var(--space-size-${size}-x)`]
    : isArray(size)
      ? (size.map(toSizeUnit) as string[])
      : ([toSizeUnit(size), toSizeUnit(size)] as string[])
}

export default defineComponent({
  name,
  props,
  setup(props, { slots }) {
    return () => {
      const { inline, justify, align, wrap, direction, size } = props
      const _children: VNodeChild[] = call(slots.default) ?? []
      const [y, x] = getSize(size, isInternalSize(size))

      const children = flatFragment(_children)
      const lastIndex = children.length - 1
      const spacers = children.map((child, index) => {
        const margin = computeMargin(y, x, {
          direction,
          justify,
          index,
          lastIndex,
        })

        return (
          <div class={classes([direction === 'column', n('--auto')])} key={child.key ?? undefined} style={{ margin }}>
            {child}
          </div>
        )
      })

      return (
        <div
          class={classes(n(), n('$--box'), [inline, n('--inline')])}
          style={{
            flexDirection: direction,
            justifyContent: padStartFlex(justify),
            alignItems: padStartFlex(align),
            flexWrap: wrap ? 'wrap' : 'nowrap',
            margin: direction === 'row' ? `calc(-1 * ${y} / 2) 0` : undefined,
          }}
        >
          {spacers}
        </div>
      )
    }
  },
})
