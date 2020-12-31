const Tab = require('../../../cjs/tab').default
const { render } = require('@testing-library/vue')

test('test tab', async () => {
	const wrapper = render(Tab)
	console.log(wrapper)
})
