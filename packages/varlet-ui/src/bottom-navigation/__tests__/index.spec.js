import example from '../example'
import BottomNavigation from '..'
import VarBottomNavigation from '../BottomNavigation'
import VarBottomNavigationItem from '../../bottom-navigation-item/BottomNavigationItem'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { delay, trigger } from '../../utils/jest'

test('test bottom-navigation example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test bottom-navigation plugin', () => {
  const app = createApp({}).use(BottomNavigation)
  expect(app.component(BottomNavigation.name)).toBeTruthy()
})

test('test bottom-navigation before-change prevent switch', async () => {
  const handleBeforeChange = jest.fn(() => false)
  const Wrapper = {
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
      <var-bottom-navigation-item label="标签" icon="home" />
      <var-bottom-navigation-item label="标签" icon="magnify" />
      <var-bottom-navigation-item label="标签" icon="heart" />
      <var-bottom-navigation-item label="标签" icon="account-circle" />
    </var-bottom-navigation>
    `,
  }
  const wrapper = mount(Wrapper)
  await delay(16)

  const bottomNavigationItem = wrapper.findAll('.var-bottom-navigation-item')[1]
  await trigger(bottomNavigationItem, 'click')

  expect(handleBeforeChange).toHaveBeenCalledTimes(1)
  expect(wrapper.vm.active).toBe(0)

  wrapper.unmount()
})

test('test bottom-navigation before-change return promise', async () => {
  const handleBeforeChange = jest.fn(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)
        }, 500)
      })
  )
  const Wrapper = {
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
      <var-bottom-navigation-item label="标签" icon="home" />
      <var-bottom-navigation-item label="标签" icon="magnify" />
      <var-bottom-navigation-item label="标签" icon="heart" />
      <var-bottom-navigation-item label="标签" icon="account-circle" />
    </var-bottom-navigation>
    `,
  }
  const wrapper = mount(Wrapper)
  await delay(16)

  const bottomNavigationItem = wrapper.findAll('.var-bottom-navigation-item')[1]
  await trigger(bottomNavigationItem, 'click')
  expect(wrapper.vm.active).toBe(0)

  await delay(600)
  expect(handleBeforeChange).toHaveBeenCalledTimes(1)
  expect(wrapper.vm.active).toBe(1)

  wrapper.unmount()
})

test('test bottom-navigation change event', async () => {
  let dummy
  const handleChange = jest.fn((active) => {
    dummy = active
  })
  const Wrapper = {
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
      <var-bottom-navigation-item label="标签" icon="home" />
      <var-bottom-navigation-item label="标签" icon="magnify" />
      <var-bottom-navigation-item label="标签" icon="heart" />
      <var-bottom-navigation-item label="标签" icon="account-circle" />
    </var-bottom-navigation>
    `,
  }
  const wrapper = mount(Wrapper)
  await delay(16)

  const bottomNavigationItem = wrapper.findAll('.var-bottom-navigation-item')[1]
  await trigger(bottomNavigationItem, 'click')

  expect(handleChange).toHaveBeenCalledTimes(1)
  expect(dummy).toBe(1)

  wrapper.unmount()
})

test('test bottom-navigation-item click event', async () => {
  let dummy
  const handleClick = jest.fn((active) => {
    dummy = active
  })
  const Wrapper = {
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
      <var-bottom-navigation-item label="标签" icon="home" />
      <var-bottom-navigation-item @click="handleClick" label="标签" icon="magnify" />
      <var-bottom-navigation-item label="标签" icon="heart" />
      <var-bottom-navigation-item label="标签" icon="account-circle" />
    </var-bottom-navigation>
    `,
  }
  const wrapper = mount(Wrapper)
  await delay(16)

  const bottomNavigationItem = wrapper.findAll('.var-bottom-navigation-item')[1]
  await trigger(bottomNavigationItem, 'click')

  expect(handleClick).toHaveBeenCalledTimes(1)
  expect(dummy).toBe(1)

  wrapper.unmount()
})

test('test BottomNavigation relation BottomNavigationItems', async () => {
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
      <var-bottom-navigation-item label="标签" icon="home" />
      <var-bottom-navigation-item label="标签" icon="magnify" />
      <var-bottom-navigation-item label="标签" icon="heart" />
      <var-bottom-navigation-item label="标签" icon="account-circle" />
    </var-bottom-navigation>
    `,
  }
  const wrapper = mount(Wrapper)
  await delay(100)

  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.setData({ active: 1 })

  await delay(50)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('fab button', async () => {
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
        <div class="tab_example" />
      </template>
      <var-bottom-navigation-item label="标签" icon="home" />
      <var-bottom-navigation-item label="标签" icon="magnify" />
      <var-bottom-navigation-item label="标签" icon="heart" />
    </var-bottom-navigation>
    `,
  }
  const wrapper = mount(Wrapper)
  await delay(100)

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})
