const Badge = require('../../../cjs/badge').default
const { render } = require('@testing-library/vue')

test('test badge', async () => {
  const wrapper = render(Badge)
  console.log(wrapper)
})
