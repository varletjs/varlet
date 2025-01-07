import { createApp, Fragment, h } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Breadcrumbs from '..'
import VarBreadcrumb from '../../breadcrumb/Breadcrumb.vue'
import { delay } from '../../utils/test'
import VarBreadcrumbs from '../Breadcrumbs.vue'

function renderBasicUsage(props) {
  return h(
    Fragment,
    ['HOME', 'LINK 1', 'LINK 2'].map((text) =>
      h(VarBreadcrumb, props, {
        default: () => text,
      }),
    ),
  )
}

test('test breadcrumbs plugin', () => {
  const app = createApp({}).use(Breadcrumbs)
  expect(app.component(Breadcrumbs.name)).toBeTruthy()
})

test('test breadcrumbs basic usage', async () => {
  const wrapper = mount(VarBreadcrumbs, {
    slots: {
      default: () => renderBasicUsage(),
    },
  })

  await delay(0)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test breadcrumbs parent separator', async () => {
  const wrapper = mount(VarBreadcrumbs, {
    props: {
      separator: '+',
    },
    slots: {
      default: () => renderBasicUsage(),
    },
  })

  await delay(0)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test breadcrumbs parent and child separator', async () => {
  const wrapper = mount(VarBreadcrumbs, {
    props: {
      separator: '+',
    },
    slots: {
      default: () => renderBasicUsage({ separator: '-' }),
    },
  })

  await delay(0)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test breadcrumbs events', async () => {
  const onClick = vi.fn()

  const wrapper = mount(VarBreadcrumbs, {
    props: {
      separator: '+',
    },
    slots: {
      default: () => renderBasicUsage({ onClick }),
    },
  })

  await delay(0)
  await wrapper.findAll('.var-breadcrumb__content')[0].trigger('click')
  await wrapper.findAll('.var-breadcrumb__content')[2].trigger('click')
  expect(onClick).toHaveBeenCalledTimes(1)
  wrapper.unmount()
})

test('test breadcrumbs slots', async () => {
  const wrapper = mount(VarBreadcrumbs, {
    slots: {
      default: () =>
        h(
          Fragment,
          ['HOME', 'LINK 1', 'LINK 2'].map((text) =>
            h(VarBreadcrumb, null, {
              default: () => text,
              separator: () => h('span', '*'),
            }),
          ),
        ),
    },
  })

  await delay(0)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})
