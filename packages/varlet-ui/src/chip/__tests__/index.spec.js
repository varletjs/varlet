const chip = require('../../../cjs/chip').default
const { render } = require('@testing-library/vue')

test('test chip', async () => {
  const wrapper = render(chip)
  console.log(wrapper)
})
