import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vite-plus/test'
import { createApp, defineComponent, ref } from 'vue'
import DateInput from '..'
import DatePicker from '../../date-picker/DatePicker'
import VarForm from '../../form/Form'
import { delay } from '../../utils/test'
import VarDateInput from '../DateInput'

async function triggerInput(wrapper, value) {
  const input = wrapper.find('input')
  input.element.value = value
  await input.trigger('input')
}

test('dateInput plugin', () => {
  const app = createApp({}).use(DateInput)
  expect(app.component(DateInput.name)).toBeTruthy()
})

describe('test dateInput input behavior', () => {
  test('dateInput syncs model value to display value', async () => {
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021-04-08',
      },
    })

    expect(wrapper.find('input').element.value).toBe('2021-04-08')
    await wrapper.setProps({ modelValue: '2021-04-09' })
    expect(wrapper.find('input').element.value).toBe('2021-04-09')

    wrapper.unmount()
  })

  test('dateInput updates model value when input is valid', async () => {
    const onUpdateModelValue = vi.fn()
    const onChange = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '',
        'onUpdate:modelValue': onUpdateModelValue,
        onChange,
      },
    })

    await triggerInput(wrapper, '2021-04-08')
    expect(wrapper.findComponent(DatePicker).props('modelValue')).toBe('2021-04-08')
    expect(onUpdateModelValue).lastCalledWith('2021-04-08')
    expect(onChange).lastCalledWith('2021-04-08')

    wrapper.unmount()
  })

  test('dateInput does not emit change when input model value is unchanged', async () => {
    const onUpdateModelValue = vi.fn()
    const onChange = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021-04-08',
        'onUpdate:modelValue': onUpdateModelValue,
        onChange,
      },
    })

    await triggerInput(wrapper, '2021-04-08')

    expect(wrapper.findComponent(DatePicker).props('modelValue')).toBe('2021-04-08')
    expect(onUpdateModelValue).not.toHaveBeenCalled()
    expect(onChange).not.toHaveBeenCalled()

    wrapper.unmount()
  })

  test('dateInput keeps unparseable input and does not update model value', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021-04-08',
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    await triggerInput(wrapper, 'hello')

    expect(wrapper.find('input').element.value).toBe('hello')
    expect(wrapper.findComponent(DatePicker).props('modelValue')).toBe('2021-04-08')
    expect(onUpdateModelValue).not.toHaveBeenCalled()

    wrapper.unmount()
  })

  test('dateInput keeps invalid format input and does not update model value', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2024-02-03',
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    await triggerInput(wrapper, '2024-02-4')

    expect(wrapper.find('input').element.value).toBe('2024-02-4')
    expect(wrapper.findComponent(DatePicker).props('modelValue')).toBe('2024-02-03')
    expect(onUpdateModelValue).not.toHaveBeenCalled()

    wrapper.unmount()
  })

  test('dateInput keeps invalid format typing text when parent controls model value', async () => {
    const wrapper = mount(
      defineComponent({
        components: {
          VarDateInput,
        },
        setup() {
          const value = ref('')

          return {
            value,
          }
        },
        template: '<var-date-input v-model="value" />',
      }),
    )

    await triggerInput(wrapper, '2020-12-2')

    expect(wrapper.find('input').element.value).toBe('2020-12-2')
    expect(wrapper.findComponent(DatePicker).props('modelValue')).toBe(undefined)

    wrapper.unmount()
  })

  test('dateInput supports custom display format', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021/04/08',
        format: 'YYYY/MM/DD',
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    expect(wrapper.find('input').element.value).toBe('2021/04/08')
    await triggerInput(wrapper, '2021/04/09')
    expect(wrapper.findComponent(DatePicker).props('modelValue')).toBe('2021-04-09')
    expect(onUpdateModelValue).lastCalledWith('2021/04/09')

    wrapper.unmount()
  })

  test('dateInput falls back to default format when format is empty', () => {
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021-04-08',
        format: '',
      },
    })

    expect(wrapper.find('input').element.value).toBe('2021-04-08')
    expect(wrapper.findComponent(DatePicker).props('modelValue')).toBe('2021-04-08')

    wrapper.unmount()
  })

  test('dateInput supports timestamp value format', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: 1617811200000,
        valueFormat: 'timestamp',
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    expect(wrapper.find('input').element.value).toBe('2021-04-08')
    await triggerInput(wrapper, '2021-04-09')

    expect(onUpdateModelValue.mock.calls.at(-1)[0]).toBeTypeOf('number')

    wrapper.unmount()
  })

  test('dateInput supports custom value format', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021/04/08',
        valueFormat: 'YYYY/MM/DD',
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    expect(wrapper.find('input').element.value).toBe('2021-04-08')
    await triggerInput(wrapper, '2021-04-09')

    expect(onUpdateModelValue).lastCalledWith('2021/04/09')

    wrapper.unmount()
  })

  test('dateInput keeps typing text when focused and parent syncs custom value format', async () => {
    const wrapper = mount(
      defineComponent({
        components: {
          VarDateInput,
        },
        setup() {
          const value = ref('')

          return {
            value,
          }
        },
        template: '<var-date-input v-model="value" value-format="YYYY/MM/DD" />',
      }),
    )

    await wrapper.find('input').trigger('focus')
    await triggerInput(wrapper, '2021-04-09')

    expect(wrapper.find('input').element.value).toBe('2021-04-09')
    expect(wrapper.findComponent(DatePicker).props('modelValue')).toBe('2021-04-09')

    await wrapper.find('input').trigger('change')
    expect(wrapper.find('input').element.value).toBe('2021-04-09')

    wrapper.unmount()
  })
})

