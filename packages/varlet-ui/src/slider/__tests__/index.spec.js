const Slider = require('../../../cjs/slider').default
const { render } = require('@testing-library/vue')

test('test slider', async () => {
	const wrapper = render(Slider)
	console.log(wrapper)
})
