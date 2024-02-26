import Link from '..'
import VarLink from '../Link'
import { mount, RouterLinkStub } from '@vue/test-utils'
import { createApp } from 'vue'
import { trigger } from '../../utils/test'
import { expect, vi, describe } from 'vitest'

const HREF = 'https://varlet.gitee.io/varlet-ui/'

const TARGET = '_blank'

const TO = '/button'

test('test link plugin', () => {
  const app = createApp({}).use(Link)
  expect(app.component(Link.name)).toBeTruthy()
})

describe('test link component props', () => {
  test('test link type', () => {
    ;['default', 'primary', 'info', 'success', 'warning', 'danger'].forEach((type) => {
      const wrapper = mount(VarLink, {
        props: { type },
      })

      expect(wrapper.find('a').classes()).toContain('var-link--' + type)
      wrapper.unmount()
    })
  })

  test('test link rel', () => {
    const wrapper = mount(VarLink, {
      props: {
        href: HREF,
        target: TARGET,
        rel: 'noopener noreferrer',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })

  test('test link href target', () => {
    const wrapper = mount(VarLink, {
      props: {
        href: HREF,
        target: TARGET,
        to: TO,
      },
    })

    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.attributes('href')).toMatch(HREF)
    expect(wrapper.attributes('target')).toMatch(TARGET)
    wrapper.unmount()
  })

  test('test link to replace', () => {
    const wrapper = mount(VarLink, {
      props: {
        to: TO,
        target: TARGET,
        replace: true,
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })

    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe(TO)
    expect(wrapper.props().replace).toBe(true)
    expect(wrapper.attributes('target')).toMatch(TARGET)
    wrapper.unmount()
  })

  test('test link underline', () => {
    ;['always', 'hover', 'none'].forEach((underline) => {
      const wrapper = mount(VarLink, {
        props: { underline },
      })

      if (underline !== 'none') {
        expect(wrapper.find('a').classes()).toContain('var-link--underline-' + underline)
      } else {
        expect(wrapper.find('a').classes()).not.toContain(/underline/)
      }

      wrapper.unmount()
    })
  })

  test('test link disabled', async () => {
    const onClick = vi.fn()

    const wrapper = mount(VarLink, {
      props: {
        disabled: true,
        onClick,
      },
    })

    await trigger(wrapper, 'click')
    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.classes()).toContain('var-link--disabled')
    expect(onClick).toHaveBeenCalledTimes(0)
    wrapper.unmount()
  })

  test('test link text color', async () => {
    const wrapper = mount(VarLink, {
      props: {
        textColor: '#000',
      },
    })

    expect(wrapper.attributes('style')).toMatch('color: rgb(0, 0, 0)')

    await wrapper.setProps({
      textColor: 'red',
    })
    expect(wrapper.attributes('style')).toMatch('color: red')

    wrapper.unmount()
  })

  test('test link text size', async () => {
    const wrapper = mount(VarLink, {
      props: {
        textSize: '12',
      },
    })

    expect(wrapper.attributes('style')).toMatch('font-size: 12px')

    await wrapper.setProps({
      textSize: '14px',
    })
    expect(wrapper.attributes('style')).toMatch('font-size: 14px')

    wrapper.unmount()
  })
})

describe('test link component events', () => {
  test('test link onClick', async () => {
    const onClick = vi.fn()

    const wrapper = mount(VarLink, {
      props: {
        onClick,
      },
    })

    await trigger(wrapper, 'click')
    expect(onClick).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  })
})

describe('test link component slots', () => {
  test('test link default slot', () => {
    const wrapper = mount(VarLink, {
      slots: {
        default: () => 'test',
      },
    })

    expect(wrapper.find('.var-link').element.textContent).toBe('test')
    wrapper.unmount()
  })
})
