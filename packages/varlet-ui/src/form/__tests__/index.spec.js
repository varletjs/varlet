import Form from '..'
import VarForm from '../Form'
import VarInput from '../../input/Input'
import VarSelect from '../../select/Select'
import VarOption from '../../option/Option'
import VarRadio from '../../radio/Radio'
import VarCheckbox from '../../checkbox/Checkbox'
import VarCounter from '../../counter/Counter'
import VarRate from '../../rate/Rate'
import VarUploader from '../../uploader/Uploader'
import VarSwitch from '../../switch/Switch'
import VarSlider from '../../slider/Slider'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, trigger } from '../../utils/jest'

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

const Wrapper = {
  components: {
    [VarForm.name]: VarForm,
    [VarInput.name]: VarInput,
    [VarSelect.name]: VarSelect,
    [VarOption.name]: VarOption,
    [VarRadio.name]: VarRadio,
    [VarCheckbox.name]: VarCheckbox,
    [VarCounter.name]: VarCounter,
    [VarRate.name]: VarRate,
    [VarUploader.name]: VarUploader,
    [VarSwitch.name]: VarSwitch,
    [VarSlider.name]: VarSlider,
  },
}

test('test form with input', async () => {
  const onClick = jest.fn()
  const onInput = jest.fn()
  const onChange = jest.fn()

  const wrapper = mount({
    ...Wrapper,
    data: () => ({
      disabled: true,
      readonly: false,
      value: undefined,
    }),
    methods: {
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
          @input="onInput"
          @change="onChange"
        />
      </var-form>
    `,
  })

  const triggerEvents = async () => {
    await wrapper.find('.var-input__input').trigger('input')
    await wrapper.find('.var-input__input').trigger('change')
    await wrapper.find('.var-input').trigger('click')
  }

  expect(wrapper.html()).toMatchSnapshot()

  await triggerEvents()
  expect(onInput).toHaveBeenCalledTimes(0)
  expect(onClick).toHaveBeenCalledTimes(0)
  expect(onChange).toHaveBeenCalledTimes(0)

  await wrapper.setData({ disabled: false, readonly: true })
  expect(wrapper.html()).toMatchSnapshot()

  await triggerEvents()
  expect(onInput).toHaveBeenCalledTimes(0)
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalledTimes(0)

  const { form } = wrapper.vm.$refs
  await expectValidate(form, wrapper, '不能为空')
  await expectReset(form, wrapper)

  wrapper.unmount()
})

test('test form with select', async () => {
  const onClear = jest.fn()
  const onClick = jest.fn()
  const onClose = jest.fn()

  const wrapper = mount({
    ...Wrapper,
    data: () => ({
      disabled: true,
      readonly: false,
      value: ['选项1'],
    }),
    methods: {
      onClear,
      onClick,
      onClose,
    },
    template: `
      <var-form ref="form" :disabled="disabled" :readonly="readonly">
        <var-select
          clearable
          chip
          multiple
          :rules="[v => v.length > 1 || '选择必须多于1个']"
          v-model="value"
          @click="onClick"
          @clear="onClear"
          @close="onClose"
        >
          <var-option label="选项1"/>
          <var-option label="选项2"/>
        </var-select>
      </var-form>
    `,
  })

  await delay(16)
  expect(wrapper.html()).toMatchSnapshot()

  const triggerEvents = async () => {
    await wrapper.find('.var-chip--close').trigger('click')
    await wrapper.find('.var-select__clear-icon').trigger('click')
    await wrapper.find('.var-select').trigger('click')
  }

  await triggerEvents()
  expect(onClick).toHaveBeenCalledTimes(0)
  expect(onClear).toHaveBeenCalledTimes(0)
  expect(onClose).toHaveBeenCalledTimes(0)

  await wrapper.setData({ disabled: false, readonly: true })
  expect(wrapper.html()).toMatchSnapshot()

  await triggerEvents()
  expect(onClick).toHaveBeenCalledTimes(2)
  expect(onClear).toHaveBeenCalledTimes(0)
  expect(onClose).toHaveBeenCalledTimes(0)

  const { form } = wrapper.vm.$refs
  await expectValidate(form, wrapper, '选择必须多于1个')
  await expectReset(form, wrapper)

  wrapper.unmount()
})
//
// test('test form with radio', async () => {
//   const onChange = jest.fn()
//   const onClick = jest.fn()
//
//   const wrapper = mount({
//     ...Wrapper,
//     data: () => ({
//       disabled: true,
//       readonly: false,
//       value: false,
//     }),
//     methods: {
//       onChange,
//       onClick,
//     },
//     template: `
//       <var-form ref="form" :disabled="disabled" :readonly="readonly">
//         <var-radio
//           :rules="[v => !!v || '必须勾选']"
//           v-model="value"
//           @change="onChange"
//           @click="onClick"
//         />
//       </var-form>
//     `,
//   })
//   expect(wrapper.html()).toMatchSnapshot()
//
//   await wrapper.find('.var-radio').trigger('click')
//   expect(wrapper.vm.value).toBe(false)
//   expect(onClick).toHaveBeenCalledTimes(0)
//   expect(onChange).toHaveBeenCalledTimes(0)
//
//   await wrapper.setData({ disabled: false, readonly: true })
//   expect(wrapper.html()).toMatchSnapshot()
//
//   await wrapper.find('.var-radio').trigger('click')
//   expect(wrapper.vm.value).toBe(false)
//   expect(onClick).toHaveBeenCalledTimes(1)
//   expect(onChange).toHaveBeenCalledTimes(0)
//
//   const { form } = wrapper.vm.$refs
//   await expectValidate(form, wrapper, '必须勾选')
//   await expectReset(form, wrapper)
//
//   wrapper.unmount()
// })
//
// test('test form with checkbox', async () => {
//   const onChange = jest.fn()
//   const onClick = jest.fn()
//
//   const wrapper = mount({
//     ...Wrapper,
//     data: () => ({
//       disabled: true,
//       readonly: false,
//       value: false,
//     }),
//     methods: {
//       onChange,
//       onClick,
//     },
//     template: `
//       <var-form ref="form" :disabled="disabled" :readonly="readonly">
//         <var-checkbox
//           :rules="[v => !!v || '必须勾选']"
//           v-model="value"
//           @change="onChange"
//           @click="onClick"
//         />
//       </var-form>
//     `,
//   })
//
//   expect(wrapper.html()).toMatchSnapshot()
//
//   await wrapper.find('.var-checkbox').trigger('click')
//   expect(wrapper.vm.value).toBe(false)
//   expect(onClick).toHaveBeenCalledTimes(0)
//   expect(onChange).toHaveBeenCalledTimes(0)
//
//   await wrapper.setData({ disabled: false, readonly: true })
//   expect(wrapper.html()).toMatchSnapshot()
//
//   await wrapper.find('.var-checkbox').trigger('click')
//   expect(wrapper.vm.value).toBe(false)
//   expect(onClick).toHaveBeenCalledTimes(1)
//   expect(onChange).toHaveBeenCalledTimes(0)
//
//   const { form } = wrapper.vm.$refs
//   await expectValidate(form, wrapper, '必须勾选')
//   await expectReset(form, wrapper)
//
//   wrapper.unmount()
// })
//
// test('test form with counter', async () => {
//   const onIncrement = jest.fn()
//   const onDecrement = jest.fn()
//   const onChange = jest.fn()
//
//   const wrapper = mount({
//     ...Wrapper,
//     data: () => ({
//       disabled: true,
//       readonly: false,
//       value: 0,
//     }),
//     methods: {
//       onIncrement,
//       onDecrement,
//       onChange,
//     },
//     template: `
//       <var-form ref="form" :disabled="disabled" :readonly="readonly">
//         <var-counter
//           ref="counter"
//           :rules="[v => v > 0 || '必须大于0']"
//           v-model="value"
//           @change="onChange"
//           @increment="onIncrement"
//           @decrement="onDecrement"
//         />
//       </var-form>
//     `,
//   })
//
//   const triggerEvents = async () => {
//     await wrapper.find('.var-counter__input').setValue('1')
//     await wrapper.find('.var-counter__input').trigger('change')
//     await wrapper.find('.var-counter__decrement-button').trigger('click')
//     await wrapper.find('.var-counter__increment-button').trigger('click')
//   }
//
//   expect(wrapper.html()).toMatchSnapshot()
//
//   await triggerEvents()
//   expect(onChange).toHaveBeenCalledTimes(0)
//   expect(onIncrement).toHaveBeenCalledTimes(0)
//   expect(onDecrement).toHaveBeenCalledTimes(0)
//
//   await wrapper.setData({ disabled: false, readonly: true })
//   expect(onChange).toHaveBeenCalledTimes(0)
//   expect(onIncrement).toHaveBeenCalledTimes(0)
//   expect(onDecrement).toHaveBeenCalledTimes(0)
//   expect(wrapper.html()).toMatchSnapshot()
//
//   const { form } = wrapper.vm.$refs
//   await expectValidate(form, wrapper, '必须大于0')
//   await expectReset(form, wrapper)
//
//   wrapper.unmount()
// })
//
// test('test form with rate', async () => {
//   const onChange = jest.fn()
//
//   const wrapper = mount({
//     ...Wrapper,
//     data: () => ({
//       disabled: true,
//       readonly: false,
//       value: 0,
//     }),
//     methods: {
//       onChange,
//     },
//     template: `
//       <var-form ref="form" :disabled="disabled" :readonly="readonly">
//         <var-rate
//           :rules="[v => v > 0 || '必须大于0']"
//           v-model="value"
//           @change="onChange"
//         />
//       </var-form>
//     `,
//   })
//
//   expect(wrapper.html()).toMatchSnapshot()
//
//   await wrapper.find('.var-rate__content').trigger('click')
//   expect(wrapper.vm.value).toBe(0)
//   expect(onChange).toHaveBeenCalledTimes(0)
//
//   await wrapper.setData({ disabled: false, readonly: true })
//
//   await wrapper.find('.var-rate__content').trigger('click')
//   expect(wrapper.vm.value).toBe(0)
//   expect(onChange).toHaveBeenCalledTimes(0)
//
//   const { form } = wrapper.vm.$refs
//   await expectValidate(form, wrapper, '必须大于0')
//   await expectReset(form, wrapper)
//
//   wrapper.unmount()
// })
//
// test('test form with uploader', async () => {
//   const onAfterRead = jest.fn()
//
//   const createEvent = (filename) => {
//     return {
//       target: {
//         files: [new File([], filename)],
//       },
//     }
//   }
//
//   const wrapper = mount({
//     ...Wrapper,
//     data: () => ({
//       disabled: true,
//       readonly: false,
//       value: [],
//     }),
//     methods: {
//       onAfterRead,
//     },
//     template: `
//       <var-form ref="form" :disabled="disabled" :readonly="readonly">
//         <var-uploader
//           ref="uploader"
//           :rules="[v => v.length > 0 || '至少上传一个']"
//           v-model="value"
//           @after-read="onAfterRead"
//         />
//       </var-form>
//     `,
//   })
//
//   expect(wrapper.html()).toMatchSnapshot()
//
//   await wrapper.vm.$refs.uploader.handleChange(createEvent('cat.png'))
//   expect(onAfterRead).toHaveBeenCalledTimes(0)
//
//   await wrapper.setData({ disabled: false, readonly: true })
//   expect(wrapper.html()).toMatchSnapshot()
//
//   await wrapper.vm.$refs.uploader.handleChange(createEvent('cat.png'))
//   expect(onAfterRead).toHaveBeenCalledTimes(0)
//
//   const { form } = wrapper.vm.$refs
//   await expectValidate(form, wrapper, '至少上传一个')
//   await expectReset(form, wrapper)
//
//   wrapper.unmount()
// })
//
// test('test form with switch', async () => {
//   const onChange = jest.fn()
//
//   const wrapper = mount({
//     ...Wrapper,
//     data: () => ({
//       disabled: true,
//       readonly: false,
//       value: false,
//     }),
//     methods: {
//       onChange,
//     },
//     template: `
//       <var-form ref="form" :disabled="disabled" :readonly="readonly">
//         <var-switch
//           :rules="[v => v === true || '您必须开启']"
//           v-model="value"
//           @change="onChange"
//         />
//       </var-form>
//     `,
//   })
//
//   expect(wrapper.html()).toMatchSnapshot()
//
//   await wrapper.find('.var-switch-block').trigger('click')
//   expect(wrapper.vm.value).toBe(false)
//   expect(onChange).toHaveBeenCalledTimes(0)
//
//   await wrapper.setData({ disabled: false, readonly: true })
//
//   await wrapper.find('.var-switch-block').trigger('click')
//   expect(wrapper.vm.value).toBe(false)
//   expect(onChange).toHaveBeenCalledTimes(0)
//
//   const { form } = wrapper.vm.$refs
//   await expectValidate(form, wrapper, '您必须开启')
//   await expectReset(form, wrapper)
//
//   await wrapper.setData({ disabled: false, readonly: false })
//
//   await wrapper.find('.var-switch-block').trigger('click')
//   expect(wrapper.vm.value).toBe(true)
//   expect(onChange).toHaveBeenCalledTimes(1)
//
//   wrapper.unmount()
// })
//
// test('test form with slider', async () => {
//   const onChange = jest.fn()
//   const onStart = jest.fn()
//   const onEnd = jest.fn()
//
//   const wrapper = mount({
//     ...Wrapper,
//     data: () => ({
//       disabled: true,
//       readonly: false,
//       value: 5,
//     }),
//     methods: {
//       onChange,
//       onStart,
//       onEnd,
//     },
//     template: `
//       <var-form ref="form" :disabled="disabled" :readonly="readonly">
//         <var-slider
//           v-model="value"
//           :rules="[(v) => v > 10 || '必须大于10']"
//           @change="onChange"
//           @start="onStart"
//           @end="onEnd"
//         />
//       </var-form>
//     `,
//   })
//
//   expect(wrapper.html()).toMatchSnapshot()
//
//   const el = wrapper.find('.var-slider__thumb-label')
//   await trigger(el, 'touchstart', 0, 0)
//   await trigger(el, 'touchmove', 20, 0)
//   await trigger(el, 'touchend', 40, 0)
//   expect(wrapper.vm.value).toBe(5)
//
//   await wrapper.setData({ disabled: false, readonly: true })
//   await trigger(el, 'touchstart', 20, 0)
//   await trigger(el, 'touchmove', 10, 0)
//   await trigger(el, 'touchend', 70, 0)
//   expect(wrapper.vm.value).toBe(5)
//
//   expect(onChange).toHaveBeenCalledTimes(0)
//   expect(onStart).toHaveBeenCalledTimes(0)
//   expect(onEnd).toHaveBeenCalledTimes(0)
//
//   const { form } = wrapper.vm.$refs
//   await expectValidate(form, wrapper, '必须大于10')
//   await expectReset(form, wrapper)
//
//   await wrapper.setData({ disabled: false, readonly: false })
//   await trigger(el, 'touchstart', 20, 0)
//   await trigger(el, 'touchmove', 10, 0)
//   await trigger(el, 'touchend', 70, 0)
//   expect(wrapper.vm.value).not.toBe(5)
//
//   expect(onChange).toHaveBeenCalled()
//   expect(onStart).toHaveBeenCalledTimes(1)
//   expect(onEnd).toHaveBeenCalledTimes(1)
// })
