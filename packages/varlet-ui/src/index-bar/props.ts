import { defineListenerProp } from '../utils/components'

export interface IndexBarScrollToOptions {
  event?: boolean
}

export interface ClickOptions {
  anchorName: string | number
  manualCall?: boolean
  options?: IndexBarScrollToOptions
}

export const props = {
  sticky: {
    type: Boolean,
    default: true,
  },
  stickyOffsetTop: {
    type: [String, Number],
    default: 0,
  },
  cssMode: {
    type: Boolean,
    default: false,
  },
  hideList: {
    type: Boolean,
    default: false,
  },
  zIndex: {
    type: [Number, String],
    default: 1,
  },
  highlightColor: {
    type: String,
  },
  duration: {
    type: [Number, String],
    default: 0,
  },
  onClick: defineListenerProp<(value: string | number) => void>(),
  onChange: defineListenerProp<(value: string | number) => void>(),
}
