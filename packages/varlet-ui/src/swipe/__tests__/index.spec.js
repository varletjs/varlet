import Swipe from '..'
import SwipeItem from '../../swipe-item'
import VarSwipe from '../Swipe'
import VarSwipeItem from '../../swipe-item/SwipeItem'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, mockOffset, triggerDrag } from '../../utils/jest'

mockOffset()

test('test swipe & swipe-item plugin', () => {
  const app = createApp({}).use(Swipe).use(SwipeItem)
  expect(app.component(Swipe.name)).toBeTruthy()
  expect(app.component(SwipeItem.name)).toBeTruthy()
})

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

test('test swipe next & prev & to method', async () => {
  const onChange = jest.fn()

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
  expect(wrapper.html()).toMatchSnapshot()

  next()
  expect(onChange).toHaveBeenLastCalledWith(1)
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  prev()
  expect(onChange).toHaveBeenLastCalledWith(0)
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  to(2)
  expect(onChange).toHaveBeenLastCalledWith(2)
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  next()
  expect(onChange).toHaveBeenLastCalledWith(0)
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  prev()
  expect(onChange).toHaveBeenLastCalledWith(2)
  await delay(100)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test render initial index', async () => {
  const wrapper = mount(Wrapper, {
    props: {
      initialIndex: 2,
    },
  })
  await delay(200)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test touch with loop', async () => {
  const onChange = jest.fn()

  const wrapper = mount(Wrapper, {
    props: {
      onChange,
    },
  })
  await delay(50)

  const track = wrapper.find('.var-swipe__track')

  await triggerDrag(track, -100, 0)
  expect(onChange).toHaveBeenLastCalledWith(1)
  await triggerDrag(track, -100, 0)
  expect(onChange).toHaveBeenLastCalledWith(2)
  await triggerDrag(track, -100, 0)
  expect(onChange).toHaveBeenLastCalledWith(0)
  await triggerDrag(track, 100, 0)
  expect(onChange).toHaveBeenLastCalledWith(2)
  await triggerDrag(track, 100, 0)
  expect(onChange).toHaveBeenLastCalledWith(1)
  await triggerDrag(track, 100, 0)
  expect(onChange).toHaveBeenLastCalledWith(0)

  wrapper.unmount()
})

test('test touch without loop', async () => {
  const onChange = jest.fn()

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

test('test touch with vertical', async () => {
  const onChange = jest.fn()

  const wrapper = mount(Wrapper, {
    props: {
      vertical: true,
      onChange,
    },
  })
  await delay(50)

  const track = wrapper.find('.var-swipe__track')

  await triggerDrag(track, 0, -100)
  expect(onChange).toHaveBeenCalledTimes(1)
  await triggerDrag(track, 0, -100)
  expect(onChange).toHaveBeenLastCalledWith(2)

  wrapper.unmount()
})

test('test touch forbid touchable', async () => {
  const onChange = jest.fn()

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

test('test autoplay', async () => {
  const onChange = jest.fn()

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
