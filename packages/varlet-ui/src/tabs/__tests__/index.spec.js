import Tabs from '..'
import Tab from '../../tab'
import TabsItems from '../../tabs-items'
import TabItem from '../../tab-item'
import VarTabs from '../Tabs'
import VarTab from '../../tab/Tab'
import VarTabsItems from '../../tabs-items/TabsItems'
import VarTabItem from '../../tab-item/TabItem'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, mockOffset } from '../../utils/test'

let originScrollTo

beforeEach(() => {
  originScrollTo = Element.prototype.scrollTo
  Element.prototype.scrollTo = vi.fn()
})

afterEach(() => {
  Element.prototype.scrollTo = originScrollTo
})

mockOffset()

const Wrapper = {
  components: {
    [VarTabs.name]: VarTabs,
    [VarTab.name]: VarTab,
    [VarTabsItems.name]: VarTabsItems,
    [VarTabItem.name]: VarTabItem,
  },
  props: [
    'onClick',
    'onChange',
    'layoutDirection',
    'itemDirection',
    'fixedBottom',
    'color',
    'activeColor',
    'inactiveColor',
    'disabledColor',
    'indicatorColor',
    'indicatorSize',
    'elevation',
    'safeArea',
  ],
  data: () => ({
    active: 2,
  }),
  template: `
    <var-tabs v-model:active="active" v-bind="$props">
      <var-tab style="width: 100px">tab 1</var-tab>
      <var-tab disabled style="width: 100px">tab 2</var-tab>
      <var-tab style="width: 100px">tab 3</var-tab>
    </var-tabs>

    <var-tabs-items>
      <var-tab-item>tab item 1</var-tab-item>
      <var-tab-item>tab item 2</var-tab-item>
      <var-tab-item>tab item 3</var-tab-item>
    </var-tabs-items>
  `,
}

test('test tabs & tab & tabsItems & tabItem plugin', () => {
  const app = createApp({}).use(Tabs).use(Tab).use(TabsItems).use(TabItem)
  expect(app.component(Tabs.name)).toBeTruthy()
  expect(app.component(Tab.name)).toBeTruthy()
  expect(app.component(TabsItems.name)).toBeTruthy()
  expect(app.component(TabItem.name)).toBeTruthy()
})

test('test tabs event', async () => {
  const onClick = vi.fn()
  const onChange = vi.fn()
  const wrapper = mount(Wrapper, {
    props: {
      onClick,
      onChange,
    },
  })

  await delay(100)
  await wrapper.find('.var-tab').trigger('click')
  expect(onClick).toHaveBeenLastCalledWith(0)
  expect(onChange).toHaveBeenLastCalledWith(0)
  wrapper.unmount()
})

describe('test tabs component props', () => {
  test('test tabs layout-direction', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        layoutDirection: 'horizontal',
      },
    })

    expect(wrapper.find('.var-tabs--layout-horizontal').exists()).toBe(true)
    await wrapper.setProps({ layoutDirection: 'vertical' })
    expect(wrapper.find('.var-tabs--layout-vertical').exists()).toBe(true)
    wrapper.unmount()
  })

  test('test tabs item-direction', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        itemDirection: 'horizontal',
      },
    })

    expect(wrapper.find('.var-tabs--item-horizontal').exists()).toBe(true)
    await wrapper.setProps({ itemDirection: 'vertical' })
    expect(wrapper.find('.var-tabs--item-vertical').exists()).toBe(true)
    wrapper.unmount()
  })

  test('test tabs fixed-bottom', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        fixedBottom: true,
      },
    })

    expect(wrapper.find('.var-tabs--fixed-bottom').exists()).toBe(true)
    await wrapper.setProps({ fixedBottom: false })
    expect(wrapper.find('.var-tabs--fixed-bottom').exists()).toBe(false)
    wrapper.unmount()
  })

  test('test tabs color', () => {
    const wrapper = mount(Wrapper, {
      props: {
        color: 'red',
      },
    })

    expect(wrapper.find('.var-tabs').attributes('style')).toContain('background: red;')
    wrapper.unmount()
  })

  test('test tabs active-color', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        activeColor: 'red',
      },
    })

    await delay(100)
    expect(wrapper.find('.var-tab--active').attributes('style')).toContain('color: red;')
    wrapper.unmount()
  })

  test('test tabs inactive-color', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        inactiveColor: 'red',
      },
    })

    await delay(100)
    expect(wrapper.find('.var-tab--inactive').attributes('style')).toContain('color: red;')
    wrapper.unmount()
  })

  test('test tabs disabled-color', () => {
    const wrapper = mount(Wrapper, {
      props: {
        disabledColor: 'red',
      },
    })

    expect(wrapper.find('.var-tab--disabled').attributes('style')).toContain('color: red;')
    wrapper.unmount()
  })

  test('test tabs indicator-color', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        indicatorColor: 'red',
      },
    })

    await delay(100)
    expect(wrapper.find('.var-tabs--layout-horizontal-indicator').attributes('style')).toContain('background: red;')
    wrapper.unmount()
  })

  test('test tabs indicator-size', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        indicatorSize: '10px',
      },
    })

    expect(wrapper.find('.var-tabs--layout-horizontal-indicator').attributes('style')).toContain('height: 10px;')
    await wrapper.setProps({ indicatorSize: 4 })
    expect(wrapper.find('.var-tabs--layout-horizontal-indicator').attributes('style')).toContain('height: 4px;')
    wrapper.unmount()
  })

  test('test tabs elevation', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        elevation: true,
      },
    })

    expect(wrapper.find('.var-elevation--4').exists()).toBe(true)
    await wrapper.setProps({ elevation: false })
    expect(wrapper.find('.var-elevation--4').exists()).toBe(false)
    wrapper.unmount()
  })

  test('test tabs safe-area', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        safeArea: true,
      },
    })

    expect(wrapper.find('.var-tabs--safe-area').exists()).toBe(true)
    await wrapper.setProps({ safeArea: false })
    expect(wrapper.find('.var-tabs--safe-area').exists()).toBe(false)
    wrapper.unmount()
  })
})
