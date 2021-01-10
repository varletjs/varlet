const ExpansionPanel = require('../../../cjs/expansion-panel').default
const { render } = require('@testing-library/vue')

test('test expansionPanel', async () => {
	const wrapper = render(ExpansionPanel)
	console.log(wrapper)
})
