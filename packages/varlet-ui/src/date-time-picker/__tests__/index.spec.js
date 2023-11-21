import DateTimePicker from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import DatePicker from '../../date-picker'
import TimePicker from '../../time-picker'
import { delay } from '../../utils/test'
import { expect, vi } from 'vitest'

const Wrapper = {
  components: {
    [DateTimePicker.name]: DateTimePicker,
    [DatePicker.name]: DatePicker,
    [TimePicker.name]: TimePicker,
  },
  props: ['onConfirm', 'onCancel', 'prevStepText', 'nextStepText', 'cancelButtonText', 'confirmButtonText'],
  data: () => ({
    date: '2021-04-08',
    time: '13:24',
  }),
  template: `
    <var-date-time-picker>
      <var-date-picker v-model="date" />
      <var-time-picker v-model="time" />
    </var-date-time-picker>
  `,
}

test('test date-time-picker plugin', () => {
  const app = createApp({}).use(DatePicker).use(TimePicker).use(DateTimePicker)
  expect(app.component(DatePicker.name)).toBeTruthy()
  expect(app.component(TimePicker.name)).toBeTruthy()
  expect(app.component(DateTimePicker.name)).toBeTruthy()
})

test('test DateTimePicker event', async () => {
  const onCancel = vi.fn()
  const onConfirm = vi.fn()
  const wrapper = mount(Wrapper, {
    props: {
      onCancel,
      onConfirm,
    },
  })

  await delay(100)
  await wrapper.find('.var-date-time-picker__cancel-button').trigger('click')
  expect(onCancel).toHaveBeenCalledTimes(0)

  await delay(100)
  await wrapper.find('.var-date-time-picker__confirm-button').trigger('click')
  expect(onConfirm).toHaveBeenCalledTimes(0)

  wrapper.unmount()
})