describe('test dateInput picker behavior', () => {
  test('dateInput does not open picker on focus', async () => {
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021-04-08',
      },
    })

    await wrapper.find('input').trigger('focus')
    await delay(0)

    expect(wrapper.vm.isFocusing).toBe(true)
    expect(wrapper.vm.showMenu).toBe(false)

    wrapper.unmount()
  })

  test('dateInput opens picker on click', async () => {
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021-04-08',
      },
    })

    await wrapper.find('input').trigger('click')
    await delay(0)

    expect(wrapper.vm.showMenu).toBe(true)

    wrapper.unmount()
  })

  test('dateInput opens picker on enter', async () => {
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021-04-08',
      },
    })

    await wrapper.find('input').trigger('keydown', { key: 'Enter' })
    await delay(0)

    expect(wrapper.vm.showMenu).toBe(true)

    wrapper.unmount()
  })

  test('dateInput does not open picker when readonly', async () => {
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021-04-08',
        readonly: true,
      },
    })

    await wrapper.find('input').trigger('click')
    await delay(0)
    expect(wrapper.vm.showMenu).toBe(false)

    await wrapper.find('input').trigger('keydown', { key: 'Enter' })
    await delay(0)
    expect(wrapper.vm.showMenu).toBe(false)

    wrapper.unmount()
  })

  test('dateInput closes picker on blur', async () => {
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021-04-08',
      },
    })

    await wrapper.find('input').trigger('click')
    await delay(0)
    expect(wrapper.vm.showMenu).toBe(true)

    await wrapper.find('input').trigger('blur')
    expect(wrapper.vm.showMenu).toBe(false)

    wrapper.unmount()
  })

  test('dateInput writes back picker selection and closes in single mode', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021-04-08',
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    await wrapper.find('input').trigger('click')
    wrapper.findComponent(DatePicker).vm.$emit('change', '2021-04-09')
    await delay(0)

    expect(wrapper.find('input').element.value).toBe('2021-04-09')
    expect(onUpdateModelValue).lastCalledWith('2021-04-09')
    expect(wrapper.vm.showMenu).toBe(false)

    wrapper.unmount()
  })

  test('dateInput ignores picker selection when readonly', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021-04-08',
        readonly: true,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    wrapper.findComponent(DatePicker).vm.$emit('change', '2021-04-09')
    await delay(0)

    expect(wrapper.find('input').element.value).toBe('2021-04-08')
    expect(onUpdateModelValue).not.toHaveBeenCalled()

    wrapper.unmount()
  })

  test('dateInput keeps picker open in multiple mode', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: ['2021-04-08'],
        multiple: true,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    await wrapper.find('input').trigger('click')
    wrapper.findComponent(DatePicker).vm.$emit('change', ['2021-04-08', '2021-04-09'])
    await delay(0)

    expect(wrapper.find('input').element.value).toBe('2021-04-08, 2021-04-09')
    expect(onUpdateModelValue).lastCalledWith(['2021-04-08', '2021-04-09'])
    expect(wrapper.vm.showMenu).toBe(true)

    wrapper.unmount()
  })

  test('dateInput syncs display value when separator changes', async () => {
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: ['2021-04-08', '2021-04-09'],
        multiple: true,
      },
    })

    expect(wrapper.find('input').element.value).toBe('2021-04-08, 2021-04-09')

    await wrapper.setProps({ separator: ' / ' })
    expect(wrapper.find('input').element.value).toBe('2021-04-08 / 2021-04-09')

    wrapper.unmount()
  })

  test('dateInput closes picker after range end selection', async () => {
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: [],
        range: true,
      },
    })

    await wrapper.find('input').trigger('click')
    wrapper.findComponent(DatePicker).vm.$emit('change', ['2021-04-08', '2021-04-08'])
    await delay(0)
    expect(wrapper.vm.showMenu).toBe(true)

    wrapper.findComponent(DatePicker).vm.$emit('change', ['2021-04-08', '2021-04-10'])
    await delay(0)
    expect(wrapper.vm.showMenu).toBe(false)
    expect(wrapper.find('input').element.value).toBe('2021-04-08 ~ 2021-04-10')

    wrapper.unmount()
  })

  test('dateInput resets range selecting state when picker closes early', async () => {
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: [],
        range: true,
      },
    })

    await wrapper.find('input').trigger('click')
    wrapper.findComponent(DatePicker).vm.$emit('change', ['2021-04-08', '2021-04-08'])
    await delay(0)
    expect(wrapper.vm.showMenu).toBe(true)

    await wrapper.find('input').trigger('blur')
    expect(wrapper.vm.showMenu).toBe(false)

    await wrapper.find('input').trigger('click')
    wrapper.findComponent(DatePicker).vm.$emit('change', ['2021-04-09', '2021-04-09'])
    await delay(0)

    expect(wrapper.vm.showMenu).toBe(true)

    wrapper.unmount()
  })
})

