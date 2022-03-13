import example from '../example'
import Uploader from '..'
import VarUploader from '../Uploader'
import ImagePreview from '../../image-preview'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, mockFileReader, mockStubs } from '../../utils/jest'

const createEvent = (filename) => {
  return {
    target: {
      files: [new File([], filename)],
    },
  }
}

test('test uploader example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test uploader plugin', () => {
  const app = createApp({}).use(Uploader)
  expect(app.component(Uploader.name)).toBeTruthy()
})

test('test uploader onAfterRead', async () => {
  const onAfterRead = jest.fn()

  const wrapper = mount(VarUploader, {
    props: {
      onAfterRead,
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png'))
  expect(onAfterRead).toHaveBeenCalledTimes(1)

  wrapper.unmount()
})

test('test uploader onBeforeRead', async () => {
  const onAfterRead = jest.fn()

  const wrapper = mount(VarUploader, {
    props: {
      onAfterRead,
      onBeforeRead: (file) => file.name.endsWith('jpg'),
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png'))
  expect(onAfterRead).toHaveBeenCalledTimes(0)

  await wrapper.vm.handleChange(createEvent('cat.jpg'))
  expect(onAfterRead).toHaveBeenCalledTimes(1)

  wrapper.unmount()
})

test('test uploader preview', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const { mockRestore: mockRestoreStubs } = mockStubs()
  const onUpdateModelValue = jest.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [],
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.jpg'))
  await delay(16)
  await wrapper.find('.var-uploader__file').trigger('click')
  await delay(100)

  expect(document.querySelector('.var-popup').style.display).toBe('')
  ImagePreview.close()
  await delay(300)

  mockRestoreStubs()
  wrapper.unmount()
  mockRestore()
})

test('test uploader onOversize', async () => {
  const onOversize = jest.fn()

  const wrapper = mount(VarUploader, {
    props: {
      maxsize: -1,
      onOversize,
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png'))
  expect(onOversize).toHaveBeenCalledTimes(1)

  wrapper.unmount()
})

test('test uploader onRemove', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onUpdateModelValue = jest.fn((value) => wrapper.setProps({ modelValue: value }))
  const onRemove = jest.fn()

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [],
      onRemove,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png'))
  expect(onUpdateModelValue).toHaveBeenCalledTimes(1)

  await wrapper.find('.var-uploader__file-close').trigger('click')
  expect(onUpdateModelValue).toHaveBeenCalledTimes(2)
  expect(onRemove).toHaveBeenCalledTimes(1)
  expect(wrapper.vm.modelValue).toStrictEqual([])

  wrapper.unmount()
  mockRestore()
})

test('test uploader onBeforeRemove', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onUpdateModelValue = jest.fn((value) => wrapper.setProps({ modelValue: value }))
  const onBeforeRemove = jest.fn(() => false)
  const onRemove = jest.fn()

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [],
      onBeforeRemove,
      onRemove,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png'))
  expect(onUpdateModelValue).toHaveBeenCalledTimes(1)

  await wrapper.find('.var-uploader__file-close').trigger('click')
  expect(onBeforeRemove).toHaveBeenCalledTimes(1)
  expect(onUpdateModelValue).toHaveBeenCalledTimes(1)
  expect(onRemove).toHaveBeenCalledTimes(0)
  expect(wrapper.vm.modelValue).toHaveLength(1)

  wrapper.unmount()
  mockRestore()
})

test('test uploader validation', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onUpdateModelValue = jest.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [],
      rules: [(v) => v.length >= 1 || '您至少上传一个'],
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  wrapper.vm.validate()
  await delay(16)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-form-details__message').text()).toBe('您至少上传一个')

  await wrapper.vm.handleChange(createEvent('cat.png'))
  await delay(16)
  expect(onUpdateModelValue).toHaveBeenCalledTimes(1)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-form-details__message').exists()).toBeFalsy()

  wrapper.vm.reset()
  await delay(16)
  expect(wrapper.vm.modelValue).toStrictEqual([])

  wrapper.unmount()
  mockRestore()
})

test('test uploader disabled', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onUpdateModelValue = jest.fn((value) => wrapper.setProps({ modelValue: value }))
  const onRemove = jest.fn()
  const onAfterRead = jest.fn()

  const wrapper = mount(VarUploader, {
    props: {
      disabled: false,
      modelValue: [],
      onAfterRead,
      onRemove,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.vm.handleChange(createEvent('cat.png'))
  expect(onAfterRead).toHaveBeenCalledTimes(1)

  await wrapper.setProps({ disabled: true })
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-uploader__action-input[disabled]').exists()).toBeTruthy()

  await wrapper.find('.var-uploader__file-close').trigger('click')
  expect(onRemove).toHaveBeenCalledTimes(0)

  wrapper.unmount()
  mockRestore()
})

test('test uploader length over maxlength in multiple mode', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onUpdateModelValue = jest.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarUploader, {
    props: {
      maxlength: 1,
      modelValue: [],
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  const event = {
    target: {
      files: [new File([], 'cat.png'), new File([], 'dog.png')],
    },
  }

  await wrapper.vm.handleChange(event)
  expect(wrapper.vm.modelValue.length).toBe(1)

  wrapper.unmount()
  mockRestore()
})

test('test uploader hide file list', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onUpdateModelValue = jest.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarUploader, {
    props: {
      hideList: true,
      modelValue: [],
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  const event = {
    target: {
      files: [new File([], 'cat.png'), new File([], 'dog.png')],
    },
  }

  await wrapper.vm.handleChange(event)
  expect(wrapper.vm.renderFileList.length).toBe(0)

  wrapper.unmount()
  mockRestore()
})
