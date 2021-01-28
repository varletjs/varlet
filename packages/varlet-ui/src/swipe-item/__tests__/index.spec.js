const SwipeItem = require('../../../cjs/swipe-item').default
const { render } = require('@testing-library/vue')

test('test swipeItem', async () => {
	const wrapper = render(SwipeItem)
	console.log(wrapper)
})
