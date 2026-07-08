import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vite-plus/test'
import { createApp, h } from 'vue'
import Card from '..'
import { delay, trigger } from '../../utils/test'
import VarCard from '../Card'

test('card use', () => {
  const app = createApp({}).use(Card)
  expect(app.component(Card.name)).toBeTruthy()
})

describe('test card component events', () => {
  test('card onClick with null callback', () => {
    const onClick = vi.fn()
    const wrapper = mount(VarCard)
    wrapper.trigger('click')
    expect(onClick).toHaveBeenCalledTimes(0)
    wrapper.unmount()
  })

  test('card onClick', () => {
    const onClick = vi.fn()
    const wrapper = mount(VarCard, {
      props: {
        onClick,
      },
    })

    wrapper.trigger('click')
    expect(onClick).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  })

  test('card close button emits update', async () => {
    const onUpdateFloating = vi.fn()
    const wrapper = mount(VarCard, {
      props: {
        floating: true,
        floatingDuration: 0,
        'onUpdate:floating': onUpdateFloating,
      },
    })

    await delay(64)
    const closeButton = wrapper.find('.var-card__close-button')
    expect(closeButton.exists()).toBe(true)
    await closeButton.trigger('click')
    expect(onUpdateFloating).toHaveBeenCalledWith(false)
    wrapper.unmount()
  })

  test('card floating respects ripple delay', async () => {
    const timerSpy = vi.spyOn(global, 'setTimeout')
    const wrapper = mount(VarCard, {
      props: {
        floating: true,
        ripple: true,
      },
    })

    await delay(16)
    expect(timerSpy.mock.calls.some(([, delay]) => delay === 500)).toBe(true)
    await delay(550)
    wrapper.unmount()
    timerSpy.mockRestore()
  })
})

