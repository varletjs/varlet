import Cell from '..'
import VarCell from '../Cell'
import VarIcon from '../../icon/Icon'
import { mount } from '@vue/test-utils'
import { createApp, h } from 'vue'

test('test cell plugin', () => {
  const app = createApp({}).use(Cell)
  expect(app.component(Cell.name)).toBeTruthy()
})

describe('test cell component props', () => {
  test('test cell title', () => {
    const wrapper = mount(VarCell, {
      props: {
        title: 'This is cell',
      },
    })

    expect(wrapper.find('.var-cell__title').text()).toBe('This is cell')
    wrapper.unmount()
  })

  test('test cell icon', () => {
    const wrapper = mount(VarCell, {
      props: {
        icon: 'fire',
      },
    })

    expect(wrapper.find('.var-icon').classes('var-icon-fire')).toBe(true)
    wrapper.unmount()
  })

  test('test cell desc', () => {
    const wrapper = mount(VarCell, {
      props: {
        desc: 'This is desc',
      },
    })

    expect(wrapper.find('.var-cell__desc').text()).toBe('This is desc')
    wrapper.unmount()
  })

  test('test cell border', async () => {
    const wrapper = mount(VarCell, {
      props: {
        border: true,
      },
    })

    expect(wrapper.classes('var-cell--border')).toBe(true)
    await wrapper.setProps({ border: false })
    expect(wrapper.classes('var-cell--border')).toBe(false)
    wrapper.unmount()
  })

  test('test cell icon class', () => {
    const wrapper = mount(VarCell, {
      props: {
        icon: 'fire',
        iconClass: 'test-icon-class',
      },
    })

    expect(wrapper.find('.var-cell__icon').classes()).toContain('test-icon-class')
    wrapper.unmount()
  })

  test('test cell title class', () => {
    const wrapper = mount(VarCell, {
      props: {
        title: 'This is Cell',
        titleClass: 'test-title-class',
      },
    })

    expect(wrapper.find('.var-cell__title').classes()).toContain('test-title-class')
    wrapper.unmount()
  })

  test('test cell desc class', () => {
    const wrapper = mount(VarCell, {
      props: {
        desc: 'This is desc',
        descClass: 'test-desc-class',
      },
    })

    expect(wrapper.find('.var-cell__desc').classes()).toContain('test-desc-class')
    wrapper.unmount()
  })

  test('test cell extra class', () => {
    const wrapper = mount(VarCell, {
      props: {
        extraClass: 'test-extra-class',
      },
      slots: {
        extra: 'information',
      },
    })

    expect(wrapper.find('.var-cell__extra').classes()).toContain('test-extra-class')
    wrapper.unmount()
  })
})

describe('test cell component slots', () => {
  test('test cell default slots', () => {
    const wrapper = mount(VarCell, {
      slots: {
        default: () => 'This is cell',
      },
    })

    expect(wrapper.find('.var-cell__title').element.textContent).toBe('This is cell')
    wrapper.unmount()
  })

  test('test cell icon slots', () => {
    const wrapper = mount(VarCell, {
      slots: {
        icon: h(VarIcon, { name: 'fire' }),
      },
    })

    expect(wrapper.find('.var-icon').classes('var-icon-fire')).toBe(true)
    wrapper.unmount()
  })

  test('test cell desc slots', () => {
    const wrapper = mount(VarCell, {
      slots: {
        desc: () => 'This is desc',
      },
    })

    expect(wrapper.find('.var-cell__desc').text()).toBe('This is desc')
    wrapper.unmount()
  })

  test('test cell extra slots', () => {
    const wrapper = mount(VarCell, {
      slots: {
        extra: 'information',
      },
    })

    expect(wrapper.find('.var-cell__extra').text()).toContain('information')
    wrapper.unmount()
  })
})
