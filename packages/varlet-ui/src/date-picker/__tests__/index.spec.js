import { mount } from '@vue/test-utils'
import dayjs from 'dayjs/esm'
import { describe, expect, test, vi } from 'vite-plus/test'
import { createApp } from 'vue'
import DatePicker from '..'
import { delay, mockConsole, mockScrollIntoView } from '../../utils/test'
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

test('datePicker does not emit change when choosing disabled value', async () => {
  const onUpdateModelValue = vi.fn()
  const onChange = vi.fn()

  const wrapper = mount(VarDatePicker, {
    props: {
      modelValue: '2021-03-01',
      allowedDates: (val) => val !== '2021-03-2',
      'onUpdate:modelValue': onUpdateModelValue,
      onChange,
    },
  })

  wrapper.vm.selectDayFromPanel(2)
  expect(onUpdateModelValue).not.toHaveBeenCalled()
  expect(onChange).not.toHaveBeenCalled()

  await wrapper.setProps({
    type: 'month',
    modelValue: '2021-03',
    allowedDates: (val) => val !== '2021-04',
  })

  wrapper.vm.selectMonthFromPanel('04')
  expect(onUpdateModelValue).not.toHaveBeenCalled()
  expect(onChange).not.toHaveBeenCalled()

  await wrapper.setProps({
    type: 'year',
    modelValue: '2021',
    allowedDates: (val) => val !== '2022',
  })

  wrapper.vm.selectYearFromPanel(2022)
  expect(onUpdateModelValue).not.toHaveBeenCalled()
  expect(onChange).not.toHaveBeenCalled()

  wrapper.unmount()
})

test('datePicker prevents pointerdown default behavior', () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      modelValue: '2021-03-01',
    },
  })
  const event = new Event('pointerdown', { cancelable: true })

  wrapper.element.dispatchEvent(event)
  expect(event.defaultPrevented).toBe(true)

  wrapper.unmount()
})

test('datePicker allowedDates does not block year or month navigation in date type', () => {
  const onUpdateModelValue = vi.fn()
  const wrapper = mount(VarDatePicker, {
    props: {
      modelValue: '2021-03-01',
      allowedDates: (val) => val.endsWith('-01'),
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  wrapper.vm.selectMonthFromPanel('04')
  expect(wrapper.vm.previewState.previewMonth).toBe('04')
  expect(onUpdateModelValue).not.toHaveBeenCalled()

  wrapper.vm.selectYearFromPanel(2022)
  expect(wrapper.vm.previewYear).toBe('2022')
  expect(onUpdateModelValue).not.toHaveBeenCalled()

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

test('datePicker should infer hint from type', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      type: 'year',
    },
  })

  await delay(0)
  expect(wrapper.find('.var-date-picker__title-hint').text()).toBe('选择年份')

  await wrapper.setProps({
    type: 'month',
  })
  await delay(0)
  expect(wrapper.find('.var-date-picker__title-hint').text()).toBe('选择月份')

  await wrapper.setProps({
    type: 'date',
  })
  await delay(0)
  expect(wrapper.find('.var-date-picker__title-hint').text()).toBe('选择日期')

  wrapper.unmount()
})

test('datePicker showTitle', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      showTitle: false,
    },
  })

  await delay(0)
  expect(wrapper.find('.var-date-picker__title').exists()).toBe(false)
  expect(wrapper.find('.var-date-picker-header').exists()).toBe(true)

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
  expect(wrapper.find('.var-date-picker-header__year').text()).toBe('2021')
  expect(wrapper.find('.var-date-picker-header__month').text()).toBe('四月')

  await wrapper.find('.var-date-picker-header__arrow').trigger('click')
  await delay(200)
  expect(wrapper.find('.var-date-picker-header__year').text()).toBe('2020')
  expect(wrapper.find('.var-date-picker-header__month').text()).toBe('四月')
  expect(wrapper.find('.var-day-picker__button--usable').attributes('disabled')).toBeDefined()

  await wrapper.find('.var-date-picker-header__month').trigger('click')
  await delay(200)
  expect(wrapper.find('.var-date-picker-header__panel-label').text()).toBe('四月')

  wrapper.unmount()
})

