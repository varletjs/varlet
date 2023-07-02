import ImagePreview from '../index'
import VarImagePreview from '../ImagePreview.vue'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { delay, mockImageNaturalSize, mockOffset, trigger, triggerDrag } from '../../utils/jest'

mockImageNaturalSize(1440, 1080)
mockOffset({ offsetWidth: 375, offsetHeight: 815 })

const doubleTouch = async (element) => {
  await trigger(element, 'touchstart')
  await trigger(element, 'touchend')
  await trigger(element, 'touchstart')
  await trigger(element, 'touchend')
}

const expectTap = async (element, wrapper) => {
  // tap touch
  await trigger(element, 'touchstart')
  await trigger(element, 'touchend')
  // tap delay wait double touch
  await delay(200)
  expect(element.element.style.transform).toBe('scale(1) translate(0px, 0px)')
  expect(element.element.style.transitionDuration).toBeFalsy()
  await delay(300)
  expect(wrapper.find('.var-popup').isVisible()).toBe(false)
}

test('test image preview component plugin', () => {
  const app = createApp({}).use(ImagePreview.Component)
  expect(app.component(ImagePreview.Component.name)).toBeTruthy()
})

test('test image preview tap', async () => {
  const onUpdateShow = jest.fn((value) => wrapper.setProps({ show: value }))
  const wrapper = mount(VarImagePreview, {
    props: {
      show: true,
      images: ['https://varlet.gitee.io/varlet-ui/cat.jpg'],
      'onUpdate:show': onUpdateShow,
    },
  })

  const zoomContainer = wrapper.find('.var-image-preview__zoom-container')
  await expectTap(zoomContainer, wrapper)

  wrapper.unmount()
})

test('test image preview zoom', async () => {
  const onUpdateShow = jest.fn((value) => wrapper.setProps({ show: value }))
  const wrapper = mount(VarImagePreview, {
    props: {
      show: true,
      images: ['https://varlet.gitee.io/varlet-ui/cat.jpg'],
      'onUpdate:show': onUpdateShow,
    },
  })

  const zoomContainer = wrapper.find('.var-image-preview__zoom-container')

  await doubleTouch(zoomContainer)
  expect(zoomContainer.element.style.transform).toBe('scale(2) translate(0px, 0px)')
  await delay(250)
  expect(zoomContainer.element.style.transitionTimingFunction).toBe('linear')
  expect(zoomContainer.element.style.transitionDuration).toBe('0s')

  // double touch
  await doubleTouch(zoomContainer)
  expect(zoomContainer.element.style.transform).toBe('scale(1) translate(0px, 0px)')
  expect(zoomContainer.element.style.transitionDuration).toBeFalsy()

  // zoom in
  await doubleTouch(zoomContainer)
  await delay(250)
  await expectTap(zoomContainer, wrapper)
  wrapper.unmount()
})

test('test image preview zoom move', async () => {
  const wrapper = mount(VarImagePreview, {
    props: {
      show: true,
      images: ['https://varlet.gitee.io/varlet-ui/cat.jpg'],
    },
  })

  const zoomContainer = wrapper.find('.var-image-preview__zoom-container')
  await doubleTouch(zoomContainer)
  // move to right limit
  await triggerDrag(zoomContainer, -100, 0)
  expect(zoomContainer.element.style.transform).toBe('scale(2) translate(-93.75px, 0px)')
  // move to center
  await triggerDrag(zoomContainer, 93.75, 0)
  // move to left limit
  await triggerDrag(zoomContainer, 100, 0)
  expect(zoomContainer.element.style.transform).toBe('scale(2) translate(93.75px, 0px)')
  // // move to center
  // await triggerDrag(zoomContainer, -93.75, 0)
  // // move to top limit
  // await triggerDrag(zoomContainer, 0, 100)
  // expect(zoomContainer.element.style.transform).toBe('scale(2) translate(0px, 0px)')
  // // move to center
  // await triggerDrag(zoomContainer, 0, 100)
  // // move to bottom limit
  // await triggerDrag(zoomContainer, 0, -100)
  // expect(zoomContainer.element.style.transform).toBe('scale(2) translate(0px, 0px)')

  wrapper.unmount()
})

test('test image preview imagePreventDefault', async () => {
  const wrapper = mount(VarImagePreview, {
    props: {
      images: ['https://varlet.gitee.io/varlet-ui/cat.jpg'],
      imagePreventDefault: true,
      show: true,
    },
  })

  await delay(200)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-image-preview--prevent').isVisible()).toBe(true)

  wrapper.unmount()
})

test('test image preview onLongPress', async () => {
  const onLongPress = jest.fn()
  const wrapper = mount(VarImagePreview, {
    props: {
      images: ['https://varlet.gitee.io/varlet-ui/cat.jpg'],
      onLongPress,
      show: true,
    },
  })

  const zoomContainer = wrapper.find('.var-image-preview__zoom-container')
  await trigger(zoomContainer, 'touchstart')
  await delay(550)
  await trigger(zoomContainer, 'touchend')
  expect(onLongPress).toBeCalledTimes(1)
  expect(onLongPress).toHaveBeenCalledWith(0)

  wrapper.unmount()
})

test('test image preview initialIndex', async () => {
  const wrapper = mount(VarImagePreview, {
    props: {
      images: ['https://varlet.gitee.io/varlet-ui/cat.jpg', 'https://varlet.gitee.io/varlet-ui/cat2.jpg'],
      initialIndex: 1,
      show: true,
    },
  })

  await delay(200)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-image-preview__indicators').text()).toBe('2 / 2')

  wrapper.unmount()
})

test('test image preview next & prev & to method', async () => {
  const Wrapper = {
    components: {
      [VarImagePreview.name]: VarImagePreview,
    },
    template: `
      <var-image-preview ref="imagePreviewRef">
      </var-image-preview>
    `,
  }
  const wrapper = mount(Wrapper, {
    props: {
      images: ['https://varlet.gitee.io/varlet-ui/cat.jpg', 'https://varlet.gitee.io/varlet-ui/cat2.jpg'],
      show: true,
    },
  })

  await delay(50)
  const {
    imagePreviewRef: { prev, next, to },
  } = wrapper.vm.$refs

  to(1)
  await delay(100)
  expect(wrapper.find('.var-image-preview__indicators').text()).toBe('2 / 2')

  prev()
  await delay(100)
  expect(wrapper.find('.var-image-preview__indicators').text()).toBe('1 / 2')

  next()
  await delay(100)
  expect(wrapper.find('.var-image-preview__indicators').text()).toBe('2 / 2')

  to(0)
  await delay(100)
  expect(wrapper.find('.var-image-preview__indicators').text()).toBe('1 / 2')

  wrapper.unmount()
})
