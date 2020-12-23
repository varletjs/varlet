function fitValidator(fit: string) {
  return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(fit)
}

export const props = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: fitValidator,
    default: 'fill'
  },
  alt: {
    type: String
  },
  width: {
    type: String
  },
  height: {
    type: String
  },
  radius: {
    type: String,
    default: '0'
  },
  error: {
    type: String
  },
  loading: {
    type: String
  },
  ripple: {
    type: Boolean,
    default: false
  }
}
