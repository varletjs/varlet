import { mount } from '@vue/test-utils'
import dayjs from 'dayjs/esm'
import { describe, expect, test, vi } from 'vite-plus/test'
import { createApp } from 'vue'
import DatePicker from '..'
import { add, enUS, use } from '../../locale'
import { delay, mockConsole, mockScrollIntoView, trigger, triggerDrag } from '../../utils/test'
import VarDatePicker from '../DatePicker'

mockScrollIntoView()

const [currentYear] = dayjs().format('YYYY-MM').split('-')

test('datePicker plugin', () => {
  const app = createApp({}).use(DatePicker)
  expect(app.component(DatePicker.name)).toBeTruthy()
})

describe('test datePicker style and type', () => {
  test('datePicker style and date', async () => {
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

  test('datePicker style and month', async () => {
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

test('datePicker style and type', async () => {
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

test('datePicker allowedDates', () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      allowedDates: (val) => parseInt(val.split('-')[2], 10) % 2 === 1,
      modelValue: '2021-03-01',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('datePicker firstDayOfWeek', async () => {
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

test('datePicker hint', async () => {
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

test('datePicker max and min', async () => {
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

test('datePicker v-model', async () => {
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

test('datePicker should update title year on year preview change', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      modelValue: '2021-05-19',
    },
  })

  await delay(0)
  expect(wrapper.find('.var-date-picker__title-year').text()).toBe('2021')

  await wrapper.find('.var-date-picker__title-year').trigger('click')
  await delay(200)
  await wrapper.find('.var-year-picker').find('li').find('button').trigger('click')
  await delay(200)

  expect(wrapper.find('.var-date-picker__title-year').text()).toBe('2000')
  expect(wrapper.emitted()['update:modelValue']).toBeFalsy()

  wrapper.unmount()
})

test('datePicker should update title year when month preview crosses year', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      type: 'month',
      modelValue: '2021-01',
    },
  })

  await delay(0)
  expect(wrapper.find('.var-date-picker__title-year').text()).toBe('2021')

  await wrapper.find('.var-date-picker-header').find('button').trigger('click')
  await delay(200)

  expect(wrapper.find('.var-date-picker__title-year').text()).toBe('2020')
  expect(wrapper.emitted()['update:modelValue']).toBeFalsy()

  wrapper.unmount()
})

test('datePicker fallbackViewDate should control initial panel when modelValue is empty', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      fallbackViewDate: '2026-04-01',
    },
  })

  await delay(0)
  expect(wrapper.find('.var-date-picker__title-year').text()).toBe('2026')
  expect(wrapper.find('.var-date-picker-header__value').text()).toBe('2026 四月')
  expect(wrapper.emitted()['update:modelValue']).toBeFalsy()

  wrapper.unmount()
})

test('datePicker fallbackViewDate should not override modelValue', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      modelValue: '2021-05-19',
      fallbackViewDate: '2026-04-01',
    },
  })

  await delay(0)
  expect(wrapper.find('.var-date-picker__title-year').text()).toBe('2021')
  expect(wrapper.find('.var-date-picker-header__value').text()).toBe('2021 五月')

  wrapper.unmount()
})

test('datePicker fallbackViewDate should control initial panel for empty multiple and range value', async () => {
  const multipleWrapper = mount(VarDatePicker, {
    props: {
      multiple: true,
      modelValue: [],
      fallbackViewDate: '2026-04-01',
    },
  })

  await delay(0)
  expect(multipleWrapper.find('.var-date-picker__title-year').text()).toBe('2026')
  expect(multipleWrapper.find('.var-date-picker-header__value').text()).toBe('2026 四月')
  expect(multipleWrapper.emitted()['update:modelValue']).toBeFalsy()
  multipleWrapper.unmount()

  const rangeWrapper = mount(VarDatePicker, {
    props: {
      range: true,
      modelValue: [],
      fallbackViewDate: '2026-04-01',
    },
  })

  await delay(0)
  expect(rangeWrapper.find('.var-date-picker__title-year').text()).toBe('2026')
  expect(rangeWrapper.find('.var-date-picker-header__value').text()).toBe('2026 四月')
  expect(rangeWrapper.emitted()['update:modelValue']).toBeFalsy()

  rangeWrapper.unmount()
})

test('datePicker multiple', async () => {
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

  expect(wrapper.vm.date).toEqual(['2021-05-19', '2021-05-01', '2021-05-02', '2021-05-03'])

  await elements[0].trigger('click')
  expect(wrapper.vm.date).toEqual(['2021-05-19', '2021-05-02', '2021-05-03'])

  await wrapper.setData({ type: 'month', date: ['2021-05'] })
  await delay(0)

  const btn = wrapper.find('ul').find('button')
  await btn.trigger('click')
  expect(wrapper.vm.date).toEqual(['2021-05', '2021-01'])

  await wrapper.setData({ type: 'year', date: ['2021'] })
  await delay(0)

  const btn1 = wrapper.find('li').find('button')
  await btn1.trigger('click')
  expect(wrapper.vm.date).toEqual(['2021', `${currentYear.slice(0, 2)}00`])
  await delay(200)

  wrapper.unmount()
})

test('datePicker range', async () => {
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

  expect(wrapper.vm.date).toEqual(['2021-05-01', '2021-05-03'])

  await wrapper.setData({ type: 'month', date: null })
  await wrapper.setData({ type: 'month', date: ['2021-05', '2021-06'] })
  await delay(0)

  const lis = wrapper.find('.var-month-picker__content').find('ul').findAll('li').slice(0, 3)
  await lis[0].find('button').trigger('click')
  await lis[2].find('button').trigger('click')
  expect(wrapper.vm.date).toEqual(['2021-01', '2021-03'])
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

test('datePicker readonly', async () => {
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

test('datePicker touchable', async () => {
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

test('datePicker value legal', async () => {
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

test('datePicker titleColor', async () => {
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

test('datePicker rerender date panel when max or min changes', async () => {
  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        date: '2020-12-23',
        max: '2020-12-24',
        min: '2020-12-22',
      }
    },
    template: `<var-date-picker v-model="date" :min="min" :max="max" />`,
  })

  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setData({
    min: '2020-01-05',
    date: '2020-01-06',
    max: '2020-01-07',
  })
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('datePicker checkPreview month wrap to next year', async () => {
  const onPreview = vi.fn()
  const wrapper = mount(VarDatePicker, {
    props: {
      modelValue: '2021-12-15',
      type: 'date',
      onPreview,
    },
  })

  await delay(100)

  // Find all buttons with chevron-right icon (next buttons)
  const buttons = wrapper.findAll('.var-button')
  let nextButton = null

  for (const btn of buttons) {
    if (btn.html().includes('chevron-right')) {
      nextButton = btn
      break
    }
  }

  // Click next to go from December to January of next year
  // This should hit lines 497-498: checkIndex > 12 case
  if (nextButton) {
    await nextButton.trigger('click')
    await delay(100)

    expect(onPreview).toHaveBeenCalled()
    expect(onPreview).toHaveBeenCalledWith(2022, 1, 15)
  }

  wrapper.unmount()
})

test('datePicker range mode with invalid date format', async () => {
  const fn = vi.fn()
  const { mockRestore } = mockConsole('error', fn)

  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        date: ['Invalid Date', '2021-05-20'],
      }
    },
    template: `<var-date-picker range v-model="date" />`,
  })

  await delay(100)

  // The rangeInit function should detect invalid format and return early (line 546)
  // The date should remain as is without processing
  expect(wrapper.vm.date).toEqual(['Invalid Date', '2021-05-20'])
  // The invalid date should trigger the error warning path
  expect(fn).toHaveBeenCalled()

  wrapper.unmount()
  mockRestore()
})

test('datePicker single mode with invalid date format', async () => {
  const fn = vi.fn()
  const { mockRestore } = mockConsole('error', fn)

  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        date: 'not-a-valid-date-format',
      }
    },
    template: `<var-date-picker v-model="date" />`,
  })

  await delay(100)

  // The singleInit function should detect invalid format and return early (line 572)
  // Component should handle gracefully without crashing
  expect(wrapper.vm.date).toBe('not-a-valid-date-format')
  // The invalid date should trigger the error warning path
  expect(fn).toHaveBeenCalled()

  wrapper.unmount()
  mockRestore()
})

test('datePicker year type with onChange', async () => {
  const onChange = vi.fn()

  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        date: '2021',
      }
    },
    methods: {
      onChange,
    },
    template: `<var-date-picker type="year" v-model="date" @change="onChange" />`,
  })

  await delay(100)

  // Click on a year to trigger onChange (line 468)
  const yearButton = wrapper.find('.var-year-picker li button')
  await yearButton.trigger('click')
  await delay(100)

  expect(onChange).toHaveBeenCalled()

  wrapper.unmount()
})

