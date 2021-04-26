import example from '../example'
import Image from '..'
import VarImage from '../Image'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

const SRC = 'https://varlet.gitee.io/varlet-ui/cat.png'

test('test image example', () => {
  const wrapper = mount(example)

  expect(wrapper.html()).toMatchSnapshot()
})

test('test image src', () => {
  const wrapper = mount(VarImage, {
    props: {
      src: SRC,
    },
  })

  expect(wrapper.find('img').element.src).toEqual(SRC)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test image plugin', () => {
  const app = createApp({}).use(Image)
  expect(app.component(Image.name)).toBeTruthy()
})

test('test image onLoad & onError', () => {
  const onLoad = jest.fn()
  const onError = jest.fn()

  const wrapper = mount(VarImage, {
    props: {
      onLoad,
      onError,
    },
  })

  const img = wrapper.find('img')

  img.trigger('load')
  img.trigger('error')
  expect(onLoad).toHaveBeenCalledTimes(1)
  expect(onError).toHaveBeenCalledTimes(1)
})

test('test image onLoad & onError in lazy mode', () => {
  const onLoad = jest.fn()
  const onError = jest.fn()

  const wrapper = mount(VarImage, {
    props: {
      lazy: true,
      onLoad,
      onError,
    },
  })

  const img = wrapper.find('img')

  img.element._lazy.state = 'success'
  img.trigger('load')
  expect(onLoad).toHaveBeenCalledTimes(1)

  img.element._lazy.state = 'error'
  img.trigger('load')
  expect(onError).toHaveBeenCalledTimes(1)
})

test('test image onLoad & onError null callback', async () => {
  const wrapper = mount(VarImage)

  const img = wrapper.find('img')
  img.trigger('load')
  img.trigger('error')

  await wrapper.setProps({ lazy: true })

  const lazyImage = wrapper.find('img')
  lazyImage.element._lazy.state = 'success'
  lazyImage.trigger('load')
  lazyImage.element._lazy.state = 'error'
  lazyImage.trigger('load')
})

test('test image styles', () => {
  const wrapper = mount(VarImage, {
    props: {
      src: SRC,
      ripple: true,
      block: false,
      alt: 'alt',
      width: '100px',
      height: '100px',
      radius: '10px',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test image fit', async () => {
  const wrapper = mount(VarImage)

  await wrapper.setProps({ fit: 'fill' })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ fit: 'cover' })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ fit: 'none' })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ fit: 'scale-down' })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({ fit: 'contain' })
  expect(wrapper.html()).toMatchSnapshot()
})
