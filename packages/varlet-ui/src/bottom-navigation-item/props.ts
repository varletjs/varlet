import { badgeProps } from '../badge'
import { iconProps } from '../icon'
import { type PropType } from 'vue'
import { type ExtractPublicPropTypes, defineListenerProp, pickProps } from '../utils/components'

export const props = {
  name: String,
  label: String,
  icon: pickProps(iconProps, 'name'),
  namespace: pickProps(iconProps, 'namespace'),
  badge: {
    type: [Boolean, Object] as PropType<boolean | ExtractPublicPropTypes<typeof badgeProps>>,
    default: false,
  },
  onClick: defineListenerProp<(active: number | string) => void>(),
}
