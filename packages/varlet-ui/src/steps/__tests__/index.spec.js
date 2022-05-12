import Steps from '..'
import Step from '../../step'
import VarSteps from '../Steps'
import VarStep from '../../step/Step'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay } from '../../utils/jest'

const clickStep = jest.fn()
const Wrapper = {
  components: {
    [VarSteps.name]: VarSteps,
    [VarStep.name]: VarStep,
  },
  template: `
    <var-steps @clickStep="clickStep">
      <var-step>step 1</var-step>
      <var-step>step 2</var-step>
      <var-step active-icon="check-circle-outline" current-icon="radio-blank" inactive-icon="minus-circle-outline">step 3</var-step>
      <var-step>step 4</var-step>
    </var-steps>
  `,
  methods: {
    clickStep,
  },
}

test('test steps and step use', () => {
  const app = createApp({}).use(Steps).use(Step)

  expect(app.component(Steps.name)).toBeTruthy()
  expect(app.component(Step.name)).toBeTruthy()
})

test('test steps component event', async () => {
  const wrapper = mount(Wrapper)
  await wrapper.find('.var-step__horizontal-tag').trigger('click')
  expect(clickStep).toHaveBeenCalledTimes(1)
  wrapper.unmount()
})

describe('test steps and step components props', () => {
  test('test steps active', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        active: 1,
      },
    })

    await delay(50)
    wrapper.findAll('.var-step__horizontal-main').forEach((item, index) => {
      expect(item.find('.var-step__horizontal-tag--active').exists()).toBe(index < 2)
      expect(item.find('.var-step__horizontal-content--active').exists()).toBe(index < 2)
    })
    wrapper.unmount()
  })

  test('test steps direction', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        direction: 'vertical',
      },
    })

    expect(wrapper.find('.var-steps').attributes('style')).toContain('flex-direction: column;')
    await wrapper.setProps({ direction: 'horizontal' })
    expect(wrapper.find('.var-steps').attributes('style')).toContain('flex-direction: row;')
    wrapper.unmount()
  })

  test('test steps active-color', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        activeColor: 'red',
      },
    })

    await delay(50)
    expect(wrapper.find('.var-step__horizontal-tag--active').attributes('style')).toContain('background-color: red;')
    wrapper.unmount()
  })

  test('test steps inactive-color', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        inactiveColor: 'red',
      },
    })

    await delay(50)
    wrapper.findAll('.var-step__horizontal-tag').forEach((item, index) => {
      expect(item.attributes('style')).toContain(index > 0 ? 'background-color: red;' : '')
    })
    wrapper.unmount()
  })

  test('test steps current-icon', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        active: 3,
      },
    })

    await delay(50)
    expect(wrapper.findAll('.var-step')[2].find('.var-icon-check-circle-outline').exists()).toBe(true)
    wrapper.unmount()
  })

  test('test steps active-icon', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        active: 2,
      },
    })

    await delay(50)
    expect(wrapper.findAll('.var-step')[2].find('.var-icon-radio-blank').exists()).toBe(true)
    wrapper.unmount()
  })

  test('test steps inactive-icon', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        active: 1,
      },
    })

    await delay(50)
    expect(wrapper.findAll('.var-step')[2].find('.var-icon-minus-circle-outline').exists()).toBe(true)
    wrapper.unmount()
  })
})
