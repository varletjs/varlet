import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vite-plus/test'
import { createApp } from 'vue'
import BottomNavigation from '..'
import BottomNavigationItem from '../../bottom-navigation-item'
import VarBottomNavigationItem from '../../bottom-navigation-item/BottomNavigationItem'
import { delay, trigger } from '../../utils/test'
import VarBottomNavigation from '../BottomNavigation'

const Wrapper = {
  components: {
    [VarBottomNavigation.name]: VarBottomNavigation,
    [VarBottomNavigationItem.name]: VarBottomNavigationItem,
  },
  data: () => ({
    active: 0,
  }),
  template: `
    <var-bottom-navigation v-model:active="active">
      <template #fab>
        <span>home</span>
      </template>
      <var-bottom-navigation-item label="tag 1" icon="home" name="home" :badge="{ dot: true, value: 10 }" />
      <var-bottom-navigation-item label="tag 2" icon="magnify" />
      <var-bottom-navigation-item label="tag 3" icon="heart" />
      <var-bottom-navigation-item label="tag 4" icon="account-circle" />
    </var-bottom-navigation>
  `,
}

test('bottom-navigation plugin', () => {
  const app = createApp({}).use(BottomNavigation).use(BottomNavigationItem)
  expect(app.component(BottomNavigation.name)).toBeTruthy()
  expect(app.component(BottomNavigationItem.name)).toBeTruthy()
})

describe('test bottom-navigation events', () => {
  test('bottom-navigation change event', async () => {
    let dummy
    const handleChange = vi.fn((active) => {
      dummy = active
    })
    const wrapper = mount({
      components: {
        [VarBottomNavigation.name]: VarBottomNavigation,
        [VarBottomNavigationItem.name]: VarBottomNavigationItem,
      },
      data: () => ({
        active: 0,
      }),
      methods: {
        handleChange,
      },
      template: `
        <var-bottom-navigation v-model:active="active" @change="handleChange">
          <var-bottom-navigation-item label="tag 1" icon="home" />
          <var-bottom-navigation-item label="tag 2" icon="magnify" />
        </var-bottom-navigation>
      `,
    })

    await delay(16)
    await trigger(wrapper.findAll('.var-bottom-navigation-item')[1], 'click')
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(dummy).toBe(1)

    await trigger(wrapper.findAll('.var-bottom-navigation-item')[1], 'click')
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(dummy).toBe(1)
    wrapper.unmount()
  })

  test('bottom-navigation click event', async () => {
    let dummy
    const handleClick = vi.fn((active) => {
      dummy = active
    })
    const wrapper = mount({
      components: {
        [VarBottomNavigation.name]: VarBottomNavigation,
        [VarBottomNavigationItem.name]: VarBottomNavigationItem,
      },
      data: () => ({
        active: 0,
      }),
      methods: {
        handleClick,
      },
      template: `
        <var-bottom-navigation v-model:active="active">
          <var-bottom-navigation-item label="tag 1" icon="home" />
          <var-bottom-navigation-item label="tag 2" icon="magnify" @click="handleClick" />
        </var-bottom-navigation>
      `,
    })

    await delay(16)
    await trigger(wrapper.findAll('.var-bottom-navigation-item')[1], 'click')
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(dummy).toBe(1)
    wrapper.unmount()
  })

  test('bottom-navigation before-change event', async () => {
    const handleBeforeChange = vi.fn(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(true)
          }, 200)
        }),
    )
    const wrapper = mount({
      components: {
        [VarBottomNavigation.name]: VarBottomNavigation,
        [VarBottomNavigationItem.name]: VarBottomNavigationItem,
      },
      data: () => ({
        active: 0,
      }),
      methods: {
        handleBeforeChange,
      },
      template: `
        <var-bottom-navigation v-model:active="active" @before-change="handleBeforeChange">
          <var-bottom-navigation-item label="tag 1" icon="home" />
          <var-bottom-navigation-item label="tag 2" icon="magnify" />
        </var-bottom-navigation>
      `,
    })

    await delay(16)
    await trigger(wrapper.findAll('.var-bottom-navigation-item')[1], 'click')
    expect(handleBeforeChange).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.active).toBe(0)
    await delay(200)
    expect(wrapper.vm.active).toBe(1)

    await trigger(wrapper.findAll('.var-bottom-navigation-item')[1], 'click')
    expect(handleBeforeChange).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.active).toBe(1)
    await delay(200)
    expect(wrapper.vm.active).toBe(1)

    wrapper.unmount()
  })

  test('bottom-navigation before-change rejects update', async () => {
    const handleBeforeChange = vi.fn(() => [true, false])
    const onUpdateActive = vi.fn()
    const wrapper = mount({
      components: {
        [VarBottomNavigation.name]: VarBottomNavigation,
        [VarBottomNavigationItem.name]: VarBottomNavigationItem,
      },
      data: () => ({
        active: 0,
      }),
      methods: {
        handleBeforeChange,
        onUpdateActive,
      },
      template: `
        <var-bottom-navigation v-model:active="active" @before-change="handleBeforeChange" @update:active="onUpdateActive">
          <var-bottom-navigation-item label="tag 1" icon="home" />
          <var-bottom-navigation-item label="tag 2" icon="magnify" />
        </var-bottom-navigation>
      `,
    })

    await delay(16)
    await trigger(wrapper.findAll('.var-bottom-navigation-item')[1], 'click')
    await delay(16)
    expect(handleBeforeChange).toHaveBeenCalledTimes(1)
    expect(onUpdateActive).not.toHaveBeenCalled()

    wrapper.unmount()
  })

  test('bottom-navigation fab-click event', async () => {
    const handleFabClick = vi.fn()
    const wrapper = mount({
      components: {
        [VarBottomNavigation.name]: VarBottomNavigation,
        [VarBottomNavigationItem.name]: VarBottomNavigationItem,
      },
      data: () => ({
        active: 0,
      }),
      methods: {
        handleFabClick,
      },
      template: `
        <var-bottom-navigation v-model:active="active" @fab-click="handleFabClick">
          <template #fab>
            <span>home</span>
          </template>
          <var-bottom-navigation-item label="tag 1" icon="home" />
          <var-bottom-navigation-item label="tag 2" icon="magnify" />
        </var-bottom-navigation>
      `,
    })

    await delay(16)
    await trigger(wrapper.find('.var-button'), 'click')
    expect(handleFabClick).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  })
})

