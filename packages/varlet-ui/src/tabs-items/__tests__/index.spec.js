const TabsItems = require('../../../cjs/tabs-items').default
const { render } = require('@testing-library/vue')

test('test tabsItems', async () => {
	const wrapper = render(TabsItems)
	console.log(wrapper)
})
