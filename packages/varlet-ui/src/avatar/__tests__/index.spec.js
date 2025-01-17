import { createApp, Fragment, h } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Avatar from '..'
import AvatarGroup from '../../avatar-group'
import VarAvatarGroup from '../../avatar-group/AvatarGroup.vue'
import VarAvatar from '../Avatar.vue'

test('avatar plugin', () => {
  const app = createApp({}).use(Avatar)
  expect(app.component(Avatar.name)).toBeTruthy()
})

test('avatar group plugin', () => {
  const app = createApp({}).use(AvatarGroup)
  expect(app.component(AvatarGroup.name)).toBeTruthy()
})

test('avatar round', async () => {
  const wrapper = mount(VarAvatar, {
    props: { round: true },
  })

  expect(wrapper.find(`.var-avatar--round`).exists()).toBeTruthy()

  await wrapper.setProps({
    round: false,
  })

  expect(wrapper.find(`.var-avatar--round`).exists()).toBeFalsy()
  wrapper.unmount()
})

test('avatar bordered', async () => {
  const wrapper = mount(VarAvatar, {
    props: { bordered: true },
  })

  expect(wrapper.find(`.var-avatar--bordered`).exists()).toBeTruthy()

  await wrapper.setProps({
    bordered: false,
  })

  expect(wrapper.find(`.var-avatar--bordered`).exists()).toBeFalsy()
  wrapper.unmount()
})

test('avatar hoverable', async () => {
  const wrapper = mount(VarAvatar, {
    props: { hoverable: true },
  })

  expect(wrapper.find(`.var-avatar--hoverable`).exists()).toBeTruthy()

  await wrapper.setProps({
    hoverable: false,
  })

  expect(wrapper.find(`.var-avatar--hoverable`).exists()).toBeFalsy()
  wrapper.unmount()
})

test('avatar size', () => {
  ;['mini', 'small', 'normal', 'large'].forEach((size) => {
    const wrapper = mount(VarAvatar, {
      props: { size },
    })

    expect(wrapper.find(`.var-avatar--${size}`).exists()).toBeTruthy()
    wrapper.unmount()
  })

  const wrapper = mount(VarAvatar, {
    props: { size: 78 },
  })

  expect(wrapper.find('.var-avatar').attributes('style')).toContain('width: 78px; height: 78px;')
  wrapper.unmount()
})

test('avatar color', () => {
  const wrapper = mount(VarAvatar, {
    props: { color: 'red' },
  })

  expect(wrapper.find('.var-avatar').attributes('style')).toContain('background-color: red')
  wrapper.unmount()
})

test('avatar borderColor', () => {
  const wrapper = mount(VarAvatar, {
    props: { borderColor: 'red' },
  })

  expect(wrapper.find('.var-avatar').attributes('style')).toContain('border-color: red')
  wrapper.unmount()
})

test('avatar src', () => {
  const wrapper = mount(VarAvatar, {
    props: { src: 'https://1.png' },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('avatar src and alt', () => {
  const wrapper = mount(VarAvatar, {
    props: { src: 'https://1.png', alt: '1.png' },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('avatar src and fit', () => {
  ;['fill', 'contain', 'cover', 'none', 'scale-down'].forEach((fit) => {
    const wrapper = mount(VarAvatar, {
      props: { src: 'https://1.png', fit },
    })

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })
})

test('avatar onClick', async () => {
  const onClick = vi.fn()
  const wrapper = mount(VarAvatar, { props: { onClick } })

  await wrapper.trigger('click')
  expect(onClick).toBeCalledTimes(1)
  wrapper.unmount()
})

test('avatar onLoad', async () => {
  const onLoad = vi.fn()
  const wrapper = mount(VarAvatar, { props: { src: 'https://1.png', onLoad } })

  await wrapper.find('img').trigger('load')
  expect(onLoad).toBeCalledTimes(1)
  wrapper.unmount()
})

test('avatar onError', async () => {
  const onError = vi.fn()
  const wrapper = mount(VarAvatar, { props: { src: 'https://1.png', onError } })

  await wrapper.find('img').trigger('error')
  expect(onError).toBeCalledTimes(1)
  wrapper.unmount()
})

test('avatar lazy onLoad', async () => {
  const onLoad = vi.fn()
  const wrapper = mount(VarAvatar, { props: { src: 'https://1.png', lazy: true, onLoad } })
  wrapper.find('img').element._lazy.state = 'success'

  await wrapper.find('img').trigger('load')
  expect(onLoad).toBeCalledTimes(1)
  wrapper.unmount()
})

test('avatar group basic use', () => {
  const wrapper = mount(VarAvatarGroup, {
    slots: {
      default: () => h(Fragment, [h(VarAvatar), h(VarAvatar), h(VarAvatar)]),
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('avatar group vertical', () => {
  const wrapper = mount(VarAvatarGroup, {
    props: {
      vertical: true,
    },
    slots: {
      default: () => h(Fragment, [h(VarAvatar), h(VarAvatar), h(VarAvatar)]),
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('avatar group offset', () => {
  const wrapper = mount(VarAvatarGroup, {
    props: {
      offset: 10,
    },
    slots: {
      default: () => h(Fragment, [h(VarAvatar), h(VarAvatar), h(VarAvatar)]),
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})
