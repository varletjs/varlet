const Popup = require('../../../cjs/popup').default
const { render } = require('@testing-library/vue')

test('test popup', async () => {
  const wrapper = render(Popup)
  console.log(wrapper)
})
