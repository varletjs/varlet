import VarDivider from '../Divider'
import example from '../example'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test divider plugin', () => {
  const app = createApp({}).use(VarDivider)
  expect(app.component(VarDivider.name)).toBeTruthy()
})

test('test divider example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test divider inset and vertical prop', async () => {
  const wrapper = mount(VarDivider, {
    props: {
      inset: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({
    inset: 36,
  })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({
    inset: '-36px',
  })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({
    inset: '-36px',
    vertical: true,
  })
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test divider dashed and margin prop', async () => {
  const wrapper = mount(VarDivider)

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({
    dashed: true,
  })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({
    dashed: false,
    margin: '36px 0',
  })
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test divider description prop', () => {
  const desc = 'description'
  const wrapper = mount(VarDivider, {
    props: {
      description: desc,
    },
  })
  expect(wrapper.text()).toBe(desc)
  wrapper.unmount()
})

test('test default slot of divider', () => {
  const wrapper = mount({
    components: {
      [VarDivider.name]: VarDivider,
    },
    template: `
      <var-divider>
        <span>description</span>
      </var-divider>
    `,
  })
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})
