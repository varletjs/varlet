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
    return [`${toPxNum(size) / 2}px`, `${toPxNum(size)}px`]
  }
  if (isNumber(size)) return [`${toPxNum(size) / 2}px`, `${toPxNum(size)}px`]
  if (Array.isArray(size)) {
    return [`${toPxNum(size[0]) / 2}px`, `${toPxNum(size[1])}px`]
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
    const children = slots.default?.() ?? []
    const lastIndex = children.length - 1
    const renderSpace = children.map((child, index) => {
      const [marginTop, marginRight] = itemSize.value
      const style = {
        marginTop: 0,
        marginBottom: 0,
        marginRight: 0,
        marginLeft: 0,
      }
      if (props.direction === 'column' && index !== lastIndex) {
        Object.assign(style, {
          marginBottom: isPx(marginTop) ? (props.justify === 'space-around' ? 0 : marginTop) : '',
        })
      }
      if (props.direction === 'row') {
        if (index !== lastIndex) {
          Object.assign(style, {
            marginRight: isPx(marginRight) ? (props.justify === 'space-around' ? 0 : marginRight) : '',
          })
        }
        Object.assign(style, {
          marginTop: isPx(marginTop) ? marginTop : '',
          marginBottom: isPx(marginTop) ? 0 : '',
        })
      }
      const attrs = {
        class: ['var-space__item', !isPx(marginTop) ? `var-space__item--${marginTop}` : ''],
        style,
      }
      return <div {...attrs}>{child}</div>
    })

    const contentAttrs = computed(() => {
      const [marginTop] = itemSize.value
      return {
        class: [
          'var-space',
          props.inline ? 'var-space--inline' : '',
          `var-space--${props.direction}`,
          `var-space--justifyContent__${props.justify}`,
          props.align ? `var-space--${props.align}` : '',
          `var-space--${props.wrap ? 'warp' : 'nowarp'}`,
          isPx(marginTop) ? '' : `var-space--marginTop__${marginTop}`,
        ],
        style: [`marginTop:${isPx(marginTop) ? -marginTop : ''}`],
      }
    })
    return () => {
      return <div {...contentAttrs.value}>{renderSpace}</div>
    }
  },
})
