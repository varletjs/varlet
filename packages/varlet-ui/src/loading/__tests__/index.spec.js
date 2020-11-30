const Loading = require('../../../cjs/loading').default
const { render } = require('@testing-library/vue')

test('test loading', async () => {
	const wrapper = render(Loading)
	console.log(wrapper)
})
