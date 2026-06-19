import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vite-plus/test'
import { createApp, defineComponent, h, ref } from 'vue'
import DateInput from '..'
import DatePicker from '../../date-picker/DatePicker'
import VarForm from '../../form/Form'
import VarMenu from '../../menu/Menu'
import { delay } from '../../utils/test'
import VarDateInput from '../DateInput'
import TimeSelect from '../TimeSelect.vue'

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

  test('dateInput restores model display value on change when input format is invalid', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021-04-08',
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    await wrapper.find('input').trigger('focus')
    await triggerInput(wrapper, '2021-04-15222')
    await wrapper.find('input').trigger('change')

    expect(wrapper.find('input').element.value).toBe('2021-04-08')
    expect(wrapper.vm.isFocusing).toBe(true)
    expect(wrapper.findComponent(DatePicker).props('modelValue')).toBe('2021-04-08')
    expect(onUpdateModelValue).not.toHaveBeenCalled()

    wrapper.unmount()
  })

  test('dateInput keeps empty display value on change after manual deletion', async () => {
    const wrapper = mount(
      defineComponent({
        components: {
          VarDateInput,
        },
        setup() {
          const value = ref('2021-04-08')

          return {
            value,
          }
        },
        template: '<var-date-input v-model="value" />',
      }),
    )

    await wrapper.find('input').trigger('focus')
    await triggerInput(wrapper, '')
    await wrapper.find('input').trigger('change')

    expect(wrapper.vm.value).toBe(undefined)
    expect(wrapper.find('input').element.value).toBe('')
    expect(wrapper.findComponent(DatePicker).props('modelValue')).toBe(undefined)

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

  test('dateInput does not treat watch dependencies as forced display sync', async () => {
    const wrapper = mount(
      defineComponent({
        components: {
          VarDateInput,
        },
        setup() {
          const value = ref('')
          const separator = ref(', ')

          return {
            value,
            separator,
          }
        },
        template: '<var-date-input v-model="value" :separator="separator" multiple />',
      }),
    )

    await wrapper.find('input').trigger('focus')
    await triggerInput(wrapper, '2021-04-15222')
    wrapper.vm.separator = ' / '
    await delay(0)

    expect(wrapper.find('input').element.value).toBe('2021-04-15222')
    expect(wrapper.findComponent(DatePicker).props('modelValue')).toEqual([])

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

  test('dateInput replaces calendar icon with append icon slot', () => {
    const wrapper = mount(VarDateInput, {
      slots: {
        'append-icon': () => h('span', { class: 'custom-append-icon' }),
      },
    })

    expect(wrapper.find('.var-date-input__calendar-icon').exists()).toBe(false)
    expect(wrapper.find('.custom-append-icon').exists()).toBe(true)

    wrapper.unmount()
  })

  test('dateInput supports timestamp value format', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: new Date(2021, 3, 8).getTime(),
        valueFormat: 'timestamp',
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    expect(wrapper.find('input').element.value).toBe('2021-04-08')
    await triggerInput(wrapper, '2021-04-09')

    expect(onUpdateModelValue.mock.calls.at(-1)[0]).toBeTypeOf('number')

    wrapper.unmount()
  })

  test('dateInput supports date value format', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: new Date(2021, 3, 8),
        valueFormat: 'date',
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    expect(wrapper.find('input').element.value).toBe('2021-04-08')
    await triggerInput(wrapper, '2021-04-09')

    const emittedValue = onUpdateModelValue.mock.calls.at(-1)[0]
    expect(emittedValue).toBeInstanceOf(Date)
    expect(emittedValue.getFullYear()).toBe(2021)
    expect(emittedValue.getMonth()).toBe(3)
    expect(emittedValue.getDate()).toBe(9)

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

  test('dateInput supports month type', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        type: 'month',
        modelValue: '2021-04',
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    expect(wrapper.find('input').element.value).toBe('2021-04')
    await triggerInput(wrapper, '2021-05')

    expect(wrapper.findComponent(DatePicker).props('modelValue')).toBe('2021-05')
    expect(onUpdateModelValue).lastCalledWith('2021-05')

    wrapper.unmount()
  })

  test('dateInput supports year type', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        type: 'year',
        modelValue: '2021',
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    expect(wrapper.find('input').element.value).toBe('2021')
    await triggerInput(wrapper, '2022')

    expect(wrapper.findComponent(DatePicker).props('modelValue')).toBe('2022')
    expect(onUpdateModelValue).lastCalledWith('2022')

    wrapper.unmount()
  })

  test('dateInput syncs valid multiple input to picker and model value', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: [],
        multiple: true,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    await triggerInput(wrapper, '2021-04-08, 2021-04-09')

    expect(wrapper.findComponent(DatePicker).props('modelValue')).toEqual(['2021-04-08', '2021-04-09'])
    expect(onUpdateModelValue).lastCalledWith(['2021-04-08', '2021-04-09'])

    wrapper.unmount()
  })

  test('dateInput syncs valid range input to picker and model value', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: [],
        range: true,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    await triggerInput(wrapper, '2021-04-08 ~ 2021-04-10')

    expect(wrapper.findComponent(DatePicker).props('modelValue')).toEqual(['2021-04-08', '2021-04-10'])
    expect(onUpdateModelValue).lastCalledWith(['2021-04-08', '2021-04-10'])

    wrapper.unmount()
  })

  test('dateInput handles mismatched model value shape safely', async () => {
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021-04-08',
        multiple: true,
      },
    })

    expect(wrapper.find('input').element.value).toBe('')
    expect(wrapper.findComponent(DatePicker).props('modelValue')).toEqual([])

    await wrapper.setProps({
      modelValue: ['2021-04-08'],
      multiple: false,
    })

    expect(wrapper.find('input').element.value).toBe('')
    expect(wrapper.findComponent(DatePicker).props('modelValue')).toBe(undefined)

    wrapper.unmount()
  })

  test('dateInput does not sync incomplete range input to picker and model value', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: ['2021-04-08', '2021-04-10'],
        range: true,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    await triggerInput(wrapper, '2021-04-09')

    expect(wrapper.find('input').element.value).toBe('2021-04-09')
    expect(wrapper.findComponent(DatePicker).props('modelValue')).toEqual(['2021-04-08', '2021-04-10'])
    expect(onUpdateModelValue).not.toHaveBeenCalled()

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

  test('dateInput opens picker when clicking calendar icon', async () => {
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021-04-08',
      },
    })

    await wrapper.find('.var-date-input__calendar-icon').trigger('click')
    await delay(0)

    expect(wrapper.vm.showMenu).toBe(true)

    wrapper.unmount()
  })

  test('dateInput does not open picker when clicking clear icon', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021-04-08',
        clearable: true,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    await wrapper.find('.var-date-input__clear-icon').trigger('click')
    await delay(0)

    expect(wrapper.vm.showMenu).toBe(false)
    expect(onUpdateModelValue).lastCalledWith(undefined)

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

  test('dateInput keeps picker open when clicking disabled date', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021-04-08',
        allowedDates: (val) => val !== '2021-04-9' && val !== '2021-04-09',
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    await wrapper.find('input').trigger('click')
    await delay(0)

    await wrapper.findComponent(DatePicker).trigger('mousedown')
    wrapper.findComponent(DatePicker).vm.selectDayFromPanel(9)
    await delay(0)

    expect(onUpdateModelValue).not.toHaveBeenCalled()
    expect(wrapper.vm.showMenu).toBe(true)

    wrapper.unmount()
  })

  test('dateInput passes constraints to picker', () => {
    const allowedDates = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        min: '2021-04-01',
        max: '2021-04-30',
        firstDayOfWeek: 1,
        allowedDates,
      },
    })

    const panelProps = wrapper.findComponent(DatePicker).props()
    expect(panelProps.min).toBe('2021-04-01')
    expect(panelProps.max).toBe('2021-04-30')
    expect(panelProps.firstDayOfWeek).toBe(1)
    expect(panelProps.allowedDates).toBe(allowedDates)

    wrapper.unmount()
  })

  test('dateInput sets menu margin class by input variant', async () => {
    const wrapper = mount(VarDateInput, {
      props: {
        variant: 'standard',
      },
    })

    expect(wrapper.findComponent(VarMenu).props('popoverClass')).toContain('var-date-input--menu')
    expect(wrapper.findComponent(VarMenu).props('popoverClass')).toContain('var-date-input--standard-menu-margin')
    expect(wrapper.findComponent(VarMenu).props('defaultStyle')).toBe(true)
    expect(wrapper.findComponent(VarMenu).props('elevation')).toBe(true)

    await wrapper.setProps({ variant: 'filled' })
    expect(wrapper.findComponent(VarMenu).props('popoverClass')).toContain('var-date-input--menu')
    expect(wrapper.findComponent(VarMenu).props('popoverClass')).toContain('var-date-input--filled-menu-margin')

    await wrapper.setProps({ variant: 'outlined' })
    expect(wrapper.findComponent(VarMenu).props('popoverClass')).toBe('var-date-input--menu')

    wrapper.unmount()
  })

  test('dateInput clears model value and picker value', async () => {
    const onUpdateModelValue = vi.fn()
    const onClear = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021-04-08',
        clearable: true,
        'onUpdate:modelValue': onUpdateModelValue,
        onClear,
      },
    })

    wrapper.vm.handleClear()
    await delay(0)

    expect(wrapper.find('input').element.value).toBe('')
    expect(wrapper.findComponent(DatePicker).props('modelValue')).toBe(undefined)
    expect(onUpdateModelValue).lastCalledWith(undefined)
    expect(onClear).lastCalledWith('')

    wrapper.unmount()
  })

  test('dateInput does not validate again when form resets', async () => {
    const wrapper = mount(
      defineComponent({
        components: {
          VarForm,
          VarDateInput,
        },
        setup() {
          const value = ref('')
          const form = ref(null)

          return {
            value,
            form,
          }
        },
        template: `
          <var-form ref="form">
            <var-date-input v-model="value" :rules="[(v) => !!v || 'required']" />
          </var-form>
        `,
      }),
    )

    await delay(0)
    await wrapper.vm.form.validate()
    await delay(10)
    expect(wrapper.find('.var-form-details__error-message').text()).toBe('required')

    wrapper.vm.form.reset()
    await delay(10)
    expect(wrapper.find('.var-form-details__error-message').exists()).toBe(false)

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

  test('dateInput keeps picker open after range selection', async () => {
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
    expect(wrapper.vm.showMenu).toBe(true)
    expect(wrapper.find('input').element.value).toBe('2021-04-08 ~ 2021-04-10')

    wrapper.unmount()
  })

  test('dateInput resets uncommitted range selection when picker reopens', async () => {
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: ['2021-04-08', '2021-04-10'],
        range: true,
      },
    })

    await wrapper.find('input').trigger('click')
    wrapper.findComponent(DatePicker).vm.selectDayFromPanel(9)
    await wrapper.find('input').trigger('blur')
    await wrapper.find('input').trigger('click')
    await delay(0)

    expect(wrapper.find('input').element.value).toBe('2021-04-08 ~ 2021-04-10')
    expect(wrapper.findComponent(DatePicker).vm.rangeSelecting).toBe(false)
    expect(wrapper.findComponent(DatePicker).vm.selectionState.selectedRangeDays).toEqual(['2021-04-8', '2021-04-10'])

    await wrapper.setProps({
      type: 'month',
      modelValue: ['2021-04', '2021-06'],
    })
    await wrapper.find('input').trigger('click')
    wrapper.findComponent(DatePicker).vm.selectMonthFromPanel('05')
    await wrapper.find('input').trigger('blur')
    await wrapper.find('input').trigger('click')
    await delay(0)

    expect(wrapper.find('input').element.value).toBe('2021-04 ~ 2021-06')
    expect(wrapper.findComponent(DatePicker).vm.rangeSelecting).toBe(false)
    expect(wrapper.findComponent(DatePicker).vm.selectionState.selectedRangeMonths).toEqual(['2021-04', '2021-06'])

    await wrapper.setProps({
      type: 'year',
      modelValue: ['2021', '2023'],
    })
    await wrapper.find('input').trigger('click')
    wrapper.findComponent(DatePicker).vm.selectYearFromPanel(2022)
    await wrapper.find('input').trigger('blur')
    await wrapper.find('input').trigger('click')
    await delay(0)

    expect(wrapper.find('input').element.value).toBe('2021 ~ 2023')
    expect(wrapper.findComponent(DatePicker).vm.rangeSelecting).toBe(false)
    expect(wrapper.findComponent(DatePicker).vm.selectionState.selectedRangeYears).toEqual(['2021', '2023'])

    wrapper.unmount()
  })

  test('dateInput resets temporary picker panel when picker reopens', async () => {
    const wrapper = mount(VarDateInput, {
      props: {
        modelValue: '2021-04-08',
      },
    })

    await wrapper.find('input').trigger('click')
    wrapper.findComponent(DatePicker).vm.switchPanel('year')
    expect(wrapper.findComponent(DatePicker).vm.panelType).toBe('year')

    await wrapper.find('input').trigger('blur')
    await wrapper.find('input').trigger('click')
    await delay(0)
    expect(wrapper.findComponent(DatePicker).vm.panelType).toBe('date')

    await wrapper.setProps({
      type: 'month',
      modelValue: '2021-04',
    })
    await wrapper.find('input').trigger('click')
    wrapper.findComponent(DatePicker).vm.switchPanel('year')
    expect(wrapper.findComponent(DatePicker).vm.panelType).toBe('year')

    await wrapper.find('input').trigger('blur')
    await wrapper.find('input').trigger('click')
    await delay(0)
    expect(wrapper.findComponent(DatePicker).vm.panelType).toBe('month')

    wrapper.unmount()
  })
})

