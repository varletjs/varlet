const Radio = require('../../../cjs/radio').default
const { render } = require('@testing-library/vue')

test('test radio', async () => {
	const wrapper = render(Radio)
	console.log(wrapper)
})
