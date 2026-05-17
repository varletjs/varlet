import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vite-plus/test'
import { computed, createApp, nextTick } from 'vue'
import SegmentedButtons from '..'
import { useChildren } from '../../../../varlet-use/src/useChildren'
import VarForm from '../../form/Form'
import SegmentedButton from '../../segmented-button'
import VarSegmentedButton from '../../segmented-button/SegmentedButton.vue'
import { delay, triggerKeyboard } from '../../utils/test'
import { SEGMENTED_BUTTONS_BIND_BUTTON_KEY } from '../provide'
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

test('segmented button role and size', () => {
  const wrapper = mount({
    components: {
      [VarSegmentedButtons.name]: VarSegmentedButtons,
      [VarSegmentedButton.name]: VarSegmentedButton,
    },
    template: `
      <var-segmented-buttons model-value="bold" multiple size="large">
        <var-segmented-button checked-value="bold">Bold</var-segmented-button>
        <var-segmented-button checked-value="italic">Italic</var-segmented-button>
      </var-segmented-buttons>
    `,
  })

  const group = wrapper.find('.var-segmented-buttons')
  const buttons = wrapper.findAll('.var-segmented-button')

  expect(group.attributes('role')).toBe('group')
  expect(buttons[0].attributes('role')).toBe('checkbox')
  expect(buttons[0].classes()).toContain('var-segmented-button--large')
  expect(buttons[1].classes()).toContain('var-segmented-button--large')

  wrapper.unmount()
})

test('segmented button syncs checked state when model changes', async () => {
  const wrapper = mount(VarSegmentedButtons, {
    props: {
      modelValue: 'day',
    },
    slots: {
      default: `
        <var-segmented-button checked-value="day">Day</var-segmented-button>
        <var-segmented-button checked-value="week">Week</var-segmented-button>
      `,
    },
    global: {
      components: {
        [VarSegmentedButton.name]: VarSegmentedButton,
      },
    },
  })

  await delay(16)

  const buttons = wrapper.findAll('.var-segmented-button')
  expect(buttons[0].attributes('aria-checked')).toBe('true')
  expect(buttons[1].attributes('aria-checked')).toBe('false')

  await wrapper.setProps({ modelValue: 'week' })

  expect(buttons[0].attributes('aria-checked')).toBe('false')
  expect(buttons[1].attributes('aria-checked')).toBe('true')

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

  await delay(16)

  const buttons = wrapper.findAll('.var-segmented-button')
  expect(buttons).toHaveLength(2)
  expect(buttons[0].text()).toContain('Day')
  expect(buttons[1].attributes('aria-checked')).toBe('true')

  await buttons[0].trigger('click')
  expect(wrapper.props('modelValue')).toBe('day')

  wrapper.unmount()
})

test('options api disabled option', async () => {
  const onChange = vi.fn()
  const wrapper = mount(VarSegmentedButtons, {
    props: {
      modelValue: 'day',
      options: [
        { label: 'Day', value: 'day' },
        { label: 'Week', value: 'week', disabled: true },
      ],
      onChange,
      'onUpdate:modelValue': (value) => wrapper.setProps({ modelValue: value }),
    },
  })

  await delay(16)

  const buttons = wrapper.findAll('.var-segmented-button')
  expect(buttons[1].attributes('disabled')).toBeDefined()
  expect(buttons[1].attributes('aria-disabled')).toBe('true')

  await buttons[1].trigger('click')
  expect(wrapper.props('modelValue')).toBe('day')
  expect(onChange).toHaveBeenCalledTimes(0)

  wrapper.unmount()
})

test('options api label render', async () => {
  const wrapper = mount(VarSegmentedButtons, {
    props: {
      modelValue: 'day',
      options: [
        {
          label: (option, checked) => `${option.value}-${checked}`,
          value: 'day',
        },
        {
          label: (option, checked) => `${option.value}-${checked}`,
          value: 'week',
        },
      ],
      'onUpdate:modelValue': (value) => wrapper.setProps({ modelValue: value }),
    },
  })

  await delay(16)

  const buttons = wrapper.findAll('.var-segmented-button')
  expect(buttons[0].text()).toContain('day-true')
  expect(buttons[1].text()).toContain('week-false')

  await buttons[1].trigger('click')
  await delay(16)

  expect(buttons[1].text()).toContain('week-true')

  wrapper.unmount()
})