test('datePicker checkPreview month wrap to previous year', async () => {
  const onPreview = vi.fn()
  const wrapper = mount(VarDatePicker, {
    props: {
      modelValue: '2021-01-15',
      type: 'date',
      onPreview,
    },
  })

  await delay(100)

  // Find all buttons with chevron-left icon (previous buttons)
  const buttons = wrapper.findAll('.var-button')
  let prevButton = null

  for (const btn of buttons) {
    if (btn.html().includes('chevron-left')) {
      prevButton = btn
      break
    }
  }

  // Click previous when at January to wrap to December of previous year
  // This should hit lines 492-493: checkIndex < 1 case
  if (prevButton) {
    await prevButton.trigger('click')
    await delay(100)

    expect(onPreview).toHaveBeenCalled()
    // Should wrap to December 2020
    expect(onPreview).toHaveBeenCalledWith(2020, 12, 15)
  }

  wrapper.unmount()
})

test('datePicker date title uses english format under en-US locale', async () => {
  add('en-US', enUS)
  use('en-US')

  const wrapper = mount(VarDatePicker, {
    props: {
      modelValue: '2021-05-19',
    },
  })

  await delay(0)
  // 2021-05-19 is a Wednesday, so the english title is built from the week/month dict (line 240)
  expect(wrapper.find('.var-date-picker__title-date').text()).toBe('Wed, May 19')

  use('zh-CN')
  wrapper.unmount()
})

