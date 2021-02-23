const TimePicker = require('../../../cjs/time-picker').default
const { render } = require('@testing-library/vue')

test('test timePicker', async () => {
  const wrapper = render(TimePicker)
  console.log(wrapper)
})
