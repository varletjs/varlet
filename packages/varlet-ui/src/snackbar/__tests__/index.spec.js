import Snackbar from '../index'
import VarSnackbar from '../Snackbar'
import { createApp } from 'vue'
import { delay } from '../../utils/jest'

test('test snackbar plugin', () => {
  const app = createApp({}).use(Snackbar)
  expect(app.component(VarSnackbar.name)).toBeTruthy()
})

test('test snackbar functional', async () => {
  expect(document.body.querySelector('.var-snackbar')).toBeFalsy()

  const { clear } = Snackbar('test snackbar')

  await delay(200)
  expect(document.body.querySelector('.var-snackbar')).toBeTruthy()

  clear()
  await delay(200)
  expect(document.body.querySelector('.var-snackbar')).toBeFalsy()

  Snackbar.clear()
})

test('test snackbar type', async () => {
  Snackbar.success('test snackbar')
  await delay(200)
  expect(document.body.querySelector('.var-snackbar__wrapper-success')).toBeTruthy()

  Snackbar.warning('test snackbar')
  await delay(200)
  expect(document.body.querySelector('.var-snackbar__wrapper-warning')).toBeTruthy()

  Snackbar.error('test snackbar')
  await delay(200)
  expect(document.body.querySelector('.var-snackbar__wrapper-error')).toBeTruthy()

  Snackbar.info({
    content: 'test snackbar',
    forbidClick: true,
  })
  await delay(200)
  expect(document.body.querySelector('.var-snackbar__wrapper-info')).toBeTruthy()

  Snackbar.loading('test snackbar')
  await delay(200)
  expect(document.body.querySelector('.var-snackbar__wrapper-loading')).toBeTruthy()

  Snackbar.clear()
})

test('test snackbar event', async () => {
  const open = jest.fn()
  const opened = jest.fn()
  const close = jest.fn()
  const closed = jest.fn()

  const { clear } = Snackbar({
    content: 'test snackbar',
    duration: 500,
    onOpen: open,
    onOpened: opened,
    onClose: close,
    onClosed: closed,
  })

  await delay(200)

  clear()

  await delay(200)

  expect(open).toHaveBeenCalledTimes(1)
  expect(opened).toHaveBeenCalled()
  expect(close).toHaveBeenCalledTimes(1)
  expect(closed).toHaveBeenCalledTimes(1)
})

test('test snackbar and clear', async () => {
  Snackbar.success('test snackbar')
  await delay(200)
  expect(document.body.querySelector('.var-snackbar__wrapper-success')).toBeTruthy()

  Snackbar.warning('test snackbar')
  await delay(200)
  expect(document.body.querySelector('.var-snackbar__wrapper-success')).toBeFalsy()

  Snackbar.allowMultiple(true)
  await delay(0)

  const { clear } = Snackbar.info('test snackbar')
  await delay(200)
  clear()
  await delay(200)
  expect(document.body.querySelector('.var-snackbar__wrapper-info')).toBeFalsy()

  Snackbar.success('test snackbar')
  await delay(200)
  expect(document.body.querySelector('.var-snackbar__wrapper-success')).toBeTruthy()

  Snackbar.warning('test snackbar')
  await delay(200)
  expect(document.body.querySelector('.var-snackbar__wrapper-success')).toBeTruthy()
  expect(document.body.querySelector('.var-snackbar__wrapper-warning')).toBeTruthy()

  Snackbar.clear()
  await delay(200)
  expect(document.body.querySelector('.var-snackbar__wrapper-success')).toBeFalsy()
  expect(document.body.querySelector('.var-snackbar__wrapper-warning')).toBeFalsy()
})

test('test setDefaultOptions and resetDefaultOptions', async () => {
  Snackbar.setDefaultOptions({ content: 'snackbar content', duration: 300 })

  Snackbar()
  await delay(16)
  expect(document.body.querySelector('.var-snackbar__content').textContent).toBe('snackbar content')

  await delay(500)

  Snackbar.resetDefaultOptions()
  Snackbar()
  await delay(16)

  expect(document.body.querySelector('.var-snackbar__content').textContent).toBe('')
})
