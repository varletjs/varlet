const Rate = require('../../../cjs/rate').default
const { render } = require('@testing-library/vue')

test('test rate', async () => {
  const wrapper = render(Rate)
  console.log(wrapper)
})
