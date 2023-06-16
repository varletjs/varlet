import { type PropType } from 'vue'

function modeValidator(mode: string): boolean {
  return ['linear', 'circle'].includes(mode)
}

function typeValidator(type: string): boolean {
  return ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(type)
}

type ProgressMode = 'linear' | 'circle'

type ProgressType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'

export const props = {
  mode: {
    type: String as PropType<ProgressMode>,
    default: 'linear',
    validator: modeValidator,
  },
  lineWidth: {
    type: [Number, String],
    default: 4,
  },
  color: {
    type: String,
  },
  trackColor: {
    type: String,
  },
  ripple: {
    type: Boolean,
    default: false,
  },
  value: {
    type: [Number, String],
    default: 0,
  },
  label: {
    type: Boolean,
    default: false,
  },
  labelClass: {
    type: String,
  },
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
  type: {
    type: String as PropType<ProgressType>,
    default: 'primary',
    validator: typeValidator,
  },
}
