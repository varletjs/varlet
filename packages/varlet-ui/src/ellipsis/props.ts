import { type PropType } from 'vue'
import { type ExtractPublicPropTypes } from '../utils/components'
import { props as tooltipProps } from '../tooltip/props'

export function expandTriggerValidator(expandTrigger: string) {
  return ['click'].includes(expandTrigger)
}

export const props = {
  expandTrigger: {
    type: String,
    validator: expandTriggerValidator,
  },
  lineClamp: {
    type: [Number, String],
  },
  tooltip: {
    type: [Object, Boolean] as PropType<ExtractPublicPropTypes<typeof tooltipProps> | boolean>,
    default: true,
  },
}
