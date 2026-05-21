import { defineListenerProp } from '../utils/components'

export const props = {
  data: {
    type: Array,
    default: () => [],
  },
  itemHeight: {
    type: [Number, String],
    default: 50,
  },
  bufferSize: {
    type: Number,
    default: 5,
  },
  containerHeight: {
    type: [Number, String],
    default: null,
  },
  onScroll: defineListenerProp<(e: Event) => void>(),
}
