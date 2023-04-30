export function positionValidator(position: string): boolean {
  const validPositions = ['left', 'center', 'right']
  return validPositions.includes(position)
}

export const props = {
  color: {
    type: String,
  },
  textColor: {
    type: String,
  },
  title: {
    type: String,
  },
  titlePosition: {
    type: String,
    default: 'left',
    validator: positionValidator,
  },
  elevation: {
    type: [Boolean, String, Number],
    default: true,
  },
  round: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
  },
  imageLinearGradient: {
    type: String,
  },
  safeAreaTop: {
    type: Boolean,
    default: false,
  },
}