describe('test bottom-navigation component props', () => {
  test('bottom-navigation active boundary for non-number', async () => {
    const onUpdateActive = vi.fn()
    const wrapper = mount({
      components: {
        [VarBottomNavigation.name]: VarBottomNavigation,
        [VarBottomNavigationItem.name]: VarBottomNavigationItem,
      },
      template: `
        <var-bottom-navigation active="unknown" @update:active="onUpdateActive">
          <var-bottom-navigation-item label="tag 1" icon="home" />
          <var-bottom-navigation-item label="tag 2" icon="magnify" />
        </var-bottom-navigation>
      `,
      methods: {
        onUpdateActive,
      },
    })

    await delay(16)
    expect(onUpdateActive).not.toHaveBeenCalled()
    wrapper.unmount()
  })

  test('bottom-navigation active boundary clamps', async () => {
    const onUpdateActive = vi.fn()
    const wrapper = mount({
      components: {
        [VarBottomNavigation.name]: VarBottomNavigation,
        [VarBottomNavigationItem.name]: VarBottomNavigationItem,
      },
      template: `
        <var-bottom-navigation :active="-1" @update:active="onUpdateActive">
          <var-bottom-navigation-item label="tag 1" icon="home" />
          <var-bottom-navigation-item label="tag 2" icon="magnify" />
        </var-bottom-navigation>
      `,
      methods: {
        onUpdateActive,
      },
    })

    await delay(16)
    expect(onUpdateActive).toHaveBeenCalledWith(0)
    wrapper.unmount()

    const onUpdateActiveMax = vi.fn()
    const wrapperMax = mount({
      components: {
        [VarBottomNavigation.name]: VarBottomNavigation,
        [VarBottomNavigationItem.name]: VarBottomNavigationItem,
      },
      template: `
        <var-bottom-navigation :active="99" @update:active="onUpdateActiveMax">
          <var-bottom-navigation-item label="tag 1" icon="home" />
          <var-bottom-navigation-item label="tag 2" icon="magnify" />
        </var-bottom-navigation>
      `,
      methods: {
        onUpdateActiveMax,
      },
    })

    await delay(16)
    expect(onUpdateActiveMax).toHaveBeenCalledWith(1)
    wrapperMax.unmount()
  })

  test('bottom-navigation clamps active above max', async () => {
    const onUpdateActive = vi.fn()
    const wrapper = mount({
      components: {
        [VarBottomNavigation.name]: VarBottomNavigation,
        [VarBottomNavigationItem.name]: VarBottomNavigationItem,
      },
      template: `
        <var-bottom-navigation :active="1" @update:active="onUpdateActive">
          <var-bottom-navigation-item label="tag 1" icon="home" />
        </var-bottom-navigation>
      `,
      methods: {
        onUpdateActive,
      },
    })

    await delay(16)
    expect(onUpdateActive).toHaveBeenCalledWith(0)
    wrapper.unmount()
  })

  test('bottom-navigation ignores NaN active', async () => {
    const onUpdateActive = vi.fn()
    const wrapper = mount({
      components: {
        [VarBottomNavigation.name]: VarBottomNavigation,
        [VarBottomNavigationItem.name]: VarBottomNavigationItem,
      },
      data: () => ({
        active: Number.NaN,
      }),
      methods: {
        onUpdateActive,
      },
      template: `
        <var-bottom-navigation :active="active" @update:active="onUpdateActive">
          <var-bottom-navigation-item label="tag 1" icon="home" />
          <var-bottom-navigation-item label="tag 2" icon="magnify" />
        </var-bottom-navigation>
      `,
    })

    await delay(16)
    expect(onUpdateActive).not.toHaveBeenCalled()
    wrapper.unmount()
  })

  test('bottom-navigation clamps negative active on length change', async () => {
    const onUpdateActive = vi.fn()
    const wrapper = mount({
      components: {
        [VarBottomNavigation.name]: VarBottomNavigation,
        [VarBottomNavigationItem.name]: VarBottomNavigationItem,
      },
      data: () => ({
        active: -1,
        showItems: false,
      }),
      methods: {
        onUpdateActive,
      },
      template: `
        <var-bottom-navigation :active="active" @update:active="onUpdateActive">
          <var-bottom-navigation-item v-if="showItems" label="tag 1" icon="home" />
          <var-bottom-navigation-item v-if="showItems" label="tag 2" icon="magnify" />
        </var-bottom-navigation>
      `,
    })

    await delay(16)
    expect(onUpdateActive).not.toHaveBeenCalled()

    await wrapper.setData({ showItems: true })
    await delay(16)
    expect(onUpdateActive).toHaveBeenCalledWith(0)

    wrapper.unmount()
  })

  test('bottom-navigation active boundary clamps on length change', async () => {
    const onUpdateActive = vi.fn()
    const wrapper = mount({
      components: {
        [VarBottomNavigation.name]: VarBottomNavigation,
        [VarBottomNavigationItem.name]: VarBottomNavigationItem,
      },
      data: () => ({
        showItems: false,
      }),
      methods: {
        onUpdateActive,
      },
      template: `
        <var-bottom-navigation :active="99" @update:active="onUpdateActive">
          <var-bottom-navigation-item v-if="showItems" label="tag 1" icon="home" />
          <var-bottom-navigation-item v-if="showItems" label="tag 2" icon="magnify" />
        </var-bottom-navigation>
      `,
    })

    await delay(16)
    expect(onUpdateActive).not.toHaveBeenCalled()

    await wrapper.setData({ showItems: true })
    await delay(16)
    expect(onUpdateActive).toHaveBeenCalledWith(1)

    wrapper.unmount()
  })

  test('bottom-navigation fixed', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        fixed: true,
      },
    })

    expect(wrapper.find('.var-bottom-navigation--fixed').exists()).toBe(true)
    await wrapper.setProps({ fixed: false })
    expect(wrapper.find('.var-bottom-navigation--fixed').exists()).toBe(false)
    wrapper.unmount()
  })

  test('bottom-navigation bordered', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        bordered: true,
      },
    })

    expect(wrapper.find('.var-bottom-navigation--border').exists()).toBe(true)
    await wrapper.setProps({ bordered: false })
    expect(wrapper.find('.var-bottom-navigation--border').exists()).toBe(false)
    wrapper.unmount()
  })

  test('bottom-navigation border compatibility', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        border: true,
      },
    })

    expect(wrapper.find('.var-bottom-navigation--border').exists()).toBe(true)
    await wrapper.setProps({ border: false })
    expect(wrapper.find('.var-bottom-navigation--border').exists()).toBe(false)
    wrapper.unmount()
  })

  test('bottom-navigation safe-area', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        safeArea: true,
      },
    })

    expect(wrapper.find('.var-bottom-navigation--safe-area').exists()).toBe(true)
    await wrapper.setProps({ safeArea: false })
    expect(wrapper.find('.var-bottom-navigation--safe-area').exists()).toBe(false)
    wrapper.unmount()
  })

  test('bottom-navigation z-index', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        zIndex: 2,
      },
    })

    expect(wrapper.find('.var-bottom-navigation').attributes('style')).toContain('z-index: 2;')
    await wrapper.setProps({ zIndex: '3' })
    expect(wrapper.find('.var-bottom-navigation').attributes('style')).toContain('z-index: 3;')
    wrapper.unmount()
  })

  test('bottom-navigation active-color', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        activeColor: 'red',
      },
    })

    await delay(16)
    expect(wrapper.find('.var-bottom-navigation-item--active').attributes('style')).toContain('color: red;')
    await wrapper.setProps({ activeColor: '#ffffff' })
    expect(wrapper.find('.var-bottom-navigation-item--active').attributes('style')).toContain(
      'color: rgb(255, 255, 255);',
    )
    wrapper.unmount()
  })

  test('bottom-navigation inactive-color', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        inactiveColor: 'red',
      },
    })

    wrapper.findAll('.var-bottom-navigation-item').forEach((item) => {
      expect(item.attributes('style')).toContain('color: red;')
    })
    await wrapper.setProps({ inactiveColor: '#ffffff' })
    wrapper.findAll('.var-bottom-navigation-item').forEach((item) => {
      expect(item.attributes('style')).toContain('color: rgb(255, 255, 255);')
    })
    wrapper.unmount()
  })

  test('bottom-navigation placeholder', async () => {
    const wrapper = mount(VarBottomNavigation, {
      props: {
        placeholder: true,
        fixed: true,
      },
    })

    expect(wrapper.find('.var-bottom-navigation__placeholder').exists()).toBe(true)
    await wrapper.setProps({ placeholder: false, fixed: false })
    expect(wrapper.find('.var-bottom-navigation__placeholder').exists()).toBe(false)
    await wrapper.setProps({ placeholder: true, fixed: false })
    expect(wrapper.find('.var-bottom-navigation__placeholder').exists()).toBe(false)

    wrapper.unmount()
  })

  test('bottom-navigation fab-props', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        fabProps: { size: 'mini', type: 'danger' },
      },
    })

    expect(wrapper.find('.var-button').classes()).toContain('var-button--mini')
    expect(wrapper.find('.var-button').classes()).toContain('var-button--danger')
    await wrapper.setProps({ fabProps: { size: 'large', type: 'success' } })
    expect(wrapper.find('.var-button').classes()).toContain('var-button--large')
    expect(wrapper.find('.var-button').classes()).toContain('var-button--success')
    wrapper.unmount()
  })

  test('variant mode', async () => {
    const wrapper = mount({
      components: {
        [VarBottomNavigation.name]: VarBottomNavigation,
        [VarBottomNavigationItem.name]: VarBottomNavigationItem,
      },
      data: () => ({
        variant: false,
      }),
      template: `
<var-bottom-navigation :variant="variant">
  <var-bottom-navigation-item label="tag 1" icon="home" name="home" :badge="{ dot: true, value: 10 }" />
  <var-bottom-navigation-item label="tag 2" icon="magnify" />
  <var-bottom-navigation-item label="tag 3" icon="heart" />
  <var-bottom-navigation-item label="tag 4" icon="account-circle" />
</var-bottom-navigation>
      `,
    })

    expect(wrapper.html()).toMatchSnapshot()
    await wrapper.setData({ variant: true })
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })

  test('bottom-navigation adds right-space class for odd items with fab', async () => {
    const wrapper = mount({
      components: {
        [VarBottomNavigation.name]: VarBottomNavigation,
        [VarBottomNavigationItem.name]: VarBottomNavigationItem,
      },
      template: `
        <var-bottom-navigation>
          <template #fab>
            <span>home</span>
          </template>
          <var-bottom-navigation-item label="tag 1" icon="home" />
          <var-bottom-navigation-item label="tag 2" icon="magnify" />
          <var-bottom-navigation-item label="tag 3" icon="heart" />
        </var-bottom-navigation>
      `,
    })

    await delay(16)
    const items = wrapper.findAll('.var-bottom-navigation-item')
    expect(items[2].classes()).toContain('var-bottom-navigation-item--right-space')
    wrapper.unmount()
  })
})

