const Tabs = require('../../../cjs/tabs').default
const { render } = require('@testing-library/vue')

test('test tabs', async () => {
	const wrapper = render(Tabs)
	console.log(wrapper)
})
