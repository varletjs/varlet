const IndexBar = require('../../../cjs/index-bar').default
const { render } = require('@testing-library/vue')

test('test indexBar', async () => {
	const wrapper = render(IndexBar)
	console.log(wrapper)
})