describe('test dateInput datetime behavior', () => {
  test('dateInput syncs datetime model value to display value', () => {
    const wrapper = mount(VarDateInput, {
      props: {
        type: 'datetime',
        modelValue: '2021-04-08 12:30:45',
      },
    })

    expect(wrapper.find('input').element.value).toBe('2021-04-08 12:30:45')
    expect(wrapper.findComponent(DatePicker).props('modelValue')).toBe('2021-04-08')
    expect(wrapper.findComponent(DatePicker).props('type')).toBe('date')

    wrapper.unmount()
  })

  test('dateInput combines picked date with current time and keeps menu open', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        type: 'datetime',
        modelValue: '2021-04-08 12:30:45',
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    await wrapper.find('input').trigger('click')
    wrapper.findComponent(DatePicker).vm.$emit('change', '2021-04-09')
    await delay(0)

    expect(wrapper.find('input').element.value).toBe('2021-04-09 12:30:45')
    expect(onUpdateModelValue).lastCalledWith('2021-04-09 12:30:45')
    expect(wrapper.vm.showMenu).toBe(true)

    wrapper.unmount()
  })

  test('dateInput combines current date with picked time', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        type: 'datetime',
        modelValue: '2021-04-08 12:30:45',
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    wrapper.findComponent(TimeSelect).vm.$emit('change', { hour: 8, minute: 5, second: 1 })
    await delay(0)

    expect(wrapper.find('input').element.value).toBe('2021-04-08 08:05:01')
    expect(onUpdateModelValue).lastCalledWith('2021-04-08 08:05:01')

    wrapper.unmount()
  })

  test('dateInput passes day truncated min and max to picker for datetime', () => {
    const wrapper = mount(VarDateInput, {
      props: {
        type: 'datetime',
        modelValue: '2021-04-08 12:00:00',
        min: '2021-04-08 09:30:00',
        max: '2021-04-20 18:00:00',
      },
    })

    const panelProps = wrapper.findComponent(DatePicker).props()
    expect(panelProps.min).toBe('2021-04-08')
    expect(panelProps.max).toBe('2021-04-20')

    wrapper.unmount()
  })

  test('dateInput supports datetime without seconds', () => {
    const wrapper = mount(VarDateInput, {
      props: {
        type: 'datetime',
        useSeconds: false,
        modelValue: '2021-04-08 12:30',
      },
    })

    expect(wrapper.find('input').element.value).toBe('2021-04-08 12:30')
    expect(wrapper.findComponent(TimeSelect).props('useSeconds')).toBe(false)

    wrapper.unmount()
  })

  test('dateInput clamps datetime to min when picked time is out of range', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        type: 'datetime',
        modelValue: '2021-04-08 12:00:00',
        min: '2021-04-08 09:30:00',
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    wrapper.findComponent(TimeSelect).vm.$emit('change', { hour: 8, minute: 0, second: 0 })
    await delay(0)

    expect(onUpdateModelValue).lastCalledWith('2021-04-08 09:30:00')

    wrapper.unmount()
  })

  test('dateInput disables time units out of min and max on boundary day', () => {
    const wrapper = mount(VarDateInput, {
      props: {
        type: 'datetime',
        modelValue: '2021-04-08 12:00:00',
        min: '2021-04-08 09:30:00',
        max: '2021-04-08 18:00:00',
      },
    })

    const timeSelect = wrapper.findComponent(TimeSelect)
    expect(timeSelect.props('isHourAllowed')(8)).toBe(false)
    expect(timeSelect.props('isHourAllowed')(12)).toBe(true)
    expect(timeSelect.props('isHourAllowed')(19)).toBe(false)

    wrapper.unmount()
  })

  test('dateInput syncs datetime range model value to display and picker', () => {
    const wrapper = mount(VarDateInput, {
      props: {
        type: 'datetime',
        range: true,
        modelValue: ['2021-04-08 09:00:00', '2021-04-12 18:30:00'],
      },
    })

    expect(wrapper.find('input').element.value).toBe('2021-04-08 09:00:00 ~ 2021-04-12 18:30:00')
    expect(wrapper.findComponent(DatePicker).props('modelValue')).toEqual(['2021-04-08', '2021-04-12'])
    expect(wrapper.findAllComponents(TimeSelect)).toHaveLength(2)

    wrapper.unmount()
  })

  test('dateInput combines picked range dates with current start and end times', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        type: 'datetime',
        range: true,
        modelValue: ['2021-04-08 09:00:00', '2021-04-12 18:30:00'],
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    wrapper.findComponent(DatePicker).vm.$emit('change', ['2021-04-09', '2021-04-15'])
    await delay(0)

    expect(onUpdateModelValue).lastCalledWith(['2021-04-09 09:00:00', '2021-04-15 18:30:00'])

    wrapper.unmount()
  })

  test('dateInput updates the end endpoint when end time changes', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        type: 'datetime',
        range: true,
        modelValue: ['2021-04-08 09:00:00', '2021-04-12 18:30:00'],
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    wrapper.findAllComponents(TimeSelect)[1].vm.$emit('change', { hour: 20, minute: 0, second: 0 })
    await delay(0)

    expect(onUpdateModelValue).lastCalledWith(['2021-04-08 09:00:00', '2021-04-12 20:00:00'])

    wrapper.unmount()
  })

  test('dateInput sorts datetime range endpoints after time edit', async () => {
    const onUpdateModelValue = vi.fn()
    const wrapper = mount(VarDateInput, {
      props: {
        type: 'datetime',
        range: true,
        modelValue: ['2021-04-08 09:00:00', '2021-04-08 18:00:00'],
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    wrapper.findAllComponents(TimeSelect)[0].vm.$emit('change', { hour: 20, minute: 0, second: 0 })
    await delay(0)

    expect(onUpdateModelValue).lastCalledWith(['2021-04-08 18:00:00', '2021-04-08 20:00:00'])

    wrapper.unmount()
  })

  test('dateInput respects allowedTimes predicate', () => {
    const wrapper = mount(VarDateInput, {
      props: {
        type: 'datetime',
        modelValue: '2021-04-08 10:00:00',
        allowedTimes: (value) => Number(value.split(' ')[1].split(':')[0]) >= 9,
      },
    })

    const timeSelect = wrapper.findComponent(TimeSelect)
    expect(timeSelect.props('isHourAllowed')(8)).toBe(false)
    expect(timeSelect.props('isHourAllowed')(9)).toBe(true)

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

  test('dateInput clears validation error after picker selection', async () => {
    const wrapper = mount({
      components: {
        VarDateInput,
        VarForm,
      },
      data: () => ({
        value: '2021-04-08',
      }),
      template: `
        <var-form>
          <var-date-input v-model="value" clearable :rules="[(v) => !!v || 'Please select date']" />
        </var-form>
      `,
    })

    wrapper.findComponent(VarDateInput).vm.handleClear()
    await delay(0)
    expect(wrapper.find('.var-form-details__error-message').text()).toBe('Please select date')

    wrapper.findComponent(DatePicker).vm.$emit('change', '2021-04-09')
    await delay(0)

    expect(wrapper.vm.value).toBe('2021-04-09')
    expect(wrapper.find('.var-form-details__error-message').exists()).toBe(false)

    wrapper.unmount()
  })
})
