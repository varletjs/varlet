import { type PropType } from 'vue'

export type ShimmerTextType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'

export const props = {
  type: {
    type: String as PropType<ShimmerTextType>,
    default: 'default',
  },
}
