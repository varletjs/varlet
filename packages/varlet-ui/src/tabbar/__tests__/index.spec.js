const Tabbar = require('../../../cjs/tabbar').default
const { render } = require('@testing-library/vue')

test('test tabbar', async () => {
  const wrapper = render(Tabbar)
  console.log(wrapper)
})
