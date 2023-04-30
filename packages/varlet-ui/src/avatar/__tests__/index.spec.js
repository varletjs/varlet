import Avatar from '..'
import VarAvatar from '../Avatar.vue'
import AvatarGroup from '../../avatar-group'
import VarAvatarGroup from '../../avatar-group/AvatarGroup.vue'
import { mount } from '@vue/test-utils'
import { createApp, Fragment, h } from 'vue'

test('test avatar plugin', () => {
  const app = createApp({}).use(Avatar)
  expect(app.component(Avatar.name)).toBeTruthy()
})

test('test avatar group plugin', () => {
  const app = createApp({}).use(AvatarGroup)
  expect(app.component(AvatarGroup.name)).toBeTruthy()
})

test('test avatar size', () => {
  expect(mount(VarAvatar, { props: { size: 'mini' } }).html()).toMatchSnapshot()
  expect(mount(VarAvatar, { props: { size: 'small' } }).html()).toMatchSnapshot()
  expect(mount(VarAvatar, { props: { size: 'large' } }).html()).toMatchSnapshot()
  expect(mount(VarAvatar, { props: { size: 76 } }).html()).toMatchSnapshot()
})

test('test avatar color', () => {
  expect(mount(VarAvatar, { props: { color: 'red' } }).html()).toMatchSnapshot()
})

test('test avatar borderColor', () => {
  expect(mount(VarAvatar, { props: { bordered: true, borderColor: 'red' } }).html()).toMatchSnapshot()
})

test('test avatar src', () => {
  expect(mount(VarAvatar, { props: { src: 'https://1.png' } }).html()).toMatchSnapshot()
})

test('test avatar src and fit', () => {
  expect(mount(VarAvatar, { props: { src: 'https://1.png', fit: 'fill' } }).html()).toMatchSnapshot()
})

test('test avatar onClick', async () => {
  const onClick = jest.fn()
  const wrapper = mount(VarAvatar, { props: { onClick } })
  await wrapper.trigger('click')
  expect(onClick).toBeCalledTimes(1)
})

test('test avatar onLoad', async () => {
  const onLoad = jest.fn()
  const wrapper = mount(VarAvatar, { props: { src: 'https://1.png', onLoad } })
  await wrapper.find('img').trigger('load')
  expect(onLoad).toBeCalledTimes(1)
})

test('test avatar onError', async () => {
  const onError = jest.fn()
  const wrapper = mount(VarAvatar, { props: { src: 'https://1.png', onError } })
  await wrapper.find('img').trigger('error')
  expect(onError).toBeCalledTimes(1)
})

test('test avatar lazy onLoad', async () => {
  const onLoad = jest.fn()
  const wrapper = mount(VarAvatar, { props: { src: 'https://1.png', lazy: true, onLoad } })
  wrapper.find('img').element._lazy.state = 'success'
  await wrapper.find('img').trigger('load')
  expect(onLoad).toBeCalledTimes(1)
})

test('test avatar group basic use', () => {
  const wrapper = mount(VarAvatarGroup, {
    slots: {
      default: () => h(Fragment, [h(VarAvatar), h(VarAvatar), h(VarAvatar)]),
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test avatar group vertical', () => {
  const wrapper = mount(VarAvatarGroup, {
    props: {
      vertical: true,
    },
    slots: {
      default: () => h(Fragment, [h(VarAvatar), h(VarAvatar), h(VarAvatar)]),
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test avatar group offset', () => {
  const wrapper = mount(VarAvatarGroup, {
    props: {
      offset: 10,
    },
    slots: {
      default: () => h(Fragment, [h(VarAvatar), h(VarAvatar), h(VarAvatar)]),
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})
