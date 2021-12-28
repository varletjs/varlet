import Menu from '..'
import VarMenu from '../Menu'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay } from '../../utils/jest'

test('test menu plugin', () => {
  const app = createApp({}).use(Menu)
  expect(app.component(Menu.name)).toBeTruthy()
})

const Wrapper = {
  components: {
    [VarMenu.name]: VarMenu,
  },
  data: () => ({
    mounted: false,
    show: false,
  }),
  template: `
    <div class="container">
      <var-menu
        :offset-x="100"
        :offset-y="100"
        teleport=".container"
        v-model:show="show"
        v-if="mounted"
      >
        <template #menu>
          <div class="menu-content"></div>
        </template>
      </var-menu>
    </div>
  `,
}

test('test menu trigger', async () => {
  const wrapper = mount(Wrapper, { attachTo: document.body })
  await wrapper.setData({ mounted: true })
  await wrapper.setData({ show: true })

  expect(wrapper.find('.menu-content').isVisible()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.container').trigger('click')
  expect(wrapper.find('.menu-content').isVisible()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test menu click forbid trigger', async () => {
  const wrapper = mount(Wrapper, { attachTo: document.body })
  await wrapper.setData({ mounted: true })
  await wrapper.setData({ show: true })

  await wrapper.find('.menu-content').trigger('click')
  expect(wrapper.find('.menu-content').isVisible()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test menu z-index', async () => {
  const wrapper = mount(Wrapper, { attachTo: document.body })
  await wrapper.setData({ mounted: true })
  await wrapper.setData({ show: true })
  await delay(16)

  const prevIndex = +wrapper.find('.var-menu__menu').element.style.zIndex

  await wrapper.setData({ show: false })
  await wrapper.setData({ show: true })
  await delay(16)

  expect(+wrapper.find('.var-menu__menu').element.style.zIndex).toBe(prevIndex + 1)

  wrapper.unmount()
})
