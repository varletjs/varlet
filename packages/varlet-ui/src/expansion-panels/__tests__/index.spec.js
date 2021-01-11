const ExpansionPanels = require('../../../cjs/expansion-panels').default
const { render } = require('@testing-library/vue')

test('test expansionPanels', async () => {
	const wrapper = render(ExpansionPanels)
	console.log(wrapper)
})
