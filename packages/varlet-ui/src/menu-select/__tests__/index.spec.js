import MenuSelect from '..'
import MenuOption from '../../menu-option'
import VarMenuSelect from '../MenuSelect'
import VarMenuOption from '../../menu-option/MenuOption'
import { createApp, h, Fragment } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, vi } from 'vitest'
import { delay, mockStubs, trigger } from '../../utils/test'

test('test menu-select plugin', () => {
  const app = createApp({}).use(MenuSelect)
  expect(app.component(MenuSelect.name)).toBeTruthy()
})

test('test menu-option plugin', () => {
  const app = createApp({}).use(MenuOption)
  expect(app.component(MenuOption.name)).toBeTruthy()
})

test('test menu-select size', () => {
  ;['normal', 'mini', 'small', 'large'].forEach((size) => {
    const root = document.createElement('div')
    const wrapper = mount(VarMenuSelect, {
      props: {
        show: true,
        size,
        teleport: root,
      },
      slots: {
        default: () => h('div', 'trigger'),
        options: () => h(VarMenuOption, { label: 'Option' }),
      },
    })

    expect(root.innerHTML).toMatchSnapshot()
    expect(root.querySelector(`.var-menu-option--${size}`)).toBeTruthy()
    wrapper.unmount()
  })
})

test('test menu-select scrollable', () => {
  const root = document.createElement('div')
  const wrapper = mount(VarMenuSelect, {
    props: {
      show: true,
      scrollable: true,
      teleport: root,
    },
    slots: {
      default: () => h('div', 'trigger'),
      options: () => h(VarMenuOption, { label: 'Option' }),
    },
  })
  expect(root.innerHTML).toMatchSnapshot()
  expect(root.querySelector('.var-menu-select--scrollable')).toBeTruthy()
  wrapper.unmount()
})

test('test menu-select modelValue', async () => {
  const onUpdateModelValue = vi.fn((value) => {
    wrapper.setProps({ modelValue: value })
  })
  const root = document.createElement('div')
  const wrapper = mount(VarMenuSelect, {
    props: {
      modelValue: undefined,
      'onUpdate:modelValue': onUpdateModelValue,
      teleport: root,
    },
    slots: {
      default: () => h('div', 'trigger'),
      options: () => h(Fragment, [h(VarMenuOption, { label: 'Option 1' }), h(VarMenuOption, { label: 'Option 2' })]),
    },
  })

  await trigger(root.querySelector('.var-menu-option'), 'click')
  expect(wrapper.vm.modelValue).toBe('Option 1')
  wrapper.unmount()
})

test('test menu-select multiple', async () => {
  const onUpdateModelValue = vi.fn((value) => {
    wrapper.setProps({ modelValue: value })
  })
  const root = document.createElement('div')
  const wrapper = mount(VarMenuSelect, {
    props: {
      modelValue: [],
      multiple: true,
      show: true,
      'onUpdate:modelValue': onUpdateModelValue,
      teleport: root,
    },
    slots: {
      default: () => h('div', 'trigger'),
      options: () => h(Fragment, [h(VarMenuOption, { label: 'Option 1' }), h(VarMenuOption, { label: 'Option 2' })]),
    },
  })

  await delay(0)
  await trigger(root.querySelector('.var-menu-option'), 'click')
  expect(wrapper.vm.modelValue).toStrictEqual(['Option 1'])
  wrapper.unmount()
})

test('test menu-select closeOnSelect', async () => {
  const onUpdateShow = vi.fn()
  const root = document.createElement('div')
  const wrapper = mount(VarMenuSelect, {
    props: {
      show: true,
      'onUpdate:show': onUpdateShow,
      teleport: root,
    },
    slots: {
      default: () => h('div', 'trigger'),
      options: () => h(VarMenuOption, { label: 'Option 1' }),
    },
  })

  await trigger(root.querySelector('.var-menu-option'), 'click')
  expect(onUpdateShow).toBeCalledTimes(1)
  expect(onUpdateShow).toHaveBeenLastCalledWith(false)

  onUpdateShow.mockClear()

  await wrapper.setProps({ closeOnSelect: false })
  await trigger(root.querySelector('.var-menu-option'), 'click')
  expect(onUpdateShow).toBeCalledTimes(0)

  wrapper.unmount()
})

test('test menu-option disabled', async () => {
  const onUpdateModelValue = vi.fn()
  const root = document.createElement('div')
  const wrapper = mount(VarMenuSelect, {
    props: {
      show: true,
      teleport: root,
      'onUpdate:modelValue': onUpdateModelValue,
    },
    slots: {
      default: () => h('div', 'trigger'),
      options: () => h(VarMenuOption, { label: 'Option 1', disabled: true }),
    },
  })

  expect(root.innerHTML).toMatchSnapshot()
  await trigger(root.querySelector('.var-menu-option'), 'click')
  expect(onUpdateModelValue).toBeCalledTimes(0)
  wrapper.unmount()
})

test('test menu-select value mapping', async () => {
  const onUpdateModelValue = vi.fn()
  const root = document.createElement('div')
  const wrapper = mount(VarMenuSelect, {
    props: {
      show: true,
      teleport: root,
      'onUpdate:modelValue': onUpdateModelValue,
    },
    slots: {
      default: () => h('div', 'trigger'),
      options: () => h(VarMenuOption, { label: 'Option 1', value: 1 }),
    },
  })

  expect(root.innerHTML).toMatchSnapshot()
  await trigger(root.querySelector('.var-menu-option'), 'click')
  expect(onUpdateModelValue).toBeCalledTimes(1)
  expect(onUpdateModelValue).toHaveBeenCalledWith(1)
  wrapper.unmount()
})

test('test menu-option default slot', async () => {
  const root = document.createElement('div')
  const wrapper = mount(VarMenuSelect, {
    props: {
      show: true,
      teleport: root,
    },
    slots: {
      default: () => h('div', 'trigger'),
      options: () => h(VarMenuOption, { label: 'Option 1' }, { default: () => h('div', 'option slot') }),
    },
  })

  expect(root.innerHTML).toMatchSnapshot()
  wrapper.unmount()
})

test('test menu-select methods', async () => {
  const { mockRestore } = mockStubs()
  const root = document.createElement('div')
  const wrapper = mount(VarMenuSelect, {
    props: {
      teleport: root,
    },
    slots: {
      default: () => h('div', 'trigger'),
      options: () => h(VarMenuOption, { label: 'Option 1' }),
    },
  })
  await delay(0)
  wrapper.vm.open()
  await delay(0)
  expect(root.innerHTML).toMatchSnapshot()
  wrapper.vm.close()
  wrapper.vm.resize()
  await delay(100)
  expect(root.innerHTML).toMatchSnapshot()
  wrapper.unmount()
  mockRestore()
})