test('datePicker should switch to year panel from day panel header year', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      modelValue: '2021-04-08',
    },
  })

  await delay(0)
  await wrapper.find('.var-date-picker-header__year').trigger('click')
  await delay(200)
  expect(wrapper.find('.var-year-picker').exists()).toBe(true)

  wrapper.unmount()
})

test('datePicker should close month and year panel from panel header label', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      modelValue: '2021-04-08',
    },
  })

  await delay(0)
  await wrapper.find('.var-date-picker-header__month').trigger('click')
  await delay(200)
  expect(wrapper.find('.var-month-picker').exists()).toBe(true)
  expect(wrapper.find('.var-date-picker-header__panel-label .var-icon-chevron-up').exists()).toBe(true)

  await wrapper.find('.var-date-picker-header__panel-label').trigger('click')
  await delay(200)
  expect(wrapper.find('.var-day-picker').exists()).toBe(true)

  await wrapper.find('.var-date-picker-header__year').trigger('click')
  await delay(200)
  expect(wrapper.find('.var-year-picker').exists()).toBe(true)
  expect(wrapper.find('.var-date-picker-header__panel-label').text()).toBe('2021')
  expect(wrapper.find('.var-date-picker-header__panel-label .var-icon-chevron-up').exists()).toBe(true)

  await wrapper.find('.var-date-picker-header__panel-label').trigger('click')
  await delay(200)
  expect(wrapper.find('.var-day-picker').exists()).toBe(true)

  wrapper.unmount()
})

test('datePicker should update preview year from day panel header', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      modelValue: '2021-04-08',
    },
  })

  await delay(0)
  await wrapper
    .findAll('.var-date-picker-header__nav:not(.var-date-picker-header__nav--month) .var-date-picker-header__arrow')[1]
    .trigger('click')
  await delay(200)

  expect(wrapper.find('.var-date-picker-header__year').text()).toContain('2022')
  expect(wrapper.emitted()['update:modelValue']).toBeFalsy()

  wrapper.unmount()
})

test('datePicker resetPreview', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      modelValue: '2021-04-08',
    },
  })

  await delay(0)
  await wrapper
    .findAll('.var-date-picker-header__nav:not(.var-date-picker-header__nav--month) .var-date-picker-header__arrow')[1]
    .trigger('click')
  await delay(200)
  await wrapper.findAll('.var-date-picker-header__nav--month .var-date-picker-header__arrow')[1].trigger('click')
  await delay(200)

  expect(wrapper.find('.var-date-picker-header__year').text()).toContain('2022')
  expect(wrapper.find('.var-date-picker-header__month').text()).toBe('五月')

  await wrapper.find('.var-date-picker-header__year').trigger('click')
  await delay(200)
  expect(wrapper.find('.var-year-picker').exists()).toBe(true)

  wrapper.vm.resetPreview()
  await delay(0)

  expect(wrapper.find('.var-day-picker').exists()).toBe(true)
  expect(wrapper.find('.var-date-picker-header__year').text()).toBe('2021')
  expect(wrapper.find('.var-date-picker-header__month').text()).toBe('四月')
  expect(wrapper.emitted()['update:modelValue']).toBeFalsy()

  wrapper.unmount()
})

test('datePicker should allow switching preview year when target year has selectable dates', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      modelValue: '2020-12-08',
      max: '2021-06-15',
    },
  })

  await delay(0)
  const nextYearButton = wrapper.findAll(
    '.var-date-picker-header__nav:not(.var-date-picker-header__nav--month) .var-date-picker-header__arrow',
  )[1]

  expect(nextYearButton.attributes('disabled')).toBeUndefined()

  await nextYearButton.trigger('click')
  await delay(200)

  expect(wrapper.find('.var-date-picker-header__year').text()).toContain('2021')
  expect(wrapper.emitted()['update:modelValue']).toBeFalsy()

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
  await wrapper.find('.var-date-picker-header__arrow').trigger('click')
  await delay(200)
  await wrapper.find('.var-month-picker__content').find('ul').find('button').trigger('click')
  expect(wrapper.vm.date).toBe('2020-01')

  await wrapper.setData({ type: 'date', date: '2021-05-19' })
  await wrapper.find('.var-date-picker-header__nav--month .var-date-picker-header__arrow').trigger('click')
  await delay(200)
  await wrapper.find('.var-day-picker__button--usable').trigger('click')
  expect(wrapper.vm.date).toBe('2021-04-01')

  wrapper.unmount()
})

