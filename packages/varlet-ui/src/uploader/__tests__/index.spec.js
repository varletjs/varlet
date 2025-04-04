import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import { z } from 'zod'
import Uploader from '..'
import { delay, mockFileReader, mockStubs, triggerKeyboard } from '../../utils/test'
import VarUploader from '../Uploader'

const createEvent = (filename, type) => ({
  target: {
    files: [new File([], filename, { type })],
  },
})

test('uploader plugin', () => {
  const app = createApp({}).use(Uploader)
  expect(app.component(Uploader.name)).toBeTruthy()
})

test('uploader onAfterRead', async () => {
  const onAfterRead = vi.fn()

  const wrapper = mount(VarUploader, {
    props: {
      onAfterRead,
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png', 'image/png'))
  expect(onAfterRead).toHaveBeenCalledTimes(1)

  wrapper.unmount()
})

test('uploader onBeforeFilter', async () => {
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))
  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [],
      'onUpdate:modelValue': onUpdateModelValue,
      onBeforeFilter: (files) => files.filter((file) => file.name.endsWith('jpg')),
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png', 'image/png'))
  expect(wrapper.vm.modelValue).toHaveLength(0)

  await wrapper.vm.handleChange(createEvent('cat.jpg', 'image/jpg'))
  expect(wrapper.vm.modelValue).toHaveLength(1)

  await wrapper.setProps({
    modelValue: [],
    multiple: true,
    'onUpdate:modelValue': onUpdateModelValue,
    onBeforeFilter(files) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(files.filter((file) => file.name.endsWith('jpg')))
        }, 1000)
      })
    },
  })

  const event = {
    target: {
      files: [new File([], 'cat.jpg'), new File([], 'dog.png'), new File([], 'dog.jpg')],
    },
  }

  await wrapper.vm.handleChange(event)
  expect(wrapper.vm.modelValue).toHaveLength(2)

  wrapper.unmount()
})

test('uploader onBeforeRead', async () => {
  const onAfterRead = vi.fn()

  const wrapper = mount(VarUploader, {
    props: {
      onAfterRead,
      onBeforeRead: (file) => file.name.endsWith('jpg'),
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png', 'image/png'))
  expect(onAfterRead).toHaveBeenCalledTimes(0)

  await wrapper.vm.handleChange(createEvent('cat.jpg', 'image/png'))
  expect(onAfterRead).toHaveBeenCalledTimes(1)

  wrapper.unmount()
})

test('uploader preview', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const { mockRestore: mockRestoreStubs } = mockStubs()
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [
        {
          url: 'https://varletjs.org/varlet/cat.jpg',
          cover: 'https://varletjs.org/varlet/cat.jpg',
        },
      ],
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.find('.var-uploader__file').trigger('click')
  await delay(100)
  expect(document.querySelectorAll('.var-popup')[1].style.display).toBe('')
  wrapper.vm.closePreview()
  await delay(300)

  mockRestoreStubs()
  wrapper.unmount()
  mockRestore()
})

test('uploader preview event', async () => {
  const { mockRestore: mockRestoreStubs } = mockStubs()
  const onPreview = vi.fn()

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [
        {
          url: 'https://varletjs.org/varlet/cat.jpg',
          cover: 'https://varletjs.org/varlet/cat.jpg',
        },
      ],
      onPreview,
    },
  })
  await wrapper.find('.var-uploader__file').trigger('click')
  expect(onPreview).toHaveBeenCalledTimes(1)
  wrapper.vm.closePreview()
  await delay(300)
  mockRestoreStubs()
  wrapper.unmount()
})

test('uploader prevent default preview', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const { mockRestore: mockRestoreStubs } = mockStubs()
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [
        {
          url: 'https://varletjs.org/varlet/cat.jpg',
          cover: 'https://varletjs.org/varlet/cat.jpg',
        },
      ],
      preventDefaultPreview: true,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  wrapper.setProps({ preventDefaultPreview: true })
  await delay(100)
  await wrapper.find('.var-uploader__file').trigger('click')
  expect(document.querySelectorAll('.var-popup').length).toBe(1)

  mockRestoreStubs()
  wrapper.unmount()
  mockRestore()
})

