const Option = require('../../../cjs/option').default
const { render } = require('@testing-library/vue')

test('test option', async () => {
	const wrapper = render(Option)
	console.log(wrapper)
})
