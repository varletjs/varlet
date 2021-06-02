import DatePicker from '..'
import VarDatePicker from '../DatePicker'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, mockConsole } from '../../utils/jest'
import dayjs from 'dayjs'

const [currentYear ,currentMonth] = dayjs().format('YYYY-MM').split('-')

test('test datePicker plugin', () => {
  const app = createApp({}).use(DatePicker)
  expect(app.component(DatePicker.name)).toBeTruthy()
})

test('test datePicker style and type', async () => {
  const template = `
    <var-date-picker
      :type="type"
      v-model="date"
      shadow
      header-color="purple"
      color="#7bb872"
      :show-current="false"
    />
  `
  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker
    },
    data() {
      return {
        type: 'month',
        date: '2021-05'
      }
    },
    template
  })

  await delay(0)

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setData({ type: 'date', date: '2021-05-19' })

  await delay(200)

  expect(wrapper.html()).toMatchSnapshot()
})

test('test allowedDates prop', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      allowedDates: (val) => {
        return parseInt(val.split('-')[2], 10) % 2 === 1
      },
      modelValue: '2021-03-01'
    }
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test firstDayOfWeek prop', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      firstDayOfWeek: '3',
      modelValue: '2021-03-01'
    }
  })

  await delay(0)
  expect(wrapper.find('.var-day-picker__head').find('li').text()).toBe('三')
})

test('test max and min', async () => {
  const wrapper = mount(VarDatePicker, {
    props: {
      max: '2021-4-8',
      min: '2021-4-8',
      modelValue: '2021-4-8'
    }
  })

  await delay(0)
  expect(wrapper.find('.var-picker-header__value').text()).toBe('2021 四月')

  await wrapper.find('.var-picker-header').find('button').trigger('click')
  await delay(200)
  expect(wrapper.find('.var-picker-header__value').text()).toBe('2021 四月')

  await wrapper.find('.var-picker-header__value').trigger('click')
  await delay(200)
  await wrapper.find('.var-picker-header__value').trigger('click')
  await delay(200)

  expect(wrapper.find('.var-year-picker__panel').findAll('li').length).toBe(1)
})

test('test datePicker v-model', async () => {
  const template = `<var-date-picker :type="type" v-model="date" />`

  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker
    },
    data() {
      return {
        type: 'month',
        date: '2021-05'
      }
    },
    template
  })

  await delay(0)
  await wrapper.find('.var-picker-header').find('button').trigger('click')
  await delay(200)
  await wrapper.find('.var-month-picker__content').find('ul').find('button').trigger('click')
  expect(wrapper.vm.date).toBe('2020-01')

  await wrapper.find('.var-picker-header__value').trigger('click')
  await delay(200)
  await wrapper.find('.var-year-picker__panel').find('li').trigger('click')
  await delay(200)
  await wrapper.find('.var-month-picker__content').find('ul').find('button').trigger('click')
  expect(wrapper.vm.date).not.toBe('2021-01')

  await wrapper.setData({ type: 'date', date: '2021-05-19' })
  await wrapper.find('.var-picker-header').find('button').trigger('click')
  await delay(200)
  await wrapper.find('.var-day-picker__button--usable').trigger('click')
  expect(wrapper.vm.date).toBe('2021-04-01')
})

test('test datePicker multiple prop', async () => {
  const template = `<var-date-picker multiple v-model="date" />`

  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker
    },
    data() {
      return {
        date: ['2021-05-19']
      }
    },
    template
  })

  await delay(0)
  const elements = wrapper.findAll('.var-day-picker__button--usable').slice(0, 3)
  await elements[0].trigger('click')
  await elements[1].trigger('click')
  await elements[2].trigger('click')

  expect(wrapper.vm.date).toEqual(['2021-05-19', `${currentYear}-${currentMonth}-01`, `${currentYear}-${currentMonth}-02`, `${currentYear}-${currentMonth}-03`])

  await elements[0].trigger('click')
  expect(wrapper.vm.date).toEqual(['2021-05-19', `${currentYear}-${currentMonth}-02`, `${currentYear}-${currentMonth}-03`])
})

test('test datePicker range prop', async () => {
  const { mockRestore } = mockConsole('error')

  const template = `<var-date-picker range :type="type" v-model="date" />`

  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker
    },
    data() {
      return {
        date: ['2021-05-19', '2021-05-18'],
        type: 'date'
      }
    },
    template
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

  mockRestore()
})

test('test datePicker readonly', async () => {
  const template = `<var-date-picker v-model="date" readonly :type="type" />`

  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker
    },
    data() {
      return {
        type: 'month',
        date: '2021-05'
      }
    },
    template
  })

  await delay(0)
  await wrapper.find('.var-month-picker__content').find('ul').find('button').trigger('click')
  await delay(200)
  expect(wrapper.vm.date).toBe('2021-05')

  await wrapper.setData({ type: 'date', date: '2021-05-19' })
  await wrapper.find('.var-day-picker__button--usable').trigger('click')
  await delay(200)
  expect(wrapper.vm.date).toBe('2021-05-19')
})

test('test value legal', async () => {
  const { mockRestore } = mockConsole('error')
  const template = `<var-date-picker v-model="date" :multiple="multiple" />`

  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker
    },
    data() {
      return {
        date: '2021-05-01',
        multiple: true
      }
    },
    template
  })

  await delay(0)
  await wrapper.setData({ multiple: false, date: [] })
  await delay(0)
  await wrapper.setData({ multiple: false, date: undefined })

  mockRestore()
})
