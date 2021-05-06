import example from '../example'
import Row from '..'
import VarRow from '../Row'
import Col from '../../col'
import VarCol from '../../col/Col'
import { mount } from '@vue/test-utils'
import { createApp, h } from 'vue'

test('test row example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test row & col plugin', () => {
  const app = createApp({}).use(Row).use(Col)
  expect(app.component(Row.name)).toBeTruthy()
  expect(app.component(Col.name)).toBeTruthy()
})

test('test row flex', async () => {
  const wrapper = mount(VarRow)

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
})

test('test row onClick null callback', () => {
  const wrapper = mount(VarRow)
  wrapper.trigger('click')
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
})

test('test col in row', async () => {
  const wrapper = mount({
    data: () => ({
      span: 8,
      offset: 4,
    }),
    render() {
      return h(
        VarRow,
        {
          gutter: '10px',
        },
        () => [h(VarCol, { span: this.span, offset: this.offset }), h(VarCol, { span: 12 })]
      )
    },
  })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setData({
    span: 12,
    offset: 0,
  })
  expect(wrapper.html()).toMatchSnapshot()
})
