import Fab from '..'
import VarFab from '../Fab'
import { createApp, h, Fragment } from 'vue'
import { mount } from '@vue/test-utils'
import { delay, mockStubs, trigger } from '../../utils/jest'

mockStubs()

test('test fab plugin', () => {
  const app = createApp({}).use(Fab)
  expect(app.component(Fab.name)).toBeTruthy()
})

test('test fab type', () => {
  ;['default', 'primary', 'warning', 'info', 'danger', 'success'].forEach((type) => {
    const wrapper = mount(VarFab, {
      props: {
        type,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

test('test fab position', () => {
  ;['left-top', 'right-top', 'left-bottom', 'right-bottom'].forEach((position) => {
    const wrapper = mount(VarFab, {
      props: {
        position,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

test('test fab direction', () => {
  ;['top', 'right', 'bottom', 'left'].forEach((direction) => {
    const wrapper = mount(VarFab, {
      props: {
        direction,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

test('test fab fixed equals false', () => {
  const wrapper = mount(VarFab, {
    props: {
      fixed: false,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test fab zIndex and inset', () => {
  const wrapper = mount(VarFab, {
    props: {
      zIndex: 999,
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test fab color', () => {
  const wrapper = mount(VarFab, {
    props: {
      color: 'yellow',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test fab trigger equals click', async () => {
  const wrapper = mount(VarFab, {
    slots: {
      default: () => h('div', 'action'),
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-fab__actions').isVisible()).toBeFalsy()

  await wrapper.trigger('click')
  await delay(300)

  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-fab__actions').isVisible()).toBeTruthy()

  await wrapper.trigger('click')
  await delay(300)

  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-fab__actions').isVisible()).toBeFalsy()
})

test('test fab trigger equals hover', async () => {
  const wrapper = mount(VarFab, {
    props: {
      trigger: 'hover',
    },
    slots: {
      default: () => h('div', 'action'),
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-fab__actions').isVisible()).toBeFalsy()

  await wrapper.trigger('mouseenter')
  await delay(300)

  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-fab__actions').isVisible()).toBeTruthy()

  await wrapper.trigger('mouseleave')
  await delay(300)

  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-fab__actions').isVisible()).toBeFalsy()
})

test('test fab custom icon', async () => {
  const wrapper = mount(VarFab, {
    props: {
      inactiveIcon: 'check',
      activeIcon: 'fire',
      inactiveIconSize: 30,
      activeIconSize: 30,
    },
    slots: {
      default: () => h('div', 'action'),
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.trigger('click')
  await delay(300)

  expect(wrapper.html()).toMatchSnapshot()
})

test('test fab disabled with trigger equals click', async () => {
  const onOpen = jest.fn()

  const wrapper = mount(VarFab, {
    props: {
      disabled: true,
      onOpen,
    },
    slots: {
      default: () => h('div', 'action'),
    },
  })

  expect(wrapper.find('.var-fab__actions').isVisible()).toBeFalsy()
  await wrapper.trigger('click')
  expect(wrapper.find('.var-fab__actions').isVisible()).toBeFalsy()
  expect(onOpen).toBeCalledTimes(0)
})

test('test fab disabled with trigger equals hover', async () => {
  const onOpen = jest.fn()

  const wrapper = mount(VarFab, {
    props: {
      trigger: 'hover',
      disabled: true,
      onOpen,
    },
    slots: {
      default: () => h('div', 'action'),
    },
  })

  expect(wrapper.find('.var-fab__actions').isVisible()).toBeFalsy()
  await wrapper.trigger('mouseenter')
  expect(wrapper.find('.var-fab__actions').isVisible()).toBeFalsy()
  expect(onOpen).toBeCalledTimes(0)
})

test('test fab events and fragment default slots and click outside close', async () => {
  const onOpen = jest.fn()
  const onOpened = jest.fn()
  const onClose = jest.fn()
  const onClosed = jest.fn()
  const onUpdateActive = jest.fn()

  const wrapper = mount(VarFab, {
    props: {
      onOpen,
      onOpened,
      onClose,
      onClosed,
      'onUpdate:active': onUpdateActive,
    },
    slots: {
      default: () => h(Fragment, {}, [h('div', 'action'), h('div', 'action'), h('div', 'action')]),
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.trigger('click')

  expect(onOpen).toBeCalledTimes(1)
  expect(onUpdateActive).toBeCalledWith(true)
  await delay(300)
  expect(onOpened).toBeCalledTimes(1)

  await trigger(document, 'click')
  expect(onClose).toBeCalledTimes(1)
  expect(onUpdateActive).toBeCalledWith(false)
  await delay(300)
  expect(onClosed).toBeCalledTimes(1)
})

test('test fab trigger and disabled change', async () => {
  const wrapper = mount(VarFab, {
    props: {
      active: true,
    },
    slots: {
      default: () => h('div', 'action'),
    },
  })

  expect(wrapper.find('.var-fab__actions').isVisible()).toBeTruthy()
  await wrapper.setProps({ trigger: 'hover' })
  await delay(300)
  expect(wrapper.find('.var-fab__actions').isVisible()).toBeFalsy()
  await wrapper.setProps({ active: false })
  await wrapper.setProps({ active: true })
  expect(wrapper.find('.var-fab__actions').isVisible()).toBeTruthy()
  await wrapper.setProps({ disabled: true })
  await delay(300)
  expect(wrapper.find('.var-fab__actions').isVisible()).toBeFalsy()
})

test('test fab trigger slot', () => {
  const wrapper = mount(VarFab, {
    slots: {
      trigger: () => h('div', 'trigger'),
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test fab teleport', () => {
  const wrapper = mount(VarFab, {
    props: {
      teleport: 'body',
    },
    slots: {
      default: () => h('div', 'action'),
    },
  })

  expect(document.body.innerHTML).toMatchSnapshot()
  wrapper.unmount()
})

test('test fab safeArea', () => {
  const wrapper = mount(VarFab, {
    props: {
      safeArea: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})
