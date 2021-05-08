import example from '../example'
import Skeleton from '..'
import VarSkeleton from '../Skeleton'
import { mount } from '@vue/test-utils'
import { createApp, h } from 'vue'

test('test skeleton example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test skeleton plugin', () => {
  const app = createApp({}).use(Skeleton)
  expect(app.component(Skeleton.name)).toBeTruthy()
})

test('test skeleton loading', async () => {
  const wrapper = mount(VarSkeleton, {
    props: {
      loading: true,
    },
    slots: {
      default: () => h('div', { class: 'skeleton-default-slot' }),
    },
  })

  expect(wrapper.find('.skeleton-default-slot').exists()).toBeFalsy()

  await wrapper.setProps({ loading: false })
  expect(wrapper.find('.skeleton-default-slot').exists()).toBeTruthy()

  wrapper.unmount()
})

test('test skeleton styles', () => {
  const wrapper = mount(VarSkeleton, {
    props: {
      title: true,
      card: true,
      avatar: true,
      titleWidth: '100px',
      cardHeight: '100px',
      avatarSize: '100px',
      rows: 2,
      rowsWidth: ['600px', '500px'],
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})
