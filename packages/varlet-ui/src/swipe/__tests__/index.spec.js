const Swipe = require('../../../cjs/swipe').default
const { render } = require('@testing-library/vue')

test('test swipe', async () => {
	const wrapper = render(Swipe)
	console.log(wrapper)
})
