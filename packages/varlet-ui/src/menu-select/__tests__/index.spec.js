import { readFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vite-plus/test'
import { createApp, Fragment, h } from 'vue'
import MenuSelect from '..'
import MenuOption from '../../menu-option'
import VarMenuOption from '../../menu-option/MenuOption'
import { delay, mockStubs, trigger, triggerKeyboard } from '../../utils/test'
import VarMenuSelect from '../MenuSelect'

test('menu-select plugin', () => {
  const app = createApp({}).use(MenuSelect)
  expect(app.component(MenuSelect.name)).toBeTruthy()
})

test('menu-option plugin', () => {
  const app = createApp({}).use(MenuOption)
  expect(app.component(MenuOption.name)).toBeTruthy()
})

test('menu-select size', () => {
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

test('menu-select scrollable', () => {
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

test('menu-select modelValue', async () => {
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

test('menu-select multiple', async () => {
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

test('menu-select closeOnSelect', async () => {
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

test('menu-option disabled', async () => {
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

test('menu-select value mapping', async () => {
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

test('menu-option default slot', () => {
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

test('menu-select methods', async () => {
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

test('menu-select keyboard ArrowDown and Enter', async () => {
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

test('menu-select keyboard ArrowUp and Enter', async () => {
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

test('menu-select keyboard Escape', async () => {
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

test('menu-select options api', async () => {
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

test('menu-select multiple options api', async () => {
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

test('menu-select label-key', async () => {
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

test('menu-select value-key', async () => {
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

test('menu-select cascade', async () => {
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

test('menu-select cascade multiple mode', async () => {
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

test('menu-select cascade menu open and close', async () => {
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

test('menu-select radius follows dynamic changes through every cascading popup', async () => {
  const root = document.createElement('div')
  const wrapper = mount(VarMenuSelect, {
    props: {
      show: true,
      teleport: root,
      options: [
        {
          label: 'Parent',
          value: 1,
          children: [{ label: 'Child', value: 2, children: [{ label: 'Leaf', value: 3 }] }],
        },
      ],
    },
    slots: { default: () => h('button', { class: 'radius-trigger' }, 'Trigger') },
  })

  try {
    const menu = root.querySelector('.var-menu-select__menu')
    const defaultClasses = menu.className
    expect(wrapper.props('radius')).toBe('normal')
    await wrapper.setProps({ radius: 'normal' })
    expect(menu.className).toBe(defaultClasses)
    expect(root.querySelectorAll('.var-menu__menu')).toHaveLength(3)

    const radius = 'large'
    await wrapper.setProps({ radius })
    expect(menu.classList.contains(`var-menu-select--radius-${radius}`)).toBe(true)
    const popups = root.querySelectorAll('.var-menu__menu')
    for (const popup of popups) {
      expect(popup.classList.contains(`var-menu--radius-${radius}`)).toBe(true)
    }
    expect(wrapper.classes()).not.toContain(`var-menu-select--radius-${radius}`)
    expect(wrapper.find('.radius-trigger').classes()).not.toContain(`var-menu--radius-${radius}`)

    await trigger(root.querySelectorAll('.var-menu-option')[0], 'mouseenter')
    await trigger(root.querySelectorAll('.var-menu-option')[1], 'mouseenter')
    await delay(300)
    expect(popups[1].style.display).not.toBe('none')
    expect(popups[2].style.display).not.toBe('none')
    await wrapper.setProps({ radius: 'normal' })
    expect(menu.className).toBe(defaultClasses)
    for (const popup of popups) {
      expect(popup.className).not.toContain('--radius-')
    }
  } finally {
    wrapper.unmount()
  }
})

test('menu-select state backgrounds follow the compiled popup edge corners without clipping cascades', async () => {
  const dependencyRequire = createRequire(import.meta.url)
  const less = createRequire(dependencyRequire.resolve('@varlet/cli'))('less')
  const source = (
    await Promise.all(
      ['../menuSelect.less', '../../hover-overlay/hoverOverlay.less', '../../ripple/ripple.less'].map(
        async (path) => await readFile(dependencyRequire.resolve(path), 'utf8'),
      ),
    )
  ).join('\n')
  const { css } = await less.render(source)
  const stylesheet = document.createElement('style')
  stylesheet.textContent = css
  document.head.appendChild(stylesheet)

  try {
    expect(css).not.toMatch(/overflow[^;]*hidden/)
    for (const kind of ['direct', 'fragment', 'wrapper', 'single', 'cascade']) {
      const root = document.createElement('div')
      document.body.appendChild(root)
      const options =
        kind === 'single'
          ? [{ label: 'Only', value: 1, disabled: true }]
          : kind === 'cascade'
            ? [
                {
                  label: 'First branch',
                  value: 1,
                  children: [
                    { label: 'Nested branch', value: 11, children: [{ label: 'Leaf', value: 111, disabled: true }] },
                    { label: 'Last child', value: 12 },
                  ],
                },
                { label: 'Middle', value: 2 },
                { label: 'Last branch', value: 3, children: [{ label: 'Last leaf', value: 31 }] },
              ]
            : [
                { label: 'First', value: 1 },
                { label: 'Middle', value: 2 },
                { label: 'Last', value: 3, disabled: true },
              ]
      const wrapper = mount(VarMenuSelect, {
        props: {
          modelValue: 1,
          show: true,
          teleport: root,
          options: kind === 'wrapper' || kind === 'fragment' ? [] : options,
        },
        slots: {
          default: () => h('button', 'Trigger'),
          ...(kind === 'wrapper' || kind === 'fragment'
            ? {
                options: () =>
                  kind === 'fragment'
                    ? h(
                        Fragment,
                        options.map((option) => h(VarMenuOption, option)),
                      )
                    : h(
                        'div',
                        { class: 'approval-options', style: '--menu-option-normal-height:auto' },
                        options.map((option) => h(VarMenuOption, option)),
                      ),
              }
            : {}),
        },
      })

      try {
        const radius = 'large'
        await wrapper.setProps({ radius })
        const menus = root.querySelectorAll(`.var-menu-select__menu, .var-menu-children--radius-${radius}`)
        expect(menus.length).toBe(kind === 'cascade' ? 4 : 1)
        for (const menu of menus) {
          const rows = Array.from((menu.querySelector(':scope > .approval-options') ?? menu).children).map((entry) =>
            entry.classList.contains('var-menu-children') ? entry.querySelector(':scope > .var-menu-option') : entry,
          )
          const prefix = menu.classList.contains('var-menu-select__menu') ? 'menu-select-menu' : 'menu'
          const expectedRadius = 'var(--menu-select-option-border-radius)'
          expect(getComputedStyle(menu).getPropertyValue('--menu-select-option-border-radius')).toBe(
            `var(--${prefix}-${radius}-border-radius)`,
          )
          expect(getComputedStyle(rows[0]).borderTopLeftRadius).toBe(expectedRadius)
          expect(getComputedStyle(rows[0]).borderTopRightRadius).toBe(expectedRadius)
          expect(getComputedStyle(rows.at(-1)).borderBottomLeftRadius).toBe(expectedRadius)
          expect(getComputedStyle(rows.at(-1)).borderBottomRightRadius).toBe(expectedRadius)
          expect(getComputedStyle(rows[0].querySelector('.var-menu-option__cover')).borderRadius).toBe('inherit')
          if (rows.length > 1) {
            expect(getComputedStyle(rows[0]).borderBottomLeftRadius).not.toBe(expectedRadius)
            expect(getComputedStyle(rows.at(-1)).borderTopLeftRadius).not.toBe(expectedRadius)
          }
          if (rows.length > 2) {
            expect(getComputedStyle(rows[1]).borderRadius).toBe('')
          }
          expect(getComputedStyle(menu).overflow).not.toBe('hidden')
        }
        const first = root.querySelector('.var-menu-option')
        if (!first.classList.contains('var-menu-option--disabled')) {
          await trigger(first, 'focus')
          const overlay = first.querySelector('.var-hover-overlay')
          expect(overlay.classList.contains('var-hover-overlay--focusing')).toBe(true)
          expect(getComputedStyle(overlay).borderRadius).toBe('inherit')
          await trigger(first, 'touchstart', 10, 10)
          await delay(50)
          expect(first.querySelector(':scope > .var-ripple')).not.toBeNull()
          expect(first.style.overflow).toBe('hidden')
          expect(getComputedStyle(first.parentElement).overflow).not.toBe('hidden')
        }
        if (kind === 'direct' || kind === 'fragment' || kind === 'wrapper') {
          expect(
            first.querySelector('.var-menu-option__cover').classList.contains('var-menu-option--selected-background'),
          ).toBe(true)
        }
        for (const host of root.querySelectorAll(`.var-menu-children--menu-radius-${radius}`)) {
          expect(getComputedStyle(host).getPropertyValue(`--menu-${radius}-border-radius`)).toBe(
            `var(--menu-select-menu-${radius}-border-radius)`,
          )
        }
        if (kind === 'cascade') {
          const branches = root.querySelectorAll('.var-menu-children > .var-menu-option')
          await trigger(branches[0], 'mouseenter')
          await trigger(branches[1], 'mouseenter')
          await delay(300)
          const popups = root.querySelectorAll('.var-menu__menu')
          expect(popups[1].style.display).not.toBe('none')
          expect(popups[2].style.display).not.toBe('none')
        }
        await wrapper.setProps({ radius: 'normal' })
        for (const option of root.querySelectorAll('.var-menu-option')) {
          expect(getComputedStyle(option).borderTopLeftRadius).toBe('')
          expect(getComputedStyle(option).borderBottomLeftRadius).toBe('')
        }
        expect(root.querySelector('[class*="--radius-"], [class*="--menu-radius-"]')).toBeNull()
      } finally {
        wrapper.unmount()
        root.remove()
      }
    }
  } finally {
    stylesheet.remove()
  }
})
