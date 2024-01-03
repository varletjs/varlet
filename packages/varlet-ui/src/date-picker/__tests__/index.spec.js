import DatePicker from '..'
import VarDatePicker from '../DatePicker'
import dayjs from 'dayjs/esm'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, mockConsole, triggerDrag, mockScrollIntoView } from '../../utils/test'
import { expect, vi } from 'vitest'

mockScrollIntoView()

const [currentYear, currentMonth] = dayjs().format('YYYY-MM').split('-')

test('test datePicker plugin', () => {
  const app = createApp({}).use(DatePicker)
  expect(app.component(DatePicker.name)).toBeTruthy()
})

describe('test datePicker style and type', () => {
  test('test datePicker style and date', async () => {
    const template = `
    <var-date-picker
      v-model="date"
      elevation
      title-color="purple"
      color="#7bb872"
      :show-current="false"
    />
  `
    const wrapper = mount({
      components: {
        [VarDatePicker.name]: VarDatePicker,
      },
      data() {
        return {
          date: '2021-04-08',
        }
      },
      template,
    })

    await delay(0)
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })

  test('test datePicker style and month', async () => {
    const template = `
    <var-date-picker
      v-model="date"
      type="month"
      elevation
      title-color="purple"
      color="#7bb872"
      :show-current="false"
    />
  `
    const wrapper = mount({
      components: {
        [VarDatePicker.name]: VarDatePicker,
      },
      data() {
        return {
          date: '2021-04',
        }
      },
      template,
    })

    await delay(0)
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })
})

test('test datePicker style and type', async () => {
  const template = `
    <var-date-picker
      :type="type"
      v-model="date"
      elevation
      title-color="purple"
      color="#7bb872"
      :show-current="false"
    />
  `
  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        type: 'month',
        date: '2021-05',
      }
    },
    template,
  })

  await delay(0)
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setData({ type: 'date', date: '2021-05-19' })
  await delay(200)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test datePicker allowedDates', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      allowedDates: (val) => {
        return parseInt(val.split('-')[2], 10) % 2 === 1
      },
      modelValue: '2021-03-01',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test datePicker firstDayOfWeek', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      firstDayOfWeek: '3',
      modelValue: '2021-03-01',
    },
  })

  await delay(0)
  expect(wrapper.find('.var-day-picker__head').find('li').text()).toBe('三')

  wrapper.unmount()
})

test('test datePicker hint', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      hint: '选择日期',
    },
  })

  await delay(100)
  expect(wrapper.find('.var-date-picker__title-hint').text()).toBe('选择日期')

  await wrapper.setProps({
    hint: '选择打卡日期',
  })
  await delay(100)
  expect(wrapper.find('.var-date-picker__title-hint').text()).toBe('选择打卡日期')

  wrapper.unmount()
})

test('test datePicker max and min', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      max: '2021-4-8',
      min: '2021-4-8',
      modelValue: '2021-4-8',
    },
  })

  await delay(0)
  expect(wrapper.find('.var-date-picker-header__value').text()).toBe('2021 四月')

  await wrapper.find('.var-date-picker-header').find('button').trigger('click')
  await delay(200)
  expect(wrapper.find('.var-date-picker-header__value').text()).toBe('2021 四月')

  await wrapper.find('.var-date-picker-header__value').trigger('click')
  await delay(200)
  await wrapper.find('.var-date-picker-header__value').trigger('click')
  await delay(200)
  expect(wrapper.find('.var-year-picker').findAll('li').length).toBe(100)

  wrapper.unmount()
})

test('test datePicker v-model', async () => {
  const template = `<var-date-picker :type="type" v-model="date" />`

  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        type: 'month',
        date: '2021-05',
      }
    },
    template,
  })

  await delay(0)
  await wrapper.find('.var-date-picker-header').find('button').trigger('click')
  await delay(200)
  await wrapper.find('.var-month-picker__content').find('ul').find('button').trigger('click')
  expect(wrapper.vm.date).toBe('2020-01')

  await wrapper.find('.var-date-picker-header__value').trigger('click')
  await delay(200)
  await wrapper.find('button').trigger('click')
  await wrapper.find('.var-year-picker').find('li').find('button').trigger('click')
  await delay(200)
  await wrapper.find('.var-month-picker__content').find('ul').find('button').trigger('click')
  expect(wrapper.vm.date).not.toBe('2021-01')

  await wrapper.setData({ type: 'date', date: '2021-05-19' })
  await wrapper.find('.var-date-picker-header').find('button').trigger('click')
  await delay(200)
  await wrapper.find('.var-day-picker__button--usable').trigger('click')
  expect(wrapper.vm.date).toBe('2021-04-01')

  wrapper.unmount()
})

