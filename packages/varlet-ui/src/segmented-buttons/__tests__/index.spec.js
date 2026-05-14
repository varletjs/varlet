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

test('options api label-key and value-key', async () => {
  const wrapper = mount(VarSegmentedButtons, {
    props: {
      modelValue: 'week',
      options: [
        { name: 'Day', id: 'day' },
        { name: 'Week', id: 'week' },
      ],
      labelKey: 'name',
      valueKey: 'id',
      'onUpdate:modelValue': (value) => wrapper.setProps({ modelValue: value }),
    },
  })

  const buttons = wrapper.findAll('.var-segmented-button')
  expect(buttons).toHaveLength(2)
  expect(buttons[0].text()).toContain('Day')
  expect(buttons[1].attributes('aria-checked')).toBe('true')

  await buttons[0].trigger('click')
  expect(wrapper.props('modelValue')).toBe('day')

  wrapper.unmount()
})

test('button click event', async () => {
  const onClick = vi.fn()
  const wrapper = mount(VarSegmentedButtons, {
    props: {
      modelValue: 'day',
    },
    slots: {
      default: `
        <var-segmented-button checked-value="day">Day</var-segmented-button>
        <var-segmented-button checked-value="week" :on-click="onClick">Week</var-segmented-button>
      `,
    },
    global: {
      components: {
        [VarSegmentedButton.name]: VarSegmentedButton,
      },
      mocks: {
        onClick,
      },
    },
  })

  await wrapper.findAll('.var-segmented-button')[1].trigger('click')
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onClick.mock.calls[0][0]).toBeInstanceOf(Event)

  wrapper.unmount()
})

test('readonly button click event without change', async () => {
  const onClick = vi.fn()
  const onChange = vi.fn()
  const wrapper = mount(VarSegmentedButtons, {
    props: {
      modelValue: 'day',
      readonly: true,
      onChange,
      'onUpdate:modelValue': vi.fn(),
    },
    slots: {
      default: `
        <var-segmented-button checked-value="day">Day</var-segmented-button>
        <var-segmented-button checked-value="week" :on-click="onClick">Week</var-segmented-button>
      `,
    },
    global: {
      components: {
        [VarSegmentedButton.name]: VarSegmentedButton,
      },
      mocks: {
        onClick,
      },
    },
  })

  await wrapper.findAll('.var-segmented-button')[1].trigger('click')
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalledTimes(0)

  wrapper.unmount()
})

test('checkmark prop', async () => {
  const wrapper = mount(VarSegmentedButtons, {
    props: {
      modelValue: 'day',
      checkmark: false,
    },
    slots: {
      default: `
        <var-segmented-button checked-value="day">Day</var-segmented-button>
        <var-segmented-button checked-value="week" :checkmark="true">Week</var-segmented-button>
      `,
    },
    global: {
      components: {
        [VarSegmentedButton.name]: VarSegmentedButton,
      },
    },
  })

  const buttons = wrapper.findAll('.var-segmented-button')
  expect(buttons[0].find('.var-icon').exists()).toBeFalsy()
  expect(buttons[1].find('.var-icon').exists()).toBeFalsy()

  await buttons[1].trigger('click')
  expect(buttons[1].find('.var-icon').exists()).toBeTruthy()

  wrapper.unmount()
})

test('options api custom checkmark render', () => {
  const wrapper = mount(VarSegmentedButtons, {
    props: {
      modelValue: 'day',
      options: [
        {
          label: 'Day',
          value: 'day',
          checkmark: () => '♥',
        },
        {
          label: 'Week',
          value: 'week',
          checkmark: () => '♥',
        },
      ],
    },
  })

  expect(wrapper.text()).toContain('♥')

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

test('group validation trigger onClick', async () => {
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
        v-model="value"
        :validate-trigger="['onClick']"
        :rules="[v => v === 'day' || 'You must choose day']"
      >
        <var-segmented-button checked-value="day">Day</var-segmented-button>
        <var-segmented-button checked-value="week">Week</var-segmented-button>
      </var-segmented-buttons>
    `,
  })

  await wrapper.findAll('.var-segmented-button')[1].trigger('click')
  await delay(16)

  expect(wrapper.find('.var-form-details__error-message').text()).toBe('You must choose day')

  wrapper.unmount()
})
