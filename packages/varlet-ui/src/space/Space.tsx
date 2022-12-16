import { defineComponent, VNodeChild, Fragment, VNode, Comment } from 'vue'
import { internalSizeValidator, props, type SpaceSize } from './props'
import { isArray } from '@varlet/shared'
import { call, createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { computeMargin } from './margin'
import '../styles/common.less'
import './space.less'

const { n, classes } = createNamespace('space')

export default defineComponent({
  name: 'VarSpace',
  props,
  setup(props, { slots }) {
    const getSize = (size: SpaceSize, isInternalSize: boolean): string[] => {
      return isInternalSize
        ? [`var(--space-size-${size}-y)`, `var(--space-size-${size}-x)`]
        : isArray(size)
        ? (size.map(toSizeUnit) as string[])
        : ([toSizeUnit(size), toSizeUnit(size)] as string[])
    }

    const padStartFlex = (style: string | undefined) => {
      return style === 'start' || style === 'end' ? `flex-${style}` : style
    }

    return () => {
      const { inline, justify, align, wrap, direction, size } = props
      let children: VNodeChild[] = call(slots.default) ?? []
      const isInternalSize = internalSizeValidator(size)
      const [y, x] = getSize(size, isInternalSize)

      const flatten = (vNodes: any) => {
        const result: VNode[] = []

        vNodes.forEach((vNode: any) => {
          if (vNode.type === Comment) return

          if (vNode.type === Fragment && isArray(vNode.children)) {
            vNode.children.forEach((item: VNode) => {
              result.push(item)
            })
            return
          }

          result.push(vNode)
        })

        return result
      }

      children = flatten(children)

      const lastIndex = children.length - 1
      const spacers = children.map((child, index) => {
        const margin = computeMargin(y, x, {
          direction,
          justify,
          index,
          lastIndex,
        })

        return <div style={{ margin }}>{child}</div>
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
