import BottomNavigation from '..'
import BottomNavigationItem from '../../bottom-navigation-item'
import VarBottomNavigation from '../BottomNavigation'
import VarBottomNavigationItem from '../../bottom-navigation-item/BottomNavigationItem'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { delay, trigger } from '../../utils/test'

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

test('test bottom-navigation plugin', () => {
  const app = createApp({}).use(BottomNavigation).use(BottomNavigationItem)
  expect(app.component(BottomNavigation.name)).toBeTruthy()
  expect(app.component(BottomNavigationItem.name)).toBeTruthy()
})

describe('test bottom-navigation events', () => {
  test('test bottom-navigation change event', async () => {
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
    wrapper.unmount()
  })

  test('test bottom-navigation click event', async () => {
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

  test('test bottom-navigation before-change event', async () => {
    const handleBeforeChange = vi.fn(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(true)
          }, 200)
        })
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

    wrapper.unmount()
  })

  test('test bottom-navigation fab-click event', async () => {
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
  test('test bottom-navigation fixed', async () => {
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

  test('test bottom-navigation border', async () => {
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

  test('test bottom-navigation safe-area', async () => {
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

  test('test bottom-navigation z-index', async () => {
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

  test('test bottom-navigation active-color', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        activeColor: 'red',
      },
    })

    await delay(16)
    expect(wrapper.find('.var-bottom-navigation-item--active').attributes('style')).toContain('color: red;')
    await wrapper.setProps({ activeColor: '#ffffff' })
    expect(wrapper.find('.var-bottom-navigation-item--active').attributes('style')).toContain(
      'color: rgb(255, 255, 255);'
    )
    wrapper.unmount()
  })

  test('test bottom-navigation inactive-color', async () => {
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

  test('test bottom-navigation fab-props', async () => {
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
})
