const Chips = require('../../../cjs/chips').default
const { render } = require('@testing-library/vue')

test('test chips', async () => {
	const wrapper = render(Chips)
	console.log(wrapper)
})
