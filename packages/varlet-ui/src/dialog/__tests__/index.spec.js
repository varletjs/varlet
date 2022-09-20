import Dialog from '../index'
import VarDialog from '../Dialog'
import { createApp } from 'vue'
import { delay, trigger } from '../../utils/jest'

test('test dialog plugin', () => {
  const app = createApp({}).use(Dialog)
  expect(app.component(VarDialog.name)).toBeTruthy()
})

test('test dialog functional show & close', async () => {
  const onOpen = jest.fn()
  const onOpened = jest.fn()
  const onClose = jest.fn()
  const onClosed = jest.fn()

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

test('test dialog functional confirm & cancel', async () => {
  const onConfirm = jest.fn()
  const onCancel = jest.fn()

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
})