describe('test card component props', () => {
  test('card title', async () => {
    const wrapper = mount(VarCard, {
      props: {
        title: 'This is title',
      },
    })

    expect(wrapper.find('.var-card__title').element.textContent).toBe('This is title')

    await wrapper.setProps({
      title: 'This is another title',
    })
    expect(wrapper.find('.var-card__title').element.textContent).toBe('This is another title')

    wrapper.unmount()
  })

  test('card subtitle', async () => {
    const wrapper = mount(VarCard, {
      props: {
        subtitle: 'This is subtitle',
      },
    })

    expect(wrapper.find('.var-card__subtitle').element.textContent).toBe('This is subtitle')

    await wrapper.setProps({
      subtitle: 'This is another subtitle',
    })
    expect(wrapper.find('.var-card__subtitle').element.textContent).toBe('This is another subtitle')

    wrapper.unmount()
  })

  test('card description', async () => {
    const wrapper = mount(VarCard, {
      props: {
        description: 'This is description',
      },
    })

    expect(wrapper.find('.var-card__description').element.textContent).toBe('This is description')

    await wrapper.setProps({
      description: 'This is another description',
    })
    expect(wrapper.find('.var-card__description').element.textContent).toBe('This is another description')

    wrapper.unmount()
  })

  test('card elevation', async () => {
    const wrapper = mount(VarCard)

    expect(wrapper.find('.var-elevation--1').exists()).toBe(true)

    await wrapper.setProps({
      elevation: 3,
    })
    expect(wrapper.find('.var-elevation--3').exists()).toBe(true)

    wrapper.unmount()
  })

  test('card outline', async () => {
    const wrapper = mount(VarCard)

    expect(wrapper.find('.var-card--outline').exists()).toBe(false)

    await wrapper.setProps({
      outline: true,
    })
    expect(wrapper.find('.var-card--outline').exists()).toBe(true)
    expect(wrapper.find('.var-elevation--1').exists()).toBe(true)

    wrapper.unmount()
  })

  test('card outlined variant', async () => {
    const wrapper = mount(VarCard, {
      props: {
        elevation: 3,
        variant: 'outlined',
      },
    })

    expect(wrapper.find('.var-card--outline').exists()).toBe(true)
    expect(wrapper.find('.var-elevation--3').exists()).toBe(false)

    await wrapper.setProps({
      variant: 'standard',
    })
    expect(wrapper.find('.var-card--outline').exists()).toBe(false)
    expect(wrapper.find('.var-elevation--3').exists()).toBe(true)

    wrapper.unmount()
  })

  test('card filled variant', async () => {
    const wrapper = mount(VarCard, {
      props: {
        elevation: 3,
        variant: 'filled',
      },
    })

    expect(wrapper.find('.var-card--filled').exists()).toBe(true)
    expect(wrapper.find('.var-elevation--3').exists()).toBe(false)

    await wrapper.setProps({
      variant: 'standard',
    })
    expect(wrapper.find('.var-card--filled').exists()).toBe(false)
    expect(wrapper.find('.var-elevation--3').exists()).toBe(true)

    wrapper.unmount()
  })

  test('card hoverable', async () => {
    const wrapper = mount(VarCard, {
      props: {
        hoverable: true,
      },
    })

    expect(wrapper.find('.var-hover-overlay--hovering').exists()).toBe(false)

    await wrapper.trigger('mouseenter')
    expect(wrapper.find('.var-hover-overlay--hovering').exists()).toBe(true)

    await wrapper.trigger('mouseleave')
    expect(wrapper.find('.var-hover-overlay--hovering').exists()).toBe(false)

    wrapper.unmount()
  })

  test('card hoverable object', async () => {
    const wrapper = mount(VarCard, {
      props: {
        hoverable: {
          color: '#f00',
        },
      },
    })

    await wrapper.trigger('mouseenter')
    const overlay = wrapper.find('.var-hover-overlay')
    expect(overlay.classes()).toContain('var-hover-overlay--hovering')
    expect(overlay.attributes('style')).toContain('color: rgb(255, 0, 0)')

    await wrapper.setProps({
      hoverable: {
        disabled: true,
        color: '#0f0',
      },
    })
    await wrapper.trigger('mouseleave')
    await wrapper.trigger('mouseenter')
    expect(wrapper.find('.var-hover-overlay--hovering').exists()).toBe(false)

    wrapper.unmount()
  })

  test('card ripple object', async () => {
    const wrapper = mount(VarCard, {
      props: {
        ripple: {
          color: 'green',
        },
      },
    })

    await trigger(wrapper, 'touchstart')
    await delay(250)
    expect(wrapper.find('.var-ripple').element.style.backgroundColor).toBe('green')

    await wrapper.setProps({
      ripple: {
        disabled: true,
        color: 'red',
      },
    })
    await trigger(document, 'touchend')
    await delay(500)
    await trigger(wrapper, 'touchstart')
    await delay(250)
    expect(wrapper.find('.var-ripple').exists()).toBe(false)

    wrapper.unmount()
  })

  test('card surface low', async () => {
    const wrapper = mount(VarCard, {
      props: {
        surface: 'low',
      },
    })

    expect(wrapper.find('.var-card--surface-low').exists()).toBe(true)

    await wrapper.setProps({
      variant: 'filled',
    })

    expect(wrapper.find('.var-card--surface-low').exists()).toBe(false)
    expect(wrapper.find('.var-card--filled').exists()).toBe(true)

    wrapper.unmount()
  })

  test('card src', async () => {
    const wrapper = mount(VarCard, {
      props: {
        src: 'https://varletjs.org/varlet/cat.jpg',
      },
    })

    expect(wrapper.find('img').attributes('src')).toBe('https://varletjs.org/varlet/cat.jpg')

    await wrapper.setProps({
      src: 'https://varletjs.org/varlet/cat2.jpg',
    })
    expect(wrapper.find('img').attributes('src')).toBe('https://varletjs.org/varlet/cat2.jpg')

    wrapper.unmount()
  })

  test('card fit', () => {
    ;['fill', 'contain', 'cover', 'none', 'scale-down'].forEach((fit) => {
      const wrapper = mount(VarCard, {
        props: {
          fit,
          src: 'https://varletjs.org/varlet/cat.jpg',
        },
      })

      expect(wrapper.find('img').attributes('style')).toContain('object-fit: ' + fit)
      wrapper.unmount()
    })
  })

  test('card alt', async () => {
    const wrapper = mount(VarCard, {
      props: {
        alt: 'This is alt',
        src: 'https://varletjs.org/varlet/cat.jpg',
      },
    })

    expect(wrapper.find('img').attributes('alt')).toBe('This is alt')

    await wrapper.setProps({
      alt: 'This is another alt',
    })
    expect(wrapper.find('img').attributes('alt')).toBe('This is another alt')

    wrapper.unmount()
  })

  test('card imageHeight', async () => {
    const wrapper = mount(VarCard, {
      props: {
        imageHeight: 100,
        src: 'https://varletjs.org/varlet/cat.jpg',
      },
    })

    expect(wrapper.find('img').attributes('style')).toContain('height: 100px;')

    await wrapper.setProps({
      imageHeight: 200,
    })
    expect(wrapper.find('img').attributes('style')).toContain('height: 200px;')

    wrapper.unmount()
  })

  test('card imageWidth', async () => {
    const wrapper = mount(VarCard, {
      props: {
        imageWidth: 100,
        src: 'https://varletjs.org/varlet/cat.jpg',
      },
    })

    expect(wrapper.find('img').attributes('style')).toContain('width: 100px;')

    await wrapper.setProps({
      imageWidth: 200,
    })
    expect(wrapper.find('img').attributes('style')).toContain('width: 200px;')

    wrapper.unmount()
  })

  test('card floating', async () => {
    const wrapper = mount(VarCard, {
      props: {
        floating: false,
      },
    })

    expect(wrapper.find('.var-card__floater').attributes('style')).toContain('width: 100%;')
    await wrapper.setProps({
      floating: true,
    })
    await delay(300)
    expect(wrapper.find('.var-card__floater').attributes('style')).toContain('width: 100vw;')
    wrapper.unmount()
  })

  test('card floating dropdown restores layout', async () => {
    const wrapper = mount(VarCard, {
      props: {
        floating: true,
        floatingDuration: 0,
      },
    })

    await delay(64)
    expect(wrapper.find('.var-card__floater').attributes('style')).toContain('width: 100vw;')
    expect(wrapper.find('.var-card__floating-buttons').exists()).toBe(true)

    await wrapper.setProps({
      floating: false,
    })
    await delay(64)
    expect(wrapper.find('.var-card__floater').attributes('style')).toContain('width: 100%;')
    expect(wrapper.find('.var-card__floating-buttons').exists()).toBe(false)

    wrapper.unmount()
  })

  test('card ripple disabled when ripple is false', async () => {
    const wrapper = mount(VarCard, {
      props: {
        ripple: false,
      },
    })

    await wrapper.trigger('touchstart')
    await delay(50)
    expect(wrapper.find('.var-ripple').exists()).toBe(false)
    wrapper.unmount()
  })

  test('card floating ignored in row layout', async () => {
    const wrapper = mount(VarCard, {
      props: {
        layout: 'row',
        floating: true,
      },
    })

    await delay(16)
    expect(wrapper.find('.var-card__floating-buttons').exists()).toBe(false)
    wrapper.unmount()
  })

  test('card layout', async () => {
    const wrapper = mount(VarCard)

    expect(wrapper.find('.var-card--layout-row').exists()).toBe(false)

    await wrapper.setProps({
      layout: 'row',
    })
    expect(wrapper.find('.var-card--layout-row').exists()).toBe(true)

    wrapper.unmount()
  })
})

