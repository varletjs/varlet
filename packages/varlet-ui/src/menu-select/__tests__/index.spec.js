import { createApp, Fragment, h } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import MenuSelect from '..'
import MenuOption from '../../menu-option'
import VarMenuOption from '../../menu-option/MenuOption'
import { delay, mockStubs, trigger, triggerKeyboard } from '../../utils/test'
import VarMenuSelect from '../MenuSelect'

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

test('test menu-option default slot', () => {
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

test('test menu-select keyboard ArrowDown and Enter', async () => {
  const { mockRestore } = mockStubs()
  const onUpdateModelValue = vi.fn()
  const root = document.createElement('div')
  const wrapper = mount(VarMenuSelect, {
    props: {
      show: true,
      'onUpdate:modelValue': onUpdateModelValue,
      teleport: root,
    },
    slots: {
      default: () => h('div', 'trigger'),
      options: () => h(VarMenuOption, { label: 'Option 1', value: 1 }),
    },
  })

  await triggerKeyboard(window, 'keydown', { key: 'ArrowDown' })
  await trigger(root.querySelector('.var-menu-option'), 'focus')
  await triggerKeyboard(window, 'keydown', { key: 'Enter' })
  expect(onUpdateModelValue).toBeCalledTimes(1)
  expect(onUpdateModelValue).toHaveBeenCalledWith(1)

  mockRestore()
  wrapper.unmount()
})

test('test menu-select keyboard ArrowUp and Enter', async () => {
  const { mockRestore } = mockStubs()
  const onUpdateModelValue = vi.fn()
  const root = document.createElement('div')
  const wrapper = mount(VarMenuSelect, {
    props: {
      show: true,
      'onUpdate:modelValue': onUpdateModelValue,
      teleport: root,
    },
    slots: {
      default: () => h('div', 'trigger'),
      options: () => h(VarMenuOption, { label: 'Option 1', value: 1 }),
    },
  })

  await triggerKeyboard(window, 'keydown', { key: 'ArrowUp' })
  await trigger(root.querySelector('.var-menu-option'), 'focus')
  await triggerKeyboard(window, 'keydown', { key: 'Enter' })
  expect(onUpdateModelValue).toBeCalledTimes(1)
  expect(onUpdateModelValue).toHaveBeenCalledWith(1)

  mockRestore()
  wrapper.unmount()
})

test('test menu-select keyboard Escape', async () => {
  const { mockRestore } = mockStubs()
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
      options: () => h(VarMenuOption, { label: 'Option 1', value: 1 }),
    },
  })

  await triggerKeyboard(window, 'keydown', { key: 'Escape' })
  expect(onUpdateShow).toBeCalledTimes(1)
  expect(onUpdateShow).toHaveBeenCalledWith(false)

  mockRestore()
  wrapper.unmount()
})

test('test menu-select options api', async () => {
  const onUpdateModelValue = vi.fn((value) => {
    wrapper.setProps({ modelValue: value })
  })
  const root = document.createElement('div')
  const wrapper = mount(VarMenuSelect, {
    props: {
      modelValue: undefined,
      'onUpdate:modelValue': onUpdateModelValue,
      teleport: root,
      options: [
        {
          label: 'Option 1',
          value: 1,
        },
        {
          label: () => h('div', { class: 'container' }, 'Option 2'),
          value: 2,
        },
      ],
    },
    slots: {
      default: () => h('div', 'trigger'),
    },
  })

  await trigger(root.querySelector('.var-menu-option'), 'click')
  expect(root.querySelector('.container').textContent).toBe('Option 2')
  expect(wrapper.vm.modelValue).toBe(1)
  wrapper.unmount()
})

