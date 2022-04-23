import Skeleton from '..'
import VarSkeleton from '../Skeleton'
import { mount } from '@vue/test-utils'
import { createApp, h } from 'vue'

test('test skeleton use', () => {
  const app = createApp({}).use(Skeleton)
  expect(app.component(Skeleton.name)).toBeTruthy()
})

describe('test skeleton component props', () => {
  test('test skeleton loading', async () => {
    const wrapper = mount(VarSkeleton, {
      props: {
        loading: true,
      },
    })

    expect(wrapper.find('.var-skeleton__content').exists()).toBe(true)
    await wrapper.setProps({ loading: false })
    expect(wrapper.find('.var-skeleton__content').exists()).toBe(false)
    wrapper.unmount()
  })

  test('test skeleton title', async () => {
    const wrapper = mount(VarSkeleton, {
      props: {
        title: true,
      },
    })

    expect(wrapper.find('.var-skeleton__title').exists()).toBe(true)
    await wrapper.setProps({ title: false })
    expect(wrapper.find('.var-skeleton__title').exists()).toBe(false)
    wrapper.unmount()
  })

  test('test skeleton card', async () => {
    const wrapper = mount(VarSkeleton, {
      props: {
        card: true,
      },
    })

    expect(wrapper.find('.var-skeleton__card').exists()).toBe(true)
    await wrapper.setProps({ card: false })
    expect(wrapper.find('.var-skeleton__card').exists()).toBe(false)
    wrapper.unmount()
  })

  test('test skeleton avatar', async () => {
    const wrapper = mount(VarSkeleton, {
      props: {
        avatar: true,
      },
    })

    expect(wrapper.find('.var-skeleton__avatar').exists()).toBe(true)
    await wrapper.setProps({ avatar: false })
    expect(wrapper.find('.var-skeleton__avatar').exists()).toBe(false)
    wrapper.unmount()
  })

  test('test skeleton fullscreen', async () => {
    const wrapper = mount(VarSkeleton, {
      props: {
        fullscreen: true,
      },
    })

    expect(wrapper.find('.var-skeleton__fullscreen').exists()).toBe(true)
    await wrapper.setProps({ fullscreen: false })
    expect(wrapper.find('.var-skeleton__fullscreen').exists()).toBe(false)
    wrapper.unmount()
  })

  test('test skeleton fullscreen-z-index', async () => {
    const wrapper = mount(VarSkeleton, {
      props: {
        fullscreen: true,
        fullscreenZIndex: 50,
      },
    })

    expect(wrapper.find('.var-skeleton__fullscreen').attributes('style')).toContain('z-index: 50;')
    await wrapper.setProps({ fullscreenZIndex: '20' })
    expect(wrapper.find('.var-skeleton__fullscreen').attributes('style')).toContain('z-index: 20;')
    wrapper.unmount()
  })

  test('test skeleton title-width', async () => {
    const wrapper = mount(VarSkeleton, {
      props: {
        title: true,
        titleWidth: '20%',
      },
    })

    expect(wrapper.find('.var-skeleton__title').attributes('style')).toContain('width: 20%;')
    await wrapper.setProps({ titleWidth: 20 })
    expect(wrapper.find('.var-skeleton__title').attributes('style')).toContain('width: 20px;')
    wrapper.unmount()
  })

  test('test skeleton card-height', async () => {
    const wrapper = mount(VarSkeleton, {
      props: {
        card: true,
        cardHeight: '100px',
      },
    })

    expect(wrapper.find('.var-skeleton__card').attributes('style')).toContain('height: 100px;')
    await wrapper.setProps({ cardHeight: 20 })
    expect(wrapper.find('.var-skeleton__card').attributes('style')).toContain('height: 20px;')
    wrapper.unmount()
  })

  test('test skeleton avatar-size', async () => {
    const wrapper = mount(VarSkeleton, {
      props: {
        avatar: true,
        avatarSize: '20px',
      },
    })

    expect(wrapper.find('.var-skeleton__avatar').attributes('style')).toContain('width: 20px; height: 20px;')
    await wrapper.setProps({ avatarSize: 30 })
    expect(wrapper.find('.var-skeleton__avatar').attributes('style')).toContain('width: 30px; height: 30px;')
    wrapper.unmount()
  })

  test('test skeleton rows', async () => {
    const wrapper = mount(VarSkeleton, {
      props: {
        rows: 1,
      },
    })

    expect(wrapper.findAll('.var-skeleton--animation').length).toBe(1)
    await wrapper.setProps({ rows: '4' })
    expect(wrapper.findAll('.var-skeleton--animation').length).toBe(4)
    wrapper.unmount()
  })

  test('test skeleton rows-width', async () => {
    const wrapper = mount(VarSkeleton, {
      props: {
        rowsWidth: [10, 10, 10],
      },
    })

    wrapper.findAll('.var-skeleton__row').forEach((item) => {
      expect(item.attributes('style')).toContain('width: 10px;')
    })
    await wrapper.setProps({ rowsWidth: ['11', '11', '11'] })
    wrapper.findAll('.var-skeleton__row').forEach((item) => {
      expect(item.attributes('style')).toContain('width: 11px;')
    })
    wrapper.unmount()
  })
})

test('test skeleton default slots', () => {
  const wrapper = mount(VarSkeleton, {
    props: {
      loading: false,
    },
    slots: {
      default: () => h('div', { class: 'skeleton-default-slot' }),
    },
  })

  expect(wrapper.find('.skeleton-default-slot').exists()).toBe(true)
  wrapper.unmount()
})
