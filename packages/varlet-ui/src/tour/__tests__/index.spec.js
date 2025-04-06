import { createApp, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import Tour from '..'
import TourStep from '../../tour-step'
import VarTourStep from '../../tour-step/TourStep'
import { delay } from '../../utils/test'
import VarTour from '../Tour'

const Wrapper = {
  components: {
    [VarTour.name]: VarTour,
    [VarTourStep.name]: VarTourStep,
  },
  props: ['closeable', 'overlay', 'type', 'onClose', 'onFinish', 'onChange'],
  data: () => ({
    btnRef: null,
    open: true,
    current: 0,
  }),
  template: `
    <button ref="btnRef">cover</button>

    <var-tour v-model:open="open" v-model:current="current" :teleport="false" v-bind="$props">
      <var-tour-step :target="btnRef?.el" title="first" description="cover description" />
      <var-tour-step :target="btnRef?.el" title="second" description="cover description" />
      <template #indicators="scope">
        <slot name="indicators" v-bind="scope" />
      </template>
    </var-tour>
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
  const style = wrapper.find('.var-tour__content').element.style
  expect(style.position).toBe('fixed')
  expect(style.top).toBe('50%')
  expect(style.left).toBe('50%')
  expect(style.transform).toBe('translate(-50%, -50%)')
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
})
