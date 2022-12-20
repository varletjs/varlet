import { defineComponent, VNodeChild, Fragment, VNode, Comment } from 'vue'
import { internalSizeValidator, props } from './props'
import type { SpaceInternalSize, SpaceSize } from './props'
import { toPxNum } from '../utils/elements'
import { isArray } from '@varlet/shared'
import '../styles/common.less'
import './space.less'
import { call, createNamespace } from '../utils/components'
import { spacePluginOptions } from './context'

const { n, classes } = createNamespace('space')

export default defineComponent({
  name: 'VarSpace',
  props,
  setup(props, { slots }) {
    const internalSizes: Record<string, number[]> = {}

    Object.keys(spacePluginOptions).forEach((key) => {
      const size = spacePluginOptions[key as SpaceInternalSize]
      internalSizes[key] = isArray(size) ? size.map(toPxNum) : [toPxNum(size), toPxNum(size)]
    })

    const getSize = (size: SpaceSize, isInternalSize: boolean) => {
      return isInternalSize
        ? internalSizes[size as SpaceInternalSize]
        : isArray(size)
        ? size.map(toPxNum)
        : [toPxNum(size), toPxNum(size)]
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
              margin = `${y / 2}px ${x}px ${y / 2}px 0`
            } else {
              margin = `${y / 2}px 0`
            }
          } else if (justify === 'space-around') {
            margin = `${y / 2}px ${x / 2}px`
          } else if (justify === 'space-between') {
            if (index === 0) {
              margin = `${y / 2}px ${x / 2}px ${y / 2}px 0`
            } else if (index === lastIndex) {
              margin = `${y / 2}px 0 ${y / 2}px ${x / 2}px`
            } else {
              margin = `${y / 2}px ${x / 2}px`
            }
          }
        }

        if (direction === 'column' && index !== lastIndex) {
          margin = `0 0 ${y}px 0`
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
            margin: direction === 'row' ? `-${y / 2}px 0` : undefined,
          }}
        >
          {spacers}
        </div>
      )
    }
  },
})
