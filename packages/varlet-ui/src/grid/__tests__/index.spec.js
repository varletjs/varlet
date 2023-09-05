import Grid from '..'
import GridItem from '../../grid-item'
import { createApp, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { delay } from '../../utils/test'

const Wrapper = {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
  },
  props: [],
  template: `
    <var-grid v-bind="$props">
      <var-grid-item text="1" />
      <var-grid-item text="2" />
      <var-grid-item text="3" />
      <var-grid-item text="4" />
      <var-grid-item text="5" />
      <var-grid-item text="6" />
    </var-grid>
  `,
}

test('test grid grid plugin', () => {
  const app = createApp({}).use(Grid)
  expect(app.component(Grid.name)).toBeTruthy()
})

describe('test grid component props', () => {
  test('test grid Grid column', async () => {
    let gutter = 0
    const wrapper = mount(Wrapper, {
      props: {
        column: 3,
        gutter,
      },
    })

    const gridItems = wrapper.findAll('.var-grid-item')
    expect(gridItems.length).toBe(6)
    expect(gridItems[0].attributes('style')).toContain(`flex-basis: calc(33.33% - ${gutter}px)`)

    gutter = 10
    wrapper.setProps({ column: 4, gutter })
    await delay(100)
    const curGridItems = wrapper.findAll('.var-grid-item')
    expect(curGridItems.length).toBe(6)
    expect(curGridItems[0].attributes('style')).toContain(`flex-basis: calc(25% - ${gutter}px)`)

    wrapper.unmount()
  })

  test('test grid icon and icon props', async () => {
    const Wrapper = {
      components: {
        [Grid.name]: Grid,
        [GridItem.name]: GridItem,
      },
      data: () => ({
        icon: 'home',
        iconColor: 'green',
        iconSize: '24px',
      }),
      template: `
        <var-grid :icon-size="iconSize">
          <var-grid-item :icon="icon" :icon-color="iconColor" />
        </var-grid>
      `,
    }

    const wrapper = mount(Wrapper)
    expect(wrapper.find('.var-icon-home').exists()).toBe(true)
    expect(wrapper.find('.var-icon-home').attributes('style')).toContain('color: green')
    expect(wrapper.find('.var-icon-home').attributes('style')).toContain('font-size: 24px')

    wrapper.setData({ icon: 'error', iconColor: 'red', iconSize: '12px' })

    await delay(100)

    expect(wrapper.find('.var-icon-error').exists()).toBe(true)
    expect(wrapper.find('.var-icon-error').attributes('style')).toContain('color: red')
    expect(wrapper.find('.var-icon-error').attributes('style')).toContain('font-size: 12px')

    wrapper.unmount()
  })

  test('test grid square', async () => {
    const Wrapper = {
      components: {
        [Grid.name]: Grid,
        [GridItem.name]: GridItem,
      },
      template: `
        <div style="width: 375px;">
          <var-grid square>
            <var-grid-item text="1" />
          </var-grid>
        </div>
      `,
    }

    const wrapper = mount(Wrapper)

    await nextTick()
    const gridItems = wrapper.find('.var-grid-item')

    expect(gridItems.classes()).toContain('var-grid-item__square')
    wrapper.unmount()
  })

  test('test grid gutter', () => {
    const wrapper = mount(Wrapper, {
      props: {
        gutter: '10px',
      },
    })
    expect(wrapper.find('.var-grid-item').attributes('style')).toContain('margin: 5px')
    wrapper.unmount()
  })

  test('test grid border and content center', async () => {
    const wrapper = mount(Wrapper, {
      props: {
        border: false,
        center: false,
      },
    })
    const prefix = 'var-grid-item'

    expect(wrapper.find(`.${prefix}`).classes()).not.toContain(`${prefix}__border`)
    expect(wrapper.find(`.${prefix}`).classes()).not.toContain(`${prefix}__center`)

    wrapper.setProps({ border: true, center: true })
    await delay(100)
    expect(wrapper.find(`.${prefix}`).classes()).toContain(`${prefix}__border`)
    expect(wrapper.find(`.${prefix}`).classes()).toContain(`${prefix}__center`)
    wrapper.unmount()
  })

  test('test grid grid item badge', () => {
    const Wrapper = {
      components: {
        [Grid.name]: Grid,
        [GridItem.name]: GridItem,
      },
      template: `
        <var-grid>
          <var-grid-item icon="image-outline" badge text="文字" />
          <var-grid-item icon="image-outline" :badge="{value: 66}" text="文字" />
          <var-grid-item icon="image-outline" :badge="{value: 1, type: 'primary' }" text="文字" />
          <var-grid-item icon="image-outline" :badge="{value: 1, position: 'right-bottom' }" text=" 文字" />
          <var-grid-item text="文字" />
        </var-grid>
      `,
    }

    const wrapper = mount(Wrapper)
    const gridItems = wrapper.findAll('.var-grid-item')

    expect(gridItems[0].find('.var-badge--dot').exists()).toBe(true)
    expect(gridItems[1].find('.var-badge--dot').exists()).toBe(false)
    expect(gridItems[1].find('.var-badge__value').element.innerHTML).toBe('66')
    expect(gridItems[2].find('.var-badge--primary').exists()).toBe(true)
    expect(gridItems[3].find('.var-badge--right-bottom').exists()).toBe(true)
    expect(gridItems[4].find('.var-badge').exists()).toBe(false)
    wrapper.unmount()
  })
})

describe('test grid component events', () => {
  test('test grid grid item click', async () => {
    const onClick = vi.fn()

    const Wrapper = {
      components: {
        [Grid.name]: Grid,
        [GridItem.name]: GridItem,
      },
      methods: {
        onClick,
      },
      template: `
        <var-grid >
          <var-grid-item text="1" @click="onClick" />
          <var-grid-item text="2" @click="onClick" />
        </var-grid>
      `,
    }

    const wrapper = mount(Wrapper)
    const gridItems = wrapper.findAll('.var-grid-item')

    await gridItems[0].trigger('click')
    expect(onClick).toHaveBeenCalledTimes(1)

    await gridItems[1].trigger('click')
    expect(onClick).toHaveBeenCalledTimes(2)

    wrapper.unmount()
  })
})

test('test grid component slots', () => {
  const Wrapper = {
    components: {
      [Grid.name]: Grid,
      [GridItem.name]: GridItem,
    },
    template: `
      <var-grid>
        <var-grid-item>
          <template #icon>
            <div class="icon">icon</div>
          </template>
          <template #text>
            <div class="text">text</div>
          </template>
          <div class="default">default</div>
        </var-grid-item>
      </var-grid>
    `,
  }
  const wrapper = mount(Wrapper)
  const gridItem = wrapper.find('.var-grid-item')

  expect(gridItem.find('.icon').exists()).toBe(true)
  expect(gridItem.find('.icon').text()).toBe('icon')
  expect(gridItem.find('.text').exists()).toBe(true)
  expect(gridItem.find('.text').text()).toBe('text')
  expect(gridItem.find('.default').exists()).toBe(true)
  expect(gridItem.find('.default').text()).toBe('default')
  wrapper.unmount()
})
