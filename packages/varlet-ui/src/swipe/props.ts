import { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export interface SwipeToOptions {
  event?: boolean
}

export type SwipeNavigation = 'hover'

export const props = {
  loop: {
    type: Boolean,
    default: true,
  },
  autoplay: [String, Number],
  duration: {
    type: [String, Number],
    default: 300,
  },
  initialIndex: {
    type: [String, Number],
    default: 0,
  },
  navigation: {
    type: [Boolean, String] as PropType<boolean | SwipeNavigation>,
    default: false,
  },
  indicator: {
    type: Boolean,
    default: true,
  },
  indicatorColor: String,
  vertical: Boolean,
  touchable: {
    type: Boolean,
    default: true,
  },
  onChange: defineListenerProp<(index: number) => void>(),
}
