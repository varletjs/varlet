import Collapse from '..'
import CollapseItem from '../../collapse-item'
import VarCollapse from '../Collapse'
import VarCollapseItem from '../../collapse-item/CollapseItem'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, mockConsole } from '../../utils/test'

test('test collapse and collapseItem use', () => {
  const app = createApp({}).use(Collapse).use(CollapseItem)

  expect(app.component(Collapse.name)).toBeTruthy()
  expect(app.component(CollapseItem.name)).toBeTruthy()
})

test('test collapse and collapseItem onChange', async () => {
  const template = `
    <var-collapse v-model="value" @change="changeHandle">
      <var-collapse-item title="test1" name="1">test1</var-collapse-item>
      <var-collapse-item title="test2" name="2">test2</var-collapse-item>
      <var-collapse-item title="test3" name="3">test3</var-collapse-item>
    </var-collapse>
  `

  const changeHandle = vi.fn()

  const wrapper = mount(
    {
      components: {
        [VarCollapse.name]: VarCollapse,
        [VarCollapseItem.name]: VarCollapseItem,
      },
      data() {
        return {
          value: ['2'],
        }
      },
      methods: {
        changeHandle,
      },
      template,
    },
    { attachTo: document.body }
  )

  await delay(0)

  const collapseItemList = wrapper.findAll('.var-collapse-item')

  expect(collapseItemList[1].classes()).toContain('var-collapse-item--active')

  const firstCollapseItemHeader = collapseItemList[0].find('.var-collapse-item__header')
  const secondCollapseItemHeader = collapseItemList[1].find('.var-collapse-item__header')

  expect(firstCollapseItemHeader.exists()).toBeTruthy()

  await firstCollapseItemHeader.trigger('click')

  await secondCollapseItemHeader.trigger('click')

  expect(wrapper.vm.value).toEqual(['1'])

  expect(collapseItemList[0].classes()).toContain('var-collapse-item--active')
  expect(changeHandle).toHaveBeenCalledTimes(2)
})

describe('test collapse and collapseItem props', () => {
  test('test invalid modelValue', async () => {
    const errorFn = vi.fn()
    const { mockRestore } = mockConsole('error', errorFn)
    const template = `
       <var-collapse v-model="value" :accordion="accordion">
        <var-collapse-item title="test1" name="1">test1</var-collapse-item>
        <var-collapse-item title="test2" name="2">test2</var-collapse-item>
       </var-collapse>
    `

    const wrapper = mount({
      components: {
        [VarCollapse.name]: VarCollapse,
        [VarCollapseItem.name]: VarCollapseItem,
      },
      data() {
        return {
          value: '1',
          accordion: false,
        }
      },
      template,
    })

    await delay(0)
    await wrapper.setData({
      value: ['1'],
      accordion: true,
    })
    await delay(0)
    expect(errorFn).toHaveBeenCalledTimes(2)
    mockRestore()
  })

  test('test collapse accordion', async () => {
    const template = `
     <var-collapse v-model="value" accordion>
      <var-collapse-item title="test1" name="1">test1</var-collapse-item>
      <var-collapse-item title="test2" name="2">test2</var-collapse-item>
     </var-collapse>
    `

    const wrapper = mount({
      components: {
        [VarCollapse.name]: VarCollapse,
        [VarCollapseItem.name]: VarCollapseItem,
      },
      data() {
        return {
          value: '2',
        }
      },
      template,
    })

    await delay(0)
    await wrapper.find('.var-collapse-item__header').trigger('click')
    expect(wrapper.vm.value).toBe('1')
  })

  test('test collapseItem disabled', async () => {
    const template = `
      <var-collapse v-model="value">
        <var-collapse-item title="test1" disabled name="1">test1</var-collapse-item>
        <var-collapse-item title="test2" name="2">test2</var-collapse-item>
        <var-collapse-item title="test3" name="3">test3</var-collapse-item>
      </var-collapse>
    `

    const wrapper = mount(
      {
        components: {
          [VarCollapse.name]: VarCollapse,
          [VarCollapseItem.name]: VarCollapseItem,
        },
        data() {
          return {
            value: ['2'],
          }
        },
        template,
      },
      { attachTo: document.body }
    )

    await delay(0)
    const collapseItemList = wrapper.findAll('.var-collapse-item')
    expect(collapseItemList[0].classes()).toContain('var-collapse-item--disable')
    await collapseItemList[0].find('.var-collapse-item__header').trigger('click')
    expect(wrapper.vm.value.toString()).toBe('2')
  })

  test('test collapseItem icon', async () => {
    const template = `
      <var-collapse v-model="value">
        <var-collapse-item title="test1" name="1" icon="checkbox-marked-circle" />
      </var-collapse>
    `

    const wrapper = mount(
      {
        components: {
          [VarCollapse.name]: VarCollapse,
          [VarCollapseItem.name]: VarCollapseItem,
        },
        data() {
          return {
            value: ['1'],
          }
        },
        template,
      },
      { attachTo: document.body }
    )

    await delay(0)
    expect(wrapper.find('.var-icon-checkbox-marked-circle').exists()).toBe(true)
    wrapper.unmount()
  })
})
