import example from '../example'
import Steps from '..'
import Step from '../../step'
import VarSteps from '../Steps'
import VarStep from '../../step/Step'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test steps example', () => {
  const wrapper = mount(example)

  expect(wrapper.html()).toMatchSnapshot()
})

test('test steps and step plugin', () => {
  const app = createApp({}).use(Steps).use(Step)

  expect(app.component(Steps.name)).toBeTruthy()
  expect(app.component(Step.name)).toBeTruthy()
})

test('test step direction prop', async () => {
  const template = `
    <var-steps :direction="direction">
      <var-step>步骤1</var-step>
      <var-step>步骤2</var-step>
    </var-steps>
  `
  const wrapper = mount(
    {
      template,
      components: {
        [VarSteps.name]: VarSteps,
        [VarStep.name]: VarStep,
      },
      data() {
        return {
          direction: 'horizontal',
        }
      },
    },
    { attachTo: document.body }
  )

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setData({ direction: 'vertical' })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test step event', async () => {
  const clickStep = jest.fn()

  const template = `
     <var-steps :active="active" active-color="#f44336" inactive-color="#e99eb4" @clickStep="clickStep">
      <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">步骤1</var-step>
      <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">步骤2</var-step>
    </var-steps>
  `
  const wrapper = mount(
    {
      template,
      components: {
        [VarSteps.name]: VarSteps,
        [VarStep.name]: VarStep,
      },
      data() {
        return {
          active: '1',
        }
      },
      methods: {
        clickStep,
      },
    },
    { attachTo: document.body }
  )

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.var-step-horizontal__tag').trigger('click')

  expect(clickStep).toHaveBeenCalledTimes(1)
})
