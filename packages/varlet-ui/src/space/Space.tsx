import { defineComponent } from 'vue'
import { props } from './props'
import './space.less'
import { toPxNum } from '../utils/elements'
import { SpaceSize } from '../../types'

const sizefilter = (size: SpaceSize) => {
  if (typeof size === 'string') {
    if (!size.match(/\d/g)) return [size, 'class']
    return [`${toPxNum(size)}px`, 'style']
  }
  if (typeof size === 'number') return [`${toPxNum(size)}px`, 'style']
  if (Array.isArray(size)) {
    return [`${toPxNum(size[0])}px ${toPxNum(size[1])}px`, 'style']
  }
  return ['normal', 'class']
}

export default defineComponent({
  name: 'VarSpace',
  props,
  setup(props, { slots }) {
    const [size, sizeUseto] = sizefilter(props.size)

    const renderSpace = (slots.default?.() ?? []).map((child) => (
      <div
        class={['var-space__item', sizeUseto === 'class' ? `var-space__item--${size}` : '']}
        style={[sizeUseto === 'style' ? `margin:${size}` : '']}
      >
        {child}
      </div>
    ))
    return () => {
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
