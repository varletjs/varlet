const Snackbar = require('../../../cjs/snackbar-core').default
const { render } = require('@testing-library/vue')

test('test snackbar-core', async () => {
	const wrapper = render(Snackbar)
	console.log(wrapper)
})
