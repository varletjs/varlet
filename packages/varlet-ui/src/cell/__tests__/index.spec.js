const Cell = require('../../../cjs/cell').default
const { render } = require('@testing-library/vue')

test('test cell', async () => {
  const wrapper = render(Cell)
  console.log(wrapper)
})
