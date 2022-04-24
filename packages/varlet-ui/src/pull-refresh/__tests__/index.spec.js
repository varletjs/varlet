import example from '../example'
import PullRefresh from '..'
import VarPullRefresh from '../PullRefresh'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, trigger } from '../../utils/jest'

test('test pullRefresh plugin', () => {
  const app = createApp({}).use(PullRefresh)
  expect(app.component(PullRefresh.name)).toBeTruthy()
})

test('test pullRefresh example', () => {
  const wrapper = mount(example, { attachTo: document.body })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test the different states during the drop-down process', async () => {
  const template = `
  <var-pull-refresh
    bg-color="blue"
    color="red"
    success-color="purple"
    success-bg-color="#000"
  >
    <div style="height: 200px; width: 100%"></div>
  </var-pull-refresh>
  `

  const wrapper = mount({
    components: {
      [VarPullRefresh.name]: VarPullRefresh,
    },
    template,
  })

  const el = wrapper.find('.var-pull-refresh')

  await trigger(el, 'touchstart', 0, 0)
  await trigger(el, 'touchmove', 0, 50)
  await trigger(el, 'touchend', 0, 50)
  await delay(2000)

  expect(wrapper.html()).toMatchSnapshot()

  await trigger(el, 'touchmove', 0, 200)
  await delay(0)

  expect(wrapper.html()).toMatchSnapshot()

  await trigger(el, 'touchend', 0, 150)
  await delay(0)

  expect(wrapper.html()).toMatchSnapshot()
})

test('test disabled prop', async () => {
  const template = `
  <var-pull-refresh disabled >
    <div style="height: 200px; width: 100%"></div>
  </var-pull-refresh>
  `

  const wrapper = mount({
    components: {
      [VarPullRefresh.name]: VarPullRefresh,
    },
    template,
  })

  const el = wrapper.find('.var-pull-refresh')

  await trigger(el, 'touchstart', 0, 0)
  await trigger(el, 'touchmove', 0, 200)
  await delay(0)

  expect(wrapper.html()).toMatchSnapshot()
})

test('test pull-refresh event', async () => {
  const refresh = jest.fn()

  const template = `
  <var-pull-refresh v-model="isRefresh" @refresh="refresh" >
    <div style="height: 200px; width: 100%"></div>
  </var-pull-refresh>
  `

  const wrapper = mount({
    components: {
      [VarPullRefresh.name]: VarPullRefresh,
    },
    data() {
      return {
        isRefresh: false,
      }
    },
    methods: {
      refresh,
    },
    template,
  })

  const el = wrapper.find('.var-pull-refresh')

  await trigger(el, 'touchstart', 0, 0)
  await trigger(el, 'touchmove', 0, 200)
  await trigger(el, 'touchend', 0, 150)

  await delay(200)

  expect(wrapper.vm.isRefresh).toBe(true)
  expect(refresh).toHaveBeenCalledTimes(1)
  wrapper.vm.isRefresh = false

  await delay(3000)

  expect(wrapper.html()).toMatchSnapshot()
})
