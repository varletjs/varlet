const BackTop = require('../../../cjs/back-top').default
const { render } = require('@testing-library/vue')

test('test backTop', async () => {
  const wrapper = render(BackTop)
  console.log(wrapper)
})
