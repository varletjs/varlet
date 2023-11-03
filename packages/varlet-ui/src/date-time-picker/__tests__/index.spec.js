import DateTimePicker from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import VarDateTimePicker from '../DateTimePicker.vue'
import { expect, vi } from 'vitest'
import { delay } from '../../utils/test'

test('test date-time-picker plugin', () => {
  const app = createApp({}).use(DateTimePicker)
  expect(app.component(DateTimePicker.name)).toBeTruthy()
})

describe('test dateTimePicker style and date', () => {
  test('test dateTimePicker style and date', async () => {
    const template = `
      <var-date-time-picker v-model="date"/>
    `
    const wrapper = mount({
      components: {
        [VarDateTimePicker.name]: VarDateTimePicker,
      },
      data() {
        return {
          date: '2021-04-08 12:22',
        }
      },
      template,
    })

    await delay(0)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
