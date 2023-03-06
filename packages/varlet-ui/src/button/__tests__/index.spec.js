import Button from '..'
import ButtonGroup from '../../button-group'
import VarButton from '../Button.vue'
import VarButtonGroup from '../../button-group/ButtonGroup.vue'
import { mount } from '@vue/test-utils'
import { createApp, Fragment, h } from 'vue'
import { delay, trigger } from '../../utils/jest'

test('test button plugin', () => {
  const app = createApp({}).use(Button)
  expect(app.component(Button.name)).toBeTruthy()
})

test('test button group plugin', () => {
  const app = createApp({}).use(ButtonGroup)
  expect(app.component(ButtonGroup.name)).toBeTruthy()
})

describe('test button component event', () => {
  test('test button onClick & onTouchstart null callback', async () => {
    const wrapper = mount(VarButton)
    await trigger(wrapper, 'click')
    await trigger(wrapper, 'touchstart')
    wrapper.unmount()
  })

  test('test button onClick & onTouchstart', async () => {
    const onClick = jest.fn()
    const onTouchstart = jest.fn()

    const wrapper = mount(VarButton, {
      props: {
        onClick,
        onTouchstart,
      },
    })

    await trigger(wrapper, 'click')
    await trigger(wrapper, 'touchstart')
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onTouchstart).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  })
})

describe('test button component props', () => {
  test('test button type', () => {
    ;['default', 'primary', 'info', 'success', 'warning', 'danger'].forEach((type) => {
      const wrapper = mount(VarButton, {
        props: { type },
      })

      expect(wrapper.find('button').classes()).toContain('var-button--' + type)
      wrapper.unmount()
    })
  })

  test('test button size', () => {
    ;['normal', 'mini', 'small', 'large'].forEach((size) => {
      const wrapper = mount(VarButton, {
        props: { size },
      })

      expect(wrapper.find('button').classes()).toContain('var-button--' + size)
      wrapper.unmount()
    })
  })

  test('test button loading', async () => {
    const onClick = jest.fn()
    const onTouchstart = jest.fn()

    const wrapper = mount(VarButton, {
      props: {
        loading: true,
      },
    })

    await trigger(wrapper, 'click')
    await trigger(wrapper, 'touchstart')
    expect(wrapper.find('.var-loading').exists()).toBeTruthy()
    expect(onClick).toHaveBeenCalledTimes(0)
    expect(onTouchstart).toHaveBeenCalledTimes(0)
    wrapper.unmount()
  })

  test('test button loading type', () => {
    ;['circle', 'wave', 'cube', 'rect', 'disappear'].forEach(async (type) => {
      const onClick = jest.fn()
      const onTouchstart = jest.fn()
      const wrapper = mount(VarButton, {
        props: {
          loading: true,
          loadingType: type,
        },
      })

      await trigger(wrapper, 'click')
      await trigger(wrapper, 'touchstart')
      expect(wrapper.find('.var-loading__' + type).exists()).toBe(true)
      expect(onClick).toHaveBeenCalledTimes(0)
      expect(onTouchstart).toHaveBeenCalledTimes(0)
      wrapper.unmount()
    })
  })

  test('test button loading size', () => {
    ;['large', 'normal', 'small', 'mini'].forEach((size) => {
      ;['circle', 'wave', 'cube', 'rect', 'disappear'].forEach(async (type) => {
        const onClick = jest.fn()
        const onTouchstart = jest.fn()
        const wrapper = mount(VarButton, {
          props: {
            loading: true,
            loadingSize: size,
            loadingType: type,
          },
        })

        await trigger(wrapper, 'click')
        await trigger(wrapper, 'touchstart')
        expect(wrapper.find(`.var-loading__${type}--${size}`).exists()).toBe(type !== 'circle')
        expect(onClick).toHaveBeenCalledTimes(0)
        expect(onTouchstart).toHaveBeenCalledTimes(0)
        wrapper.unmount()
      })
    })
  })

  test('test button auto loading', async () => {
    const onClick = () => {
      return new Promise((resolve) => {
        setTimeout(resolve, 100)
      })
    }

    const onTouchstart = () => {
      return new Promise((resolve) => {
        setTimeout(resolve, 100)
      })
    }

    const wrapper = mount(VarButton, {
      props: {
        autoLoading: true,
        onClick,
        onTouchstart,
        ripple: false,
      },
    })

    await trigger(wrapper, 'click')
    expect(wrapper.find('.var-loading').exists()).toBeTruthy()
    await delay(100)
    expect(wrapper.find('.var-loading').exists()).toBeFalsy()

    await trigger(wrapper, 'touchstart')
    expect(wrapper.find('.var-loading').exists()).toBeTruthy()
    await delay(100)
    expect(wrapper.find('.var-loading').exists()).toBeFalsy()

    wrapper.unmount()
  })

  test('test button round', async () => {
    const wrapper = mount(VarButton, {
      props: {
        round: true,
      },
    })

    expect(wrapper.find('button').classes()).toContain('var-button--round')
    await wrapper.setProps({ round: false })
    expect(wrapper.find('button').classes()).not.toContain('var-button--round')
    wrapper.unmount()
  })

  test('test button block', async () => {
    const wrapper = mount(VarButton, {
      props: {
        block: true,
      },
    })

    expect(wrapper.find('button').classes()).toContain('var-button--block')
    await wrapper.setProps({ block: false })
    expect(wrapper.find('button').classes()).not.toContain('var-button--block')
    wrapper.unmount()
  })

  test('test button text', async () => {
    const wrapper = mount(VarButton, {
      props: {
        text: true,
      },
    })

    expect(wrapper.find('button').classes()).toContain('var-button--text')
    await wrapper.setProps({ text: false })
    expect(wrapper.find('button').classes()).not.toContain('var-button--text')
    wrapper.unmount()
  })

  test('test button outline', async () => {
    const wrapper = mount(VarButton, {
      props: {
        outline: true,
      },
    })

    expect(wrapper.find('button').classes()).toContain('var-button--outline')
    await wrapper.setProps({ outline: false })
    expect(wrapper.find('button').classes()).not.toContain('var-button--outline')
    wrapper.unmount()
  })

  test('test button disabled', async () => {
    const onClick = jest.fn()
    const onTouchstart = jest.fn()

    const wrapper = mount(VarButton, {
      props: {
        disabled: true,
        onClick,
        onTouchstart,
      },
    })

    await trigger(wrapper, 'click')
    await trigger(wrapper, 'touchstart')
    expect(wrapper.classes()).toContain('var-button--disabled')
    expect(onClick).toHaveBeenCalledTimes(0)
    expect(onTouchstart).toHaveBeenCalledTimes(0)
    wrapper.unmount()
  })

  test('test button ripple', async () => {
    const onTouchstart = jest.fn()
    const wrapper = mount(VarButton, {
      props: {
        ripple: true,
      },
    })
    await trigger(wrapper, 'touchstart')
    await delay(250)
    expect(wrapper.find('.var-ripple').exists()).toBe(true)
    await trigger(document, 'touchend')
    await delay(500)
    expect(wrapper.find('.var-ripple').exists()).toBe(false)
    expect(onTouchstart).toHaveBeenCalledTimes(0)

    await wrapper.setProps({ ripple: false })
    await trigger(wrapper, 'touchstart')
    await delay(500)
    expect(wrapper.find('.var-ripple').exists()).toBe(false)
    expect(onTouchstart).toHaveBeenCalledTimes(0)

    wrapper.unmount()
  })

  test('test button text color', () => {
    const wrapper = mount(VarButton, {
      props: {
        textColor: '#000',
      },
    })
    expect(wrapper.attributes('style')).toMatch('color: rgb(0, 0, 0)')
    wrapper.unmount()
  })

  test('test button color', () => {
    const wrapper = mount(VarButton, {
      props: {
        color: '#000',
      },
    })
    expect(wrapper.attributes('style')).toMatch('background: rgb(0, 0, 0)')
    wrapper.unmount()
  })
})

