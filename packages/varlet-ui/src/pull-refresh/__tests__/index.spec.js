const PullRefresh = require('../../../cjs/pull-refresh').default
const { render } = require('@testing-library/vue')

test('test pullRefresh', async () => {
	const wrapper = render(PullRefresh)
	console.log(wrapper)
})
