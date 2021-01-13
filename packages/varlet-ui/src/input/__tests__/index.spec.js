const Input = require('../../../cjs/input').default
const { render } = require('@testing-library/vue')

test('test input', async () => {
  const wrapper = render(Input)
  console.log(wrapper)
})
