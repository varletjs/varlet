import Collapse from '..'
import CollapseItem from '../../collapse-item'
import VarCollapse from '../Collapse'
import VarCollapseItem from '../../collapse-item/CollapseItem'
import { mount } from '@vue/test-utils'
import { createApp, ref } from 'vue'
import { delay } from '../../utils/test'
import { expect, vi, describe } from 'vitest'

test('test collapse and collapseItem use', () => {
  const app = createApp({}).use(Collapse).use(CollapseItem)

  expect(app.component(Collapse.name)).toBeTruthy()
  expect(app.component(CollapseItem.name)).toBeTruthy()
})

test('test collapse and collapseItem onChange', async () => {
  const template = `
    <var-collapse v-model="value" @change="handleChange">
      <var-collapse-item title="test1" name="1">test1</var-collapse-item>
      <var-collapse-item title="test2" name="2">test2</var-collapse-item>
      <var-collapse-item title="test3" name="3">test3</var-collapse-item>
    </var-collapse>
  `

  const handleChange = vi.fn()

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
        handleChange,
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

  expect(wrapper.vm.value).toEqual(['2', '1'])

  await secondCollapseItemHeader.trigger('click')

  expect(wrapper.vm.value).toEqual(['1'])

  expect(collapseItemList[0].classes()).toContain('var-collapse-item--active')
  expect(handleChange).toHaveBeenCalledTimes(2)
})

describe('test collapse and collapseItem props', () => {
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

    wrapper.unmount()
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

  test('test collapse divider', async () => {
    const template = `
     <var-collapse v-model="value" :divider="divider">
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
          value: [],
          divider: true,
        }
      },
      template,
    })

    await delay(0)

    expect(wrapper.find('.var-collapse-item').attributes('style')).toBe(
      '--collapse-divider-top: var(--collapse-border-top);'
    )

    await wrapper.setData({ divider: false })
    await delay(0)
    expect(wrapper.find('.var-collapse-item').attributes('style')).toBe('--collapse-divider-top: none;')

    wrapper.unmount()
  })

  test('test collapse toggleAll', async () => {
    const collapseRef = ref(null)

    const template = `
      <var-collapse v-model="value" ref="collapseRef">
        <var-collapse-item :title="test1" name="1">test1</var-collapse-item>
        <var-collapse-item :title="test2" name="2"> test2</var-collapse-item>
        <var-collapse-item :title="test3" disabled name="3"> test3</var-collapse-item>
        <var-collapse-item :title="test4" disabled name="4"> test4</var-collapse-item>
      </var-collapse>
    `
    const wrapper = mount({
      components: {
        [VarCollapse.name]: VarCollapse,
        [VarCollapseItem.name]: VarCollapseItem,
      },
      data() {
        return {
          value: ['1', '3'],
        }
      },
      template,
      setup() {
        return {
          collapseRef,
        }
      },
    })

    await wrapper.vm.$nextTick()

    collapseRef.value.toggleAll({ expand: 'inverse' })
    expect(wrapper.vm.value).toEqual(['2', '4'])

    await wrapper.setData({ value: ['1', '3'] })
    collapseRef.value.toggleAll({ expand: 'inverse', skipDisabled: true })
    expect(wrapper.vm.value).toEqual(['2', '3'])

    await wrapper.setData({ value: ['1', '3'] })
    collapseRef.value.toggleAll({ expand: true })
    expect(wrapper.vm.value).toEqual(['1', '2', '3', '4'])

    await wrapper.setData({ value: ['1', '3'] })
    collapseRef.value.toggleAll({ expand: true, skipDisabled: true })
    expect(wrapper.vm.value).toEqual(['1', '2', '3'])

    await wrapper.setData({ value: ['1', '3'] })
    collapseRef.value.toggleAll({ expand: false })
    expect(wrapper.vm.value).toEqual([])

    await wrapper.setData({ value: ['1', '3'] })
    collapseRef.value.toggleAll({ expand: false, skipDisabled: true })
    expect(wrapper.vm.value).toEqual(['3'])
  })
})
