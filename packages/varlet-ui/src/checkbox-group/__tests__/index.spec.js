const CheckboxGroup = require('../../../cjs/checkbox-group').default
const { render } = require('@testing-library/vue')

test('test checkboxGroup', async () => {
  const wrapper = render(CheckboxGroup)
  console.log(wrapper)
})
