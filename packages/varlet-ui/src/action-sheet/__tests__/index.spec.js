import * as shared from '@varlet/shared'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vite-plus/test'
import { createApp } from 'vue'
import { t } from '../../locale'
import { LOCALE_PROVIDER_KEY } from '../../locale-provider/provide'
import VarPopup from '../../popup'
import { delay, trigger } from '../../utils/test'
import VarActionItem from '../ActionItem.vue'
import VarActionSheet from '../ActionSheet'
import ActionSheet from '../index'

test('action sheet plugin', () => {
  const app = createApp({}).use(ActionSheet)
  expect(app.component(VarActionSheet.name)).toBeTruthy()
})

test('action sheet functional show & close', async () => {
  const onOpen = vi.fn()
  const onOpened = vi.fn()
  const onClose = vi.fn()
  const onClosed = vi.fn()

  ActionSheet({
    actions: [],
    onOpen,
    onOpened,
    onClose,
    onClosed,
  })

  await delay(16)
  expect(onOpen).toHaveBeenCalledTimes(1)
  await delay(300)
  expect(onOpened).toHaveBeenCalledTimes(1)
  expect(document.querySelector('.var-popup').style.display).toBe('')

  ActionSheet.close()

  await delay(20)
  expect(onClose).toHaveBeenCalledTimes(1)
  await delay(300)
  expect(onClosed).toHaveBeenCalledTimes(1)
  expect(document.querySelector('.var-popup')).toBeFalsy()
})

test('action sheet functional onSelect', async () => {
  const onSelect = vi.fn()

  ActionSheet({
    actions: [{ name: 'Item 01' }],
    onSelect,
  })
  await delay(16)
  await trigger(document.querySelector('.var-action-sheet__action-item'), 'click')
  expect(onSelect).toHaveBeenLastCalledWith({ name: 'Item 01' })
  await delay(300)

  ActionSheet.close()
})

test('action sheet functional disabled', async () => {
  const onSelect = vi.fn()

  ActionSheet({
    actions: [
      {
        name: 'Item 01',
        disabled: true,
      },
    ],
    onSelect,
  })
  await delay(16)
  await trigger(document.querySelector('.var-action-sheet__action-item'), 'click')
  expect(onSelect).toHaveBeenCalledTimes(0)
  await delay(300)

  ActionSheet.close()
  await delay(300)
})

test('setDefaultOptions and resetDefaultOptions', async () => {
  const onSelect = vi.fn()
  ActionSheet.setDefaultOptions({ onSelect })

  ActionSheet({
    actions: [{ name: 'Item 01' }],
  })
  await delay(16)
  await trigger(document.querySelector('.var-action-sheet__action-item'), 'click')
  expect(onSelect).toHaveBeenCalledTimes(1)
  await delay(300)

  ActionSheet.resetDefaultOptions()
  ActionSheet({
    actions: [{ name: 'Item 01' }],
  })
  await delay(16)
  await trigger(document.querySelector('.var-action-sheet__action-item'), 'click')
  expect(onSelect).toHaveBeenCalledTimes(1)

  ActionSheet.close()
  await delay(300)
})

test('safe area', async () => {
  ActionSheet({
    actions: [{ name: 'Item 01' }],
    safeArea: true,
  })
  await delay(16)
  expect(document.body.innerHTML).toMatchSnapshot()
  ActionSheet.close()
  await delay(300)
})

test('action sheet default title from locale', () => {
  const wrapper = mount(VarActionSheet, {
    props: {
      show: true,
      teleport: false,
    },
  })

  expect(wrapper.find('.var-action-sheet__title').text()).toBe(t('actionSheetTitle'))
  expect(wrapper.findAll('.var-action-sheet__action-item')).toHaveLength(0)
  wrapper.unmount()
})

test('action sheet title prop overrides locale', () => {
  const wrapper = mount(VarActionSheet, {
    props: {
      show: true,
      teleport: false,
      title: 'Custom Title',
    },
  })

  expect(wrapper.find('.var-action-sheet__title').text()).toBe('Custom Title')
  wrapper.unmount()
})

test('action sheet title from locale provider', () => {
  const wrapper = mount(VarActionSheet, {
    props: {
      show: true,
      teleport: false,
    },
    global: {
      provide: {
        [LOCALE_PROVIDER_KEY]: {
          t: () => 'Custom Title',
        },
      },
    },
  })

  expect(wrapper.find('.var-action-sheet__title').text()).toBe('Custom Title')
  wrapper.unmount()
})

