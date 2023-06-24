import List from '..'
import VarList from '../List'
import TabsItems from '../../tabs-items'
import TabItem from '../../tab-item'
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

test('test load event while list in tab-item', async () => {
  const load = jest.fn()
  const load2 = jest.fn()

  const Wrapper = {
    components: {
      [List.name]: List,
      [TabsItems.name]: TabsItems,
      [TabItem.name]: TabItem,
    },
    data: () => ({
      loading: false,
      loading2: false,
      active: 0,
    }),
    methods: {
      load,
      load2,
    },
    template: `
    <var-tabs-items v-model:active="active">
      <var-tab-item>
        <var-list v-model:loading="loading" @load="load">
        </var-list>
      </var-tab-item>
      <var-tab-item>
        <var-list v-model:loading="loading2" @load="load2">
        </var-list>
      </var-tab-item>
    </var-tabs-items>
    `,
  }

  const wrapper = mount(Wrapper)
  await delay(60)
  expect(load).toBeCalledTimes(1)
  expect(load2).toBeCalledTimes(0)

  await wrapper.setData({ active: 1 })
  await delay(0)
  expect(load).toBeCalledTimes(1)
  expect(load2).toBeCalledTimes(1)
})
