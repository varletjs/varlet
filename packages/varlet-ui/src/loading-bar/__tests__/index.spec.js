import { expect, test } from 'vitest'
import LoadingBar from '..'
import { delay } from '../../utils/test'

test('loading-bar methods', async () => {
  LoadingBar.start()

  const el = document.querySelector('.var-loading-bar')
  expect(el).toBeTruthy()

  await delay(300)
  expect(el.style.opacity).toBe('1')

  LoadingBar.finish()
  await delay(0)
  await delay(300)
  expect(el.style.opacity).toBe('0')

  LoadingBar.error()
  await delay(0)
  expect(document.querySelector('.var-loading-bar--error')).toBeTruthy()
  await delay(900)
  expect(document.querySelector('.var-loading-bar--error')).toBeFalsy()
})

test('loading-bar finish delay', async () => {
  LoadingBar.setDefaultOptions({
    finishDelay: 500,
  })
  LoadingBar.start()

  const el = document.querySelector('.var-loading-bar')
  expect(el).toBeTruthy()

  await delay(300)
  expect(el.style.opacity).toBe('1')

  LoadingBar.finish()
  await delay(0)
  await delay(300)
  expect(el.style.opacity).toBe('1')

  await delay(800)
  expect(el.style.opacity).toBe('0')

  LoadingBar.resetDefaultOptions()
})

test('setDefaultOptions and resetDefaultOptions', async () => {
  LoadingBar.setDefaultOptions({
    color: 'white',
    errorColor: 'black',
  })

  LoadingBar.start()

  await delay(200)
  const el = document.querySelector('.var-loading-bar')

  expect(el.style.backgroundColor).toBe('white')

  LoadingBar.error()
  await delay(200)
  expect(el.style.backgroundColor).toBe('black')

  LoadingBar.resetDefaultOptions()

  await delay(200)
  expect(el.style.backgroundColor).toBe('')

  LoadingBar.error()
  await delay(200)
  expect(el.style.backgroundColor).toBe('')

  el.remove()
})
