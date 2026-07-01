import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vite-plus/test'
import { createApp, Fragment, h, inject } from 'vue'
import Button from '..'
import ButtonGroup from '../../button-group'
import VarButtonGroup from '../../button-group/ButtonGroup.vue'
import { BUTTON_GROUP_BIND_BUTTON_KEY } from '../../button-group/provide'
import { delay, trigger } from '../../utils/test'
import VarButton from '../Button.vue'

test('button plugin', () => {
  const app = createApp({}).use(Button)
  expect(app.component(Button.name)).toBeTruthy()
})

test('button group plugin', () => {
  const app = createApp({}).use(ButtonGroup)
  expect(app.component(ButtonGroup.name)).toBeTruthy()
})

describe('test button component props', () => {
  test('button type', () => {
    ;['default', 'primary', 'info', 'success', 'warning', 'danger'].forEach((type) => {
      const wrapper = mount(VarButton, {
        props: { type },
      })

      expect(wrapper.find('button').classes()).toContain('var-button--' + type)
      wrapper.unmount()
    })
  })

  test('button size', () => {
    ;['normal', 'mini', 'small', 'large'].forEach((size) => {
      const wrapper = mount(VarButton, {
        props: { size },
      })

      expect(wrapper.find('button').classes()).toContain('var-button--' + size)
      wrapper.unmount()
    })
  })

  test('button loading', async () => {
    const onClick = vi.fn()
    const onTouchstart = vi.fn()

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

  test('button loading type', () => {
    ;['circle', 'wave', 'cube', 'rect', 'disappear'].forEach(async (type) => {
      const onClick = vi.fn()
      const onTouchstart = vi.fn()
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

  test('button loading size', () => {
    ;['large', 'normal', 'small', 'mini'].forEach((size) => {
      ;['circle', 'wave', 'cube', 'rect', 'disappear'].forEach(async (type) => {
        const onClick = vi.fn()
        const onTouchstart = vi.fn()
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

  test('button auto loading', async () => {
    const onClick = () =>
      new Promise((resolve) => {
        setTimeout(resolve, 100)
      })

    const onTouchstart = () =>
      new Promise((resolve) => {
        setTimeout(resolve, 100)
      })

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

  test('button auto loading handles rejection', async () => {
    const onClick = () => Promise.reject(new Error('fail'))

    const wrapper = mount(VarButton, {
      props: {
        autoLoading: true,
        onClick,
      },
    })

    await trigger(wrapper, 'click')
    expect(wrapper.find('.var-loading').exists()).toBeTruthy()
    await delay(0)
    expect(wrapper.find('.var-loading').exists()).toBeFalsy()

    wrapper.unmount()
  })

  test('button round', async () => {
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

  test('button round fab compatibility', () => {
    const wrapper = mount(VarButton, {
      props: {
        round: true,
        fab: true,
      },
    })
    const button = wrapper.find('button')

    expect(button.classes()).toContain('var-button--round')
    expect(button.classes()).toContain('var-button--fab')
    const buttonStyles = readFileSync(resolve(process.cwd(), 'src/button/button.less'), 'utf-8')

    expect(buttonStyles).toMatch(/&--round&--fab\s*{\s*border-radius:\s*50%;\s*}/)
    wrapper.unmount()
  })

  test('button block', async () => {
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

  test('button text', async () => {
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

  test('button tonal', async () => {
    const wrapper = mount(VarButton, {
      props: {
        tonal: true,
      },
    })

    expect(wrapper.find('button').classes()).toContain('var-button--icon-container-default')
    expect(wrapper.find('button').classes()).not.toContain('var-elevation--2')
    await wrapper.setProps({ tonal: false })
    expect(wrapper.find('button').classes()).not.toContain('var-button--icon-container-default')
    wrapper.unmount()
  })

  test('button icon container compatibility', async () => {
    const wrapper = mount(VarButton, {
      props: {
        iconContainer: true,
      },
    })

    expect(wrapper.find('button').classes()).toContain('var-button--icon-container-default')
    expect(wrapper.find('button').classes()).toContain('var-elevation--2')
    await wrapper.setProps({ iconContainer: false })
    expect(wrapper.find('button').classes()).not.toContain('var-button--icon-container-default')
    wrapper.unmount()
  })

  test('button outline', async () => {
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

  test('button disabled', async () => {
    const onClick = vi.fn()
    const onTouchstart = vi.fn()

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

  test('button ripple', async () => {
    const onTouchstart = vi.fn()
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

  test('button focusable', () => {
    const wrapper = mount(VarButton, {
      props: {
        focusable: false,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })

  test('button focus ignored when not focusable', () => {
    const wrapper = mount(VarButton, {
      props: {
        focusable: false,
      },
    })

    wrapper.vm.handleFocus()
    expect(wrapper.vm.isFocusing).toBe(false)

    wrapper.unmount()
  })

  test('button focus and blur when focusable', async () => {
    const wrapper = mount(VarButton, {
      props: {
        focusable: true,
      },
    })

    await wrapper.find('button').trigger('focus')
    expect(wrapper.vm.isFocusing).toBe(true)

    await wrapper.find('button').trigger('blur')
    expect(wrapper.vm.isFocusing).toBe(false)

    wrapper.unmount()
  })

  test('button text color', () => {
    const wrapper = mount(VarButton, {
      props: {
        textColor: '#000',
      },
    })
    expect(wrapper.attributes('style')).toMatch('color: rgb(0, 0, 0)')
    wrapper.unmount()
  })

  test('button color', () => {
    const wrapper = mount(VarButton, {
      props: {
        color: '#000',
      },
    })
    expect(wrapper.attributes('style')).toMatch('background: rgb(0, 0, 0)')
    wrapper.unmount()
  })

  test('button elevation', () => {
    const wrapper = mount(VarButton, {
      props: {
        elevation: 4,
      },
    })
    expect(wrapper.find('.var-elevation--4').exists()).toBe(true)
    wrapper.unmount()
  })

  test('default filled button', async () => {
    const wrapper = mount(VarButton, {
      props: {
        elevation: false,
      },
    })

    expect(wrapper.find('button').classes()).toContain('var-button--filled-default')

    await wrapper.setProps({ elevation: 0 })
    expect(wrapper.find('button').classes()).toContain('var-button--filled-default')

    await wrapper.setProps({ elevation: '0' })
    expect(wrapper.find('button').classes()).toContain('var-button--filled-default')

    await wrapper.setProps({ elevation: true })
    expect(wrapper.find('button').classes()).not.toContain('var-button--filled-default')

    await wrapper.setProps({ elevation: false, type: 'primary' })
    expect(wrapper.find('button').classes()).not.toContain('var-button--filled-default')

    wrapper.unmount()
  })
})

describe('test button component events', () => {
  test('button onClick & onTouchstart null callback', async () => {
    const onClick = vi.fn()
    const onTouchstart = vi.fn()

    const wrapper = mount(VarButton)
    await trigger(wrapper, 'click')
    await trigger(wrapper, 'touchstart')
    expect(onClick).toHaveBeenCalledTimes(0)
    expect(onTouchstart).toHaveBeenCalledTimes(0)
    wrapper.unmount()
  })

  test('button onClick & onTouchstart', async () => {
    const onClick = vi.fn()
    const onTouchstart = vi.fn()

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

describe('test button component slots', () => {
  test('button default slot', () => {
    const wrapper = mount(VarButton, {
      slots: {
        default: () => 'test',
      },
    })

    expect(wrapper.find('.var-button__content').element.textContent).toBe('test')
    wrapper.unmount()
  })
})

describe('test button group component props', () => {
  test('button group color and text-color', () => {
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

  test('button group type and size', () => {
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

  test('button group text mode', () => {
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

  test('button group tonal mode', () => {
    const wrapper = mount(VarButtonGroup, {
      props: {
        mode: 'tonal',
      },
      slots: {
        default: () => h(Fragment, [h(VarButton), h(VarButton), h(VarButton)]),
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })

  test('button group icon-container mode compatibility', () => {
    const wrapper = mount(VarButtonGroup, {
      props: {
        mode: 'icon-container',
      },
      slots: {
        default: () => h(Fragment, [h(VarButton), h(VarButton), h(VarButton)]),
      },
    })

    expect(wrapper.find('.var-button-group').classes()).toContain('var-button-group--mode-icon-container')
    expect(wrapper.find('.var-button').classes()).toContain('var-button--icon-container-default')
    wrapper.unmount()
  })

  test('button group outline mode', () => {
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

  test('button group elevation', () => {
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

  test('button group provide reactive props', () => {
    let provider
    const Consumer = {
      setup() {
        provider = inject(BUTTON_GROUP_BIND_BUTTON_KEY)
      },
      render() {
        return null
      },
    }

    const wrapper = mount({
      components: {
        VarButtonGroup,
        VarButton,
        Consumer,
      },
      template: `
        <var-button-group :elevation="3" type="primary" size="small" color="red" text-color="blue" mode="text">
          <consumer />
          <var-button />
          <var-button />
        </var-button-group>
      `,
    })

    expect(provider).toBeTruthy()
    expect(provider.elevation.value).toBe(3)
    expect(provider.type.value).toBe('primary')
    expect(provider.size.value).toBe('small')
    expect(provider.color.value).toBe('red')
    expect(provider.textColor.value).toBe('blue')
    expect(provider.mode.value).toBe('text')

    wrapper.unmount()
  })

  test('button group classes', async () => {
    const wrapper = mount(VarButtonGroup, {
      props: {
        mode: 'outline',
        vertical: true,
        elevation: true,
      },
    })

    expect(wrapper.classes()).toContain('var-button-group')
    expect(wrapper.classes()).toContain('var-button-group--mode-outline')
    expect(wrapper.classes()).toContain('var-button-group--vertical')
    expect(wrapper.classes()).not.toContain('var-button-group--horizontal')
    expect(wrapper.classes()).not.toContain('var-elevation--2')

    await wrapper.setProps({ mode: 'normal', vertical: false })

    expect(wrapper.classes()).toContain('var-button-group--mode-normal')
    expect(wrapper.classes()).toContain('var-button-group--horizontal')
    expect(wrapper.classes()).not.toContain('var-button-group--vertical')
    expect(wrapper.classes()).toContain('var-elevation--2')

    wrapper.unmount()
  })
})

describe('test button group component slots', () => {
  test('button group default slot', () => {
    const wrapper = mount(VarButtonGroup, {
      slots: {
        default: () => h(Fragment, [h(VarButton), h(VarButton), h(VarButton)]),
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })
})
