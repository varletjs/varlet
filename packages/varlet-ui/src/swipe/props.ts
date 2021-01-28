export const props = {
	autoplay: {
		type: [String, Number],
	},
	duration: {
		type: [String, Number],
		default: 300,
	},
	initialIndex: {
		type: Number,
		default: 0,
	},
	loop: {
		type: Boolean,
		default: true,
	},
	indicator: {
		type: Boolean,
		default: true,
	},
	indicatorColor: {
		type: String,
	},
	vertical: {
		type: Boolean,
		default: false,
	},
	touchable: {
		type: Boolean,
		default: true,
	},
	onChange: {
		type: Function,
	},
}
