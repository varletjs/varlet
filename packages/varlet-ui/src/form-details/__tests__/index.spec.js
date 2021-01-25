const FormDetails = require('../../../cjs/form-details').default
const { render } = require('@testing-library/vue')

test('test formDetails', async () => {
	const wrapper = render(FormDetails)
	console.log(wrapper)
})
