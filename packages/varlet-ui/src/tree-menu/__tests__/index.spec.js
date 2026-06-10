import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vite-plus/test'
import { createApp, h, nextTick } from 'vue'
import TreeMenu from '..'
import { delay, trigger } from '../../utils/test'
import VarTreeMenu from '../TreeMenu.vue'

const baseOptions = [
  {
    value: 'dashboard',
    label: 'Dashboard',
    icon: 'home',
    children: [
      { value: 'overview', label: 'Overview' },
      { value: 'reports', label: 'Reports' },
    ],
  },
  {
    value: 'settings',
    label: 'Settings',
    icon: 'cog',
    children: [
      { value: 'profile', label: 'Profile' },
      { value: 'security', label: 'Security' },
    ],
  },
]

const findItems = (wrapper) => wrapper.findAll('.var-tree-menu__item')
const findItemByText = (wrapper, text) => findItems(wrapper).find((item) => item.text().includes(text))

test('tree-menu plugin', () => {
  const app = createApp({}).use(TreeMenu)

  expect(app.component(TreeMenu.name)).toBeTruthy()
})

describe('tree-menu component api', () => {
  test('renders options, start and end slots', () => {
    const wrapper = mount(VarTreeMenu, {
      props: {
        options: baseOptions,
      },
      slots: {
        start: () => h('div', { class: 'start-slot' }, 'start'),
        end: () => h('div', { class: 'end-slot' }, 'end'),
      },
    })

    expect(wrapper.find('.var-tree-menu').exists()).toBe(true)
    expect(wrapper.find('.start-slot').text()).toBe('start')
    expect(wrapper.find('.end-slot').text()).toBe('end')
    expect(wrapper.text()).toContain('Dashboard')
    expect(wrapper.text()).toContain('Settings')
    wrapper.unmount()
  })

  test('renders group and divider options', () => {
    const wrapper = mount(VarTreeMenu, {
      props: {
        options: [
          {
            type: 'group',
            value: 'main-group',
            label: 'Main',
            children: [{ value: 'home', label: 'Home' }],
          },
          { type: 'divider' },
          { value: 'about', label: 'About' },
        ],
      },
    })

    expect(wrapper.find('.var-tree-menu__group-label').text()).toBe('Main')
    expect(wrapper.find('.var-tree-menu__divider').exists()).toBe(true)
    expect(findItems(wrapper)).toHaveLength(2)
    expect(findItemByText(wrapper, 'Home').attributes('style')).toContain('--tree-menu-level: 0')
    wrapper.unmount()
  })

  test('group and divider do not trigger select or toggle', async () => {
    const onUpdateActive = vi.fn()
    const onUpdateExpandedValues = vi.fn()
    const wrapper = mount(VarTreeMenu, {
      props: {
        options: [
          {
            type: 'group',
            value: 'group',
            label: 'Group',
            children: [{ value: 'home', label: 'Home' }],
          },
          { type: 'divider' },
        ],
        'onUpdate:active': onUpdateActive,
        'onUpdate:expandedValues': onUpdateExpandedValues,
      },
    })

    onUpdateExpandedValues.mockClear()

    await trigger(wrapper.find('.var-tree-menu__group-label'), 'click')
    await trigger(wrapper.find('.var-tree-menu__divider'), 'click')

    expect(onUpdateActive).toHaveBeenCalledTimes(0)
    expect(onUpdateExpandedValues).toHaveBeenCalledTimes(0)
    wrapper.unmount()
  })

  test('selects item, updates active and emits change', async () => {
    const onChange = vi.fn()
    const onUpdateActive = vi.fn()
    const wrapper = mount(VarTreeMenu, {
      props: {
        active: 'overview',
        options: baseOptions,
        'onUpdate:active': onUpdateActive,
        onChange,
      },
    })

    await nextTick()
    const reports = findItemByText(wrapper, 'Reports')

    expect(findItemByText(wrapper, 'Overview').classes()).toContain('var-tree-menu--item-active')
    expect(findItemByText(wrapper, 'Dashboard').classes()).toContain('var-tree-menu--item-active-path')
    await trigger(reports, 'click')

    expect(onUpdateActive).toHaveBeenCalledWith('reports')
    expect(onChange).toHaveBeenCalledWith('reports', baseOptions[0].children[1])

    await wrapper.setProps({ active: 'reports' })
    await trigger(reports, 'click')
    expect(onChange).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  })

  test('updates expanded values when toggling parent options', async () => {
    const onUpdateExpandedValues = vi.fn()
    const wrapper = mount(VarTreeMenu, {
      props: {
        options: baseOptions,
        expandedValues: [],
        'onUpdate:expandedValues': onUpdateExpandedValues,
      },
    })

    onUpdateExpandedValues.mockClear()

    await trigger(findItemByText(wrapper, 'Dashboard'), 'click')
    expect(onUpdateExpandedValues).toHaveBeenLastCalledWith(['dashboard'])

    await wrapper.setProps({ expandedValues: ['dashboard'] })
    expect(findItemByText(wrapper, 'Dashboard').find('.var-tree-menu--expand-icon-expanded').exists()).toBe(true)

    await trigger(findItemByText(wrapper, 'Dashboard'), 'click')
    expect(onUpdateExpandedValues).toHaveBeenLastCalledWith([])
    wrapper.unmount()
  })

  test('collapsed parent option does not mark expand icon as expanded', () => {
    const wrapper = mount(VarTreeMenu, {
      props: {
        options: baseOptions,
        expandedValues: [],
      },
    })

    expect(findItemByText(wrapper, 'Dashboard').find('.var-tree-menu--expand-icon-expanded').exists()).toBe(false)
    expect(findItemByText(wrapper, 'Overview').exists()).toBe(true)
    wrapper.unmount()
  })

  test('removes descendant expanded values when collapsing parent', async () => {
    const onUpdateExpandedValues = vi.fn()
    const wrapper = mount(VarTreeMenu, {
      props: {
        options: [
          {
            value: 'root',
            label: 'Root',
            children: [
              {
                value: 'child',
                label: 'Child',
                children: [{ value: 'leaf', label: 'Leaf' }],
              },
            ],
          },
        ],
        expandedValues: ['root', 'child'],
        'onUpdate:expandedValues': onUpdateExpandedValues,
      },
    })

    await trigger(findItemByText(wrapper, 'Root'), 'click')
    expect(onUpdateExpandedValues).toHaveBeenCalledWith([])
    wrapper.unmount()
  })

  test('accordion closes sibling options and descendants', async () => {
    const onUpdateExpandedValues = vi.fn()
    const wrapper = mount(VarTreeMenu, {
      props: {
        accordion: true,
        options: baseOptions,
        expandedValues: ['dashboard', 'overview'],
        'onUpdate:expandedValues': onUpdateExpandedValues,
      },
    })

    await trigger(findItemByText(wrapper, 'Settings'), 'click')
    expect(onUpdateExpandedValues).toHaveBeenCalledWith(['settings'])
    wrapper.unmount()
  })

  test('active value expands ancestors and clearing active clears expanded values', async () => {
    const onUpdateExpandedValues = vi.fn()
    const wrapper = mount(VarTreeMenu, {
      props: {
        active: 'reports',
        options: baseOptions,
        expandedValues: [],
        'onUpdate:expandedValues': onUpdateExpandedValues,
      },
    })

    await delay(0)
    expect(onUpdateExpandedValues).toHaveBeenCalledWith(['dashboard'])

    await wrapper.setProps({ active: undefined })
    await delay(0)
    expect(onUpdateExpandedValues).toHaveBeenLastCalledWith([])
    wrapper.unmount()
  })

  test('unknown active value does not change expanded values', async () => {
    const onUpdateExpandedValues = vi.fn()
    const wrapper = mount(VarTreeMenu, {
      props: {
        active: 'missing',
        options: baseOptions,
        expandedValues: ['dashboard'],
        'onUpdate:expandedValues': onUpdateExpandedValues,
      },
    })

    await delay(0)
    expect(onUpdateExpandedValues).toHaveBeenCalledTimes(0)
    wrapper.unmount()
  })

  test('supports uncontrolled active and expanded values with v-model', async () => {
    const wrapper = mount({
      components: {
        [VarTreeMenu.name]: VarTreeMenu,
      },
      data: () => ({
        active: undefined,
        expandedValues: [],
        options: baseOptions,
      }),
      template: `
        <var-tree-menu
          v-model:active="active"
          v-model:expanded-values="expandedValues"
          :options="options"
        />
      `,
    })

    await trigger(findItemByText(wrapper, 'Dashboard'), 'click')
    expect(wrapper.vm.expandedValues).toEqual(['dashboard'])

    await trigger(findItemByText(wrapper, 'Reports'), 'click')
    expect(wrapper.vm.active).toBe('reports')
    expect(wrapper.vm.expandedValues).toEqual(['dashboard'])
    wrapper.unmount()
  })

  test('supports custom value, label, icon and children keys', async () => {
    const onChange = vi.fn()
    const wrapper = mount(VarTreeMenu, {
      props: {
        valueKey: 'id',
        labelKey: 'title',
        iconKey: 'leadingIcon',
        childrenKey: 'nodes',
        options: [
          {
            id: 'root',
            title: 'Root',
            leadingIcon: 'folder',
            nodes: [{ id: 'leaf', title: 'Leaf' }],
          },
        ],
        onChange,
      },
    })

    expect(wrapper.find('.var-icon').classes()).toContain('var-tree-menu__icon')
    await trigger(findItemByText(wrapper, 'Root'), 'click')
    await trigger(findItemByText(wrapper, 'Leaf'), 'click')
    expect(onChange).toHaveBeenCalledWith('leaf', {
      id: 'leaf',
      title: 'Leaf',
    })
    wrapper.unmount()
  })

  test('passes namespace to string icon', () => {
    const wrapper = mount(VarTreeMenu, {
      props: {
        options: [{ value: 'home', label: 'Home', icon: 'home', namespace: 'custom-icons' }],
      },
    })

    expect(wrapper.findComponent({ name: 'VarIcon' }).props('namespace')).toBe('custom-icons')
    wrapper.unmount()
  })

  test('uses index as fallback option value', async () => {
    const onUpdateActive = vi.fn()
    const wrapper = mount(VarTreeMenu, {
      props: {
        options: [{ label: 'First' }, { label: 'Second' }],
        'onUpdate:active': onUpdateActive,
      },
    })

    await trigger(findItemByText(wrapper, 'Second'), 'click')
    expect(onUpdateActive).toHaveBeenCalledWith(1)
    wrapper.unmount()
  })

  test('supports render functions for label and icon', () => {
    const label = vi.fn((option, active) => h('span', { class: 'custom-label' }, `${option.value}-${active}`))
    const icon = vi.fn((option, active) => h('span', { class: 'custom-icon' }, `${option.value}-${active}`))
    const option = { value: 'custom', label, icon }
    const wrapper = mount(VarTreeMenu, {
      props: {
        active: 'custom',
        options: [option],
      },
    })

    expect(wrapper.find('.custom-label').text()).toBe('custom-true')
    expect(wrapper.find('.custom-icon').text()).toBe('custom-true')
    expect(label).toHaveBeenCalledWith(option, true)
    expect(icon).toHaveBeenCalledWith(option, true)
    wrapper.unmount()
  })

  test('supports render function for option item', async () => {
    const render = vi.fn((option, active, { node }) =>
      h('a', { class: ['custom-link', active && 'custom-link--active'], href: option.href }, [node]),
    )
    const option = { value: 'docs', label: 'Docs', icon: 'book', href: '/docs', render }
    const onUpdateActive = vi.fn()
    const wrapper = mount(VarTreeMenu, {
      props: {
        options: [option],
        'onUpdate:active': onUpdateActive,
      },
    })
    const link = wrapper.find('.custom-link')
    const item = wrapper.find('.var-tree-menu__item')

    expect(link.attributes('href')).toBe('/docs')
    expect(item.exists()).toBe(true)
    expect(item.text()).toContain('Docs')
    expect(render).toHaveBeenCalledWith(option, false, { node: expect.any(Object) })

    await trigger(item, 'click')
    expect(onUpdateActive).toHaveBeenCalledWith('docs')
    wrapper.unmount()
  })

  test('supports vnode label and icon', () => {
    const wrapper = mount(VarTreeMenu, {
      props: {
        options: [
          {
            value: 'vnode',
            label: h('span', { class: 'vnode-label' }, 'VNode Label'),
            icon: h('span', { class: 'vnode-icon' }, 'VNode Icon'),
          },
        ],
      },
    })

    expect(wrapper.find('.vnode-label').text()).toBe('VNode Label')
    expect(wrapper.find('.vnode-icon').text()).toBe('VNode Icon')
    wrapper.unmount()
  })

  test('disabled option blocks select and toggle', async () => {
    const onChange = vi.fn()
    const onUpdateActive = vi.fn()
    const onUpdateExpandedValues = vi.fn()
    const wrapper = mount(VarTreeMenu, {
      props: {
        options: [
          { value: 'disabled-leaf', label: 'Disabled Leaf', disabled: true },
          {
            value: 'disabled-parent',
            label: 'Disabled Parent',
            disabled: true,
            children: [{ value: 'child', label: 'Child' }],
          },
        ],
        onChange,
        'onUpdate:active': onUpdateActive,
        'onUpdate:expandedValues': onUpdateExpandedValues,
      },
    })

    const disabledLeaf = findItemByText(wrapper, 'Disabled Leaf')
    const disabledParent = findItemByText(wrapper, 'Disabled Parent')

    expect(disabledLeaf.classes()).toContain('var-tree-menu--item-disabled')

    onUpdateExpandedValues.mockClear()

    await trigger(disabledLeaf, 'click')
    await trigger(disabledParent, 'click')

    expect(onChange).toHaveBeenCalledTimes(0)
    expect(onUpdateActive).toHaveBeenCalledTimes(0)
    expect(onUpdateExpandedValues).toHaveBeenCalledTimes(0)
    wrapper.unmount()
  })

  test('disabled prop disables all options', async () => {
    const onUpdateActive = vi.fn()
    const wrapper = mount(VarTreeMenu, {
      props: {
        disabled: true,
        options: [{ value: 'home', label: 'Home' }],
        'onUpdate:active': onUpdateActive,
      },
    })

    const item = findItemByText(wrapper, 'Home')

    expect(item.classes()).toContain('var-tree-menu--item-disabled')
    await trigger(item, 'click')
    expect(onUpdateActive).toHaveBeenCalledTimes(0)
    wrapper.unmount()
  })

  test('ripple prop only applies to enabled options', () => {
    const wrapper = mount(VarTreeMenu, {
      props: {
        ripple: true,
        options: [
          { value: 'enabled', label: 'Enabled' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ],
      },
    })

    expect(findItemByText(wrapper, 'Enabled').classes()).toContain('var-tree-menu--item-ripple-enabled')
    expect(findItemByText(wrapper, 'Disabled').classes()).not.toContain('var-tree-menu--item-ripple-enabled')
    wrapper.unmount()
  })

  test('indent prop sets item indent css variable', () => {
    const wrapper = mount(VarTreeMenu, {
      props: {
        indent: 24,
        options: [{ value: 'home', label: 'Home' }],
      },
    })

    expect(wrapper.attributes('style')).toContain('--tree-menu-item-indent: 24px')
    wrapper.unmount()
  })

  test('indent prop supports string size', () => {
    const wrapper = mount(VarTreeMenu, {
      props: {
        indent: '2rem',
        options: [{ value: 'home', label: 'Home' }],
      },
    })

    expect(wrapper.attributes('style')).toContain('--tree-menu-item-indent: 2rem')
    wrapper.unmount()
  })
})