test('action sheet v-model updates show', async () => {
  const onUpdateShow = vi.fn()
  const wrapper = mount(VarActionSheet, {
    props: {
      show: true,
      teleport: false,
      'onUpdate:show': onUpdateShow,
    },
  })

  wrapper.findComponent(VarPopup).vm.$emit('update:show', false)
  await wrapper.vm.$nextTick()

  expect(wrapper.vm.show).toBe(false)
  expect(onUpdateShow).toHaveBeenCalledWith(false)

  wrapper.unmount()
})

test('action sheet does not close when closeOnClickAction is false', async () => {
  const onSelect = vi.fn()
  const onUpdateShow = vi.fn()
  const wrapper = mount(VarActionSheet, {
    props: {
      show: true,
      teleport: false,
      closeOnClickAction: false,
      actions: [{ name: 'Item 01' }],
      onSelect,
      'onUpdate:show': onUpdateShow,
    },
  })

  await trigger(wrapper.find('.var-action-sheet__action-item').element, 'click')

  expect(onSelect).toHaveBeenCalledTimes(1)
  expect(onUpdateShow).not.toHaveBeenCalled()

  wrapper.unmount()
})

test('action sheet closes when closeOnClickAction is true', async () => {
  const onSelect = vi.fn()
  const onUpdateShow = vi.fn()
  const wrapper = mount(VarActionSheet, {
    props: {
      show: true,
      teleport: false,
      closeOnClickAction: true,
      actions: [{ name: 'Item 01' }],
      onSelect,
      'onUpdate:show': onUpdateShow,
    },
  })

  await trigger(wrapper.find('.var-action-sheet__action-item').element, 'click')

  expect(onSelect).toHaveBeenCalledTimes(1)
  expect(onUpdateShow).toHaveBeenCalledWith(false)

  wrapper.unmount()
})

test('action sheet ignores disabled actions', async () => {
  const onSelect = vi.fn()
  const wrapper = mount(VarActionSheet, {
    props: {
      show: true,
      teleport: false,
      actions: [{ name: 'Item 01', disabled: true }],
      onSelect,
    },
  })

  await trigger(wrapper.find('.var-action-sheet__action-item').element, 'click')

  expect(onSelect).not.toHaveBeenCalled()
  expect(wrapper.emitted('update:show')).toBeUndefined()

  wrapper.unmount()
})

test('action item icon renders and hides', () => {
  const withIcon = mount(VarActionItem, {
    props: {
      name: 'Item 01',
      icon: 'plus',
    },
  })

  expect(withIcon.find('.var-action-sheet__action-icon').exists()).toBe(true)
  withIcon.unmount()

  const withoutIcon = mount(VarActionItem, {
    props: {
      name: 'Item 02',
    },
  })

  expect(withoutIcon.find('.var-action-sheet__action-icon').exists()).toBe(false)
  withoutIcon.unmount()
})

test('action item hover overlay respects disabled', async () => {
  const wrapper = mount(VarActionItem, {
    props: {
      name: 'Item 01',
      disabled: false,
    },
  })

  wrapper.vm.handleHovering(true)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.var-hover-overlay').classes()).toContain('var-hover-overlay--hovering')

  await wrapper.setProps({ disabled: true })
  wrapper.vm.handleHovering(true)
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.var-hover-overlay').classes()).not.toContain('var-hover-overlay--hovering')

  wrapper.unmount()
})

test('action sheet functional closes on route change', async () => {
  ActionSheet({
    actions: [{ name: 'Item 01' }],
  })

  await delay(16)
  window.dispatchEvent(new Event('popstate'))
  await delay(16)
  expect(document.querySelector('.var-popup')).toBeFalsy()
})

test('action sheet functional exits in non-browser environments', async () => {
  const spy = vi.spyOn(shared, 'inBrowser').mockReturnValue(false)
  const result = await ActionSheet()

  expect(result).toBeUndefined()

  spy.mockRestore()
})

test('action sheet functional with default options', async () => {
  ActionSheet()

  await delay(16)
  expect(document.querySelector('.var-popup')).toBeTruthy()
  ActionSheet.close()
  await delay(300)
})
