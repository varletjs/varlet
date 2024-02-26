import IndexBar from '..'
import IndexAnchor from '../../index-anchor'
import VarIndexBar from '../IndexBar'
import VarIndexAnchor from '../../index-anchor/IndexAnchor'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, mockScrollTo } from '../../utils/test'
import { expect, vi, describe } from 'vitest'

mockScrollTo()

function mockIndexAnchorOffsetTop() {
  const originForEach = Array.prototype.forEach

  Array.prototype.forEach = function (fn, thisArg) {
    let mockedArray = this

    if (this && this.map) {
      mockedArray = this.map((value, index) => {
        if (value.getOffsetTop) {
          value.getOffsetTop = vi.fn(() => (index % 2 === 0 ? index * 10 : index * -10))
        }

        return value
      })
    }

    originForEach.call(mockedArray, fn, thisArg)
  }

  return {
    mockRestore() {
      Array.prototype.forEach = originForEach
    },
  }
}

const handleClick = vi.fn()
const handleChange = vi.fn()

const Wrapper = {
  components: {
    [VarIndexBar.name]: VarIndexBar,
    [VarIndexAnchor.name]: VarIndexAnchor,
  },
  template: `
    <var-index-bar>
    <var-index-anchor index="A">test A</var-index-anchor>
    <var-index-anchor index="B">test B</var-index-anchor>
    </var-index-bar>
  `,
}

const Wrapper2 = {
  template: `
    <div style="height: 50px; overflow: auto">
      <var-index-bar @click="handleClick" @change="handleChange" ref="bar" highlight-color="purple">
        <var-index-anchor index="A">test A</var-index-anchor>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <var-index-anchor index="B">test B</var-index-anchor>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <var-index-anchor index="C">test C</var-index-anchor>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <var-index-anchor index="D">test D</var-index-anchor>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <var-index-anchor index="E">test E</var-index-anchor>
      </var-index-bar>
    </div>
  `,
  components: {
    [VarIndexBar.name]: VarIndexBar,
    [VarIndexAnchor.name]: VarIndexAnchor,
  },
  methods: {
    handleClick,
    handleChange,
  },
}

test('test indexBar and indexAnchor use', () => {
  const app = createApp({}).use(IndexBar).use(IndexAnchor)

  expect(app.component(IndexBar.name)).toBeTruthy()
  expect(app.component(IndexAnchor.name)).toBeTruthy()
})

describe('test index-bar component props', () => {
  test('test sticky prop and it is value equal false', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        sticky: false,
      },
      attachTo: document.body,
    })

    await delay(100)
    expect(wrapper.find('.var-sticky').exists()).toBeFalsy()

    wrapper.unmount()
  })

  test('test index-bar stickyOffsetTop', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        stickyOffsetTop: '36px',
      },
      attachTo: document.body,
    })

    await wrapper.trigger('scroll')
    await delay(100)

    expect(wrapper.find('.var-sticky__wrapper').attributes('style')).toContain('top: 36px;')

    wrapper.unmount()
  })

  test('test index-bar hideList', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        hideList: true,
      },
      attachTo: document.body,
    })

    await delay(100)
    expect(wrapper.find('.var-index-bar__anchor-list').attributes('style')).toContain('display: none;')

    await wrapper.setProps({
      hideList: false,
    })
    await delay(100)
    expect(wrapper.find('.var-index-bar__anchor-list').attributes('style')).toContain('display: block;')

    wrapper.unmount()
  })

  test('test index-bar zIndex', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        zIndex: 2,
      },
      attachTo: document.body,
    })

    await delay(100)
    expect(wrapper.find('.var-sticky').attributes('style')).toContain('z-index: 2;')

    await wrapper.setProps({
      zIndex: 4,
    })
    expect(wrapper.find('.var-sticky').attributes('style')).toContain('z-index: 4;')

    wrapper.unmount()
  })

  test('test index-bar highlightColor', async () => {
    const wrapper = mount(Wrapper2, { attachTo: document.body })

    await delay(100)
    await wrapper.find('.var-index-bar__anchor-item').trigger('click')
    expect(wrapper.find('.var-index-bar__anchor-item--active').attributes('style')).toContain('color: purple')

    wrapper.unmount()
  })
})

describe('test index-bar component events', () => {
  test('test index-bar click event', async () => {
    vi.clearAllMocks()

    const wrapper = mount(Wrapper2, { attachTo: document.body })

    await delay(100)

    const anchorItems = wrapper.findAll('.var-index-bar__anchor-item')

    await anchorItems[0].trigger('click')
    await delay(100)

    expect(anchorItems[0].classes()).toContain('var-index-bar__anchor-item--active')

    expect(handleClick).toHaveBeenCalledTimes(1)

    wrapper.unmount()
  })

  test('test indexBar scrollTo method', async () => {
    const wrapper = mount(Wrapper2, { attachTo: document.body })

    await delay(100)

    wrapper.vm.$refs.bar.scrollTo('A')

    await delay(100)

    expect(wrapper.find('.var-index-bar__anchor-item--active').text()).toBe('A')

    wrapper.unmount()
  })

  test('test indexBar scroll to trigger change event', async () => {
    vi.clearAllMocks()

    const { mockRestore } = mockIndexAnchorOffsetTop()
    const wrapper = mount(Wrapper2, { attachTo: document.body })

    await delay(100)

    wrapper.element.scrollTop = 150
    await wrapper.trigger('scroll')

    expect(handleChange).toHaveBeenCalled()

    mockRestore()
    wrapper.unmount()
  })
})
