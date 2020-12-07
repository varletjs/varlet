const Snackbar = require('../../../cjs/snackbar').default
const { render } = require('@testing-library/vue')

test('test snackbar', async () => {
	const wrapper = render(Snackbar)
	console.log(wrapper)
})
