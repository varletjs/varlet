import example from '../example'
import IndexBar from '..'
import IndexAnchor from '../../index-anchor'
import VarIndexBar from '../IndexBar'
import VarIndexAnchor from '../../index-anchor/IndexAnchor'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, mockScrollTo } from '../../utils/jest'

test('test indexBar example', async () => {
  const wrapper = mount(example)

  await delay(500)

  expect(wrapper.html()).toMatchSnapshot()
})

test('test indexBar and indexAnchor plugin', () => {
  const app = createApp({}).use(IndexBar).use(IndexAnchor)

  expect(app.component(IndexBar.name)).toBeTruthy()
  expect(app.component(IndexAnchor.name)).toBeTruthy()
})

test('test sticky prop and it is value equal false', () => {
  const template = `
    <var-index-bar :sticky="false">
      <var-index-anchor index="A">test A</var-index-anchor>
      <var-index-anchor index="B">test B</var-index-anchor>
    </var-index-bar>
  `
  const wrapper = mount({
    components: {
      [VarIndexBar.name]: VarIndexBar,
      [VarIndexAnchor.name]: VarIndexAnchor,
    },
    template
  }, { attachTo: document.body })

  expect(wrapper.find('.var-sticky').exists()).toBeFalsy()
})

test('test stickyOffsetTop, hideList and z-index prop', () => {
  const template = `
    <var-index-bar :sticky-offset-top="10" hide-list z-index="2">
      <var-index-anchor index="A">test A</var-index-anchor>
    </var-index-bar>
  `
  const wrapper = mount({
    components: {
      [VarIndexBar.name]: VarIndexBar,
      [VarIndexAnchor.name]: VarIndexAnchor,
    },
    template
  }, { attachTo: document.body })

  expect(wrapper.find('.var-sticky').exists()).toBeTruthy()

  expect(wrapper.find('.var-index-bar__anchor-list').attributes('style').includes('display: none')).toBeTruthy()

  expect(wrapper.find('.var-sticky').attributes('style')).toBe('z-index: 2; top: 10px;')
})

test('test click anchor to trigger change event', async () => {
  mockScrollTo(HTMLElement)

  const template = `
    <div style="height: 50px; overflow: auto">
      <var-index-bar @click="clickHandle" @change="changeHandle" ref="bar" highlight-color="purple">
        <var-index-anchor index="A">test A</var-index-anchor>
        <p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
        <var-index-anchor index="B">test B</var-index-anchor>
        <p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
        <var-index-anchor index="C">test C</var-index-anchor>
        <p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
        <var-index-anchor index="D">test D</var-index-anchor>
        <p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
        <var-index-anchor index="E">test E</var-index-anchor>
      </var-index-bar>
    </div>
  `
  const clickHandle = jest.fn()
  const changeHandle = jest.fn()

  const wrapper = mount({
    components: {
      [VarIndexBar.name]: VarIndexBar,
      [VarIndexAnchor.name]: VarIndexAnchor,
    },
    methods: {
      clickHandle,
      changeHandle
    },
    template
  }, { attachTo: document.body })

  await delay(0)

  wrapper.vm.$refs.bar.scrollTo('A')

  await delay(100)

  const anchorItems = wrapper.findAll('.var-index-bar__anchor-item')

  expect(anchorItems[0].classes()).toContain('var-index-bar__anchor-item--active')

  await anchorItems[1].trigger('click')

  await delay(100)

  expect(anchorItems[1].classes()).toContain('var-index-bar__anchor-item--active')

  expect(changeHandle).toHaveBeenCalledTimes(2)
  expect(clickHandle).toHaveBeenCalledTimes(1)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test scroll indexBar to trigger change event', async () => {
  const template = `
    <div style="height: 50px; overflow: auto">
      <var-index-bar @change="changeHandle" ref="bar" highlight-color="purple">
        <var-index-anchor index="A">test A</var-index-anchor>
        <p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
        <var-index-anchor index="B">test B</var-index-anchor>
        <p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
        <var-index-anchor index="C">test C</var-index-anchor>
        <p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
        <var-index-anchor index="D">test D</var-index-anchor>
        <p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
        <var-index-anchor index="E">test E</var-index-anchor>
      </var-index-bar>
    </div>
  `
  const changeHandle = jest.fn()

  const wrapper = mount({
    components: {
      [VarIndexBar.name]: VarIndexBar,
      [VarIndexAnchor.name]: VarIndexAnchor,
    },
    methods: {
      changeHandle
    },
    template
  }, { attachTo: document.body })

  await delay(0)

  wrapper.vm.$refs.bar.scrollTo('A')

  await delay(100)

  wrapper.element.scrollTop = 150

  await wrapper.trigger('scroll')

  await delay(0)

  expect(changeHandle).toHaveBeenCalled()
})