test('bottom-navigation-item renders badge with icon', async () => {
  const wrapper = mount({
    components: {
      [VarBottomNavigation.name]: VarBottomNavigation,
      [VarBottomNavigationItem.name]: VarBottomNavigationItem,
    },
    template: `
      <var-bottom-navigation>
        <var-bottom-navigation-item label="tag 1" icon="home" :badge="true" />
      </var-bottom-navigation>
    `,
  })

  await new Promise((resolve) => setTimeout(resolve, 16))
  const item = wrapper.find('.var-bottom-navigation-item')
  expect(item.find('.var-badge').exists()).toBe(true)
  expect(item.find('.var-badge').find('.var-icon-home').exists()).toBe(true)
  const badge = wrapper.findComponent({ name: 'VarBadge' })
  expect(badge.props('type')).toBe('danger')
  expect(badge.props('dot')).toBe(true)
  wrapper.unmount()
})

test('bottom-navigation-item badge without icon', async () => {
  const wrapper = mount({
    components: {
      [VarBottomNavigation.name]: VarBottomNavigation,
      [VarBottomNavigationItem.name]: VarBottomNavigationItem,
    },
    template: `
      <var-bottom-navigation>
        <var-bottom-navigation-item label="tag 1" :badge="true" />
      </var-bottom-navigation>
    `,
  })

  await new Promise((resolve) => setTimeout(resolve, 16))
  const item = wrapper.find('.var-bottom-navigation-item')
  expect(item.find('.var-badge').exists()).toBe(true)
  expect(item.find('.var-icon').exists()).toBe(false)
  wrapper.unmount()
})

