const Checkbox = require('../../../cjs/checkbox').default
const { render } = require('@testing-library/vue')

test('test checkbox', async () => {
	const wrapper = render(Checkbox)
	console.log(wrapper)
})
