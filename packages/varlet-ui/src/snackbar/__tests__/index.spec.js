const SnackbarTransition = require('../../../cjs/snackbar-core-transition')
	.default
const { render } = require('@testing-library/vue')

test('test snackbarTransition', async () => {
	const wrapper = render(SnackbarTransition)
	console.log(wrapper)
})
