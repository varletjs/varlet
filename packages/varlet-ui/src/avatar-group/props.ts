import type { PropType } from 'vue'

export interface AvatarOptions {
  name: string
  src: string
}

export const props = {
  max: {
    type: Number,
    default: 3,
  },
  maxStyle: { type: [Object, String] },
  offset: {
    type: Number,
    default: -10,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array as PropType<AvatarOptions[]>,
    default: [],
  },
}
