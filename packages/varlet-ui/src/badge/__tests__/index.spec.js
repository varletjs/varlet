import example from '../example'
import Badge from '..'
import VarBadge from '../Badge'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test badge example', () => {
  const wrapper = mount(example)

  expect(wrapper.html()).toMatchSnapshot()
})

test('test badge plugin', () => {
  const app = createApp({}).use(Badge)
  expect(app.component(Badge.name)).toBeTruthy()
})

test('test badge value and maxValue', async () => {
  const wrapper = mount(VarBadge, {
    props: {
      value: 72,
    },
  })

  expect(wrapper.find('.var-badge').text()).toBe('72')

  await wrapper.setProps({ maxValue: 60 })

  expect(wrapper.find('.var-badge').text()).toBe('60+')
})

test('test badge hidden', () => {
  const wrapper = mount(VarBadge, {
    props: {
      hidden: true,
    },
  })

  expect(wrapper.find('.var-badge__content').isVisible()).toBe(false)
})

test('test badge dot', async () => {
  const wrapper = mount(VarBadge, {
    props: {
      dot: true,
      value: 72,
    },
  })

  expect(wrapper.find('.var-badge__dot--right').exists()).toBe(true)

  await wrapper.setProps({ position: 'left-top' })

  expect(wrapper.find('.var-badge__dot--left').exists()).toBe(true)

  expect(wrapper.find('.var-badge').text()).toBe('')
})

test('test badge position', async () => {
  const template = `
    <var-badge>
      <div style="width: 100px; height: 30px"></div>
    </var-badge>
  `
  const wrapper = mount({
    components: {
      [VarBadge.name]: VarBadge,
    },
    template,
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ position: 'right-bottom' })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ position: 'left-top' })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ position: 'left-bottom' })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test badge style', () => {
  const wrapper = mount(VarBadge, {
    props: {
      color: '#6200ea',
      icon: 'fire',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})
