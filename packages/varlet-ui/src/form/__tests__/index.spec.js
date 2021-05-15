import Form from '..'
import VarForm from '../Form'
import VarInput from '../../input/Input'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay } from '../../utils/jest'

test('test form plugin', () => {
  const app = createApp({}).use(Form)
  expect(app.component(Form.name)).toBeTruthy()
})

const expectValidate = async (form, wrapper, message) => {
  form.validate()
  await delay(16)
  expect(wrapper.find('.var-form-details__message').text()).toBe(message)
  expect(wrapper.html()).toMatchSnapshot()
}

const expectReset = async (form, wrapper) => {
  form.reset()
  await delay(16)
  expect(wrapper.find('.var-form-details__message').exists()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()
}

test('test form with input', async () => {
  const onClear = jest.fn()
  const onClick = jest.fn()
  const onInput = jest.fn()
  const onChange = jest.fn()

  const wrapper = mount({
    components: {
      [VarInput.name]: VarInput,
      [VarForm.name]: VarForm,
    },
    data: () => ({
      disabled: true,
      readonly: false,
      value: '',
    }),
    methods: {
      onClear,
      onClick,
      onInput,
      onChange,
    },
    template: `
      <var-form ref="form" :disabled="disabled" :readonly="readonly">
        <var-input
          clearable
          :rules="[v => !!v || '不能为空']"
          v-model="value"
          @click="onClick"
          @clear="onClear"
          @input="onInput"
          @change="onChange"
        />
      </var-form>
    `,
  })

  const triggerEvents = async () => {
    await wrapper.find('.var-input__input').trigger('input')
    await wrapper.find('.var-input__input').trigger('change')
    await wrapper.find('.var-input__clear-icon').trigger('click')
    await wrapper.trigger('click')
  }

  await triggerEvents()
  expect(onInput).toHaveBeenCalledTimes(0)
  expect(onClear).toHaveBeenCalledTimes(0)
  expect(onClick).toHaveBeenCalledTimes(0)
  expect(onChange).toHaveBeenCalledTimes(0)

  await wrapper.setData({ disabled: false, readonly: true })

  await triggerEvents()
  expect(onInput).toHaveBeenCalledTimes(0)
  expect(onClear).toHaveBeenCalledTimes(0)
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalledTimes(0)

  const { form } = wrapper.vm.$refs
  await expectValidate(form, wrapper, '不能为空')
  await expectReset(form, wrapper)

  wrapper.unmount()
})
