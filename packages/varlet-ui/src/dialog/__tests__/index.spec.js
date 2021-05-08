import example from '../example'
import Dialog from '..'
import VarDialog from '../Dialog'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, trigger } from '../../utils/jest'

test('test dialog example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test dialog plugin', () => {
  const app = createApp({}).use(Dialog)
  expect(app.component(VarDialog.name)).toBeTruthy()
})

test('test dialog functional show & close', async () => {
  const onOpen = jest.fn()
  const onClose = jest.fn()
  Dialog({
    message: 'test message',
    onOpen,
    onClose,
  })

  await delay(16)
  expect(onOpen).toHaveBeenCalledTimes(1)
  expect(document.querySelector('.var-popup').style.display).toBe('')

  Dialog.close()

  await delay(16)
  expect(onClose).toHaveBeenCalledTimes(1)
  expect(document.querySelector('.var-popup').style.display).toBe('none')
})

test('test dialog functional confirm & cancel', async () => {
  const onConfirm = jest.fn()
  const onCancel = jest.fn()

  Dialog({
    message: 'test confirm',
    onConfirm,
  })
  await delay(16)
  await trigger(document.querySelectorAll('.var-dialog__confirm-button')[1], 'click')
  expect(onConfirm).toHaveBeenCalledTimes(1)

  Dialog({
    message: 'test cancel',
    onCancel,
  })
  await delay(16)
  await trigger(document.querySelectorAll('.var-dialog__cancel-button')[2], 'click')
  expect(onCancel).toHaveBeenCalledTimes(1)
})
