import { createApp } from 'vue'
import { expect, test, vi } from 'vitest'
import { delay, trigger } from '../../utils/test'
import VarDialog from '../Dialog'
import Dialog from '../index'

test('dialog plugin', () => {
  const app = createApp({}).use(Dialog)
  expect(app.component(VarDialog.name)).toBeTruthy()
})

test('dialog functional show & close', async () => {
  const onOpen = vi.fn()
  const onOpened = vi.fn()
  const onClose = vi.fn()
  const onClosed = vi.fn()

  Dialog({
    message: 'test message',
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

  Dialog.close()

  await delay(20)
  expect(onClose).toHaveBeenCalledTimes(1)
  await delay(300)
  expect(onClosed).toHaveBeenCalledTimes(1)
  expect(document.querySelector('.var-popup')).toBeFalsy()
})

test('dialog functional confirm & cancel', async () => {
  const onConfirm = vi.fn()
  const onCancel = vi.fn()

  Dialog({
    message: 'test confirm',
    onConfirm,
  })
  await delay(16)
  await trigger(document.querySelector('.var-dialog__confirm-button'), 'click')
  expect(onConfirm).toHaveBeenCalledTimes(1)
  await delay(300)

  Dialog({
    message: 'test cancel',
    onCancel,
  })
  await delay(16)
  await trigger(document.querySelector('.var-dialog__cancel-button'), 'click')
  expect(onCancel).toHaveBeenCalledTimes(1)

  Dialog.close()
  await delay(300)
})

test('dialog setDefaultOptions and resetDefaultOptions', async () => {
  const onConfirm = vi.fn()

  Dialog.setDefaultOptions({ onConfirm })
  Dialog('test confirm')
  await delay(16)
  await trigger(document.querySelector('.var-dialog__confirm-button'), 'click')
  expect(onConfirm).toHaveBeenCalledTimes(1)
  await delay(300)

  Dialog.resetDefaultOptions()
  Dialog('test confirm')
  await delay(16)
  await trigger(document.querySelector('.var-dialog__confirm-button'), 'click')
  expect(onConfirm).toHaveBeenCalledTimes(1)
  Dialog.close()
})
