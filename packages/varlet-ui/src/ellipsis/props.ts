import { type PropType } from 'vue'
import { type ExtractPublicPropTypes } from '../utils/components'
import { props as tooltipProps } from '../tooltip/props'

export type EllipsisExpandTrigger = 'click'

export const props = {
  expandTrigger: String as PropType<EllipsisExpandTrigger>,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean] as PropType<ExtractPublicPropTypes<typeof tooltipProps> | boolean>,
    default: true,
  },
}
