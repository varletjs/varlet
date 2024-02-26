import { type PropType } from 'vue'

export type ProgressMode = 'linear' | 'circle'

export type ProgressType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'

export const props = {
  mode: {
    type: String as PropType<ProgressMode>,
    default: 'linear',
  },
  lineWidth: {
    type: [Number, String],
    default: 4,
  },
  color: [String, Object] as PropType<string | Record<string, string>>,
  trackColor: String,
  value: {
    type: [Number, String],
    default: 0,
  },
  label: Boolean,
  labelClass: String,
  size: {
    type: [Number, String],
    default: 40,
  },
  rotate: {
    type: Number,
    default: 0,
  },
  track: {
    type: Boolean,
    default: true,
  },
  indeterminate: Boolean,
  type: {
    type: String as PropType<ProgressType>,
    default: 'primary',
  },
}