test('uploader onOversize', async () => {
  const onOversize = vi.fn()

  const wrapper = mount(VarUploader, {
    props: {
      maxsize: -1,
      onOversize,
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png', 'image/png'))
  expect(onOversize).toHaveBeenCalledTimes(1)

  wrapper.unmount()
})

test('uploader onRemove', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))
  const onRemove = vi.fn()

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [],
      onRemove,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png', 'image/png'))
  expect(onUpdateModelValue).toHaveBeenCalledTimes(1)

  await wrapper.find('.var-uploader__file-close').trigger('click')
  expect(onUpdateModelValue).toHaveBeenCalledTimes(2)
  expect(onRemove).toHaveBeenCalledTimes(1)
  expect(wrapper.vm.modelValue).toStrictEqual([])

  wrapper.unmount()
  mockRestore()
})

test('uploader onBeforeRemove', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))
  const onBeforeRemove = vi.fn(() => false)
  const onRemove = vi.fn()

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [],
      onBeforeRemove,
      onRemove,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png', 'image/png'))
  expect(onUpdateModelValue).toHaveBeenCalledTimes(1)

  await wrapper.find('.var-uploader__file-close').trigger('click')
  expect(onBeforeRemove).toHaveBeenCalledTimes(1)
  expect(onUpdateModelValue).toHaveBeenCalledTimes(1)
  expect(onRemove).toHaveBeenCalledTimes(0)
  expect(wrapper.vm.modelValue).toHaveLength(1)

  wrapper.unmount()
  mockRestore()
})

test('uploader validation', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [],
      rules: [(v) => v.length >= 1 || 'You must upload one file at least'],
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  wrapper.vm.validate()
  await delay(16)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-form-details__error-message').text()).toBe('You must upload one file at least')

  await wrapper.vm.handleChange(createEvent('cat.png', 'image/png'))
  await delay(16)
  expect(onUpdateModelValue).toHaveBeenCalledTimes(1)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-form-details__error-message').exists()).toBeFalsy()

  wrapper.vm.reset()
  await delay(16)
  expect(wrapper.vm.modelValue).toStrictEqual([])

  wrapper.unmount()
  mockRestore()
})

test('uploader disabled', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))
  const onRemove = vi.fn()
  const onAfterRead = vi.fn()

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
  await wrapper.vm.handleChange(createEvent('cat.png', 'image/png'))
  expect(onAfterRead).toHaveBeenCalledTimes(1)

  await wrapper.setProps({ disabled: true })
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-uploader__action-input[disabled]').exists()).toBeTruthy()

  await wrapper.find('.var-uploader__file-close').trigger('click')
  expect(onRemove).toHaveBeenCalledTimes(0)

  wrapper.unmount()
  mockRestore()
})

test('uploader length over maxlength in multiple mode', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

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

test('uploader hideList', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

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
  expect(wrapper.vm.files.length).toBe(0)

  wrapper.unmount()
  mockRestore()
})

test('uploader file utils', () => {
  const modelValue = [
    {
      id: 1,
      name: 'loading',
      state: 'loading',
    },
    {
      id: 2,
      name: 'success',
      state: 'success',
    },
    {
      id: 3,
      name: 'error',
      state: 'error',
    },
  ]

  const wrapper = mount(VarUploader, {
    props: {
      modelValue,
    },
  })

  expect(wrapper.vm.getLoading()).toStrictEqual([modelValue[0]])
  expect(wrapper.vm.getSuccess()).toStrictEqual([modelValue[1]])
  expect(wrapper.vm.getError()).toStrictEqual([modelValue[2]])
})

