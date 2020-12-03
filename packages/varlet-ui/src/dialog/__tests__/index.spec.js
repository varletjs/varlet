const Dialog = require('../../../cjs/dialog').default
const { render } = require('@testing-library/vue')

test('test dialog', async () => {
  const wrapper = render(Dialog)
  console.log(wrapper)
})
