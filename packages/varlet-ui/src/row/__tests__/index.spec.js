import example from '../example'
import responsive from '../example/Responsive'
import Row from '..'
import VarRow from '../Row'
import Col from '../../col'
import VarCol from '../../col/Col'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay } from '../../utils/jest'

test('test row example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test row Responsive example', () => {
  const wrapper = mount(responsive)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test row & col plugin', () => {
  const app = createApp({}).use(Row).use(Col)
  expect(app.component(Row.name)).toBeTruthy()
  expect(app.component(Col.name)).toBeTruthy()
})

test('test row flex', async () => {
  const template = `<var-row></var-row>`

  const wrapper = mount({
    components: {
      [VarRow.name]: VarRow,
    },
    template,
  })

  await delay(0)

  await wrapper.setProps({ justify: 'flex-start' })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ justify: 'flex-end' })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ justify: 'center' })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ justify: 'space-between' })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ justify: 'space-around' })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ align: 'flex-start' })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ align: 'center' })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ align: 'flex-end' })
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test row onClick null callback', () => {
  const template = `<var-row></var-row>`
  const wrapper = mount({
    components: {
      [VarRow.name]: VarRow,
    },
    template,
  })
  wrapper.trigger('click')
  wrapper.unmount()
})

test('test row onClick', () => {
  const onClick = jest.fn()

  const wrapper = mount(VarRow, {
    props: {
      onClick,
    },
  })
  wrapper.trigger('click')
  expect(onClick).toHaveBeenCalledTimes(1)
  wrapper.unmount()
})

test('test col in row', async () => {
  const template = `
    <var-row>
      <var-col :span='span' :offset='offset'>1</var-col>
      <var-col :span='12'>2</var-col>
    </var-row>
  `
  const wrapper = mount({
    data: () => ({
      span: 8,
      offset: 4,
    }),
    components: {
      [VarCol.name]: VarCol,
      [VarRow.name]: VarRow,
    },
    template,
  })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setData({
    span: 12,
    offset: 0,
  })
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test col onClick', () => {
  const onClick = jest.fn()
  const template = `
    <var-row>
      <var-col @click="onClick"></var-col>
    </var-row>
  `

  const wrapper = mount({
    methods: {
      onClick,
    },
    components: {
      [VarCol.name]: VarCol,
      [VarRow.name]: VarRow,
    },
    template,
  })

  wrapper.find('.var-col').trigger('click')
  expect(onClick).toHaveBeenCalledTimes(1)
  wrapper.unmount()
})

test('test col in responsive', async () => {
  const template = `
    <var-row>
       <var-col :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl">1</var-col>
       <var-col :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl">2</var-col>
       <var-col :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl">3</var-col>
       <var-col :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl">4</var-col>
    </var-row>
  `
  const wrapper = mount({
    data: () => ({
      xs: 24,
      sm: 12,
      md: 8,
      lg: 6,
      xl: 4,
    }),
    components: {
      [VarCol.name]: VarCol,
      [VarRow.name]: VarRow,
    },
    template,
  })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setData({
    xs: 12,
    sm: 24,
    md: 12,
    lg: 12,
    xl: 12,
  })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setData({
    xs: { span: 12, offset: 12 },
    sm: { span: 12, offset: 12 },
    md: { span: 12, offset: 12 },
    lg: { span: 12, offset: 12 },
    xl: { span: 12, offset: 12 },
  })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setData({
    xs: 24,
    sm: { span: '12', offset: 12 },
    md: { span: 12, offset: '12' },
    lg: '12',
    xl: { span: '12', offset: '12' },
  })
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})
