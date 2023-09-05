import ColorPicker from '..'
import VarColorPicker from '../ColorPicker'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test color-picker use', () => {
  const app = createApp({}).use(ColorPicker)
  expect(app.component(ColorPicker.name)).toBeTruthy()
})

describe('test colorPicker component props', () => {
  test('test show swatches-layout', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        swatchesLayout: true,
      },
    })
    expect(wrapper.find('.var-color-picker-swatches').exists()).toBe(true)
    wrapper.unmount()
  })

  test('test show canvas-layout', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        canvasLayout: true,
      },
    })
    expect(wrapper.find('.var-color-picker-canvas').exists()).toBe(true)
    wrapper.unmount()
  })

  test('test show input-layout', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        inputLayout: true,
      },
    })
    expect(wrapper.find('.var-color-picker-edit').exists()).toBe(true)
    wrapper.unmount()
  })

  test('test show slider-layout', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        sliderLayout: true,
      },
    })
    expect(wrapper.find('.var-color-picker__preview').exists()).toBe(true)
    wrapper.unmount()
  })

  test('test canvas panel height', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        canvasHeight: 300,
      },
    })
    expect(wrapper.find('.var-color-picker-canvas').attributes('style')).toContain('height: 300px')
    wrapper.unmount()
  })

  test('test colorPicker container width', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        width: 500,
      },
    })
    expect(wrapper.find('.var-color-picker-canvas').attributes('style')).toContain('width: 500px')
    wrapper.unmount()
  })

  test('test show disabled', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        disabled: true,
      },
    })
    expect(wrapper.find('.var-color-picker-canvas').attributes('style')).toContain('cursor: not-allowed')
    wrapper.unmount()
  })

  test('test colorPicker mode props', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        mode: 'hex',
      },
    })
    expect(wrapper.find('.var-color-picker-edit__input span').element.textContent).toBe('HEX')
    wrapper.unmount()
  })

  test('test colorPicker swatches props', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        swatches: [['#ffbbaa']],
        swatchesLayout: true,
      },
    })
    expect(wrapper.find('.var-color-picker-swatches__color div').attributes('style')).toContain(
      'background: rgb(255, 187, 170);'
    )
    wrapper.unmount()
  })

  test('test colorPicker v-model', () => {
    const Wrapper = {
      components: {
        [VarColorPicker.name]: VarColorPicker,
      },
      data: () => ({
        color: '#AAFFBB',
      }),
      template: `<var-color-picker v-model="color" />`,
    }
    const wrapper = mount(Wrapper)
    expect(wrapper.find('.var-color-picker__preview__dots div').attributes('style')).toContain(
      'background: rgb(170, 255, 187);'
    )
    wrapper.unmount()
  })
})
