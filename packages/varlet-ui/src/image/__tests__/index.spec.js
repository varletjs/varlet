const Image = require('../../../cjs/image').default
const { render } = require('@testing-library/vue')

test('test image', async () => {
  const wrapper = render(Image)
  console.log(wrapper)
})
