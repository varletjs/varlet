import Uploader from '..'
import VarUploader from '../Uploader'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, mockFileReader, mockStubs } from '../../utils/test'
import { expect, vi } from 'vitest'

const createEvent = (filename, type) => {
  return {
    target: {
      files: [new File([], filename, { type })],
    },
  }
}

test('test uploader plugin', () => {
  const app = createApp({}).use(Uploader)
  expect(app.component(Uploader.name)).toBeTruthy()
})

test('test uploader onAfterRead', async () => {
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

test('test uploader onBeforeFilter', async () => {
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
    onBeforeFilter: async function (files) {
      return new Promise((resolve, reject) => {
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

test('test uploader onBeforeRead', async () => {
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

test('test uploader preview', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const { mockRestore: mockRestoreStubs } = mockStubs()
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [
        {
          url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
          cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
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

test('test uploader preview event', async () => {
  const { mockRestore: mockRestoreStubs } = mockStubs()
  const onPreview = vi.fn()

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [
        {
          url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
          cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
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

test('test uploader prevent default preview', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const { mockRestore: mockRestoreStubs } = mockStubs()
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarUploader, {
    props: {
      modelValue: [
        {
          url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
          cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
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

test('test uploader onOversize', async () => {
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

test('test uploader onRemove', async () => {
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

test('test uploader onBeforeRemove', async () => {
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

test('test uploader validation', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

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
  expect(wrapper.find('.var-form-details__error-message').text()).toBe('您至少上传一个')

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

test('test uploader disabled', async () => {
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

test('test uploader length over maxlength in multiple mode', async () => {
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

test('test uploader hideList', async () => {
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

test('test uploader file utils', async () => {
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

test('test uploader progress', () => {
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

test('test uploader extra slot', async () => {
  const wrapper = mount(VarUploader, {
    slots: {
      'extra-message': () => '还能上传3个文件',
    },
  })

  await delay(100)
  expect(wrapper.find('.var-form-details__extra-message').text()).toBe('还能上传3个文件')

  wrapper.unmount()
})

test('test uploader resolve-type as default when file type is image', async () => {
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

test('test uploader resolve-type as default when file type is not image', async () => {
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

test('test uploader resolve-type as file when file type is image', async () => {
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

test('test uploader resolve-type as data-url when file type is image', async () => {
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

test('test uploader resolve-type as data-url when file type is not image', async () => {
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

test('test uploader onClickAction', async () => {
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

test('test uploader removable', async () => {
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
