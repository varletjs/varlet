export const props = {
	name: {
		type: String,
	},
  color: {
    type: String,
  },
  size: {
    type: String,
  },
	namespace: {
		type: String,
		default: 'var-icon',
	},
	transition: {
		type: Number,
		default: 0,
	},
  onClick: {
	  type: Function
  }
}
