import { createApp, Fragment, h } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Space from '..'
import { computeMargin } from '../margin'
import VarSpace from '../Space'

test('space use', () => {
  const app = createApp({}).use(Space)
  expect(app.component(Space.name)).toBeTruthy()
})

describe('test space component props', () => {
  test('space align', () => {
    ;['stretch', 'center', 'start', 'end', 'baseline'].forEach((align) => {
      const wrapper = mount(VarSpace, {
        props: { align },
      })

      expect(wrapper.find('.var-space').attributes('style')).toContain(
        'align-items: ' + (align === 'start' || align === 'end' ? `flex-${align}` : align),
      )
      wrapper.unmount()
    })
  })

  test('space justify', () => {
    ;['start', 'end', 'center', 'space-around', 'space-between'].forEach((justify) => {
      const wrapper = mount(VarSpace, {
        props: { justify },
        slots: {
          default: () => h(Fragment, [h('div', 'child'), h('div', 'child'), h('div', 'child')]),
        },
      })

      expect(wrapper.find('.var-space').attributes('style')).toContain(
        'justify-content: ' + (justify === 'start' || justify === 'end' ? `flex-${justify}` : justify),
      )
      wrapper.unmount()
    })
  })

  test('space wrap', async () => {
    const wrapper = mount(VarSpace, {
      props: {
        wrap: true,
      },
    })

    expect(wrapper.find('.var-space').attributes('style')).toContain('flex-wrap: wrap;')
    await wrapper.setProps({ wrap: false })
    expect(wrapper.find('.var-space').attributes('style')).toContain('flex-wrap: nowrap;')
    wrapper.unmount()
  })

  test('space direction', async () => {
    const wrapper = mount(VarSpace, {
      props: {
        direction: 'row',
      },
    })

    expect(wrapper.find('.var-space').attributes('style')).toContain('flex-direction: row;')
    await wrapper.setProps({ direction: 'column' })
    expect(wrapper.find('.var-space').attributes('style')).toContain('flex-direction: column;')
    wrapper.unmount()
  })

  test('space inline', async () => {
    const wrapper = mount(VarSpace, {
      props: {
        inline: true,
      },
    })

    expect(wrapper.find('.var-space--inline').exists()).toBe(true)
    await wrapper.setProps({ inline: false })
    expect(wrapper.find('.var-space--inline').exists()).toBe(false)
    wrapper.unmount()
  })
})

test('space default slots', () => {
  const wrapper = mount(VarSpace, {
    slots: {
      default: 'This is default slots',
    },
  })

  expect(wrapper.find('.var-space').html()).toContain('This is default slots')
  wrapper.unmount()
})

test('computeMargin func returns', () => {
  expect(
    computeMargin('var(--space-size-mini-y)', 'var(--space-size-mini-x)', {
      direction: 'row',
      justify: 'center',
      index: 0,
      lastIndex: 1,
    }),
  ).toBe('calc(var(--space-size-mini-y) / 2) var(--space-size-mini-x) calc(var(--space-size-mini-y) / 2) 0')

  expect(
    computeMargin('var(--space-size-mini-y)', 'var(--space-size-mini-x)', {
      direction: 'row',
      justify: 'center',
      index: 1,
      lastIndex: 1,
    }),
  ).toBe('calc(var(--space-size-mini-y) / 2) 0')

  expect(
    computeMargin('20px', '20px', {
      direction: 'row',
      justify: 'space-around',
      index: 0,
      lastIndex: 1,
    }),
  ).toBe('calc(20px / 2) calc(20px / 2)')

  expect(
    computeMargin('20px', '20px', {
      direction: 'row',
      justify: 'space-between',
      index: 0,
      lastIndex: 2,
    }),
  ).toBe('calc(20px / 2) calc(20px / 2) calc(20px / 2) 0')

  expect(
    computeMargin('20px', '20px', {
      direction: 'row',
      justify: 'space-between',
      index: 2,
      lastIndex: 2,
    }),
  ).toBe('calc(20px / 2) 0 calc(20px / 2) calc(20px / 2)')

  expect(
    computeMargin('20px', '20px', {
      direction: 'row',
      justify: 'space-between',
      index: 1,
      lastIndex: 2,
    }),
  ).toBe('calc(20px / 2) calc(20px / 2)')

  expect(
    computeMargin('20px', '20px', {
      direction: 'column',
      index: 0,
      lastIndex: 1,
    }),
  ).toBe('0 0 20px 0')

  expect(
    computeMargin('20px', '20px', {
      direction: 'column',
      index: 1,
      lastIndex: 1,
    }),
  ).toBe('0')
})
