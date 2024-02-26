import Card from '..'
import VarCard from '../Card'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay } from '../../utils/test'
import { expect, vi, describe } from 'vitest'

test('test card use', () => {
  const app = createApp({}).use(Card)
  expect(app.component(Card.name)).toBeTruthy()
})

describe('test card component events', () => {
  test('test card onClick with null callback', () => {
    const wrapper = mount(VarCard)
    wrapper.trigger('click')
    wrapper.unmount()
  })

  test('test card onClick', () => {
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
})

describe('test card component props', () => {
  test('test card title', async () => {
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

  test('test card subtitle', async () => {
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

  test('test card description', async () => {
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

  test('test card elevation', async () => {
    const wrapper = mount(VarCard)

    expect(wrapper.find('.var-elevation--1').exists()).toBe(true)

    await wrapper.setProps({
      elevation: 3,
    })
    expect(wrapper.find('.var-elevation--3').exists()).toBe(true)

    wrapper.unmount()
  })

  test('test card outline', async () => {
    const wrapper = mount(VarCard, {
      props: {
        outline: true,
      },
    })

    expect(wrapper.find('.var-card--outline').exists()).toBe(true)

    await wrapper.setProps({
      outline: false,
    })
    expect(wrapper.find('.var-card--outline').exists()).toBe(false)

    wrapper.unmount()
  })

  test('test card src', async () => {
    const wrapper = mount(VarCard, {
      props: {
        src: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      },
    })

    expect(wrapper.find('img').attributes('src')).toBe('https://varlet.gitee.io/varlet-ui/cat.jpg')

    await wrapper.setProps({
      src: 'https://varlet.gitee.io/varlet-ui/cat2.jpg',
    })
    expect(wrapper.find('img').attributes('src')).toBe('https://varlet.gitee.io/varlet-ui/cat2.jpg')

    wrapper.unmount()
  })

  test('test card fit', () => {
    ;['fill', 'contain', 'cover', 'none', 'scale-down'].forEach((fit) => {
      const wrapper = mount(VarCard, {
        props: {
          fit,
          src: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
        },
      })

      expect(wrapper.find('img').attributes('style')).toContain('object-fit: ' + fit)
      wrapper.unmount()
    })
  })

  test('test card alt', async () => {
    const wrapper = mount(VarCard, {
      props: {
        alt: 'This is alt',
        src: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      },
    })

    expect(wrapper.find('img').attributes('alt')).toBe('This is alt')

    await wrapper.setProps({
      alt: 'This is another alt',
    })
    expect(wrapper.find('img').attributes('alt')).toBe('This is another alt')

    wrapper.unmount()
  })

  test('test card imageHeight', async () => {
    const wrapper = mount(VarCard, {
      props: {
        imageHeight: 100,
        src: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      },
    })

    expect(wrapper.find('img').attributes('style')).toContain('height: 100px;')

    await wrapper.setProps({
      imageHeight: 200,
    })
    expect(wrapper.find('img').attributes('style')).toContain('height: 200px;')

    wrapper.unmount()
  })

  test('test card imageWidth', async () => {
    const wrapper = mount(VarCard, {
      props: {
        imageWidth: 100,
        src: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      },
    })

    expect(wrapper.find('img').attributes('style')).toContain('width: 100px;')

    await wrapper.setProps({
      imageWidth: 200,
    })
    expect(wrapper.find('img').attributes('style')).toContain('width: 200px;')

    wrapper.unmount()
  })

  test('test card floating', async () => {
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

  test('test card layout', async () => {
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
  test('test card image slot', () => {
    const wrapper = mount(VarCard, {
      slots: {
        image: '<img src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="cat" />',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })

  test('test card title slot', () => {
    const wrapper = mount(VarCard, {
      slots: {
        title: '<span>title</span>',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })

  test('test card subtitle slot', () => {
    const wrapper = mount(VarCard, {
      slots: {
        subtitle: '<span>subtitle</span>',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })

  test('test card description slot', () => {
    const wrapper = mount(VarCard, {
      slots: {
        description: '<span>description</span>',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })

  test('test card extra slot', () => {
    const wrapper = mount(VarCard, {
      slots: {
        extra: '<span>extra</span>',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })

  test('test card floating-content slot', async () => {
    const wrapper = mount(VarCard, {
      slots: {
        'floating-content': '<span>floating-content</span>',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({
      layout: 'row',
    })
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })
})
