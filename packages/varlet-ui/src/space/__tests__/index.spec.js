import VarSpace from '../Space'
import Space from '..'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test space plugin', () => {
    const app = createApp({}).use(Space)
    expect(app.component(Space.name)).toBeTruthy()
})

test('test space props', async () => {
    const template = `
        <var-space>
            <var-button>Button1</var-button>
            <var-button>Button2</var-button>
            <var-button>Button3</var-button>
        </var-space>
    `

    const wrapper = mount({
        components: {
            [VarSpace.name]: VarSpace
        },
        template
    })

    await delay(0)

    await wrapper.setProps({ direction: 'row' })
    expect(wrapper.html()).toMatchSnapshot()


    await wrapper.setProps({ direction: 'column' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ size: 'mini' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ size: 'small' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ size: 'normal' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ size: 'large' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ size: '10px' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ size: '10rem' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ size: '[10px,20px]' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ wrap: true })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ wrap: false })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ wrap: false })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ justify: 'start' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ justify: 'end' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ justify: 'center' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ justify: 'space-between' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ justify: 'space-around' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ align: 'start' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ align: 'center' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ align: 'end' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ align: 'stretch' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ align: 'baseline' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ align: 'initial' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ align: 'inherit' })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ inline: true })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setProps({ inline: false })
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
})

test('test div in space', async () => {
    const template = `
        <var-space :size="size" :direction="direction" :inline="inline">
            <var-button>Button1</var-button>
            <var-button>Button2</var-button>
            <var-button>Button3</var-button>
        </var-space>
    `
    const wrapper = mount({
        components: {
            [VarSpace.name]: VarSpace
        },
        data: () => ({
            size: 'mini',
            direction:'row',
            inline: true
        }),
        template
    })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setData({
        size: ['10px', '20px']
    })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setData({
        direction: 'column'
    })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setData({
        inline: false
    })
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
})