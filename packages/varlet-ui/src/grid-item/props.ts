import { PropType } from 'vue'
import { badgeProps } from '../badge'
import { ExtractPublicPropTypes, defineListenerProp } from '../utils/components'

export const props = {
  text: {
    type: String,
  },
  icon: {
    type: String,
  },
  iconColor: {
    type: String,
  },
  badge: {
    type: [Boolean, Object] as PropType<boolean | ExtractPublicPropTypes<typeof badgeProps>>,
    default: false,
  },
  onClick: defineListenerProp<(e: Event) => void>(),
}
