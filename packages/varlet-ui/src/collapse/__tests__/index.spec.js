import Collapse from '..'
import CollapseItem from '../../collapse-item'
import VarCollapse from '../Collapse'
import VarCollapseItem from '../../collapse-item/CollapseItem'
import { mount } from '@vue/test-utils'
import { createApp, ref } from 'vue'
import { delay } from '../../utils/test'
import { expect, vi, describe, test } from 'vitest'

describe('test collapse and collapseItem render', () => {
  test('test collapse and collapseItem use', () => {
    const app = createApp({}).use(Collapse).use(CollapseItem)

    expect(app.component(Collapse.name)).toBeTruthy()
    expect(app.component(CollapseItem.name)).toBeTruthy()
  })
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

    await delay(100)
    await wrapper.find('.var-collapse-item__header').trigger('click')
    expect(wrapper.vm.value).toBe('1')
  })

  test('test collapse elevation', async () => {
    const elevation = ref(false)

    const template = `
     <var-collapse v-model="value" :elevation="elevation">
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
          value: ['2'],
        }
      },
      template,
      setup() {
        return {
          elevation,
        }
      },
    })

    await delay(100)
    expect(wrapper.find('.var-collapse-item__shadow').classes()).not.toContain('var-elevation--2')

    elevation.value = true
    await delay(100)
    expect(wrapper.find('.var-collapse-item__shadow').classes()).toContain('var-elevation--2')

    elevation.value = 24
    await delay(100)
    expect(wrapper.find('.var-collapse-item__shadow').classes()).toContain('var-elevation--24')
  })

  test('test collapse offset', async () => {
    const offset = ref(false)

    const template = `
     <var-collapse v-model="value" :offset="offset">
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
          value: ['2'],
        }
      },
      template,
      setup() {
        return {
          offset,
        }
      },
    })

    const collapseItemList = wrapper.findAll('.var-collapse-item')
    await collapseItemList[0].find('.var-collapse-item__header').trigger('click')
    await delay(100)
    expect(collapseItemList[0].classes()).not.toContain('var-collapse-item--active')

    await wrapper.setData({ value: ['2'] })
    offset.value = true
    await delay(100)
    await collapseItemList[0].find('.var-collapse-item__header').trigger('click')
    await delay(100)
    expect(collapseItemList[0].classes()).toContain('var-collapse-item--active')
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

    await delay(100)

    expect(wrapper.find('.var-collapse-item').attributes('style')).toBe(
      '--collapse-divider-top: var(--collapse-border-top);'
    )

    await wrapper.setData({ divider: false })
    await delay(100)
    expect(wrapper.find('.var-collapse-item').attributes('style')).toBe('--collapse-divider-top: none;')

    wrapper.unmount()
  })

  test('test collapseItem title and name', async () => {
    const title = ref('test1')
    const name = ref('1')
    const template = `
      <var-collapse v-model="value">
        <var-collapse-item :title="title" :name="name" />
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
            value: [],
          }
        },
        template,
        setup() {
          return {
            title,
            name,
          }
        },
      },
      { attachTo: document.body }
    )

    await delay(100)
    const collapseItemList = wrapper.findAll('.var-collapse-item')
    await collapseItemList[0].find('.var-collapse-item__header').trigger('click')
    expect(wrapper.vm.value).toStrictEqual(['1'])
    expect(wrapper.find('.var-collapse-item__header').text()).toBe('test1')

    await wrapper.setData({ value: [] })
    name.value = '2'
    title.value = 'test2'
    await delay(100)
    await collapseItemList[0].find('.var-collapse-item__header').trigger('click')
    await delay(100)
    expect(wrapper.vm.value).toStrictEqual(['2'])
    expect(wrapper.find('.var-collapse-item__header').text()).toBe('test2')
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

    await delay(100)
    expect(wrapper.find('.var-icon-checkbox-marked-circle').exists()).toBe(true)
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

    await delay(100)
    const collapseItemList = wrapper.findAll('.var-collapse-item')
    expect(collapseItemList[0].classes()).toContain('var-collapse-item--disable')
    await collapseItemList[0].find('.var-collapse-item__header').trigger('click')
    expect(wrapper.vm.value.toString()).toBe('2')

    wrapper.unmount()
  })
})

describe('test collapse Events', () => {
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

    await delay(100)

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

  describe('test collapse Methods', async () => {
    test('test collapse toggleAll', async () => {
      const collapseRef = ref(null)

      const template = `
      <var-collapse v-model="value" ref="collapseRef">
        <var-collapse-item title="test1" name="1">test1</var-collapse-item>
        <var-collapse-item title="test2" name="2"> test2</var-collapse-item>
        <var-collapse-item title="test3" disabled name="3"> test3</var-collapse-item>
        <var-collapse-item title="test4" disabled name="4"> test4</var-collapse-item>
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

  describe('test collapse slot', () => {
    test('test collapse slot default', async () => {
      const template = `
      <var-collapse v-model="value">
        <var-collapse-item title="test1" name="1">test1</var-collapse-item>
        <var-collapse-item title="test2" name="2">test2</var-collapse-item>
        <var-collapse-item title="test3" name="3">test3</var-collapse-item>
      </var-collapse>
    `
      const wrapper = mount({
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
      })

      await delay(100)
      expect(wrapper.findAll('.var-collapse-item__content')[0].text()).toBe('test1')
      expect(wrapper.findAll('.var-collapse-item__content')[1].text()).toBe('test2')
      expect(wrapper.findAll('.var-collapse-item__content')[2].text()).toBe('test3')
    })

    test('test collapse slot title ', async () => {
      const template = `
      <var-collapse v-model="value">
        <var-collapse-item name="1">
        test1
        <template #title>title slot1</template>
        </var-collapse-item>
        <var-collapse-item name="1">
        test1
        <template #title>title slot2</template>
        </var-collapse-item>
        <var-collapse-item name="1">
        test1
        <template #title>title slot3</template>
        </var-collapse-item>
      </var-collapse>
    `
      const wrapper = mount({
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
      })

      await delay(100)
      expect(wrapper.findAll('.var-collapse-item__header')[0].text()).toBe('title slot1')
      expect(wrapper.findAll('.var-collapse-item__header')[1].text()).toBe('title slot2')
      expect(wrapper.findAll('.var-collapse-item__header')[2].text()).toBe('title slot3')
    })

    test('test collapse slot title ', async () => {
      const template = `
      <var-collapse v-model="value">
        <var-collapse-item name="1">
        test1
        <template #icon>icon slot1</template>
        </var-collapse-item>
        <var-collapse-item name="1">
        test1
        <template #icon>icon slot2</template>
        </var-collapse-item>
        <var-collapse-item name="1">
        test1
        <template #icon>icon slot3</template>
        </var-collapse-item>
      </var-collapse>
    `
      const wrapper = mount({
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
      })

      await delay(100)
      expect(wrapper.findAll('.var-collapse-item__header')[0].text()).toBe('icon slot1')
      expect(wrapper.findAll('.var-collapse-item__header')[1].text()).toBe('icon slot2')
      expect(wrapper.findAll('.var-collapse-item__header')[2].text()).toBe('icon slot3')
    })
  })
})
