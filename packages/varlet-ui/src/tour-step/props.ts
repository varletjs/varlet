import { type PropType } from 'vue'
import { Placement } from '../tour/props'

export const props = {
  target: [String, Object] as PropType<string | HTMLElement>,
  title: String,
  description: String,
  closeable: {
    type: Boolean,
    default: undefined,
  },
  overlay: {
    type: Boolean,
    default: undefined,
  },
  arrow: {
    type: Boolean,
    default: undefined,
  },
  placement: String as PropType<Placement>,
}
