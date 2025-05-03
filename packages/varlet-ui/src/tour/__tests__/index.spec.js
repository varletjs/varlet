import { createApp, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import Tour from '..'
import TourStep from '../../tour-step'
import VarTourStep from '../../tour-step/TourStep'
import { delay, triggerKeyboard } from '../../utils/test'
import VarTour from '../Tour'

const Wrapper = {
  components: {
    [VarTour.name]: VarTour,
    [VarTourStep.name]: VarTourStep,
  },
  props: [
    'closeable',
    'overlay',
    'type',
    'closeOnKeyEscape',
    'closeOnClickOverlay',
    'onClose',
    'onFinish',
    'onChange',
    'onKeyEscape',
    'onClickOverlay',
  ],
  data: () => ({
    btnRef: null,
    open: true,
    current: 0,
  }),
  template: `
    <template>
      <button ref="btnRef">cover</button>

      <var-tour v-model:open="open" v-model:current="current" :teleport="false" v-bind="$props">
        <var-tour-step :target="btnRef?.el" title="first" description="cover description" v-bind="$attrs" />
        <var-tour-step :target="btnRef?.el" title="second" description="cover description" v-bind="$attrs" />
        <template #indicators="scope">
          <slot name="indicators" v-bind="scope" />
        </template>
      </var-tour>
    </template>
  `,
}

test('tour plugin', () => {
  const app = createApp({}).use(Tour)
  expect(app.component(Tour.name)).toBeTruthy()
})

test('tour step plugin', () => {
  const app = createApp({}).use(TourStep)
  expect(app.component(TourStep.name)).toBeTruthy()
})

test('tour basic', async () => {
  const wrapper = mount(Wrapper)

  await delay(50)

  expect(wrapper.find('.var-tour-step__title').text()).toEqual('first')
  expect(wrapper.find('.var-tour-step__description').text()).toEqual('cover description')
  wrapper.unmount()
})

test('tour non modal', async () => {
  const wrapper = mount(Wrapper, {
    props: {
      overlay: false,
    },
  })

  await delay(50)
  expect(wrapper.find('.var-tour__overlay').exists()).toBeFalsy()
  wrapper.unmount()
})

test('tour custom indicators', async () => {
  const wrapper = mount(Wrapper, {
    slots: {
      indicators: ({ current, total }) => `${current + 1} / ${total}`,
    },
  })

  await delay(50)
  expect(wrapper.find('.var-tour__indicators').text()).toEqual('1 / 2')
  wrapper.unmount()
})

test('tour type primary', async () => {
  const wrapper = mount(Wrapper, {
    props: {
      type: 'primary',
    },
  })

  await delay(50)
  expect(wrapper.find('.var-tour--primary').exists()).toBeTruthy()
  wrapper.unmount()
})

test('tour no target', async () => {
  const wrapper = mount({
    components: {
      [VarTour.name]: VarTour,
      [VarTourStep.name]: VarTourStep,
    },
    template: `
      <var-tour :open="true" :teleport="false">
        <var-tour-step title="cover title" description="cover description" />
      </var-tour>
    `,
  })

  await delay(50)
  const style = wrapper.find('.var-tour__content').attributes('style')
  expect(style).toContain('position: fixed')
  expect(style).toContain('top: 50%')
  expect(style).toContain('left: 50%')
  expect(style).toContain('transform: translate(-50%, -50%)')
  wrapper.unmount()
})

test('tour previous and next and finish', async () => {
  const wrapper = mount(Wrapper)

  await delay(50)

  expect(wrapper.find('.var-tour-step__title').text()).toEqual('first')
  wrapper.find('.var-tour__next-button').trigger('click')

  await nextTick()

  expect(wrapper.find('.var-tour-step__title').text()).toEqual('second')
  wrapper.find('.var-tour__previous-button').trigger('click')

  await nextTick()

  expect(wrapper.find('.var-tour-step__title').text()).toEqual('first')
  wrapper.find('.var-tour__next-button').trigger('click')

  await nextTick()

  wrapper.find('.var-tour__next-button').trigger('click')

  await nextTick()

  expect(wrapper.vm.open).toBe(false)

  wrapper.unmount()
})

test('tour step prevButtonText', async () => {
  const wrapper = mount(Wrapper)

  await delay(50)
  wrapper.find('.var-tour__next-button').trigger('click')

  await nextTick()

  expect(wrapper.find('.var-tour__previous-button').text()).toBe('上一步')

  await wrapper.setProps({
    prevButtonText: 'prev',
  })

  expect(wrapper.find('.var-tour__previous-button').text()).toBe('prev')

  wrapper.unmount()
})

test('tour step nextButtonText', async () => {
  const wrapper = mount(Wrapper)

  await delay(50)

  expect(wrapper.find('.var-tour__next-button').text()).toBe('下一步')

  await wrapper.setProps({
    nextButtonText: 'next',
  })

  expect(wrapper.find('.var-tour__next-button').text()).toBe('next')

  wrapper.unmount()
})

test('tour step prevButtonColor', async () => {
  const wrapper = mount(Wrapper, {
    attrs: {
      prevButtonColor: 'blue',
    },
  })

  await delay(50)
  wrapper.find('.var-tour__next-button').trigger('click')

  await nextTick()

  expect(wrapper.find('.var-tour__previous-button').attributes('style')).toContain('background: blue')

  wrapper.unmount()
})

test('tour step nextButtonColor', async () => {
  const wrapper = mount(Wrapper, {
    attrs: {
      nextButtonColor: 'blue',
    },
  })

  await delay(50)

  expect(wrapper.find('.var-tour__next-button').attributes('style')).toContain('background: blue')

  wrapper.unmount()
})

test('tour step prevButtonTextColor', async () => {
  const wrapper = mount(Wrapper, {
    attrs: {
      prevButtonTextColor: 'blue',
    },
  })

  await delay(50)
  wrapper.find('.var-tour__next-button').trigger('click')

  await nextTick()

  expect(wrapper.find('.var-tour__previous-button').attributes('style')).toContain('color: blue')

  wrapper.unmount()
})

test('tour step nextButtonTextColor', async () => {
  const wrapper = mount(Wrapper, {
    attrs: {
      nextButtonTextColor: 'blue',
    },
  })

  await delay(50)

  expect(wrapper.find('.var-tour__next-button').attributes('style')).toContain('color: blue')

  wrapper.unmount()
})

describe('tour events', () => {
  test('tour onChange', async () => {
    const onChange = vi.fn()
    const wrapper = mount(Wrapper, {
      props: {
        onChange,
      },
    })

    await delay(50)

    wrapper.find('.var-tour__next-button').trigger('click')

    expect(onChange).toHaveBeenCalledWith(1)

    await nextTick()
    wrapper.find('.var-tour__previous-button').trigger('click')

    expect(onChange).toHaveBeenCalledWith(0)

    wrapper.unmount()
  })

  test('tour onClose', async () => {
    const onClose = vi.fn()
    let wrapper = mount(Wrapper, {
      props: {
        onClose,
        closeable: true,
      },
    })

    await delay(50)

    wrapper.find('.var-tour__close-icon').trigger('click')
    expect(onClose).toHaveBeenCalledTimes(1)

    wrapper.unmount()

    wrapper = mount(Wrapper, {
      props: {
        onClose,
      },
    })

    await delay(50)

    wrapper.find('.var-tour__next-button').trigger('click')

    await nextTick()

    wrapper.find('.var-tour__next-button').trigger('click')

    expect(onClose).toHaveBeenCalledTimes(2)
    wrapper.unmount()
  })

  test('tour onFinish', async () => {
    const onFinish = vi.fn()
    const wrapper = mount(Wrapper, {
      props: {
        onFinish,
        closeable: true,
      },
    })

    await delay(50)

    wrapper.find('.var-tour__next-button').trigger('click')

    await nextTick()

    wrapper.find('.var-tour__next-button').trigger('click')

    expect(onFinish).toHaveBeenCalled()
    wrapper.unmount()
  })

  test('tour click overlay and closeOnClickOverlay', async () => {
    const onClickOverlay = vi.fn()
    const wrapper = mount(Wrapper, {
      props: {
        onClickOverlay,
        closeOnClickOverlay: false,
      },
    })

    await delay(50)

    await wrapper.find('.var-tour__overlay').trigger('click')
    expect(onClickOverlay).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.open).toBe(true)

    await wrapper.setProps({ closeOnClickOverlay: true })
    await wrapper.find('.var-tour__overlay').trigger('click')
    expect(onClickOverlay).toHaveBeenCalledTimes(2)
    expect(wrapper.vm.open).toBe(false)

    wrapper.unmount()
  })

  test('tour keyboard escape and closeOnKeyEscape', async () => {
    const onKeyEscape = vi.fn()
    const wrapper = mount(Wrapper, {
      props: {
        onKeyEscape,
        closeOnKeyEscape: false,
      },
    })

    await delay(50)

    await triggerKeyboard(window, 'keydown', { key: 'Escape' })
    expect(onKeyEscape).toBeCalledTimes(1)
    expect(wrapper.vm.open).toBe(true)

    await wrapper.setProps({ closeOnKeyEscape: true })
    await triggerKeyboard(window, 'keydown', { key: 'Escape' })
    expect(onKeyEscape).toBeCalledTimes(2)
    expect(wrapper.vm.open).toBe(false)

    wrapper.unmount()
  })
})