test('bottom-navigation-item renders icon without badge', () => {
  const wrapper = mount({
    components: {
      [VarBottomNavigation.name]: VarBottomNavigation,
      [VarBottomNavigationItem.name]: VarBottomNavigationItem,
    },
    template: `
      <var-bottom-navigation>
        <var-bottom-navigation-item label="tag 1" icon="home" />
      </var-bottom-navigation>
    `,
  })

  const item = wrapper.find('.var-bottom-navigation-item')
  expect(item.find('.var-badge').exists()).toBe(false)
  expect(item.find('.var-icon-home').exists()).toBe(true)
  wrapper.unmount()
})

test('bottom-navigation-item supports custom icon slot', () => {
  const wrapper = mount({
    components: {
      [VarBottomNavigation.name]: VarBottomNavigation,
      [VarBottomNavigationItem.name]: VarBottomNavigationItem,
    },
    template: `
      <var-bottom-navigation>
        <var-bottom-navigation-item label="tag 1">
          <template #icon>
            <span class="custom-icon">icon</span>
          </template>
        </var-bottom-navigation-item>
      </var-bottom-navigation>
    `,
  })

  expect(wrapper.find('.custom-icon').exists()).toBe(true)
  wrapper.unmount()
})

test('bottom-navigation-item active by name', () => {
  const wrapper = mount({
    components: {
      [VarBottomNavigation.name]: VarBottomNavigation,
      [VarBottomNavigationItem.name]: VarBottomNavigationItem,
    },
    template: `
      <var-bottom-navigation active="home">
        <var-bottom-navigation-item label="tag 1" icon="home" name="home" />
        <var-bottom-navigation-item label="tag 2" icon="magnify" />
      </var-bottom-navigation>
    `,
  })

  expect(wrapper.findAll('.var-bottom-navigation-item')[0].classes()).toContain('var-bottom-navigation-item--active')
  wrapper.unmount()
})

