import { computed, defineComponent } from 'vue'
import { props, sizeValidator } from './props'
import './space.less'
import { toPxNum, isPx } from '../utils/elements'
import { SpaceSize } from '../../types'
import { isNumber, isString } from '../utils/shared'

const sizefilter = (size: SpaceSize): [string, string?] => {
  if (!sizeValidator(size)) return ['normal']
  if (isString(size)) {
    if (!size.match(/\d/g)) return [size]
    return [`${toPxNum(size) / 2}px`, `${toPxNum(size) / 2}px`]
  }
  if (isNumber(size)) return [`${toPxNum(size) / 2}px`, `${toPxNum(size) / 2}px`]
  if (Array.isArray(size)) {
    return [`${toPxNum(size[0]) / 2}px`, `${toPxNum(size[1]) / 2}px`]
  }
  return ['normal']
}

export default defineComponent({
  name: 'VarSpace',
  props,
  setup(props, { slots }) {
    const itemSize = computed(() => {
      return sizefilter(props.size)
    })
    console.log(itemSize)
    const [marginTop, marginRight] = itemSize.value as any
    const children = slots.default?.() ?? []
    const lastIndex = children.length - 1
    const renderSpace = children.map((child, index) => {
      const style = {}
      if (props.direction === 'column') {
        if (index === lastIndex) {
          Object.assign(style, {
            margin: 0,
          })
        } else {
          Object.assign(style, {
            marginTop: 0,
            marginBottom: isPx(marginTop) ? (props.justify === 'space-around' ? 0 : marginTop) : '',
            marginRight: 0,
            marginLeft: 0,
          })
        }
      }
      if (props.direction === 'row') {
        if (index === lastIndex) {
          Object.assign(style, {
            marginTop: isPx(marginTop) ? marginTop : '',
            marginBottom: isPx(marginTop) ? marginTop : '',
            marginRight: 0,
            marginLeft: 0,
          })
        } else {
          Object.assign(style, {
            marginTop: isPx(marginTop) ? marginTop : '',
            marginBottom: isPx(marginTop) ? marginTop : '',
            marginRight: isPx(marginRight) ? (props.justify === 'space-around' ? 0 : marginRight) : '',
            marginLeft: 0,
          })
        }
      }

      return (
        <div class={['var-space__item', !isPx(marginTop) ? `var-space__item--${marginTop}` : '']} style={style}>
          {child}
        </div>
      )
    })
    return () => {
      itemSize
      return (
        <>
          <div
            class={[
              'var-space',
              props.inline ? 'var-space--inline' : '',
              `var-space--${props.direction}`,
              `var-space--justifyContent__${props.justify}`,
              props.align ? `var-space--${props.align}` : '',
              `var-space--${props.wrap ? 'warp' : 'nowarp'}`,
            ]}
          >
            {renderSpace}
          </div>
        </>
      )
    }
  },
})