test('test menu-select multiple options api', async () => {
  const onUpdateModelValue = vi.fn((value) => {
    wrapper.setProps({ modelValue: value })
  })
  const root = document.createElement('div')
  const wrapper = mount(VarMenuSelect, {
    props: {
      modelValue: [],
      'onUpdate:modelValue': onUpdateModelValue,
      teleport: root,
      options: [
        {
          label: 'Option 1',
          value: 1,
        },
        {
          label: 'Option 2',
          value: 2,
        },
        {
          label: 'Option 3',
          value: 3,
        },
      ],
      multiple: true,
    },
    slots: {
      default: () => h('div', 'trigger'),
    },
  })

  await delay(0)
  await trigger(root.querySelector('.var-menu-option'), 'click')
  expect(wrapper.vm.modelValue).toStrictEqual([1])
  wrapper.unmount()
})

test('test menu-select label-key', async () => {
  const onUpdateModelValue = vi.fn((value) => {
    wrapper.setProps({ modelValue: value })
  })
  const root = document.createElement('div')
  const wrapper = mount(VarMenuSelect, {
    props: {
      modelValue: undefined,
      'onUpdate:modelValue': onUpdateModelValue,
      teleport: root,
      options: [
        {
          name: 'Option 1',
        },
        {
          name: 'Option 2',
        },
        {
          name: 'Option 3',
        },
      ],
      labelKey: 'name',
    },
    slots: {
      default: () => h('div', 'trigger'),
    },
  })

  await delay(0)
  await trigger(root.querySelector('.var-menu-option'), 'click')
  expect(wrapper.vm.modelValue).toStrictEqual('Option 1')
  wrapper.unmount()
})

test('test menu-select value-key', async () => {
  const onUpdateModelValue = vi.fn((value) => {
    wrapper.setProps({ modelValue: value })
  })
  const root = document.createElement('div')
  const wrapper = mount(VarMenuSelect, {
    props: {
      modelValue: undefined,
      'onUpdate:modelValue': onUpdateModelValue,
      teleport: root,
      options: [
        {
          label: 'Option 1',
          id: 1,
        },
        {
          label: 'Option 2',
          id: 2,
        },
        {
          label: 'Option 3',
          id: 3,
        },
      ],
      valueKey: 'id',
    },
    slots: {
      default: () => h('div', 'trigger'),
    },
  })

  await delay(0)
  await trigger(root.querySelector('.var-menu-option'), 'click')
  expect(wrapper.vm.modelValue).toStrictEqual(1)
  wrapper.unmount()
})

test('test menu-select cascade', async () => {
  const root = document.createElement('div')

  const onUpdateModelValue = vi.fn((value) => {
    wrapper.setProps({ modelValue: value })
  })

  const wrapper = mount(VarMenuSelect, {
    props: {
      modelValue: undefined,
      'onUpdate:modelValue': onUpdateModelValue,
      teleport: root,
      options: [
        {
          label: 'Option 1',
          value: 1,
        },
        {
          label: 'Option 2',
          value: 2,
          children: [
            {
              label: 'Option 2-1',
              value: 21,
            },
            {
              label: 'Option 2-2',
              value: 22,
            },
          ],
        },
        {
          label: 'Option 3',
          value: 3,
          disabled: true,
        },
      ],
    },
    slots: {
      default: () => h('button', { class: 'trigger' }, 'trigger'),
    },
  })

  await delay(0)
  expect(root.innerHTML).toMatchSnapshot()

  const button = wrapper.find('.trigger')
  await button.trigger('click')

  const options = root.querySelectorAll('.var-menu-option')
  const option2 = options[1]
  await trigger(option2, 'mouseenter')
  const option21 = options[2]
  await trigger(option21, 'click')
  expect(wrapper.vm.modelValue).toStrictEqual(21)
})