test('keeps child providers and instances ordered after options change', async () => {
  const values = ['day', 'week', 'month', 'year']
  const options = [
    { label: 'Day', value: 'day' },
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
    { label: 'Year', value: 'year' },
  ]
  const TestSegmentedButtons = {
    components: {
      [VarSegmentedButton.name]: VarSegmentedButton,
    },
    props: {
      options: {
        type: Array,
        default: () => [],
      },
    },
    setup(_, { expose }) {
      const { childProviders, childInstances, bindChildren } = useChildren(SEGMENTED_BUTTONS_BIND_BUTTON_KEY)

      bindChildren({
        multiple: computed(() => false),
        checkmark: computed(() => true),
        size: computed(() => 'normal'),
        onClick: vi.fn(),
      })

      expose({
        getProviderOrder: () => childProviders.map((provider) => values.find((value) => provider.sync(value))),
        getInstanceOrder: () => childInstances.map(({ props }) => props.checkedValue),
      })
    },
    template: `
      <div>
        <var-segmented-button
          v-for="option in options"
          :key="option.value"
          :checked-value="option.value"
        >
          {{ option.label }}
        </var-segmented-button>
      </div>
    `,
  }
  const wrapper = mount(TestSegmentedButtons, {
    props: {
      options: options.slice(0, 3),
    },
  })

  await delay(16)

  expect(wrapper.findAll('.var-segmented-button').map((button) => button.text())).toStrictEqual([
    'Day',
    'Week',
    'Month',
  ])
  expect(wrapper.vm.getProviderOrder()).toStrictEqual(['day', 'week', 'month'])
  expect(wrapper.vm.getInstanceOrder()).toStrictEqual(['day', 'week', 'month'])

  await wrapper.setProps({
    options: [options[2], options[0], options[1]],
  })

  expect(wrapper.findAll('.var-segmented-button').map((button) => button.text())).toStrictEqual([
    'Month',
    'Day',
    'Week',
  ])
  expect(wrapper.vm.getProviderOrder()).toStrictEqual(['month', 'day', 'week'])
  expect(wrapper.vm.getInstanceOrder()).toStrictEqual(['month', 'day', 'week'])

  await wrapper.setProps({
    options: [options[2], options[3], options[0], options[1]],
  })
  await delay(16)

  expect(wrapper.findAll('.var-segmented-button').map((button) => button.text())).toStrictEqual([
    'Month',
    'Year',
    'Day',
    'Week',
  ])
  expect(wrapper.vm.getProviderOrder()).toStrictEqual(['month', 'year', 'day', 'week'])
  expect(wrapper.vm.getInstanceOrder()).toStrictEqual(['month', 'year', 'day', 'week'])

  await wrapper.setProps({
    options: [options[3], options[1]],
  })
  await delay(16)

  expect(wrapper.findAll('.var-segmented-button').map((button) => button.text())).toStrictEqual(['Year', 'Week'])
  expect(wrapper.vm.getProviderOrder()).toStrictEqual(['year', 'week'])
  expect(wrapper.vm.getInstanceOrder()).toStrictEqual(['year', 'week'])

  wrapper.unmount()
})

test('button click event', async () => {
  const onClick = vi.fn()
  const wrapper = mount({
    components: {
      [VarSegmentedButtons.name]: VarSegmentedButtons,
      [VarSegmentedButton.name]: VarSegmentedButton,
    },
    methods: {
      onClick,
    },
    template: `
      <var-segmented-buttons model-value="day">
        <var-segmented-button checked-value="day">Day</var-segmented-button>
        <var-segmented-button checked-value="week" @click="onClick">Week</var-segmented-button>
      </var-segmented-buttons>
    `,
  })

  await wrapper.findAll('.var-segmented-button')[1].trigger('click')
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onClick.mock.calls[0][0]).toBeInstanceOf(Event)

  wrapper.unmount()
})

