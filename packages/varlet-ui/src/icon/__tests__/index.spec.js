const Icon = require('../../../cjs/icon').default
const { render } = require('@testing-library/vue')

test('test icon', async () => {
	const wrapper = render(Icon)
	console.log(wrapper)
})
