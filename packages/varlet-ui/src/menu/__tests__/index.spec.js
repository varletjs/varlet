const Menu = require('../../../cjs/menu').default
const { render } = require('@testing-library/vue')

test('test menu', async () => {
  const wrapper = render(Menu)
  console.log(wrapper)
})