describe('test card component slots', () => {
  test('card image slot', () => {
    const wrapper = mount(VarCard, {
      slots: {
        image: '<img src="https://varletjs.org/varlet/cat.jpg" alt="cat" />',
      },
    })

    const floater = wrapper.find('.var-card__floater')
    const style = floater.attributes('style') ?? ''
    expect(style).toContain('width: 100%')
    expect(style).toContain('height: 100%')
    expect(style).toContain('overflow: hidden')
    expect(wrapper.find('img').attributes('src')).toBe('https://varletjs.org/varlet/cat.jpg')

    wrapper.unmount()
  })

  test('card default slot', () => {
    const wrapper = mount(VarCard, {
      slots: {
        default: 'default slot',
      },
    })

    expect(wrapper.find('.var-card__content').text()).toBe('default slot')

    wrapper.unmount()
  })

  test('card title slot', () => {
    const wrapper = mount(VarCard, {
      slots: {
        title: ({ slotClass }) => h('span', { class: slotClass }, 'title'),
      },
    })

    const floater = wrapper.find('.var-card__floater')
    const style = floater.attributes('style') ?? ''
    expect(style).toContain('width: 100%')
    expect(style).toContain('height: 100%')
    expect(style).toContain('overflow: hidden')
    expect(wrapper.find('.var-card__title').text()).toBe('title')

    wrapper.unmount()
  })

  test('card subtitle slot', () => {
    const wrapper = mount(VarCard, {
      slots: {
        subtitle: ({ slotClass }) => h('span', { class: slotClass }, 'subtitle'),
      },
    })

    const floater = wrapper.find('.var-card__floater')
    const style = floater.attributes('style') ?? ''
    expect(style).toContain('width: 100%')
    expect(style).toContain('height: 100%')
    expect(style).toContain('overflow: hidden')
    expect(wrapper.find('.var-card__subtitle').text()).toBe('subtitle')

    wrapper.unmount()
  })

  test('card description slot', () => {
    const wrapper = mount(VarCard, {
      slots: {
        description: ({ slotClass }) => h('span', { class: slotClass }, 'description'),
      },
    })

    const floater = wrapper.find('.var-card__floater')
    const style = floater.attributes('style') ?? ''
    expect(style).toContain('width: 100%')
    expect(style).toContain('height: 100%')
    expect(style).toContain('overflow: hidden')
    expect(wrapper.find('.var-card__description').text()).toBe('description')

    wrapper.unmount()
  })

  test('card extra slot', () => {
    const wrapper = mount(VarCard, {
      slots: {
        extra: '<span>extra</span>',
      },
    })

    const floater = wrapper.find('.var-card__floater')
    const style = floater.attributes('style') ?? ''
    expect(style).toContain('width: 100%')
    expect(style).toContain('height: 100%')
    expect(style).toContain('overflow: hidden')
    expect(wrapper.find('.var-card__footer').text()).toBe('extra')

    wrapper.unmount()
  })

  test('card floating-content slot', async () => {
    const wrapper = mount(VarCard, {
      slots: {
        'floating-content': '<span>floating-content</span>',
      },
    })

    const floater = wrapper.find('.var-card__floater')
    const style = floater.attributes('style') ?? ''
    expect(style).toContain('width: 100%')
    expect(style).toContain('height: 100%')
    expect(style).toContain('overflow: hidden')

    await wrapper.setProps({
      layout: 'row',
    })
    const rowFloater = wrapper.find('.var-card__floater')
    const rowStyle = rowFloater.attributes('style') ?? ''
    expect(rowStyle).toContain('width: 100%')
    expect(rowStyle).toContain('height: 100%')
    expect(rowStyle).toContain('overflow: hidden')

    wrapper.unmount()
  })
})
