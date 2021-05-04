import example from '../example'
import List from '..'
import VarList from '../List'
import { mount } from '@vue/test-utils'
import { createApp, h } from 'vue'
import { delay } from '../../utils/jest'

test('test list example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test list plugin', () => {
  const app = createApp({}).use(List)
  expect(app.component(List.name)).toBeTruthy()
})

test('test list immediate check', async () => {
  const onLoad = jest.fn()
  const onUpdateLoading = jest.fn()

  const wrapper = mount(VarList, {
    props: {
      onLoad,
      'onUpdate:loading': onUpdateLoading,
    },
    attachTo: document.body,
  })

  jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({
    width: 100,
    height: 100,
  })
  await delay(16)

  expect(onLoad).toHaveBeenCalledTimes(1)
  expect(onUpdateLoading).toHaveBeenCalledTimes(1)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test click error text reload', async () => {
  const onLoad = jest.fn()
  const onUpdateLoading = jest.fn((value) => wrapper.setProps({ loading: value }))
  const onUpdateError = jest.fn((value) => wrapper.setProps({ error: value }))

  const wrapper = mount(VarList, {
    props: {
      error: true,
      errorText: '点击重试',
      onLoad,
      'onUpdate:error': onUpdateError,
      'onUpdate:loading': onUpdateLoading,
    },
    attachTo: document.body,
  })

  jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({
    width: 100,
    height: 100,
  })

  await delay(16)

  expect(onLoad).toHaveBeenCalledTimes(0)
  expect(wrapper.find('.var-list__error').text()).toBe('点击重试')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.find('.var-list__error').trigger('click')
  expect(onUpdateLoading).toHaveBeenCalledTimes(1)
  expect(onUpdateError).toHaveBeenCalledTimes(1)
  expect(onLoad).toHaveBeenCalledTimes(1)

  await delay(16)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test list finished', async () => {
  const wrapper = mount(VarList, {
    props: {
      finished: true,
      finishedText: '暂无更多',
    },
    attachTo: document.body,
  })

  await delay(16)

  expect(wrapper.find('.var-list__finished').text()).toBe('暂无更多')
  expect(wrapper.html()).toMatchSnapshot()
})
