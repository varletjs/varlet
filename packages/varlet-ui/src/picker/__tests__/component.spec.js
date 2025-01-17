import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Picker from '..'
import { delay, mockTranslate, trigger } from '../../utils/test'
import VarPicker from '../Picker'

mockTranslate()

test('picker component plugin', () => {
  const app = createApp({}).use(Picker.Component)
  expect(app.component(Picker.Component.name)).toBeTruthy()
})

const columns = [[{ text: 'A' }, { text: 'B' }, { text: 'C' }]]

const triggerDrag = async (element, x, y) => {
  await trigger(element, 'touchstart', 0, 0)
  await trigger(element, 'touchmove', x / 4, y / 4)
  await trigger(element, 'touchmove', x / 3, y / 3)
  await trigger(element, 'touchmove', x / 2, y / 2)
  await trigger(element, 'touchmove', x, y)
  await delay(300)
  await trigger(element, 'touchend', x, y)
}

test('scroll up & onConfirm', async () => {
  const onConfirm = vi.fn()

  const wrapper = mount(VarPicker, {
    props: {
      columns,
      onConfirm,
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
  const { element } = wrapper.find('.var-picker__column')

  await triggerDrag(element, 0, -600)
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.var-picker__confirm-button').trigger('click')
  expect(onConfirm).lastCalledWith(['C'], [2], [{ text: 'C' }])

  wrapper.unmount()
})

test('click option & onConfirm', async () => {
  const onConfirm = vi.fn()

  const wrapper = mount(VarPicker, {
    props: {
      columns,
      onConfirm,
    },
  })

  const options = wrapper.findAll('.var-picker__option')
  await options[1].trigger('click')
  await delay(300)

  await wrapper.find('.var-picker__confirm-button').trigger('click')
  expect(onConfirm).toHaveBeenLastCalledWith(['B'], [1], [{ text: 'B' }])

  wrapper.unmount()
})

test('scroll down & onCancel', async () => {
  const onCancel = vi.fn()

  const wrapper = mount(VarPicker, {
    props: {
      columns,
      onCancel,
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
  const { element } = wrapper.find('.var-picker__column')

  await triggerDrag(element, 0, 600)
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.var-picker__cancel-button').trigger('click')
  expect(onCancel).lastCalledWith(['A'], [0], [{ text: 'A' }])

  wrapper.unmount()
})

test('cascade mode', async () => {
  const onConfirm = vi.fn()

  const wrapper = mount(VarPicker, {
    props: {
      cascade: true,
      columns: [
        {
          text: '成都市',
          children: [
            {
              text: '温江区',
            },
            {
              text: '金牛区',
            },
          ],
        },
        {
          text: '无锡市',
          children: [
            {
              text: '新吴区',
            },
            {
              text: '惠山区',
            },
          ],
        },
      ],
      onConfirm,
    },
  })

  let columns = wrapper.findAll('.var-picker__column')
  expect(wrapper.html()).toMatchSnapshot()
  expect(columns.length).toBe(2)

  const confirmButton = wrapper.find('.var-picker__confirm-button')

  await triggerDrag(columns[0].element, 0, -44)
  await confirmButton.trigger('click')
  expect(onConfirm).lastCalledWith(
    ['无锡市', '新吴区'],
    [1, 0],
    [
      {
        text: '无锡市',
        children: [
          {
            text: '新吴区',
          },
          {
            text: '惠山区',
          },
        ],
      },
      { text: '新吴区' },
    ],
  )

  // find elements again for rebuild children
  columns = wrapper.findAll('.var-picker__column')
  await triggerDrag(columns[1].element, 0, -44)
  await confirmButton.trigger('click')
  expect(onConfirm).lastCalledWith(
    ['无锡市', '惠山区'],
    [1, 1],
    [
      {
        text: '无锡市',
        children: [
          {
            text: '新吴区',
          },
          {
            text: '惠山区',
          },
        ],
      },
      { text: '惠山区' },
    ],
  )

  wrapper.unmount()
})

test('custom key', async () => {
  const onConfirm = vi.fn()
  const wrapper = mount(VarPicker, {
    props: {
      columns: [
        {
          id: 1,
          label: '无锡市',
          next: [
            {
              id: 10,
              label: '新吴区',
            },
            {
              id: 11,
              label: '惠山区',
            },
          ],
        },
      ],
      textKey: 'label',
      valueKey: 'id',
      childrenKey: 'next',
      cascade: true,
      onConfirm,
    },
  })
  const columns = wrapper.findAll('.var-picker__column')
  expect(wrapper.html()).toMatchSnapshot()
  await triggerDrag(columns[0].element, 0, -44)
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.var-picker__confirm-button').trigger('click')
  expect(onConfirm).lastCalledWith(
    [1, 10],
    [0, 0],
    [
      {
        id: 1,
        label: '无锡市',
        next: [
          {
            id: 10,
            label: '新吴区',
          },
          {
            id: 11,
            label: '惠山区',
          },
        ],
      },
      {
        id: 10,
        label: '新吴区',
      },
    ],
  )

  wrapper.unmount()
})

test('multiple column picker columnsCount', async () => {
  const onConfirm = vi.fn()
  const wrapper = mount(VarPicker, {
    props: {
      columns: [
        [
          { text: 'A', value: '1-1' },
          { text: 'B', value: '1-2' },
          { text: 'C', value: '1-3' },
        ],
        [
          { text: 'A', value: '2-1' },
          { text: 'B', value: '2-2' },
          { text: 'C', value: '2-3' },
        ],
        [
          { text: 'A', value: '3-1' },
          { text: 'B', value: '3-2' },
          { text: 'C', value: '3-3' },
        ],
      ],
      columnsCount: 2,
      onConfirm,
    },
  })
  const columns = wrapper.findAll('.var-picker__column')
  expect(wrapper.html()).toMatchSnapshot()
  expect(columns.length).toBe(2)

  await triggerDrag(columns[1].element, 0, -44)
  await wrapper.find('.var-picker__confirm-button').trigger('click')
  expect(onConfirm).lastCalledWith(
    ['1-1', '2-2'],
    [0, 1],
    [
      {
        text: 'A',
        value: '1-1',
      },
      {
        text: 'B',
        value: '2-2',
      },
    ],
  )
  wrapper.unmount()
})

test('cascade column picker columnsCount', async () => {
  const onConfirm = vi.fn()
  const wrapper = mount(VarPicker, {
    props: {
      columns: [
        {
          text: '四川省',
          children: [
            {
              text: '成都市',
              children: [
                {
                  text: '温江区',
                },
              ],
            },
            {
              text: '攀枝花市',
              children: [
                {
                  text: '东区',
                },
              ],
            },
          ],
        },
        {
          text: '江苏省',
          children: [
            {
              text: '无锡市',
              children: [
                {
                  text: '新吴区',
                },
              ],
            },
          ],
        },
      ],
      cascade: true,
      columnsCount: 2,
      onConfirm,
    },
  })
  const columns = wrapper.findAll('.var-picker__column')
  expect(wrapper.html()).toMatchSnapshot()
  expect(columns.length).toBe(2)

  await triggerDrag(columns[1].element, 0, -44)
  await wrapper.find('.var-picker__confirm-button').trigger('click')
  expect(onConfirm).lastCalledWith(
    ['四川省', '攀枝花市'],
    [0, 1],
    [
      {
        text: '四川省',
        children: [
          {
            text: '成都市',
            children: [
              {
                text: '温江区',
              },
            ],
          },
          {
            text: '攀枝花市',
            children: [
              {
                text: '东区',
              },
            ],
          },
        ],
      },
      {
        text: '攀枝花市',
        children: [
          {
            text: '东区',
          },
        ],
      },
    ],
  )
  wrapper.unmount()
})

test('column option className', () => {
  const wrapper = mount(VarPicker, {
    props: {
      columns: [
        [
          {
            text: 'A',
            className: 'a',
            textClassName: 'b',
          },
          {
            text: 'B',
          },
        ],
      ],
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})