test('test menu-select cascade multiple mode', async () => {
  const root = document.createElement('div')

  const onUpdateModelValue = vi.fn((value) => {
    wrapper.setProps({ modelValue: value })
  })

  const wrapper = mount(VarMenuSelect, {
    props: {
      modelValue: [],
      'onUpdate:modelValue': onUpdateModelValue,
      teleport: root,
      multiple: true,
      options: [
        {
          label: 'Option 1',
          value: 1,
        },
        {
          label: 'Option 2',
          value: 2,
          children: [
            {
              label: 'Option 2-1',
              value: 21,
            },
            {
              label: 'Option 2-2',
              value: 22,
              children: [
                {
                  label: 'Option 2-2-1',
                  value: 221,
                },
                {
                  label: 'Option 2-2-2',
                  value: 222,
                },
              ],
            },
          ],
        },
        {
          label: 'Option 3',
          value: 3,
          disabled: true,
        },
      ],
    },
    slots: {
      default: () => h('button', { class: 'trigger' }, 'trigger'),
    },
  })

  await delay(0)
  expect(root.innerHTML).toMatchSnapshot()

  const button = wrapper.find('.trigger')
  await button.trigger('click')

  const options = root.querySelectorAll('.var-menu-option')
  const option2 = options[1]
  await trigger(option2, 'mouseenter')
  const option21 = options[2]
  const option22 = options[3]
  const option221 = options[4]
  const option222 = options[5]
  await trigger(option21, 'click')
  await trigger(option22, 'mouseenter')
  await trigger(option221, 'click')
  expect(wrapper.vm.modelValue).toStrictEqual([21, 221])
  await trigger(option222, 'click')
  expect(wrapper.vm.modelValue).toStrictEqual([2, 21, 22, 221, 222])
  await trigger(option222, 'click')
  expect(wrapper.vm.modelValue).toStrictEqual([21, 221])
  await trigger(option222, 'focus')
  await triggerKeyboard(window, 'keyup', { key: ' ' })
  expect(wrapper.vm.modelValue).toStrictEqual([2, 21, 22, 221, 222])

  const checkbox = option222.querySelector('.var-checkbox')
  await trigger(checkbox, 'click')
  await delay(0)
  expect(wrapper.vm.modelValue).toStrictEqual([21, 221])
  await trigger(option2, 'click')
  expect(wrapper.vm.modelValue).toStrictEqual([])
})

test('test menu-select cascade menu open and close', async () => {
  const root = document.createElement('div')

  const onUpdateModelValue = vi.fn((value) => {
    wrapper.setProps({ modelValue: value })
  })

  const wrapper = mount(VarMenuSelect, {
    props: {
      modelValue: [],
      'onUpdate:modelValue': onUpdateModelValue,
      teleport: root,
      multiple: true,
      options: [
        {
          label: 'Option 1',
          value: 1,
        },
        {
          label: 'Option 2',
          value: 2,
          children: [
            {
              label: 'Option 2-1',
              value: 21,
            },
            {
              label: 'Option 2-2',
              value: 22,
              children: [
                {
                  label: 'Option 2-2-1',
                  value: 221,
                },
                {
                  label: 'Option 2-2-2',
                  value: 222,
                },
              ],
            },
          ],
        },
        {
          label: 'Option 3',
          value: 3,
          disabled: true,
        },
      ],
    },
    slots: {
      default: () => h('button', { class: 'trigger' }, 'trigger'),
    },
  })

  await delay(0)
  expect(root.innerHTML).toMatchSnapshot()

  const button = wrapper.find('.trigger')
  await button.trigger('click')

  const options = root.querySelectorAll('.var-menu-option')
  const menus = root.querySelectorAll('.var-menu__menu')
  const option1 = options[0]
  const option2 = options[1]
  const option21 = options[2]
  const option2Menu = menus[1]
  await trigger(option2, 'focus')
  expect(option2Menu.style.display).toBe('none')
  await triggerKeyboard(window, 'keydown', { key: 'ArrowRight' })
  expect(option2Menu.style.display).not.toBe('none')
  await trigger(option21, 'focus')
  await triggerKeyboard(window, 'keydown', { key: 'ArrowLeft' })
  expect(option2Menu.style.display).toBe('none')

  await trigger(option2, 'mouseenter')
  expect(option2Menu.style.display).not.toBe('none')
  await trigger(option21, 'mouseenter')
  await trigger(option21, 'mouseleave')
  expect(option2Menu.style.display).not.toBe('none')
  await trigger(option1, 'mouseenter')
  expect(option2Menu.style.display).toBe('none')
})