test('test datePicker multiple', async () => {
  const template = `<var-date-picker multiple v-model="date" :type="type"/>`

  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        type: 'date',
        date: ['2021-05-19'],
      }
    },
    template,
  })

  await delay(0)
  const elements = wrapper.findAll('.var-day-picker__button--usable').slice(0, 3)
  await elements[0].trigger('click')
  await elements[1].trigger('click')
  await elements[2].trigger('click')

  expect(wrapper.vm.date).toEqual([
    '2021-05-19',
    `${currentYear}-${currentMonth}-01`,
    `${currentYear}-${currentMonth}-02`,
    `${currentYear}-${currentMonth}-03`,
  ])

  await elements[0].trigger('click')
  expect(wrapper.vm.date).toEqual([
    '2021-05-19',
    `${currentYear}-${currentMonth}-02`,
    `${currentYear}-${currentMonth}-03`,
  ])

  await wrapper.setData({ type: 'month', date: ['2021-05'] })
  await delay(0)

  const btn = wrapper.find('ul').find('button')
  await btn.trigger('click')
  expect(wrapper.vm.date).toEqual(['2021-05', `${currentYear}-01`])

  await wrapper.setData({ type: 'year', date: ['2021'] })
  await delay(0)

  const btn1 = wrapper.find('li').find('button')
  await btn1.trigger('click')
  expect(wrapper.vm.date).toEqual(['2021', `${currentYear.slice(0, 2)}00`])
  await delay(200)

  wrapper.unmount()
})

test('test datePicker range', async () => {
  const fn = vi.fn()
  const { mockRestore } = mockConsole('error', fn)

  const template = `<var-date-picker range :type="type" v-model="date" />`

  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        date: ['2021-05-19', '2021-05-18'],
        type: 'date',
      }
    },
    template,
  })

  await delay(0)
  const elements = wrapper.findAll('.var-day-picker__button--usable').slice(0, 3)
  await elements[0].trigger('click')
  await elements[2].trigger('click')

  expect(wrapper.vm.date).toEqual([`${currentYear}-${currentMonth}-01`, `${currentYear}-${currentMonth}-03`])

  await wrapper.setData({ type: 'month', date: null })
  await wrapper.setData({ type: 'month', date: ['2021-05', '2021-06'] })
  await delay(0)

  const lis = wrapper.find('.var-month-picker__content').find('ul').findAll('li').slice(0, 3)
  await lis[0].find('button').trigger('click')
  await lis[2].find('button').trigger('click')
  expect(wrapper.vm.date).toEqual([`${currentYear}-01`, `${currentYear}-03`])
  expect(fn).toHaveBeenCalledTimes(1)

  await wrapper.setData({ type: 'year', date: [currentYear, `${+currentYear + 2}`] })
  await delay(0)

  const lis1 = wrapper.find('.var-year-picker').findAll('li').slice(0, 2)
  await lis1[0].find('button').trigger('click')
  await lis1[1].find('button').trigger('click')
  expect(wrapper.vm.date).toEqual([`${currentYear.slice(0, 2)}00`, `${currentYear.slice(0, 2)}01`])
  await delay(200)

  mockRestore()
  wrapper.unmount()
})

test('test datePicker readonly', async () => {
  const template = `<var-date-picker v-model="date" readonly :type="type" />`

  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        type: 'month',
        date: '2021-05',
      }
    },
    template,
  })

  await delay(0)
  await wrapper.find('.var-month-picker__content').find('ul').find('button').trigger('click')
  await delay(200)
  expect(wrapper.vm.date).toBe('2021-05')

  await wrapper.setData({ type: 'date', date: '2021-05-19' })
  await wrapper.find('.var-day-picker__button--usable').trigger('click')
  await delay(200)
  expect(wrapper.vm.date).toBe('2021-05-19')

  wrapper.unmount()
})

test('test datePicker touchable', async () => {
  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        date: '2021-04-08',
        type: 'date',
      }
    },
    template: `<var-date-picker v-model="date" :type="type" />`,
  })

  const pickBodyEl = wrapper.find('.var-date-picker__body')
  const headerEl = wrapper.find('.var-date-picker-header__value')

  await triggerDrag(pickBodyEl, 0, 100)
  expect(headerEl.text()).toBe('2021 四月')

  await triggerDrag(pickBodyEl, 100, 0)
  await delay(300)
  expect(headerEl.text()).toBe('2021 三月')

  wrapper.unmount()
})

test('test datePicker value legal', async () => {
  const fn = vi.fn()
  const { mockRestore } = mockConsole('error', fn)
  const template = `<var-date-picker v-model="date" :multiple="multiple" />`

  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        date: '2021-05-01',
        multiple: true,
      }
    },
    template,
  })

  await delay(0)
  await wrapper.setData({ multiple: false, date: [] })
  await delay(0)
  await wrapper.setData({ multiple: false, date: 'Invalid Date' })
  expect(fn).toHaveBeenCalledTimes(3)

  mockRestore()
  wrapper.unmount()
})

test('test datePicker titleColor', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      titleColor: 'red',
    },
  })

  await delay(100)
  expect(wrapper.find('.var-date-picker__title').attributes('style')).toContain('background: red')

  await wrapper.setProps({
    titleColor: 'green',
  })
  await delay(100)
  expect(wrapper.find('.var-date-picker__title').attributes('style')).toContain('background: green')

  wrapper.unmount()
})
