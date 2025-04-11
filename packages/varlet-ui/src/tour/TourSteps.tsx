import { defineComponent, isVNode } from 'vue'
import type { Component, VNode } from 'vue'
import { isArray } from '@varlet/shared'
import { createNamespace } from '../utils/components'

const { name } = createNamespace('tour-steps')

export default defineComponent({
  name,
  props: {
    current: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update-total'],
  setup(props, { slots, emit }) {
    let cacheTotal = 0

    function flattedChildren(subTree: any) {
      const vNodes: VNode[] = []

      const flat = (subTree: any) => {
        if (subTree?.component) {
          flat(subTree?.component.subTree)
          return
        }

        if (isArray(subTree?.children)) {
          subTree.children.forEach((child: any) => {
            if (isVNode(child)) {
              vNodes.push(child)

              flat(child)
            }
          })
        }
      }

      flat(subTree)

      return vNodes
    }

    return () => {
      const children = slots.default?.()
      const result = (flattedChildren(children?.[0]) ?? []).filter(
        (item) => ((item?.type || {}) as Component)?.name === 'VarTourStep',
      )
      const total = result.length

      if (cacheTotal !== total) {
        emit('update-total', total)
      }

      cacheTotal = total

      return result.length ? result[props.current] : null
    }
  },
})
