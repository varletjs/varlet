const DatePicker = require('../../../cjs/date-picker').default
const { render } = require('@testing-library/vue')

test('test datePicker', async () => {
  const wrapper = render(DatePicker)
  console.log(wrapper)
})
