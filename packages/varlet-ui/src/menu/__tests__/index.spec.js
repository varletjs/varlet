import Menu from '..'
import VarMenu from '../Menu'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, mockStubs } from '../../utils/jest'

test('test menu plugin', () => {
  const app = createApp({}).use(Menu)
  expect(app.component(Menu.name)).toBeTruthy()
})

const Wrapper = {
  components: {
    [VarMenu.name]: VarMenu,
  },
  data: () => ({
    show: false,
  }),
  template: `
    <div class="container">
      <var-menu
        :offset-x="100"
        :offset-y="100"
        :teleport="null"
        v-model:show="show"
      >
        <template #menu>
          <div class="menu-content"></div>
        </template>
      </var-menu>
    </div>
  `,
}

test('test menu trigger', async () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(Wrapper, { attachTo: document.body })
  await wrapper.setData({ show: true })

  expect(wrapper.find('.menu-content').isVisible()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.container').trigger('click')
  await delay(300)
  expect(wrapper.find('.menu-content').isVisible()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  mockRestore()
  wrapper.unmount()
})

test('test menu click forbid trigger', async () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(Wrapper, { attachTo: document.body })
  await wrapper.setData({ show: true })

  await wrapper.find('.menu-content').trigger('click')
  expect(wrapper.find('.menu-content').isVisible()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()

  mockRestore()
  wrapper.unmount()
})

test('test menu z-index', async () => {
  const { mockRestore } = mockStubs()
  const wrapper = mount(Wrapper, { attachTo: document.body })
  await wrapper.setData({ show: true })
  await delay(300)

  const prevIndex = +wrapper.find('.var-menu__menu').element.style.zIndex

  await wrapper.setData({ show: false })
  await delay(300)
  await wrapper.setData({ show: true })
  await delay(300)

  expect(+wrapper.find('.var-menu__menu').element.style.zIndex).toBe(prevIndex + 1)

  mockRestore()
  wrapper.unmount()
})
