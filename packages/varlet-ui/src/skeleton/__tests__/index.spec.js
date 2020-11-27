const Skeleton = require('../../../cjs/skeleton').default
const { render } = require('@testing-library/vue')

test('test skeleton', async () => {
  const wrapper = render(Skeleton)
  console.log(wrapper)
})