test('disabled button does not emit click or change', async () => {
  const onClick = vi.fn()
  const onChange = vi.fn()
  const wrapper = mount({
    components: {
      [VarSegmentedButtons.name]: VarSegmentedButtons,
      [VarSegmentedButton.name]: VarSegmentedButton,
    },
    methods: {
      onClick,
      onChange,
    },
    template: `
      <var-segmented-buttons model-value="day" @change="onChange">
        <var-segmented-button checked-value="day">Day</var-segmented-button>
        <var-segmented-button checked-value="week" disabled @click="onClick">Week</var-segmented-button>
      </var-segmented-buttons>
    `,
  })

  const button = wrapper.findAll('.var-segmented-button')[1]

  expect(button.attributes('disabled')).toBeDefined()
  expect(button.attributes('aria-disabled')).toBe('true')
  expect(button.classes()).toContain('var-segmented-button--disabled')

  await button.trigger('click')
  expect(onClick).toHaveBeenCalledTimes(0)
  expect(onChange).toHaveBeenCalledTimes(0)

  wrapper.unmount()
})

test('form disabled disables segmented button', async () => {
  const onClick = vi.fn()
  const onChange = vi.fn()
  const wrapper = mount({
    components: {
      [VarForm.name]: VarForm,
      [VarSegmentedButtons.name]: VarSegmentedButtons,
      [VarSegmentedButton.name]: VarSegmentedButton,
    },
    methods: {
      onClick,
      onChange,
    },
    template: `
      <var-form disabled>
        <var-segmented-buttons model-value="day" @change="onChange">
          <var-segmented-button checked-value="day">Day</var-segmented-button>
          <var-segmented-button checked-value="week" @click="onClick">Week</var-segmented-button>
        </var-segmented-buttons>
      </var-form>
    `,
  })

  const buttons = wrapper.findAll('.var-segmented-button')

  expect(buttons[0].attributes('disabled')).toBeDefined()
  expect(buttons[0].attributes('aria-disabled')).toBe('true')
  expect(buttons[0].classes()).toContain('var-segmented-button--disabled')
  expect(buttons[1].attributes('disabled')).toBeDefined()

  await buttons[1].trigger('click')
  expect(onClick).toHaveBeenCalledTimes(0)
  expect(onChange).toHaveBeenCalledTimes(0)

  wrapper.unmount()
})

test('readonly button click event without change', async () => {
  const onClick = vi.fn()
  const onChange = vi.fn()
  const onUpdateModelValue = vi.fn()
  const wrapper = mount({
    components: {
      [VarSegmentedButtons.name]: VarSegmentedButtons,
      [VarSegmentedButton.name]: VarSegmentedButton,
    },
    methods: {
      onClick,
      onChange,
      onUpdateModelValue,
    },
    template: `
      <var-segmented-buttons model-value="day" @change="onChange" @update:model-value="onUpdateModelValue">
        <var-segmented-button checked-value="day">Day</var-segmented-button>
        <var-segmented-button checked-value="week" readonly @click="onClick">Week</var-segmented-button>
      </var-segmented-buttons>
    `,
  })

  await wrapper.findAll('.var-segmented-button')[1].trigger('click')
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalledTimes(0)
  expect(onUpdateModelValue).toHaveBeenCalledTimes(0)

  wrapper.unmount()
})

test('form readonly prevents segmented button value change', async () => {
  const onClick = vi.fn()
  const onChange = vi.fn()
  const onUpdateModelValue = vi.fn()
  const wrapper = mount({
    components: {
      [VarForm.name]: VarForm,
      [VarSegmentedButtons.name]: VarSegmentedButtons,
      [VarSegmentedButton.name]: VarSegmentedButton,
    },
    methods: {
      onClick,
      onChange,
      onUpdateModelValue,
    },
    template: `
      <var-form readonly>
        <var-segmented-buttons model-value="day" @change="onChange" @update:model-value="onUpdateModelValue">
          <var-segmented-button checked-value="day">Day</var-segmented-button>
          <var-segmented-button checked-value="week" @click="onClick">Week</var-segmented-button>
        </var-segmented-buttons>
      </var-form>
    `,
  })

  const button = wrapper.findAll('.var-segmented-button')[1]

  expect(button.attributes('disabled')).toBeUndefined()
  expect(button.attributes('aria-disabled')).toBe('true')

  await button.trigger('click')
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalledTimes(0)
  expect(onUpdateModelValue).toHaveBeenCalledTimes(0)

  wrapper.unmount()
})

