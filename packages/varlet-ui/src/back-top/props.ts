import type { PropType } from 'vue'

export const props = {
  visibilityHeight: {
    type: [Number, String],
    default: 200,
  },
  duration: {
    type: Number,
    default: 300,
  },
  right: {
    type: [Number, String],
  },
  bottom: {
    type: [Number, String],
  },
  target: {
    type: [String, Object] as PropType<string | HTMLElement>,
  },
  onClick: {
    type: Function as PropType<(event: MouseEvent) => void>,
  },
}
