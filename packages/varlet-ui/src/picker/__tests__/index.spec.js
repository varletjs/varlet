import Picker from '..'
import VarPicker from '../Picker'
import { createApp } from 'vue'
import { delay, trigger, mockTranslate } from '../../utils/test'
import { expect, vi } from 'vitest'

mockTranslate()

test('test picker plugin', () => {
  const app = createApp({}).use(Picker)
  expect(app.component(VarPicker.name)).toBeTruthy()
})

const columns = [[{ text: 'A' }, { text: 'B' }, { text: 'C' }]]

test('test picker functional show & close', async () => {
  const onOpen = vi.fn()
  const onOpened = vi.fn()
  const onClose = vi.fn()
  const onClosed = vi.fn()

  Picker({
    columns,
    onOpen,
    onOpened,
    onClose,
    onClosed,
  })

  await delay(16)
  expect(onOpen).toHaveBeenCalledTimes(1)
  expect(document.querySelector('.var-popup').style.display).toBe('')

  await delay(300)
  expect(onOpened).toHaveBeenCalledTimes(1)

  Picker.close()
  await delay(16)
  expect(onClose).toHaveBeenCalledTimes(1)

  await delay(300)
  expect(document.querySelector('.var-popup')).toBeFalsy()
  expect(onClosed).toHaveBeenCalledTimes(1)
})

test('test picker functional confirm', async () => {
  const onConfirm = vi.fn()

  Picker({
    columns,
    onConfirm,
  })
  await delay(16)
  await delay(300)
  await trigger(document.querySelector('.var-picker__confirm-button'), 'click')
  expect(onConfirm).toHaveBeenCalledTimes(1)
  expect(onConfirm).toBeCalledWith(['A'], [0], [{ text: 'A' }])

  await delay(16)
  await delay(300)
})

test('test picker functional cancel', async () => {
  const onCancel = vi.fn()

  Picker({
    columns,
    onCancel,
  })
  await delay(16)
  await delay(300)

  await trigger(document.querySelector('.var-picker__cancel-button'), 'click')
  expect(onCancel).toHaveBeenCalledTimes(1)
  expect(onCancel).toBeCalledWith(['A'], [0], [{ text: 'A' }])

  await delay(16)
  await delay(300)
})

test('test safe area', async () => {
  Picker({
    columns,
    safeArea: true,
  })
  await delay(16)
  await delay(300)

  expect(document.body.innerHTML).toMatchSnapshot()

  await trigger(document.querySelector('.var-picker__cancel-button'), 'click')
  await delay(16)
  await delay(300)
})
