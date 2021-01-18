const Switch = require('../../../cjs/switch').default
const { render } = require('@testing-library/vue')

test('test switch', async () => {
	const wrapper = render(Switch)
	console.log(wrapper)
})
