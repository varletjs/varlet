import { type PropType } from 'vue'
import { props as badgeProps } from '../badge/props'
import { type ExtractPublicPropTypes, defineListenerProp } from '../utils/components'

export const props = {
  name: String,
  icon: String,
  label: String,
  namespace: {
    type: String,
    default: 'var-icon',
  },
  badge: {
    type: [Boolean, Object] as PropType<boolean | ExtractPublicPropTypes<typeof badgeProps>>,
    default: false,
  },
  onClick: defineListenerProp<(active: number | string) => void>(),
}
