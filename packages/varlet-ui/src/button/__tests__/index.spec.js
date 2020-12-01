const Button = require('../../../cjs/button').default
const { render } = require('@testing-library/vue')

test('test button', async () => {
  const wrapper = render(Button)
  console.log(wrapper)
})
