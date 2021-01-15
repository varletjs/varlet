const IndexAnchor = require('../../../cjs/index-anchor').default
const { render } = require('@testing-library/vue')

test('test indexAnchor', async () => {
	const wrapper = render(IndexAnchor)
	console.log(wrapper)
})