test('datePicker should update header year on year preview change', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      modelValue: '2021-05-19',
    },
  })

  await delay(0)
  expect(wrapper.find('.var-date-picker-header__year').text()).toBe('2021')

  await wrapper.find('.var-date-picker-header__year').trigger('click')
  await delay(200)
  await wrapper.find('.var-year-picker').find('li').find('button').trigger('click')
  await delay(200)

  expect(wrapper.find('.var-date-picker-header__year').text()).toBe('2000')
  expect(wrapper.emitted()['update:modelValue']).toBeFalsy()

  wrapper.unmount()
})

test('datePicker month type should switch preview year without updating model', async () => {
  const onUpdate = vi.fn()
  const wrapper = mount(VarDatePicker, {
    props: {
      type: 'month',
      modelValue: '2021-01',
      'onUpdate:modelValue': onUpdate,
    },
  })

  await delay(0)
  expect(wrapper.find('.var-date-picker-header__year').text()).toBe('2021')

  await wrapper
    .find('.var-date-picker-header__nav:not(.var-date-picker-header__nav--month) .var-date-picker-header__arrow')
    .trigger('click')
  await delay(200)

  expect(wrapper.find('.var-date-picker-header__year').text()).toBe('2020')
  expect(onUpdate).toHaveBeenCalledTimes(0)

  await wrapper.find('.var-month-picker__content').find('button').trigger('click')
  await delay(0)
  expect(onUpdate).toHaveBeenCalledWith('2020-01')

  wrapper.unmount()
})

test('datePicker month type should open year panel from header year', async () => {
  const onPreview = vi.fn()
  const onChange = vi.fn()
  const onUpdate = vi.fn()
  const wrapper = mount(VarDatePicker, {
    props: {
      type: 'month',
      modelValue: '2021-01',
      onPreview,
      onChange,
      'onUpdate:modelValue': onUpdate,
    },
  })

  await delay(0)
  await wrapper.find('.var-date-picker-header__year').trigger('click')
  await delay(200)

  expect(wrapper.find('.var-year-picker').exists()).toBe(true)

  await wrapper.find('.var-year-picker').find('button').trigger('click')
  await delay(200)

  expect(wrapper.find('.var-month-picker').exists()).toBe(true)
  expect(onPreview).toHaveBeenCalledWith(2000, 1, undefined)
  expect(onChange).toHaveBeenCalledTimes(0)
  expect(onUpdate).toHaveBeenCalledTimes(0)

  wrapper.unmount()
})

test('datePicker month type should update preview after choosing month', async () => {
  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        date: '2021-05',
      }
    },
    template: '<var-date-picker v-model="date" type="month" />',
  })

  await delay(0)
  const firstMonth = wrapper.find('.var-month-picker__content').find('button')
  await firstMonth.trigger('click')
  await delay(0)

  expect(wrapper.vm.date).toBe('2021-01')
  expect(wrapper.find('.var-date-picker-header__year').text()).toBe('2021')
  expect(firstMonth.attributes('var-date-picker-color-cover')).toBe('false')

  wrapper.unmount()
})

