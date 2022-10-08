import Row from '..'
import VarRow from '../Row'
import Col from '../../col'
import VarCol from '../../col/Col'
import { mount } from '@vue/test-utils'
import { createApp, h } from 'vue'
import { delay, mockConsole } from '../../utils/jest'

test('test row and col use', () => {
  const app = createApp({}).use(Row).use(Col)
  expect(app.component(Row.name)).toBeTruthy()
  expect(app.component(Col.name)).toBeTruthy()
})

describe('test row and col component props', () => {
  test('test row and col gutter', () => {
    const wrapper = mount(VarRow, {
      props: {
        gutter: 20,
      },
      slots: {
        default: () => [12, 12].map((span) => h(VarCol, { span })),
      },
    })

    expect(wrapper.find('.var-row').attributes('style')).toContain('margin: 0px -10px;')
    wrapper.unmount()
  })

  test('test row and col gutter computed', async () => {
    const wrapper = mount(VarRow, {
      props: {
        gutter: 20,
      },
      slots: {
        default: () => [12, 12].map((span) => h(VarCol, { span })),
      },
    })

    await delay(0)
    expect(wrapper.html()).toMatchSnapshot()
    await wrapper.setProps({ gutter: 40 })
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })

  test('test row and col justify', () => {
    ;['flex-start', 'flex-end', 'center', 'space-between', 'space-around'].forEach((justify) => {
      const wrapper = mount(VarRow, {
        props: {
          justify,
        },
        slots: {
          default: () => [12, 12].map((span) => h(VarCol, { span })),
        },
      })

      expect(wrapper.find('.var-row').attributes('style')).toContain('justify-content: ' + justify)
      wrapper.unmount()
    })
  })

  test('test row and col align', () => {
    ;['flex-start', 'flex-end', 'center'].forEach((align) => {
      const wrapper = mount(VarRow, {
        props: {
          align,
        },
        slots: {
          default: () => [12, 12].map((span) => h(VarCol, { span })),
        },
      })

      expect(wrapper.find('.var-row').attributes('style')).toContain('align-items: ' + align)
      wrapper.unmount()
    })
  })

  test('test row and col span', () => {
    const wrapper = mount(VarRow, {
      slots: {
        default: () => [6, 6, 6, 6].map((span) => h(VarCol, { span })),
      },
    })

    expect(wrapper.findAll('.var-col--span-6').length).toBe(4)
    wrapper.unmount()
  })

  test('test row and col span 0', () => {
    const wrapper = mount(VarRow, {
      slots: {
        default: () => [0, 12, 12].map((span) => h(VarCol, { span })),
      },
    })

    expect(wrapper.findAll('.var-col--span-0').length).toBe(1)
    wrapper.unmount()
  })

  test('test row and col offset', () => {
    const wrapper = mount(VarRow, {
      slots: {
        default: () => [6, 6].map((span) => h(VarCol, { span, offset: 6 })),
      },
    })

    expect(wrapper.findAll('.var-col--offset-6').length).toBe(2)
    wrapper.unmount()
  })

  test('test row and col responsive', () => {
    const wrapper = mount(VarRow, {
      slots: {
        default: () =>
          h(VarCol, {
            xs: { span: 12 },
            sm: { span: 6 },
            md: { span: 4 },
            lg: { span: 3 },
            xl: { span: 2 },
          }),
      },
    })

    const classNames = wrapper.find('.var-col').classes()
    expect(classNames).toContain('var-col--span-xs-12')
    expect(classNames).toContain('var-col--span-sm-6')
    expect(classNames).toContain('var-col--span-md-4')
    expect(classNames).toContain('var-col--span-lg-3')
    expect(classNames).toContain('var-col--span-xl-2')
    wrapper.unmount()
  })

  test('test col direction', () => {
    const wrapper = mount(VarRow, {
      slots: {
        default: () => [12, 12].map((span) => h(VarCol, { span, direction: 'column' })),
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })
})

test('test row and col responsive 0', () => {
  const wrapper = mount(VarRow, {
    slots: {
      default: () => [h(VarCol, { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 })],
    },
  })

  expect(wrapper.find('.var-col--span-xs-0')).toBeTruthy()
  expect(wrapper.find('.var-col--span-sm-0')).toBeTruthy()
  expect(wrapper.find('.var-col--span-md-0')).toBeTruthy()
  expect(wrapper.find('.var-col--span-lg-0')).toBeTruthy()
  expect(wrapper.find('.var-col--span-xl-0')).toBeTruthy()
  wrapper.unmount()
})

test('test col is not used in row', () => {
  const { mockRestore } = mockConsole('warn', (text) => {
    expect(text).toBe('col must in row')
  })

  mount(VarCol)

  mockRestore()
})
