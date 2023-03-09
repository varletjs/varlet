function typeValidator(type: string): boolean {
  return ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(type)
}

function positionValidator(position: string): boolean {
  return ['right-top', 'right-bottom', 'left-top', 'left-bottom'].includes(position)
}

export const props = {
  type: {
    type: String,
    default: 'default',
    validator: typeValidator,
  },
  position: {
    type: String,
    default: 'right-top',
    validator: positionValidator,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
  value: {
    type: [String, Number],
    default: 0,
  },
  maxValue: {
    type: [String, Number],
  },
  dot: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
  },
  color: {
    type: String,
  },
}
