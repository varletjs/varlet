const Form = require('../../../cjs/form').default
const { render } = require('@testing-library/vue')

test('test form', async () => {
	const wrapper = render(Form)
	console.log(wrapper)
})
