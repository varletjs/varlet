import example from '../example'
import Loading from '..'
import VarLoading from '../Loading'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test loading example', () => {
  const wrapper = mount(example)

  expect(wrapper.html()).toMatchSnapshot()
})

test('test loading plugin', () => {
  const app = createApp({}).use(Loading)
  expect(app.component(Loading.name)).toBeTruthy()
})

test('test circle props', async () => {
  const wrapper = mount(VarLoading, {
    props: {
      type: 'circle',
      color: '#2979ff',
      radius: '12',
    }
  })


  expect(wrapper.html()).toMatchSnapshot()
})

test('test wave props', async () => {
  const wrapper = mount(VarLoading, {
    props: {
      type: 'wave',
      color: '#2979ff',
      size: 'small',
    }
  })


  expect(wrapper.html()).toMatchSnapshot()
})

test('test cube props', async () => {
  const wrapper = mount(VarLoading, {
    props: {
      type: 'cube',
      color: '#2979ff',
      size: 'small',
    }
  })


  expect(wrapper.html()).toMatchSnapshot()
})

test('test rect props', async () => {
  const wrapper = mount(VarLoading, {
    props: {
      type: 'rect',
      color: '#2979ff',
      size: 'small',
    }
  })


  expect(wrapper.html()).toMatchSnapshot()
})

test('test disappear props', async () => {
  const wrapper = mount(VarLoading, {
    props: {
      type: 'disappear',
      color: '#2979ff',
      size: 'small',
    }
  })


  expect(wrapper.html()).toMatchSnapshot()
})
