const Progress = require('../../../cjs/progress').default
const { render } = require('@testing-library/vue')

test('test progress', async () => {
	const wrapper = render(Progress)
	console.log(wrapper)
})