test('form reset clears segmented buttons without emitting change', async () => {
  const onChange = vi.fn()
  const wrapper = mount({
    components: {
      [VarForm.name]: VarForm,
      [VarSegmentedButtons.name]: VarSegmentedButtons,
      [VarSegmentedButton.name]: VarSegmentedButton,
    },
    data: () => ({
      value: 'day',
    }),
    methods: {
      onChange,
      onUpdateModelValue(value) {
        this.value = value
      },
    },
    template: `
      <var-form ref="form">
        <var-segmented-buttons
          v-model="value"
          :rules="[(v) => !!v || 'Please choose one option']"
          @change="onChange"
          @update:model-value="onUpdateModelValue"
        >
          <var-segmented-button checked-value="day">Day</var-segmented-button>
          <var-segmented-button checked-value="week">Week</var-segmented-button>
        </var-segmented-buttons>
      </var-form>
    `,
  })

  const { form } = wrapper.vm.$refs

  await form.validate()
  await delay(16)

  form.reset()
  await delay(16)

  expect(wrapper.vm.value).toBeUndefined()
  expect(onChange).toHaveBeenCalledTimes(0)
  expect(wrapper.find('.var-form-details__error-message').exists()).toBeFalsy()

  wrapper.unmount()
})

test('segmented button checkmark slot', async () => {
  const wrapper = mount(VarSegmentedButtons, {
    props: {
      modelValue: 'day',
    },
    slots: {
      default: `
        <var-segmented-button checked-value="day">
          <template #checkmark="{ checked }">Selected-{{ checked }}</template>
          <template #default="{ checked }">Day-{{ checked }}</template>
        </var-segmented-button>
      `,
    },
    global: {
      components: {
        [VarSegmentedButton.name]: VarSegmentedButton,
      },
    },
  })

  await delay(16)

  expect(wrapper.text()).toContain('Selected-true')
  expect(wrapper.text()).toContain('Day-true')

  wrapper.unmount()
})

test('segmented button checkmark slot is not rendered when group checkmark is disabled', async () => {
  const wrapper = mount(VarSegmentedButtons, {
    props: {
      modelValue: 'day',
      checkmark: false,
    },
    slots: {
      default: `
        <var-segmented-button checked-value="day">
          <template #checkmark>Selected</template>
          Day
        </var-segmented-button>
      `,
    },
    global: {
      components: {
        [VarSegmentedButton.name]: VarSegmentedButton,
      },
    },
  })

  await delay(16)

  expect(wrapper.text()).not.toContain('Selected')

  wrapper.unmount()
})

test('segmented button default slot checked data updates with selection state', async () => {
  const wrapper = mount(VarSegmentedButtons, {
    props: {
      modelValue: 'day',
      'onUpdate:modelValue': (value) => wrapper.setProps({ modelValue: value }),
    },
    slots: {
      default: `
        <var-segmented-button checked-value="day">
          <template #default="{ checked }">Day-{{ checked }}</template>
        </var-segmented-button>
        <var-segmented-button checked-value="week">
          <template #default="{ checked }">Week-{{ checked }}</template>
        </var-segmented-button>
      `,
    },
    global: {
      components: {
        [VarSegmentedButton.name]: VarSegmentedButton,
      },
    },
  })

  await delay(16)

  let buttons = wrapper.findAll('.var-segmented-button')
  expect(buttons[0].text()).toContain('Day-true')
  expect(buttons[1].text()).toContain('Week-false')

  await buttons[1].trigger('click')
  await delay(16)

  buttons = wrapper.findAll('.var-segmented-button')
  expect(buttons[0].text()).toContain('Day-false')
  expect(buttons[1].text()).toContain('Week-true')

  wrapper.unmount()
})

