import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vite-plus/test'
import { createApp } from 'vue'
import RailNavigation from '..'
import RailNavigationItem from '../../rail-navigation-item'
import VarRailNavigationItem from '../../rail-navigation-item/RailNavigationItem.vue'
import Themes from '../../themes'
import { delay, trigger } from '../../utils/test'
import VarRailNavigation from '../RailNavigation.vue'

const components = {
  [VarRailNavigation.name]: VarRailNavigation,
  [VarRailNavigationItem.name]: VarRailNavigationItem,
}

function readProjectFile(path) {
  return readFileSync(resolve(process.cwd(), path), 'utf-8')
}

test('rail-navigation plugin', () => {
  const app = createApp({}).use(RailNavigation).use(RailNavigationItem)

  expect(app.component(RailNavigation.name)).toBeTruthy()
  expect(app.component(RailNavigationItem.name)).toBeTruthy()
})

describe('rail-navigation component api', () => {
  test('renders default, start and end slots', () => {
    const wrapper = mount({
      components,
      data: () => ({ active: 0 }),
      template: `
        <var-rail-navigation v-model:active="active">
          <template #start><span class="start">start</span></template>
          <var-rail-navigation-item label="Home" icon="home" />
          <template #end><span class="end">end</span></template>
        </var-rail-navigation>
      `,
    })

    expect(wrapper.find('.var-rail-navigation').exists()).toBe(true)
    expect(wrapper.findAll('.var-rail-navigation__section')).toHaveLength(2)
    expect(wrapper.find('.var-rail-navigation__start').exists()).toBe(true)
    expect(wrapper.find('.var-rail-navigation__end').exists()).toBe(true)
    expect(wrapper.find('.var-rail-navigation__content').exists()).toBe(true)
    expect(wrapper.find('.start').text()).toBe('start')
    expect(wrapper.find('.end').text()).toBe('end')
    expect(wrapper.find('.var-rail-navigation-item').exists()).toBe(true)
    wrapper.unmount()
  })

  test('active and change by index', async () => {
    const handleChange = vi.fn()
    const wrapper = mount({
      components,
      data: () => ({ active: 0 }),
      methods: { handleChange },
      template: `
        <var-rail-navigation v-model:active="active" @change="handleChange">
          <var-rail-navigation-item label="Home" icon="home" />
          <var-rail-navigation-item label="Search" icon="magnify" />
        </var-rail-navigation>
      `,
    })

    await delay(16)
    const items = wrapper.findAll('.var-rail-navigation-item')

    expect(items[0].classes()).toContain('var-rail-navigation-item--active')
    await trigger(items[1], 'click')
    expect(wrapper.vm.active).toBe(1)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenLastCalledWith(1)
    expect(items[1].classes()).toContain('var-rail-navigation-item--active')

    await trigger(items[1], 'click')
    expect(handleChange).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  })

  test('active and change by name', async () => {
    const wrapper = mount({
      components,
      data: () => ({ active: 'home' }),
      template: `
        <var-rail-navigation v-model:active="active">
          <var-rail-navigation-item name="home" label="Home" icon="home" />
          <var-rail-navigation-item name="account" label="Account" icon="account-circle" />
        </var-rail-navigation>
      `,
    })

    await delay(16)
    const items = wrapper.findAll('.var-rail-navigation-item')

    expect(items[0].classes()).toContain('var-rail-navigation-item--active')
    await trigger(items[1], 'click')
    expect(wrapper.vm.active).toBe('account')
    expect(items[1].classes()).toContain('var-rail-navigation-item--active')
    wrapper.unmount()
  })

  test('update:active event', async () => {
    const handleUpdate = vi.fn()
    const wrapper = mount({
      components,
      data: () => ({ active: 0 }),
      methods: {
        handleUpdate,
      },
      template: `
        <var-rail-navigation :active="active" @update:active="handleUpdate">
          <var-rail-navigation-item label="Home" icon="home" />
          <var-rail-navigation-item label="Search" icon="magnify" />
        </var-rail-navigation>
      `,
    })

    await delay(16)
    await trigger(wrapper.findAll('.var-rail-navigation-item')[1], 'click')
    expect(handleUpdate).toHaveBeenCalledTimes(1)
    expect(handleUpdate).toHaveBeenLastCalledWith(1)
    wrapper.unmount()
  })

  test('rail-navigation-item click event', async () => {
    const handleClick = vi.fn()
    const wrapper = mount({
      components,
      data: () => ({ active: 0 }),
      methods: { handleClick },
      template: `
        <var-rail-navigation v-model:active="active">
          <var-rail-navigation-item name="home" label="Home" icon="home" @click="handleClick" />
        </var-rail-navigation>
      `,
    })

    await delay(16)
    await trigger(wrapper.find('.var-rail-navigation-item'), 'click')
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleClick).toHaveBeenLastCalledWith('home')
    wrapper.unmount()
  })

  test('disabled item blocks click and active change', async () => {
    const handleClick = vi.fn()
    const handleChange = vi.fn()
    const wrapper = mount({
      components,
      data: () => ({ active: 0 }),
      methods: { handleClick, handleChange },
      template: `
        <var-rail-navigation v-model:active="active" @change="handleChange">
          <var-rail-navigation-item label="Home" icon="home" />
          <var-rail-navigation-item label="Search" icon="magnify" disabled @click="handleClick" />
        </var-rail-navigation>
      `,
    })
    await delay(16)
    const disabledItem = wrapper.findAll('.var-rail-navigation-item')[1]

    expect(disabledItem.classes()).toContain('var-rail-navigation-item--disabled')
    expect(disabledItem.attributes('aria-disabled')).toBe('true')
    await trigger(disabledItem, 'click')
    expect(wrapper.vm.active).toBe(0)
    expect(handleClick).toHaveBeenCalledTimes(0)
    expect(handleChange).toHaveBeenCalledTimes(0)
    wrapper.unmount()
  })

  test('ripple prop', async () => {
    const wrapper = mount({
      components,
      data: () => ({ active: 0, ripple: true }),
      template: `
        <var-rail-navigation v-model:active="active" :ripple="ripple">
          <var-rail-navigation-item label="Home" icon="home" />
        </var-rail-navigation>
      `,
    })
    const item = wrapper.find('.var-rail-navigation-item')

    await trigger(item, 'touchstart')
    await delay(250)
    expect(item.find('.var-ripple').exists()).toBe(true)
    await trigger(document, 'touchend')
    await delay(500)
    expect(item.find('.var-ripple').exists()).toBe(false)

    await wrapper.setData({ ripple: false })
    await trigger(item, 'touchstart')
    await delay(250)
    expect(item.find('.var-ripple').exists()).toBe(false)
    wrapper.unmount()
  })

  test('badge prop', () => {
    const wrapper = mount({
      components,
      data: () => ({ active: 0 }),
      template: `
        <var-rail-navigation v-model:active="active">
          <var-rail-navigation-item label="Home" icon="home" badge />
          <var-rail-navigation-item label="Search" icon="magnify" :badge="{ type: 'primary', value: 6 }" />
        </var-rail-navigation>
      `,
    })
    const badges = wrapper.findAll('.var-badge')

    expect(badges).toHaveLength(2)
    expect(wrapper.text()).toContain('6')
    wrapper.unmount()
  })

  test('icon and namespace props', () => {
    const wrapper = mount({
      components,
      data: () => ({ active: 0 }),
      template: `
        <var-rail-navigation v-model:active="active">
          <var-rail-navigation-item label="Home" icon="home" namespace="custom-icon" />
        </var-rail-navigation>
      `,
    })
    const icon = wrapper.find('i')

    expect(icon.classes()).toContain('custom-icon')
    expect(icon.classes()).toContain('custom-icon--set')
    expect(icon.classes()).toContain('custom-icon-home')
    wrapper.unmount()
  })

  test('default and icon slot props', async () => {
    const wrapper = mount({
      components,
      data: () => ({ active: 0 }),
      template: `
        <var-rail-navigation v-model:active="active">
          <var-rail-navigation-item>
            <template #icon="{ active }">
              <span class="custom-icon">{{ active ? 'active-icon' : 'inactive-icon' }}</span>
            </template>
            <template #default="{ active }">
              <span class="custom-label">{{ active ? 'active-label' : 'inactive-label' }}</span>
            </template>
          </var-rail-navigation-item>
        </var-rail-navigation>
      `,
    })

    await delay(16)
    expect(wrapper.find('.custom-icon').text()).toBe('active-icon')
    expect(wrapper.find('.custom-label').text()).toBe('active-label')
    wrapper.unmount()
  })

  test('item is not focusable by default', () => {
    const wrapper = mount({
      components,
      data: () => ({ active: 0 }),
      template: `
        <var-rail-navigation v-model:active="active">
          <var-rail-navigation-item label="Home" icon="home" />
        </var-rail-navigation>
      `,
    })
    const item = wrapper.find('.var-rail-navigation-item')

    expect(item.attributes('tabindex')).toBeUndefined()
    expect(item.attributes('aria-current')).toBeUndefined()
    expect(item.attributes('role')).toBe('button')
    wrapper.unmount()
  })
})

