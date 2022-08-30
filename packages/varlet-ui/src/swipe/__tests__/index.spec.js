import Swipe from '..'
import SwipeItem from '../../swipe-item'
import VarSwipe from '../Swipe'
import VarSwipeItem from '../../swipe-item/SwipeItem'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, triggerDrag } from '../../utils/test'

const Wrapper = {
  components: {
    [VarSwipe.name]: VarSwipe,
    [VarSwipeItem.name]: VarSwipeItem,
  },
  props: ['onChange', 'initialIndex'],
  template: `
    <var-swipe ref="swipe" style="width: 100px; height: 100px" v-bind="$props">
      <var-swipe-item>1</var-swipe-item>
      <var-swipe-item>2</var-swipe-item>
      <var-swipe-item>3</var-swipe-item>
    </var-swipe>
  `,
}

test('test swipe & swipe-item use', () => {
  const app = createApp({}).use(Swipe).use(SwipeItem)
  expect(app.component(Swipe.name)).toBeTruthy()
  expect(app.component(SwipeItem.name)).toBeTruthy()
})

test('test swipe next & prev & to method', async () => {
  const onChange = vi.fn()
  const wrapper = mount(Wrapper, {
    props: {
      onChange,
    },
  })

  await delay(50)
  const {
    swipe: { prev, next, to },
  } = wrapper.vm.$refs

  to(0)
  expect(onChange).toHaveBeenCalledTimes(0)
  await delay(100)
  expect(wrapper.findAll('.var-swipe__indicator')[0].classes()).toContain('var-swipe--indicator-active')

  next()
  expect(onChange).toHaveBeenLastCalledWith(1)
  await delay(100)
  expect(wrapper.findAll('.var-swipe__indicator')[1].classes()).toContain('var-swipe--indicator-active')

  prev()
  expect(onChange).toHaveBeenLastCalledWith(0)
  await delay(100)
  expect(wrapper.findAll('.var-swipe__indicator')[0].classes()).toContain('var-swipe--indicator-active')

  to(2)
  expect(onChange).toHaveBeenLastCalledWith(2)
  await delay(100)
  expect(wrapper.findAll('.var-swipe__indicator')[2].classes()).toContain('var-swipe--indicator-active')

  next()
  expect(onChange).toHaveBeenLastCalledWith(0)
  await delay(100)
  expect(wrapper.findAll('.var-swipe__indicator')[0].classes()).toContain('var-swipe--indicator-active')

  prev()
  expect(onChange).toHaveBeenLastCalledWith(2)
  await delay(100)
  expect(wrapper.findAll('.var-swipe__indicator')[2].classes()).toContain('var-swipe--indicator-active')

  wrapper.unmount()
})

describe('test swipe component props', () => {
  test('test swipe loop', async () => {
    const onChange = vi.fn()
    const wrapper = mount(Wrapper, {
      props: {
        loop: false,
        onChange,
      },
    })

    await delay(50)
    const track = wrapper.find('.var-swipe__track')
    await triggerDrag(track, 100, 0)
    expect(onChange).toHaveBeenCalledTimes(0)
    await triggerDrag(track, -100, 0)
    expect(onChange).toHaveBeenLastCalledWith(1)
    await triggerDrag(track, -100, 0)
    expect(onChange).toHaveBeenLastCalledWith(2)
    await triggerDrag(track, -100, 0)
    expect(onChange).toHaveBeenLastCalledWith(2)
    wrapper.unmount()
  })

  test('test swipe autoplay', async () => {
    const onChange = vi.fn()
    const wrapper = mount(Wrapper, {
      props: {
        autoplay: 100,
        onChange,
      },
    })

    await delay(100)
    await delay(100)
    expect(onChange).toHaveBeenLastCalledWith(1)
    await delay(100)
    expect(onChange).toHaveBeenLastCalledWith(2)
    wrapper.unmount()
  })

  test('test swipe duration', () => {
    const wrapper = mount(Wrapper, {
      props: {
        duration: 500,
      },
    })

    expect(wrapper.find('.var-swipe__track').attributes('style')).toContain('transition-duration: 500ms;')
    wrapper.unmount()
  })

  test('test swipe duration', () => {
    const wrapper = mount(Wrapper, {
      props: {
        duration: 500,
      },
    })

    expect(wrapper.find('.var-swipe__track').attributes('style')).toContain('transition-duration: 500ms;')
    wrapper.unmount()
  })

  test('test swipe initial-index', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        initialIndex: 2,
      },
    })

    await delay(200)
    expect(wrapper.findAll('.var-swipe__indicator')[2].classes()).toContain('var-swipe--indicator-active')
    wrapper.unmount()
  })

  test('test swipe indicator and indicator-color', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        indicator: true,
        indicatorColor: 'red',
      },
    })

    await delay(200)
    expect(wrapper.find('.var-swipe__indicators').exists()).toBe(true)
    wrapper.findAll('.var-swipe__indicator').forEach((item) => {
      expect(item.attributes('style')).toContain('background: red;')
    })
    await wrapper.setProps({ indicator: false })
    expect(wrapper.find('.var-swipe__indicators').exists()).toBe(false)
    wrapper.unmount()
  })

  test('test swipe vertical', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        vertical: true,
      },
    })

    expect(wrapper.find('.var-swipe--vertical').exists()).toBe(true)
    await wrapper.setProps({ vertical: false })
    expect(wrapper.find('.var-swipe--vertical').exists()).toBe(false)
    wrapper.unmount()
  })

  test('test touch touchable', async () => {
    const onChange = vi.fn()
    const wrapper = mount(Wrapper, {
      props: {
        touchable: false,
        onChange,
      },
    })

    await delay(50)
    const track = wrapper.find('.var-swipe__track')
    await triggerDrag(track, -100, 0)
    expect(onChange).toHaveBeenCalledTimes(0)
    wrapper.unmount()
  })
})
