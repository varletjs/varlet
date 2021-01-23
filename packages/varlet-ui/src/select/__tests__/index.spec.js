const Select = require('../../../cjs/select').default
const { render } = require('@testing-library/vue')

test('test select', async () => {
	const wrapper = render(Select)
	console.log(wrapper)
})