describe('rail-navigation public contract', () => {
  test('types expose public props and slots', () => {
    const railNavigationTypes = readProjectFile('types/railNavigation.d.ts')
    const railNavigationItemTypes = readProjectFile('types/railNavigationItem.d.ts')
    const styleVarsTypes = readProjectFile('types/styleVars.d.ts')

    expect(railNavigationTypes).toContain('active?: number | string')
    expect(railNavigationTypes).toContain('ripple?: boolean')
    expect(railNavigationTypes).toContain('onChange?: ListenerProp<(active: number | string) => void>')
    expect(railNavigationTypes).toContain("'onUpdate:active'?: ListenerProp<(active: number | string) => void>")
    expect(railNavigationTypes).toContain('default(): VNode[]')
    expect(railNavigationTypes).toContain('start(): VNode[]')
    expect(railNavigationTypes).toContain('end(): VNode[]')

    expect(railNavigationItemTypes).toContain('active: boolean')
    expect(railNavigationItemTypes).toContain('name?: number | string')
    expect(railNavigationItemTypes).toContain('label?: string')
    expect(railNavigationItemTypes).toContain('icon?: string')
    expect(railNavigationItemTypes).toContain('namespace?: string')
    expect(railNavigationItemTypes).toContain('badge?: boolean | BadgeProps')
    expect(railNavigationItemTypes).toContain('disabled?: boolean')
    expect(railNavigationItemTypes).toContain('onClick?: ListenerProp<(active: number | string) => void>')
    expect(railNavigationItemTypes).toContain('default(context: RailNavigationItemSlotContext): VNode[]')
    expect(railNavigationItemTypes).toContain('icon(context: RailNavigationItemSlotContext): VNode[]')

    expect(styleVarsTypes).toContain("'--rail-navigation-section-padding'?: string")
    expect(styleVarsTypes).toContain("'--rail-navigation-start-padding'?: string")
    expect(styleVarsTypes).toContain("'--rail-navigation-end-padding'?: string")
    expect(styleVarsTypes).toContain("'--rail-navigation-item-gap'?: string")
    expect(styleVarsTypes).toContain("'--rail-navigation-item-indicator-active-background'?: string")
  })

  test('default style and three theme objects expose rail-navigation variables', () => {
    const railNavigationStyles = readProjectFile('src/rail-navigation/railNavigation.less')
    const railNavigationItemStyles = readProjectFile('src/rail-navigation-item/railNavigationItem.less')
    const railNavigationKeys = [
      '--rail-navigation-background',
      '--rail-navigation-text-color',
      '--rail-navigation-section-padding',
      '--rail-navigation-start-padding',
      '--rail-navigation-end-padding',
      '--rail-navigation-item-gap',
    ]
    const railNavigationItemKeys = [
      '--rail-navigation-item-indicator-hover-background',
      '--rail-navigation-item-indicator-active-background',
      '--rail-navigation-item-active-text-color',
    ]

    railNavigationKeys.forEach((key) => {
      expect(railNavigationStyles).toContain(key)
    })
    railNavigationItemKeys.forEach((key) => {
      expect(railNavigationItemStyles).toContain(key)
    })
    expect(railNavigationItemStyles).toContain('&--active &__indicator::after')

    ;[Themes.dark, Themes.md3Light, Themes.md3Dark].forEach((theme) => {
      railNavigationKeys.concat(railNavigationItemKeys).forEach((key) => {
        expect(theme).toHaveProperty(key)
      })
    })
  })

  test('docs and example stay aligned', () => {
    const example = readProjectFile('src/rail-navigation/example/index.vue')
    const enUS = readProjectFile('src/rail-navigation/docs/en-US.md')
    const zhCN = readProjectFile('src/rail-navigation/docs/zh-CN.md')
    const enLocale = readProjectFile('src/rail-navigation/example/locale/en-US.ts')
    const zhLocale = readProjectFile('src/rail-navigation/example/locale/zh-CN.ts')

    ;[
      'Basic Usage',
      'Ripple',
      'Match By Name',
      'Disabled',
      'Badge',
      'Change Event',
      'Click Event',
      'Slots',
      'Custom Navigation',
    ].forEach((title) => {
      expect(enUS).toContain(`### ${title}`)
    })
    ;[
      '基本使用',
      '水波效果',
      '通过名称匹配',
      '禁用选项',
      '徽标提示',
      '监听切换事件',
      '监听点击事件',
      '插槽',
      '自定义导航',
    ].forEach((title) => {
      expect(zhCN).toContain(`### ${title}`)
    })

    ;[example, enUS, zhCN].forEach((source) => {
      expect(source).toContain('ripple')
      expect(source).toContain('outline text fab round')
      expect(source).toContain('min-height: 400px')
      expect(source).not.toContain('profileAction')
      expect(source).not.toContain('rail-navigation-avatar')
    })

    expect(enLocale).not.toContain('Profile')
    expect(enLocale).not.toContain('Logout')
    expect(zhLocale).not.toContain('个人资料')
    expect(zhLocale).not.toContain('退出登录')
  })
})
