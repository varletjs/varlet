const Sticky = require('../../../cjs/sticky').default
const { render } = require('@testing-library/vue')

test('test sticky', async () => {
	const wrapper = render(Sticky)
	console.log(wrapper)
})