test('datePicker year type should update preview after choosing year', async () => {
  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        date: '2021',
      }
    },
    template: '<var-date-picker v-model="date" type="year" />',
  })

  await delay(0)
  const currentYearStart = `${currentYear.slice(0, 2)}00`

  expect(wrapper.find('.var-date-picker-header__panel-label').text()).toBe('2021')

  await wrapper.findAll('.var-date-picker-header__arrow')[1].trigger('click')
  await delay(200)
  expect(wrapper.find('.var-date-picker-header__panel-label').text()).toBe('2021')

  await wrapper.findAll('.var-date-picker-header__arrow')[0].trigger('click')
  await delay(200)
  const firstYear = wrapper.find('.var-year-picker').find('button')
  await firstYear.trigger('click')
  await delay(0)

  const year = currentYearStart
  expect(wrapper.vm.date).toBe(year)
  expect(wrapper.find('.var-date-picker-header__panel-label').text()).toBe(year)
  expect(firstYear.attributes('var-date-picker-color-cover')).toBe('false')

  wrapper.unmount()
})

test('datePicker fallbackViewDate should control initial panel when modelValue is empty', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      fallbackViewDate: '2026-04-01',
    },
  })

  await delay(0)
  expect(wrapper.find('.var-date-picker-header__year').text()).toBe('2026')
  expect(wrapper.find('.var-date-picker-header__month').text()).toBe('四月')
  expect(wrapper.vm.selectionState.selectedYear).toBe(undefined)
  expect(wrapper.vm.selectionState.selectedMonth).toBe(undefined)
  expect(wrapper.vm.selectionState.selectedDay).toBe(undefined)
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
  expect(wrapper.find('.var-date-picker-header__year').text()).toBe('2021')
  expect(wrapper.find('.var-date-picker-header__month').text()).toBe('五月')

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
  expect(multipleWrapper.find('.var-date-picker-header__year').text()).toBe('2026')
  expect(multipleWrapper.find('.var-date-picker-header__month').text()).toBe('四月')
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
  expect(rangeWrapper.find('.var-date-picker-header__year').text()).toBe('2026')
  expect(rangeWrapper.find('.var-date-picker-header__month').text()).toBe('四月')
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

test('datePicker multiple should keep preview after choosing date in switched panel', async () => {
  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        date: ['2021-05-19'],
      }
    },
    template: '<var-date-picker multiple v-model="date" />',
  })

  await delay(0)
  await wrapper.findAll('.var-date-picker-header__nav--month .var-date-picker-header__arrow')[1].trigger('click')
  await delay(200)
  expect(wrapper.find('.var-date-picker-header__month').text()).toBe('六月')

  await wrapper.find('.var-day-picker__button--usable').trigger('click')
  await delay(0)
  expect(wrapper.vm.date).toEqual(['2021-05-19', '2021-06-01'])
  expect(wrapper.find('.var-date-picker-header__year').text()).toBe('2021')
  expect(wrapper.find('.var-date-picker-header__month').text()).toBe('六月')

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
  const getSelectedMonthButtons = () =>
    wrapper.findAll('.var-month-picker__button').filter((button) => !button.classes('var-button--text'))

  expect(getSelectedMonthButtons()).toHaveLength(2)

  await lis[0].find('button').trigger('click')
  await lis[2].find('button').trigger('click')
  expect(wrapper.vm.date).toEqual(['2021-01', '2021-03'])
  expect(getSelectedMonthButtons()).toHaveLength(3)
  expect(fn).toHaveBeenCalledTimes(1)

  await wrapper.setData({ type: 'year', date: [currentYear, `${+currentYear + 2}`] })
  await delay(0)

  const lis1 = wrapper.find('.var-year-picker').findAll('li').slice(0, 2)
  const getSelectedYearButtons = () =>
    wrapper.findAll('.var-year-picker__button').filter((button) => !button.classes('var-button--text'))

  expect(getSelectedYearButtons()).toHaveLength(3)

  await lis1[0].find('button').trigger('click')
  await lis1[1].find('button').trigger('click')
  expect(wrapper.vm.date).toEqual([`${currentYear.slice(0, 2)}00`, `${currentYear.slice(0, 2)}01`])
  await delay(200)

  mockRestore()
  wrapper.unmount()
})