test('datePicker clicking the date title returns to the date panel', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      modelValue: '2021-05-19',
    },
  })

  await delay(0)
  expect(wrapper.find('.var-day-picker').exists()).toBe(true)

  await wrapper.find('.var-date-picker__title-year').trigger('click')
  await delay(200)
  expect(wrapper.find('.var-year-picker').exists()).toBe(true)

  // clickEl('date') should reset both year and month panels (lines 315-316)
  await wrapper.find('.var-date-picker__title-date').trigger('click')
  await delay(200)
  expect(wrapper.find('.var-year-picker').exists()).toBe(false)
  expect(wrapper.find('.var-day-picker').exists()).toBe(true)

  wrapper.unmount()
})

test('datePicker touchable false ignores swipe gestures', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      modelValue: '2021-04-08',
      touchable: false,
    },
  })

  await delay(0)
  const pickBodyEl = wrapper.find('.var-date-picker__body')
  const headerEl = wrapper.find('.var-date-picker-header__value')
  const before = headerEl.text()

  // isUntouchable short-circuits the touch handlers (lines 322 and 336)
  await triggerDrag(pickBodyEl, 100, 0)
  await delay(300)
  expect(headerEl.text()).toBe(before)

  wrapper.unmount()
})

test('datePicker month type with disabled month click', async () => {
  const onChange = vi.fn()

  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        date: '2021-05',
      }
    },
    methods: {
      onChange,
    },
    // Max is 2021-08, so months after August should be disabled
    template: `<var-date-picker type="month" v-model="date" max="2021-08" @change="onChange" />`,
  })

  await delay(100)

  // Find month buttons
  const monthButtons = wrapper.findAll('.var-month-picker li button')

  // Find a disabled button (month after August, like September, October, etc.)
  let disabledButton = null
  for (const btn of monthButtons) {
    const classes = btn.classes()
    if (classes.includes('var-month-picker__button--disabled')) {
      disabledButton = btn
      break
    }
  }

  if (disabledButton) {
    // Click on disabled button - should trigger early return at line 233-234
    await disabledButton.trigger('click')
    await delay(50)

    // onChange should not have been called because button is disabled
    expect(onChange).not.toHaveBeenCalled()
  }

  wrapper.unmount()
})
