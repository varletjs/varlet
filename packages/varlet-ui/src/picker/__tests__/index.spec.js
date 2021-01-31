const Picker = require('../../../cjs/picker').default
const { render } = require('@testing-library/vue')

test('test picker', async () => {
  const wrapper = render(Picker)
  console.log(wrapper)
})
