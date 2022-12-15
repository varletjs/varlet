import { defineComponent, VNodeChild, Fragment, VNode, Comment } from 'vue'
import { internalSizeValidator, props, type SpaceSize } from './props'
import { isArray } from '@varlet/shared'
import { call, createNamespace } from '../utils/components'
import { context, type SpaceContext } from './context'
import '../styles/common.less'
import './space.less'
import { toSizeUnit } from '../utils/elements'

const { n, classes } = createNamespace('space')

export default defineComponent({
  name: 'VarSpace',
  props,
  setup(props, { slots }) {
    const getSize = (size: SpaceSize, isInternalSize: boolean): string[] => {
      return isInternalSize
        ? (context[size as keyof SpaceContext] as string[])
        : isArray(size)
        ? (size.map(toSizeUnit) as string[])
        : ([size, size] as string[])
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
        let margin = '0'

        if (direction === 'row') {
          if (justify === 'start' || justify === 'center' || justify === 'end') {
            if (index !== lastIndex) {
              margin = `calc(${y} / 2) ${x} calc(${y} / 2) 0`
            } else {
              margin = `calc(${y} / 2) 0`
            }
          } else if (justify === 'space-around') {
            margin = `calc(${y} / 2) calc(${x} / 2)`
          } else if (justify === 'space-between') {
            if (index === 0) {
              margin = `calc(${y} / 2) calc(${x} / 2) calc(${y} / 2) 0`
            } else if (index === lastIndex) {
              margin = `calc(${y} / 2) 0 calc(${y} / 2) calc(${x} / 2)`
            } else {
              margin = `calc(${y} / 2) calc(${x} / 2)`
            }
          }
        }

        if (direction === 'column' && index !== lastIndex) {
          margin = `0 0 ${y} 0`
        }

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
