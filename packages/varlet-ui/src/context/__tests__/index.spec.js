import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vite-plus/test'
import { computed, defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import context from '..'
import { useLock } from '../lock'
import { useStack } from '../stack'
import { useZIndex } from '../zIndex'

const StackConsumer = defineComponent({
  props: {
    active: Boolean,
    zIndex: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const active = computed(() => props.active)
    const zIndex = ref(props.zIndex)
    const { onStackTop } = useStack(() => active.value, zIndex)

    return {
      onStackTop,
      zIndex,
    }
  },
  render() {
    return h('div')
  },
})

const ZIndexConsumer = defineComponent({
  setup() {
    const visible = ref(false)
    const { zIndex } = useZIndex(visible, 10)

    return {
      visible,
      zIndex,
    }
  },
  render() {
    return h('div')
  },
})

const LockConsumer = defineComponent({
  setup() {
    const active = ref(false)
    const enabled = ref(true)

    useLock(
      () => active.value,
      () => enabled.value,
    )

    return {
      active,
      enabled,
    }
  },
  render() {
    return h('div')
  },
})

const LockConsumerActive = defineComponent({
  setup() {
    const active = ref(true)
    const enabled = ref(true)

    useLock(
      () => active.value,
      () => enabled.value,
    )

    return {
      active,
      enabled,
    }
  },
  render() {
    return h('div')
  },
})

const LockConsumerDisabled = defineComponent({
  setup() {
    const active = ref(true)
    const enabled = ref(false)

    useLock(
      () => active.value,
      () => enabled.value,
    )

    return {
      active,
      enabled,
    }
  },
  render() {
    return h('div')
  },
})

const LockConsumerNoSource = defineComponent({
  setup() {
    const active = ref(false)

    useLock(() => active.value)

    return {
      active,
    }
  },
  render() {
    return h('div')
  },
})

const StackConsumerEager = defineComponent({
  setup() {
    const active = ref(false)
    const zIndex = ref(0)
    const { onStackTop } = useStack(() => active.value, zIndex)

    active.value = true

    return {
      active,
      onStackTop,
    }
  },
  render() {
    return h('div')
  },
})

beforeEach(() => {
  Object.keys(context.locks).forEach((key) => delete context.locks[key])
  document.body.classList.remove('var--lock')
  context.zIndex = 2000
})

afterEach(() => {
  Object.keys(context.locks).forEach((key) => delete context.locks[key])
  document.body.classList.remove('var--lock')
  context.zIndex = 2000
})

describe('context stack', () => {
  test('tracks stack order and cleanup', async () => {
    vi.useFakeTimers()
    let wrapper

    try {
      const Wrapper = defineComponent({
        components: {
          StackConsumer,
        },
        data: () => ({
          activeA: true,
          activeB: true,
        }),
        template: `
          <stack-consumer ref="a" :active="activeA" :z-index="100" />
          <stack-consumer ref="b" :active="activeB" :z-index="200" />
        `,
      })

      wrapper = mount(Wrapper)
      const [first, second] = wrapper.findAllComponents(StackConsumer)

      expect(first.vm.onStackTop()).toBe(false)
      expect(second.vm.onStackTop()).toBe(true)

      wrapper.vm.activeB = false
      await nextTick()
      vi.runAllTimers()

      expect(first.vm.onStackTop()).toBe(true)
    } finally {
      if (wrapper) {
        wrapper.unmount()
      }
      vi.useRealTimers()
    }
  })

  test('returns true when stack is empty', () => {
    const wrapper = mount(StackConsumer, {
      props: {
        active: false,
        zIndex: 10,
      },
    })

    expect(wrapper.vm.onStackTop()).toBe(true)
    wrapper.unmount()
  })

  test('avoids duplicate stack items', async () => {
    const wrapper = mount(StackConsumerEager)

    await nextTick()
    expect(wrapper.vm.onStackTop()).toBe(true)

    wrapper.unmount()
  })
})

describe('context zIndex', () => {
  test('increments zIndex in non-test env', async () => {
    const originEnv = process.env.NODE_ENV
    let wrapper

    try {
      process.env.NODE_ENV = 'production'
      wrapper = mount(ZIndexConsumer)

      expect(wrapper.vm.zIndex).toBe(2000)

      wrapper.vm.visible = true
      await nextTick()

      expect(wrapper.vm.zIndex).toBe(2010)
      expect(context.zIndex).toBe(2010)
    } finally {
      if (wrapper) {
        wrapper.unmount()
      }
      process.env.NODE_ENV = originEnv
    }
  })

  test('keeps zIndex when env is test', async () => {
    const wrapper = mount(ZIndexConsumer)

    expect(wrapper.vm.zIndex).toBe(2000)

    wrapper.vm.visible = true
    await nextTick()

    expect(wrapper.vm.zIndex).toBe(2000)
    expect(context.zIndex).toBe(2000)

    wrapper.unmount()
  })
})

describe('context lock', () => {
  test('locks body when active and enabled', async () => {
    const wrapper = mount(LockConsumer)

    wrapper.vm.active = true
    await nextTick()

    expect(document.body.classList.contains('var--lock')).toBe(true)

    wrapper.vm.active = false
    await nextTick()

    expect(document.body.classList.contains('var--lock')).toBe(false)

    wrapper.vm.active = true
    wrapper.vm.enabled = false
    await nextTick()

    expect(document.body.classList.contains('var--lock')).toBe(false)

    wrapper.vm.enabled = true
    await nextTick()

    expect(document.body.classList.contains('var--lock')).toBe(true)

    wrapper.unmount()
  })

  test('locks on before mount when active initially', () => {
    const wrapper = mount(LockConsumerActive)

    expect(document.body.classList.contains('var--lock')).toBe(true)

    wrapper.unmount()
  })

  test('handles keep-alive activation and deactivation', async () => {
    const Wrapper = defineComponent({
      components: {
        KeepAlive,
        LockConsumer,
      },
      data: () => ({
        show: true,
      }),
      template: `
        <keep-alive>
          <lock-consumer v-if="show" />
        </keep-alive>
      `,
    })

    const wrapper = mount(Wrapper)
    const lockConsumer = wrapper.findComponent(LockConsumer)

    lockConsumer.vm.active = true
    await nextTick()

    expect(document.body.classList.contains('var--lock')).toBe(true)

    wrapper.vm.show = false
    await nextTick()

    expect(document.body.classList.contains('var--lock')).toBe(false)

    wrapper.vm.show = true
    await nextTick()

    expect(document.body.classList.contains('var--lock')).toBe(true)

    wrapper.unmount()
  })

  test('locks without a source guard', async () => {
    const wrapper = mount(LockConsumerNoSource)

    expect(document.body.classList.contains('var--lock')).toBe(false)

    wrapper.vm.active = true
    await nextTick()

    expect(document.body.classList.contains('var--lock')).toBe(true)

    // unmount while the layer is open releases the lock
    wrapper.unmount()
    await nextTick()

    expect(document.body.classList.contains('var--lock')).toBe(false)
  })

  test('does not lock when re-enabled while the layer is closed', async () => {
    const wrapper = mount(LockConsumer)

    expect(document.body.classList.contains('var--lock')).toBe(false)

    // toggle the source guard while the layer stays closed
    wrapper.vm.enabled = false
    await nextTick()
    wrapper.vm.enabled = true
    await nextTick()

    expect(document.body.classList.contains('var--lock')).toBe(false)

    wrapper.unmount()
  })

  test('skips lock when disabled across lifecycle', async () => {
    const Wrapper = defineComponent({
      components: {
        KeepAlive,
        LockConsumerDisabled,
      },
      data: () => ({
        show: true,
      }),
      template: `
        <keep-alive>
          <lock-consumer-disabled v-if="show" />
        </keep-alive>
      `,
    })

    const wrapper = mount(Wrapper)

    expect(document.body.classList.contains('var--lock')).toBe(false)

    wrapper.vm.show = false
    await nextTick()

    expect(document.body.classList.contains('var--lock')).toBe(false)

    wrapper.vm.show = true
    await nextTick()

    expect(document.body.classList.contains('var--lock')).toBe(false)

    wrapper.unmount()
  })
})
