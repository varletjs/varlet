const RadioGroup = require('../../../cjs/radio-group').default
const { render } = require('@testing-library/vue')

test('test radioGroup', async () => {
	const wrapper = render(RadioGroup)
	console.log(wrapper)
})