test('bottom-navigation-item active by index', async () => {
  const wrapper = mount({
    components: {
      [VarBottomNavigation.name]: VarBottomNavigation,
      [VarBottomNavigationItem.name]: VarBottomNavigationItem,
    },
    template: `
      <var-bottom-navigation :active="1">
        <var-bottom-navigation-item label="tag 1" icon="home" />
        <var-bottom-navigation-item label="tag 2" icon="magnify" />
      </var-bottom-navigation>
    `,
  })

  await new Promise((resolve) => setTimeout(resolve, 16))
  expect(wrapper.findAll('.var-bottom-navigation-item')[1].classes()).toContain('var-bottom-navigation-item--active')
  wrapper.unmount()
})

test('bottom-navigation-item click triggers update', async () => {
  const onUpdateActive = vi.fn()
  const wrapper = mount({
    components: {
      [VarBottomNavigation.name]: VarBottomNavigation,
      [VarBottomNavigationItem.name]: VarBottomNavigationItem,
    },
    methods: {
      onUpdateActive,
    },
    template: `
      <var-bottom-navigation @update:active="onUpdateActive">
        <var-bottom-navigation-item label="tag 1" icon="home" />
        <var-bottom-navigation-item label="tag 2" icon="magnify" />
      </var-bottom-navigation>
    `,
  })

  await new Promise((resolve) => setTimeout(resolve, 16))
  await wrapper.findAll('.var-bottom-navigation-item')[1].trigger('click')
  expect(onUpdateActive).toHaveBeenCalledWith(1)
  wrapper.unmount()
})

