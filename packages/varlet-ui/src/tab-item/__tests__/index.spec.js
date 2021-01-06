const TabItem = require('../../../cjs/tab-item').default
const { render } = require('@testing-library/vue')

test('test tabItem', async () => {
	const wrapper = render(TabItem)
	console.log(wrapper)
})