test('datePicker range should handle single endpoint model value', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      range: true,
      modelValue: ['2021-05-19'],
    },
  })

  await delay(0)
  expect(wrapper.vm.dateTitle).toBe('2021-05-19')
  expect(
    wrapper.findAll('.var-day-picker__button').filter((button) => !button.classes('var-button--text')),
  ).toHaveLength(1)

  await wrapper.setProps({
    type: 'month',
    modelValue: ['2021-05'],
  })
  await delay(0)
  expect(wrapper.vm.monthTitle).toBe('2021-05')
  expect(
    wrapper.findAll('.var-month-picker__button').filter((button) => !button.classes('var-button--text')),
  ).toHaveLength(1)

  await wrapper.setProps({
    type: 'year',
    modelValue: ['2021'],
  })
  await delay(0)
  expect(wrapper.vm.yearTitle).toBe('2021')
  expect(
    wrapper.findAll('.var-year-picker__button').filter((button) => !button.classes('var-button--text')),
  ).toHaveLength(1)

  wrapper.unmount()
})

test('datePicker range should keep preview after choosing date in switched panel', async () => {
  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        date: ['2021-05-19', '2021-05-20'],
      }
    },
    template: '<var-date-picker range v-model="date" />',
  })

  await delay(0)
  await wrapper.findAll('.var-date-picker-header__nav--month .var-date-picker-header__arrow')[1].trigger('click')
  await delay(200)
  expect(wrapper.find('.var-date-picker-header__month').text()).toBe('六月')

  const elements = wrapper.findAll('.var-day-picker__button--usable')
  await elements[0].trigger('click')
  await elements[2].trigger('click')
  await delay(0)

  expect(wrapper.vm.date).toEqual(['2021-06-01', '2021-06-03'])
  expect(wrapper.find('.var-date-picker-header__year').text()).toBe('2021')
  expect(wrapper.find('.var-date-picker-header__month').text()).toBe('六月')

  wrapper.unmount()
})

test('datePicker should sync preview without panel transition when choosing adjacent month day', async () => {
  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        date: '2021-05-19',
      }
    },
    template: '<var-date-picker v-model="date" />',
  })

  await delay(0)
  const panelKey = wrapper.findComponent({ name: 'DayPickerPanel' }).vm.panelKey

  wrapper.findComponent(VarDatePicker).vm.selectDayFromPanel(1, 1)
  await delay(0)

  expect(wrapper.vm.date).toBe('2021-06-01')
  expect(wrapper.findComponent(VarDatePicker).vm.previewState.previewMonth).toBe('06')
  expect(wrapper.findComponent({ name: 'DayPickerPanel' }).vm.panelKey).toBe(panelKey)

  wrapper.unmount()
})

test('datePicker range should keep preview after choosing month or year across pages', async () => {
  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        date: ['2021-05', '2021-06'],
        type: 'month',
      }
    },
    template: '<var-date-picker range :type="type" v-model="date" />',
  })

  await delay(0)
  await wrapper.find('.var-month-picker__content').find('ul').findAll('li')[0].find('button').trigger('click')
  await wrapper.findAll('.var-date-picker-header__arrow')[1].trigger('click')
  await delay(200)
  await wrapper.find('.var-month-picker__content').find('ul').findAll('li')[2].find('button').trigger('click')
  await delay(0)

  expect(wrapper.vm.date).toEqual(['2021-01', '2022-03'])
  expect(wrapper.find('.var-date-picker-header__year').text()).toBe('2022')

  await wrapper.setData({ type: 'year', date: [currentYear, `${+currentYear + 2}`] })
  await delay(0)

  await wrapper.find('.var-year-picker').findAll('li')[0].find('button').trigger('click')
  await wrapper.findAll('.var-date-picker-header__arrow')[1].trigger('click')
  await delay(200)
  await wrapper.find('.var-year-picker').findAll('li')[1].find('button').trigger('click')
  await delay(0)

  expect(wrapper.vm.date).toEqual([`${currentYear.slice(0, 2)}00`, `${+currentYear.slice(0, 2) + 1}01`])
  expect(wrapper.find('.var-year-picker').findAll('li')[0].text()).toBe(`${+currentYear.slice(0, 2) + 1}00`)

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
