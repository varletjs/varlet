import ActionSheet from '../index'
import VarActionSheet from '../ActionSheet'
import { createApp } from 'vue'
import { delay, trigger } from '../../utils/jest'

test('test action sheet plugin', () => {
  const app = createApp({}).use(ActionSheet)
  expect(app.component(VarActionSheet.name)).toBeTruthy()
})

test('test action sheet functional show & close', async () => {
  const onOpen = jest.fn()
  const onOpened = jest.fn()
  const onClose = jest.fn()
  const onClosed = jest.fn()

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

test('test action sheet functional onSelect', async () => {
  const onSelect = jest.fn()

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

test('test action sheet functional disabled', async () => {
  const onSelect = jest.fn()

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

test('test setDefaultOptions and resetDefaultOptions', async () => {
  const onSelect = jest.fn()
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
})
