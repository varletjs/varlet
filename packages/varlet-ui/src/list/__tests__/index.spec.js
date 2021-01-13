const List = require('../../../cjs/list').default
const { render } = require('@testing-library/vue')

test('test list', async () => {
  const wrapper = render(List)
  console.log(wrapper)
})
