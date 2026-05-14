import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vite-plus/test'
import { createApp } from 'vue'
import SegmentedButtons from '..'
import SegmentedButton from '../../segmented-button'
import VarSegmentedButton from '../../segmented-button/SegmentedButton.vue'
import { delay, triggerKeyboard } from '../../utils/test'
import VarSegmentedButtons from '../SegmentedButtons.vue'

test('segmented buttons plugin', () => {
  const app = createApp({}).use(SegmentedButtons)
  expect(app.component(SegmentedButtons.name)).toBeTruthy()
})

test('segmented button plugin', () => {
  const app = createApp({}).use(SegmentedButton)
  expect(app.component(SegmentedButton.name)).toBeTruthy()
})

test('single select', async () => {
  const wrapper = mount({
    components: {
      [VarSegmentedButtons.name]: VarSegmentedButtons,
      [VarSegmentedButton.name]: VarSegmentedButton,
    },
    data: () => ({
      value: 'card',
    }),
    template: `
      <var-segmented-buttons v-model="value">
        <var-segmented-button checked-value="list">List</var-segmented-button>
        <var-segmented-button checked-value="card">Card</var-segmented-button>
      </var-segmented-buttons>
    `,
  })

  const buttons = wrapper.findAll('.var-segmented-button')

  await buttons[0].trigger('click')
  expect(wrapper.vm.value).toBe('list')

  await buttons[0].trigger('click')
  expect(wrapper.vm.value).toBe('list')

  wrapper.unmount()
})

test('multiple select', async () => {
  const wrapper = mount({
    components: {
      [VarSegmentedButtons.name]: VarSegmentedButtons,
      [VarSegmentedButton.name]: VarSegmentedButton,
    },
    data: () => ({
      value: ['bold'],
    }),
    template: `
      <var-segmented-buttons v-model="value" multiple>
        <var-segmented-button checked-value="bold">Bold</var-segmented-button>
        <var-segmented-button checked-value="italic">Italic</var-segmented-button>
      </var-segmented-buttons>
    `,
  })

  const buttons = wrapper.findAll('.var-segmented-button')

  await buttons[1].trigger('click')
  expect(wrapper.vm.value).toStrictEqual(['bold', 'italic'])

  await buttons[0].trigger('click')
  expect(wrapper.vm.value).toStrictEqual(['italic'])

  wrapper.unmount()
})

test('options api', async () => {
  const wrapper = mount(VarSegmentedButtons, {
    props: {
      modelValue: 'week',
      options: [
        { label: 'Day', value: 'day' },
        { label: 'Week', value: 'week' },
      ],
      'onUpdate:modelValue': (value) => wrapper.setProps({ modelValue: value }),
    },
  })

  const buttons = wrapper.findAll('.var-segmented-button')
  expect(buttons).toHaveLength(2)

  await buttons[0].trigger('click')
  expect(wrapper.props('modelValue')).toBe('day')

  wrapper.unmount()
})

test('keyboard single select', async () => {
  const wrapper = mount({
    components: {
      [VarSegmentedButtons.name]: VarSegmentedButtons,
      [VarSegmentedButton.name]: VarSegmentedButton,
    },
    data: () => ({
      value: 'list',
    }),
    template: `
      <var-segmented-buttons v-model="value">
        <var-segmented-button checked-value="list">List</var-segmented-button>
        <var-segmented-button checked-value="card">Card</var-segmented-button>
        <var-segmented-button checked-value="table">Table</var-segmented-button>
      </var-segmented-buttons>
    `,
  })

  const buttons = wrapper.findAll('.var-segmented-button')

  await buttons[0].trigger('focus')
  await triggerKeyboard(window, 'keydown', { key: 'ArrowRight' })

  expect(wrapper.vm.value).toBe('card')

  wrapper.unmount()
})

test('keyboard multiple select', async () => {
  const wrapper = mount({
    components: {
      [VarSegmentedButtons.name]: VarSegmentedButtons,
      [VarSegmentedButton.name]: VarSegmentedButton,
    },
    data: () => ({
      value: [],
    }),
    template: `
      <var-segmented-buttons v-model="value" multiple>
        <var-segmented-button checked-value="bold">Bold</var-segmented-button>
        <var-segmented-button checked-value="italic">Italic</var-segmented-button>
      </var-segmented-buttons>
    `,
  })

  const buttons = wrapper.findAll('.var-segmented-button')

  await buttons[0].trigger('focus')
  await triggerKeyboard(window, 'keydown', { key: 'ArrowRight' })
  expect(wrapper.vm.value).toStrictEqual([])

  await triggerKeyboard(window, 'keyup', { key: ' ' })
  expect(wrapper.vm.value).toStrictEqual(['italic'])

  wrapper.unmount()
})

test('disabled group', async () => {
  const onChange = vi.fn()
  const wrapper = mount(VarSegmentedButtons, {
    props: {
      modelValue: 'list',
      disabled: true,
      onChange,
    },
    slots: {
      default: `
        <var-segmented-button checked-value="list">List</var-segmented-button>
        <var-segmented-button checked-value="card">Card</var-segmented-button>
      `,
    },
    global: {
      components: {
        [VarSegmentedButton.name]: VarSegmentedButton,
      },
    },
  })

  await wrapper.findAll('.var-segmented-button')[1].trigger('click')
  expect(onChange).toHaveBeenCalledTimes(0)

  wrapper.unmount()
})

test('group validation', async () => {
  const wrapper = mount({
    components: {
      [VarSegmentedButtons.name]: VarSegmentedButtons,
      [VarSegmentedButton.name]: VarSegmentedButton,
    },
    data: () => ({
      value: undefined,
    }),
    template: `
      <var-segmented-buttons
        ref="segmentedButtons"
        v-model="value"
        :rules="[v => v === 'list' || 'You must choose list']"
      >
        <var-segmented-button checked-value="list">List</var-segmented-button>
        <var-segmented-button checked-value="card">Card</var-segmented-button>
      </var-segmented-buttons>
    `,
  })

  const { segmentedButtons } = wrapper.vm.$refs
  segmentedButtons.validate()
  await delay(16)

  expect(wrapper.find('.var-form-details__error-message').text()).toBe('You must choose list')

  await wrapper.findAll('.var-segmented-button')[0].trigger('click')
  await delay(16)

  expect(wrapper.find('.var-form-details__error-message').exists()).toBeFalsy()

  wrapper.unmount()
})
