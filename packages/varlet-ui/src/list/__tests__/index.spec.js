import List from '..'
import VarList from '../List'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay } from '../../utils/jest'

test('test list use', () => {
  const app = createApp({}).use(List)
  expect(app.component(List.name)).toBeTruthy()
})

test('test list component load event', async () => {
  const onLoad = jest.fn()
  const onUpdateLoading = jest.fn()

  const wrapper = mount(VarList, {
    props: {
      onLoad,
      'onUpdate:loading': onUpdateLoading,
    },
    attachTo: document.body,
  })

  const mockGetBoundingClientRect = jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ bottom: 0 })
  await delay(16)

  expect(onLoad).toHaveBeenCalledTimes(1)
  expect(onUpdateLoading).toHaveBeenCalledTimes(1)
  wrapper.unmount()
  mockGetBoundingClientRect.mockRestore()
})

describe('test list component props', () => {
  test('test list loading and loading-text', async () => {
    const wrapper = mount(VarList, {
      props: {
        loading: true,
        loadingText: 'This is loading text',
      },
    })

    const mockGetBoundingClientRect = jest
      .spyOn(wrapper.element, 'getBoundingClientRect')
      .mockReturnValue({ bottom: 50 })
    await delay(16)
    expect(wrapper.find('.var-list__loading').element.textContent).toBe('This is loading text')
    await wrapper.setProps({ loading: false })
    await delay(16)
    expect(wrapper.find('.var-list__loading').exists()).toBe(false)
    wrapper.unmount()
    mockGetBoundingClientRect.mockRestore()
  })

  test('test list error and error-text', async () => {
    const wrapper = mount(VarList, {
      props: {
        error: true,
        errorText: 'This is error text',
      },
    })

    const mockGetBoundingClientRect = jest
      .spyOn(wrapper.element, 'getBoundingClientRect')
      .mockReturnValue({ bottom: 50 })
    await delay(16)
    expect(wrapper.find('.var-list__error').element.textContent).toBe('This is error text')
    await wrapper.setProps({ error: false })
    await delay(16)
    expect(wrapper.find('.var-list__error').exists()).toBe(false)
    wrapper.unmount()
    mockGetBoundingClientRect.mockRestore()
  })

  test('test list finished and finished-text', async () => {
    const wrapper = mount(VarList, {
      props: {
        finished: true,
        finishedText: 'This is finished text',
      },
    })

    const mockGetBoundingClientRect = jest
      .spyOn(wrapper.element, 'getBoundingClientRect')
      .mockReturnValue({ bottom: 50 })
    await delay(16)
    expect(wrapper.find('.var-list__finished').element.textContent).toBe('This is finished text')
    await wrapper.setProps({ finished: false })
    await delay(16)
    expect(wrapper.find('.var-list__finished').exists()).toBe(false)
    wrapper.unmount()
    mockGetBoundingClientRect.mockRestore()
  })
})