describe('test dateInput form behavior', () => {
  test('dateInput does not open picker when form is disabled or readonly', async () => {
    const wrapper = mount({
      components: {
        VarDateInput,
        VarForm,
      },
      data: () => ({
        disabled: true,
        readonly: false,
        value: '2021-04-08',
      }),
      template: `
        <var-form :disabled="disabled" :readonly="readonly">
          <var-date-input v-model="value" />
        </var-form>
      `,
    })

    await wrapper.find('input').trigger('click')
    await delay(0)
    expect(wrapper.findComponent(VarDateInput).vm.showMenu).toBe(false)

    await wrapper.setData({ disabled: false, readonly: true })
    await wrapper.find('input').trigger('click')
    await delay(0)
    expect(wrapper.findComponent(VarDateInput).vm.showMenu).toBe(false)

    wrapper.unmount()
  })

  test('dateInput works as a form item', async () => {
    const wrapper = mount({
      components: {
        VarDateInput,
        VarForm,
      },
      data: () => ({
        value: '',
      }),
      template: `
        <var-form ref="form">
          <var-date-input v-model="value" :rules="[(v) => !!v || 'Please select date']" />
        </var-form>
      `,
    })

    await delay(0)

    expect(await wrapper.vm.$refs.form.validate()).toBe(false)
    await delay(0)
    expect(wrapper.find('.var-form-details__error-message').text()).toBe('Please select date')

    await wrapper.setData({ value: '2021-04-08' })
    expect(await wrapper.vm.$refs.form.validate()).toBe(true)

    wrapper.unmount()
  })
})