test('checkmark prop', async () => {
  const wrapper = mount(VarSegmentedButtons, {
    props: {
      modelValue: 'day',
      checkmark: false,
      'onUpdate:modelValue': (value) => wrapper.setProps({ modelValue: value }),
    },
    slots: {
      default: `
        <var-segmented-button checked-value="day">Day</var-segmented-button>
        <var-segmented-button checked-value="week">Week</var-segmented-button>
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

  await wrapper.setProps({ checkmark: true })
  await buttons[1].trigger('click')
  await delay(16)
  expect(buttons[1].find('.var-icon').exists()).toBeTruthy()

  wrapper.unmount()
})

test('options api ripple prop is forwarded to segmented button', async () => {
  const wrapper = mount(VarSegmentedButtons, {
    props: {
      modelValue: 'day',
      options: [
        { label: 'Day', value: 'day', ripple: false },
        { label: 'Week', value: 'week', ripple: true },
      ],
    },
  })

  await delay(16)

  const buttons = wrapper.findAllComponents(VarSegmentedButton)
  expect(buttons[0].props('ripple')).toBe(false)
  expect(buttons[1].props('ripple')).toBe(true)

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

test('keyboard enter selects focused button', async () => {
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
      </var-segmented-buttons>
    `,
  })

  const buttons = wrapper.findAll('.var-segmented-button')

  await buttons[1].trigger('focus')
  await triggerKeyboard(window, 'keydown', { key: 'Enter' })

  expect(wrapper.vm.value).toBe('card')

  wrapper.unmount()
})

test('keyboard navigation skips disabled buttons', async () => {
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
        <var-segmented-button checked-value="card" disabled>Card</var-segmented-button>
        <var-segmented-button checked-value="table">Table</var-segmented-button>
      </var-segmented-buttons>
    `,
  })

  const buttons = wrapper.findAll('.var-segmented-button')

  await buttons[0].trigger('focus')
  await triggerKeyboard(window, 'keydown', { key: 'ArrowRight' })

  expect(wrapper.vm.value).toBe('table')

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
  await buttons[0].trigger('blur')
  await buttons[1].trigger('focus')
  await nextTick()
  expect(wrapper.vm.value).toStrictEqual([])

  await triggerKeyboard(window, 'keyup', { key: ' ' })
  expect(wrapper.vm.value).toStrictEqual(['italic'])

  wrapper.unmount()
})

test('disabled button', async () => {
  const onChange = vi.fn()
  const wrapper = mount(VarSegmentedButtons, {
    props: {
      modelValue: 'list',
      onChange,
    },
    slots: {
      default: `
        <var-segmented-button checked-value="list">List</var-segmented-button>
        <var-segmented-button checked-value="card" disabled>Card</var-segmented-button>
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

test('group validation methods', async () => {
  const wrapper = mount({
    components: {
      [VarSegmentedButtons.name]: VarSegmentedButtons,
      [VarSegmentedButton.name]: VarSegmentedButton,
    },
    data: () => ({
      value: 'card',
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

  expect(await segmentedButtons.validate()).toBe(false)
  await delay(16)
  expect(wrapper.find('.var-form-details__error-message').text()).toBe('You must choose list')

  segmentedButtons.resetValidation()
  await delay(16)
  expect(wrapper.find('.var-form-details__error-message').exists()).toBeFalsy()

  segmentedButtons.reset()
  await delay(16)
  expect(wrapper.vm.value).toBeUndefined()

  wrapper.unmount()
})

test('multiple group reset clears value to empty array', async () => {
  const wrapper = mount({
    components: {
      [VarSegmentedButtons.name]: VarSegmentedButtons,
      [VarSegmentedButton.name]: VarSegmentedButton,
    },
    data: () => ({
      value: ['bold'],
    }),
    template: `
      <var-segmented-buttons ref="segmentedButtons" v-model="value" multiple>
        <var-segmented-button checked-value="bold">Bold</var-segmented-button>
        <var-segmented-button checked-value="italic">Italic</var-segmented-button>
      </var-segmented-buttons>
    `,
  })

  wrapper.vm.$refs.segmentedButtons.reset()
  await delay(16)

  expect(wrapper.vm.value).toStrictEqual([])

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
