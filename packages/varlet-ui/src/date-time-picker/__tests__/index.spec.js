import DateTimePicker from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import DatePicker from '../../date-picker'
import TimePicker from '../../time-picker'
import { delay } from '../../utils/test'

test('test date-time-picker plugin', () => {
  const app = createApp({}).use(DateTimePicker)
  expect(app.component(DateTimePicker.name)).toBeTruthy()
})

describe('test dateTimePicker style and type', () => {
  test('test dateTimePicker style and date time', async () => {
    const template = `
    <var-date-time-picker :active="1">
      <var-date-picker v-model="2023-11-14" />
      <var-time-picker v-model="12:34" />
    </var-date-time-picker>
  `
    const wrapper = mount({
      components: {
        [DateTimePicker.name]: DateTimePicker,
        [DatePicker.name]: DatePicker,
        [TimePicker.name]: TimePicker,
      },
      template,
    })

    await delay(0)
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })
})
