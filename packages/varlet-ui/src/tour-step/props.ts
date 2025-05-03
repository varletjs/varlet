import { type PropType } from 'vue'
import { popupProps } from '../popup'
import { Placement } from '../tour/props'
import { pickProps } from '../utils/components'

export const props = {
  target: [String, Object] as PropType<string | HTMLElement>,
  title: String,
  description: String,
  placement: String as PropType<Placement>,
  width: [Number, String],
  overlay: {
    type: Boolean,
    default: undefined,
  },
  arrow: {
    type: Boolean,
    default: undefined,
  },
  closeable: {
    type: Boolean,
    default: undefined,
  },
  prevButtonText: String,
  nextButtonText: String,
  prevButtonTextColor: String,
  nextButtonTextColor: String,
  prevButtonColor: String,
  nextButtonColor: String,
  contentClass: String,
  contentStyle: Object,
  ...pickProps(popupProps, ['overlayClass', 'overlayStyle']),
}
