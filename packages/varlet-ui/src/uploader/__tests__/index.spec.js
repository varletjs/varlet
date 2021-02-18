const Uploader = require('../../../cjs/uploader').default
const { render } = require('@testing-library/vue')

test('test uploader', async () => {
  const wrapper = render(Uploader)
  console.log(wrapper)
})
