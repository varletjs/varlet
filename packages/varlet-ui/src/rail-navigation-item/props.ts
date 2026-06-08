import { type PropType } from 'vue'
import { badgeProps } from '../badge'
import { iconProps } from '../icon'
import { defineListenerProp, pickProps, type ExtractPublicPropTypes } from '../utils/components'

export const props = {
  name: [Number, String],
  label: String,
  icon: pickProps(iconProps, 'name'),
  namespace: pickProps(iconProps, 'namespace'),
  badge: {
    type: [Boolean, Object] as PropType<boolean | ExtractPublicPropTypes<typeof badgeProps>>,
    default: false,
  },
  disabled: Boolean,
  onClick: defineListenerProp<(active: number | string) => void>(),
  onMouseenter: defineListenerProp<(active: number | string) => void>(),
  onMouseleave: defineListenerProp<(active: number | string) => void>(),
}
