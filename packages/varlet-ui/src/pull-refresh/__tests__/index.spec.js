import PullRefresh from '..'
import VarPullRefresh from '../PullRefresh'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, trigger } from '../../utils/test'

const Wrapper = {
  template: `
    <var-pull-refresh v-model="isRefresh">
      <div style="height: 200px; width: 100%"></div>
    </var-pull-refresh>
  `,
  data() {
    return {
      isRefresh: false,
    }
  },
  components: {
    [VarPullRefresh.name]: VarPullRefresh,
  },
}

test('test pullRefresh plugin', () => {
  const app = createApp({}).use(PullRefresh)
  expect(app.component(PullRefresh.name)).toBeTruthy()
})

describe('test pull-refresh props', () => {
  test('test pull-refresh color and bgColor', () => {
    const wrapper = mount(Wrapper, {
      props: {
        color: 'green',
        bgColor: 'blue',
      },
    })

    const control = wrapper.find('.var-pull-refresh__control')

    expect(control.attributes('style').includes('color: green')).toBe(true)
    expect(control.attributes('style').includes('background: blue')).toBe(true)

    wrapper.unmount()
  })

  test('test pull-refresh animationDuration', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        animationDuration: 200,
      },
    })

    const el = wrapper.find('.var-pull-refresh')
    const control = wrapper.find('.var-pull-refresh__control')

    await trigger(el, 'touchstart', 0, 0)
    await trigger(el, 'touchmove', 0, 50)
    await trigger(el, 'touchend', 0, 50)

    expect(control.attributes('style').includes('transform 200ms')).toBe(true)

    wrapper.unmount()
  })

  test('test disabled prop', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        disabled: true,
      },
    })

    const el = wrapper.find('.var-pull-refresh')
    const control = wrapper.find('.var-pull-refresh__control')

    await trigger(el, 'touchstart', 0, 0)
    await trigger(el, 'touchmove', 0, 50)

    expect(control.attributes('style').includes('translate3d(0px, -50px, 0px)')).toBe(true)

    wrapper.unmount()
  })
})

test('test pull-refresh success state', async () => {
  const refresh = vi.fn()
  const wrapper = mount(Wrapper, {
    props: {
      successColor: 'green',
      successBgColor: 'blue',
      successDuration: 300,
      animationDuration: 100,
      onRefresh: refresh,
    },
  })

  const el = wrapper.find('.var-pull-refresh')
  const control = wrapper.find('.var-pull-refresh__control')

  await trigger(el, 'touchstart', 0, 0)
  await trigger(el, 'touchmove', 0, 200)
  await trigger(el, 'touchend', 0, 150)

  await delay(200)

  expect(wrapper.vm.isRefresh).toBe(true)
  expect(refresh).toHaveBeenCalledTimes(1)

  wrapper.vm.isRefresh = false

  await delay(200)

  expect(control.attributes('style').includes('color: green')).toBe(true)
  expect(control.attributes('style').includes('background: blue')).toBe(true)

  await delay(300)

  expect(control.attributes('style').includes('translate3d(0px, -50px, 0px)')).toBe(true)
})
