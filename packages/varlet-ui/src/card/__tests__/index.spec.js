import Card from '..'
import VarCard from '../Card'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay } from '../../utils/jest'

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
    const onClick = jest.fn()
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
  test('test card title', () => {
    const wrapper = mount(VarCard, {
      props: {
        title: 'This is title',
      },
    })

    expect(wrapper.find('.var-card__title').element.textContent).toBe('This is title')
    wrapper.unmount()
  })

  test('test card subtitle', () => {
    const wrapper = mount(VarCard, {
      props: {
        subtitle: 'This is subtitle',
      },
    })

    expect(wrapper.find('.var-card__subtitle').element.textContent).toBe('This is subtitle')
    wrapper.unmount()
  })

  test('test card description', () => {
    const wrapper = mount(VarCard, {
      props: {
        description: 'This is description',
      },
    })

    expect(wrapper.find('.var-card__description').element.textContent).toBe('This is description')
    wrapper.unmount()
  })

  test('test card elevation', () => {
    const wrapper = mount(VarCard, {
      props: {
        elevation: 3,
      },
    })

    expect(wrapper.find('.var-elevation--3').exists()).toBe(true)
    wrapper.unmount()
  })

  test('test card outline', () => {
    const wrapper = mount(VarCard, {
      props: {
        outline: true,
      },
    })

    expect(wrapper.find('.var-card--outline').exists()).toBe(true)
    wrapper.unmount()
  })

  test('test card src', () => {
    const wrapper = mount(VarCard, {
      props: {
        src: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      },
    })

    expect(wrapper.find('img').attributes('src')).toBe('https://varlet.gitee.io/varlet-ui/cat.jpg')
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

  test('test card alt', () => {
    const wrapper = mount(VarCard, {
      props: {
        alt: 'This is alt',
        src: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      },
    })

    expect(wrapper.find('img').attributes('alt')).toBe('This is alt')
    wrapper.unmount()
  })

  test('test card height', async () => {
    const wrapper = mount(VarCard, {
      props: {
        imageHeight: 100,
        src: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      },
    })

    expect(wrapper.find('img').attributes('style')).toContain('height: 100px;')
    wrapper.unmount()
  })

  test('test card width', () => {
    const wrapper = mount(VarCard, {
      props: {
        imageWidth: 100,
        src: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      },
    })

    expect(wrapper.find('img').attributes('style')).toContain('width: 100px;')
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
})
