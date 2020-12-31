export const props = {
	name: {
		type: String,
	},
  color: {
    type: String,
    default: 'inherit',
  },
  size: {
    type: String,
    default: 'inherit',
  },
	namespace: {
		type: String,
		default: 'var-icon',
	},
	transition: {
		type: Number,
		default: 0,
	},
}
