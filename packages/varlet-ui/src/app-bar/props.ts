export const props = {
  color: String,
  textColor: String,
  title: String,
  titlePosition: {
    type: String,
    default: 'left',
  },
  elevation: {
    type: [Boolean, String, Number],
    default: true,
  },
  round: Boolean,
  image: String,
  imageLinearGradient: String,
  safeAreaTop: Boolean,
}