test('bottom-navigation-item renders empty icon when none provided', () => {
  const wrapper = mount({
    components: {
      [VarBottomNavigation.name]: VarBottomNavigation,
      [VarBottomNavigationItem.name]: VarBottomNavigationItem,
    },
    template: `
      <var-bottom-navigation>
        <var-bottom-navigation-item label="tag 1" />
      </var-bottom-navigation>
    `,
  })

  const item = wrapper.find('.var-bottom-navigation-item')
  expect(item.find('.var-icon').exists()).toBe(false)
  expect(item.find('.custom-icon').exists()).toBe(false)
  wrapper.unmount()
})

test('bottom-navigation-item badge uses custom props', () => {
  const wrapper = mount({
    components: {
      [VarBottomNavigation.name]: VarBottomNavigation,
      [VarBottomNavigationItem.name]: VarBottomNavigationItem,
    },
    template: `
      <var-bottom-navigation>
        <var-bottom-navigation-item label="tag 1" icon="home" :badge="{ type: 'success', dot: false, value: 9 }" />
      </var-bottom-navigation>
    `,
  })

  const badge = wrapper.findComponent({ name: 'VarBadge' })
  expect(badge.props('type')).toBe('success')
  expect(badge.props('dot')).toBe(false)
  expect(badge.props('value')).toBe(9)
  wrapper.unmount()
})