test('uploader progress', () => {
  const modelValue = [
    {
      id: 1,
      name: 'progress',
      state: 'loading',
      progress: 40,
    },
  ]

  const wrapper = mount(VarUploader, {
    props: {
      modelValue,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('uploader extra slot', async () => {
  const wrapper = mount(VarUploader, {
    slots: {
      'extra-message': () => 'There are three files rest to upload',
    },
  })

  await delay(100)
  expect(wrapper.find('.var-form-details__extra-message').text()).toBe('There are three files rest to upload')

  wrapper.unmount()
})

test('uploader resolve-type as default when file type is image', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const { mockRestore: mockRestoreStubs } = mockStubs()
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [],
      resolveType: 'default',
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png', 'image/png'))
  await delay(100)
  expect(wrapper.vm.files[0].cover.includes('data:image/png;base64,')).toBe(true)

  mockRestoreStubs()
  wrapper.unmount()
  mockRestore()
})

test('uploader resolve-type as default when file type is not image', async () => {
  const { mockRestore } = mockFileReader('data:')
  const { mockRestore: mockRestoreStubs } = mockStubs()
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [],
      resolveType: 'default',
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.vm.handleChange(createEvent('data.json', 'application/json'))
  await delay(100)
  expect(wrapper.vm.files[0].cover.includes('data:')).toBe(false)

  mockRestoreStubs()
  wrapper.unmount()
  mockRestore()
})

test('uploader resolve-type as file when file type is image', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const { mockRestore: mockRestoreStubs } = mockStubs()
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [],
      resolveType: 'file',
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png', 'image/png'))
  await delay(100)
  expect(wrapper.vm.files[0].cover).toBe('')

  mockRestoreStubs()
  wrapper.unmount()
  mockRestore()
})

test('uploader resolve-type as data-url when file type is image', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const { mockRestore: mockRestoreStubs } = mockStubs()
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [],
      resolveType: 'data-url',
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png', 'image/png'))
  await delay(100)
  expect(wrapper.vm.files[0].cover.includes('data:image/png;base64,')).toBe(true)

  mockRestoreStubs()
  wrapper.unmount()
  mockRestore()
})

test('uploader resolve-type as data-url when file type is not image', async () => {
  const { mockRestore } = mockFileReader('data:')
  const { mockRestore: mockRestoreStubs } = mockStubs()
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [],
      resolveType: 'data-url',
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.vm.handleChange(createEvent('data.json', 'application/json'))
  await delay(100)
  expect(wrapper.vm.files[0].cover.includes('data:')).toBe(true)

  mockRestoreStubs()
  wrapper.unmount()
  mockRestore()
})

test('uploader onClickAction', async () => {
  const onClickAction = vi.fn()

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [],
      onClickAction,
    },
  })

  await wrapper.find('.var-uploader__action').trigger('click')
  expect(onClickAction).toBeCalledTimes(1)
  await wrapper.setProps({ disabled: true })
  await wrapper.find('.var-uploader__action').trigger('click')
  expect(onClickAction).toBeCalledTimes(1)
  wrapper.unmount()
})

test('uploader removable', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [],
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })
  const event = {
    target: {
      files: [new File([], 'cat.png'), new File([], 'dog.png')],
    },
  }

  await wrapper.vm.handleChange(event)
  expect(wrapper.find('.var-uploader__file-close').exists()).toBe(true)

  await wrapper.setProps({
    removable: false,
  })
  expect(wrapper.find('.var-uploader__file-close').exists()).toBe(false)

  wrapper.unmount()
  mockRestore()
})

test('uploader keyboard enter for chooseFile', async () => {
  const click = vi.fn()
  const origin = HTMLInputElement.prototype.click
  HTMLInputElement.prototype.click = click

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [],
    },
  })

  await wrapper.find('.var-uploader__action').trigger('focus')
  await triggerKeyboard(window, 'keydown', { key: 'Enter' })
  expect(click).toHaveBeenCalledTimes(1)

  HTMLInputElement.prototype.click = origin
  wrapper.unmount()
})

test('uploader keyboard space for chooseFile', async () => {
  const click = vi.fn()
  const origin = HTMLInputElement.prototype.click
  HTMLInputElement.prototype.click = click

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [],
    },
  })

  await wrapper.find('.var-uploader__action').trigger('focus')
  await triggerKeyboard(window, 'keydown', { key: ' ' })
  await triggerKeyboard(window, 'keyup', { key: ' ' })
  expect(click).toHaveBeenCalledTimes(1)

  HTMLInputElement.prototype.click = origin
  wrapper.unmount()
})

test('uploader validation with zod', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [],
      rules: z.array(z.any()).min(1, 'You must upload one file at least'),
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  wrapper.vm.validate()
  await delay(16)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-form-details__error-message').text()).toBe('You must upload one file at least')

  await wrapper.vm.handleChange(createEvent('cat.png', 'image/png'))
  await delay(16)
  expect(onUpdateModelValue).toHaveBeenCalledTimes(1)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-form-details__error-message').exists()).toBeFalsy()

  wrapper.vm.reset()
  await delay(16)
  expect(wrapper.vm.modelValue).toStrictEqual([])

  wrapper.unmount()
  mockRestore()
})

test('uploader remove button slot', () => {
  const { mockRestore: mockRestoreStubs } = mockStubs()

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [
        {
          url: 'https://varletjs.org/varlet/cat.jpg',
          cover: 'https://varletjs.org/varlet/cat.jpg',
        },
      ],
    },
    slots: {
      'remove-button': () => 'remove',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  mockRestoreStubs()
  wrapper.unmount()
})