test('test button default slots', () => {
  const wrapper = mount(VarButton, {
    slots: {
      default: () => 'test',
    },
  })

  expect(wrapper.find('.var-button__content').element.textContent).toBe('test')
  wrapper.unmount()
})

test('test button group default slots', () => {
  const wrapper = mount(VarButtonGroup, {
    slots: {
      default: () => h(Fragment, [h(VarButton), h(VarButton), h(VarButton)]),
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test button group color and text-color', () => {
  const wrapper = mount(VarButtonGroup, {
    props: {
      color: 'yellow',
      textColor: 'red',
    },
    slots: {
      default: () => h(Fragment, [h(VarButton), h(VarButton), h(VarButton)]),
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test button group type and size', () => {
  const wrapper = mount(VarButtonGroup, {
    props: {
      type: 'primary',
      size: 'large',
    },
    slots: {
      default: () => h(Fragment, [h(VarButton), h(VarButton), h(VarButton)]),
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test button group text mode', () => {
  const wrapper = mount(VarButtonGroup, {
    props: {
      mode: 'text',
    },
    slots: {
      default: () => h(Fragment, [h(VarButton), h(VarButton), h(VarButton)]),
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test button group outline mode', () => {
  const wrapper = mount(VarButtonGroup, {
    props: {
      mode: 'outline',
    },
    slots: {
      default: () => h(Fragment, [h(VarButton), h(VarButton), h(VarButton)]),
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test button group elevation', () => {
  const wrapper = mount(VarButtonGroup, {
    props: {
      elevation: 10,
    },
    slots: {
      default: () => h(Fragment, [h(VarButton), h(VarButton), h(VarButton)]),
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})
