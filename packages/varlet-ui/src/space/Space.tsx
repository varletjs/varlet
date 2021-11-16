import { defineComponent } from 'vue'
import { internalSizeValidator, props } from './props'
import type { SpaceInternalSize, SpaceSize } from './props'
import { toPxNum } from '../utils/elements'
import { isArray } from '../utils/shared'
import './space.less'

const internalSizes: Record<SpaceInternalSize, number[]> = {
  mini: [4, 4],
  small: [6, 6],
  normal: [8, 12],
  large: [12, 20],
}

export default defineComponent({
  name: 'VarSpace',
  props,
  setup(props, { slots }) {
    const getSize = (size: SpaceSize, isInternalSize: boolean) => {
      return isInternalSize
        ? internalSizes[size as SpaceInternalSize]
        : isArray(size)
        ? size.map(toPxNum)
        : [toPxNum(size), toPxNum(size)]
    }

    return () => {
      const { inline, justify, align, wrap, direction, size } = props
      const children = slots.default?.() ?? []
      const lastIndex = children.length - 1
      const isInternalSize = internalSizeValidator(size)
      const [y, x] = getSize(size, isInternalSize)

      const spacers = children.map((child, index) => {
        let margin = '0'

        if (direction === 'row') {
          if (index === 0) {
            margin = `${y / 2}px ${x / 2}px ${y / 2}px 0`
          } else if (index === lastIndex) {
            margin = `${y / 2}px 0 ${y / 2}px ${x / 2}px`
          } else {
            margin = `${y / 2}px ${x / 2}px`
          }
        }

        if (direction === 'column' && index !== lastIndex) {
          margin = `0 0 ${y}px 0`
        }

        return <div style={{ margin }}>{child}</div>
      })

      return (
        <div
          class={['var-space', 'var--box', inline ? 'var-space--inline' : null]}
          style={{
            flexDirection: direction,
            justifyContent: justify,
            alignItems: align,
            flexWrap: wrap ? 'wrap' : 'nowrap',
            marginTop: direction === 'row' ? `-${y / 2}px` : undefined,
          }}
        >
          {spacers}
        </div>
      )
    }
  },
})
