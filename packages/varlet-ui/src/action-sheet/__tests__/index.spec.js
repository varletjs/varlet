import { createApp } from 'vue'
import { expect, test, vi } from 'vitest'
import { delay, trigger } from '../../utils/test'
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
})
