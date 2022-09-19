import Image from '..'
import VarImage from '../Image'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, trigger } from '../../utils/test'
import { wrapperPlant } from 'lodash-es'

const SRC = 'https://varlet.gitee.io/varlet-ui/cat.png'

test('test image plugin', () => {
  const app = createApp({}).use(Image)
  expect(app.component(Image.name)).toBeTruthy()
})

describe('test image component event', () => {
  test('test image onLoad & onError', () => {
    const onLoad = vi.fn()
    const onError = vi.fn()
    const wrapper = mount(VarImage, {
      props: {
        onLoad,
        onError,
      },
    })
    const img = wrapper.find('img')

    img.trigger('load')
    img.trigger('error')
    expect(onLoad).toHaveBeenCalledTimes(1)
    expect(onError).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  })

  test('test image onLoad & onError in lazy mode', () => {
    const onLoad = vi.fn()
    const onError = vi.fn()
    const wrapper = mount(VarImage, {
      props: {
        lazy: true,
        onLoad,
        onError,
      },
    })

    const img = wrapper.find('img')

    img.element._lazy.state = 'success'
    img.trigger('load')
    expect(onLoad).toHaveBeenCalledTimes(1)

    img.element._lazy.state = 'error'
    img.trigger('load')
    expect(onError).toHaveBeenCalledTimes(1)

    wrapper.unmount()
  })

  test('test image onLoad & onError null callback', async () => {
    const wrapper = mount(VarImage)
    const img = wrapper.find('img')
    await img.trigger('load')
    await img.trigger('error')

    await wrapper.setProps({ lazy: true })

    const lazyImage = wrapper.find('img')
    lazyImage.element._lazy.state = 'success'
    await lazyImage.trigger('load')
    lazyImage.element._lazy.state = 'error'
    await lazyImage.trigger('load')
    wrapper.unmount()
  })

  test('test image onClick', () => {
    function expectOnClick(props = {}) {
      const onClick = vi.fn()
      const wrapper = mount(VarImage, {
        props: {
          onClick,
          ...props,
        },
      })

      wrapper.find('.var-image__image').trigger('click')
      expect(onClick).toHaveBeenCalledTimes(1)
      wrapper.unmount()
    }

    expectOnClick()
    expectOnClick({ lazy: true })
  })
})

describe('test image component props', () => {
  test('test image src', () => {
    const wrapper = mount(VarImage, {
      props: {
        src: SRC,
      },
    })

    expect(wrapper.find('img').element.src).toEqual(SRC)
    wrapper.unmount()
  })

  test('test image fit', () => {
    ;['fill', 'contain', 'cover', 'none', 'scale-down'].forEach((fit) => {
      const wrapper = mount(VarImage, {
        props: { fit },
      })

      expect(wrapper.find('.var-image__image').attributes('style')).toContain(`object-fit: ${fit};`)
      wrapper.unmount()
    })
  })

  test('test image alt', () => {
    const wrapper = mount(VarImage, {
      props: {
        alt: 'This is alt',
      },
    })

    expect(wrapper.find('.var-image__image').attributes('alt')).toContain('This is alt')
    wrapper.unmount()
  })

  test('test image width', async () => {
    const wrapper = mount(VarImage, {
      props: {
        width: '20px',
      },
    })

    expect(wrapper.find('.var-image').attributes('style')).toContain('width: 20px;')
    await wrapper.setProps({ width: 30 })
    expect(wrapper.find('.var-image').attributes('style')).toContain('width: 30px;')
    wrapper.unmount()
  })

  test('test image height', async () => {
    const wrapper = mount(VarImage, {
      props: {
        height: '20px',
      },
    })

    expect(wrapper.find('.var-image').attributes('style')).toContain('height: 20px;')
    await wrapper.setProps({ height: 30 })
    expect(wrapper.find('.var-image').attributes('style')).toContain('height: 30px;')
    wrapper.unmount()
  })

  test('test image radius', async () => {
    const wrapper = mount(VarImage, {
      props: {
        radius: '20px',
      },
    })

    expect(wrapper.find('.var-image').attributes('style')).toContain('radius: 20px;')
    await wrapper.setProps({ radius: 30 })
    expect(wrapper.find('.var-image').attributes('style')).toContain('radius: 30px;')
    wrapper.unmount()
  })

  test('test image lazy', async () => {
    const wrapper = mount(VarImage, {
      props: {
        lazy: false,
        src: SRC,
      },
    })

    expect(wrapper.find('.var-image__image').attributes('src')).toContain(SRC)
    await wrapper.setProps({ lazy: true })
    expect(wrapper.find('.var-image__image').attributes('src')).not.toContain(SRC)
    wrapper.unmount()
  })

  test('test image loading', () => {
    const wrapper = mount(VarImage, {
      props: {
        lazy: true,
        loading: SRC,
      },
    })

    expect(wrapper.find('.var-image__image').attributes('lazy-loading')).toContain(SRC)
    wrapper.unmount()
  })

  test('test image error', () => {
    const wrapper = mount(VarImage, {
      props: {
        lazy: true,
        error: SRC,
      },
    })

    expect(wrapper.find('.var-image__image').attributes('lazy-error')).toContain(SRC)
    wrapper.unmount()
  })

  test('test image ripple', async () => {
    const wrapper = mount(VarImage, {
      props: {
        ripple: true,
        src: SRC,
      },
    })

    await trigger(wrapper, 'touchstart')
    await delay(250)
    expect(wrapper.find('.var-ripple').exists()).toBe(true)

    await trigger(document, 'touchend')
    await delay(500)
    expect(wrapper.find('.var-ripple').exists()).toBe(false)

    await wrapper.setProps({ ripple: false })
    await trigger(wrapper, 'touchstart')
    await delay(250)
    expect(wrapper.find('.var-ripple').exists()).toBe(false)

    wrapper.unmount()
  })

  test('test image block', async () => {
    const wrapper = mount(VarImage, {
      props: {
        block: true,
      },
    })

    expect(wrapper.find('.var--inline-block').exists()).toBe(false)
    await wrapper.setProps({ block: false })
    expect(wrapper.find('.var--inline-block').exists()).toBe(true)
    wrapper.unmount()
  })
})
