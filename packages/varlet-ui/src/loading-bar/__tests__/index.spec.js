import LoadingBar from '..'
import { delay } from '../../utils/jest'

test('test loading-bar methods', async () => {
  LoadingBar.start()

  const el = document.querySelector('.var-loading-bar')
  expect(el).toBeTruthy()

  await delay(300)
  expect(el.style.opacity).toBe('1')

  LoadingBar.finish()
  await delay(300)
  expect(el.style.opacity).toBe('0')

  LoadingBar.error()
  await delay(0)
  expect(document.querySelector('.var-loading-bar--error')).toBeTruthy()
  await delay(300)
  expect(document.querySelector('.var-loading-bar--error')).toBeFalsy()
})

test('test loading-bar custom style', async () => {
  LoadingBar({
    color: 'white',
    errorColor: 'black',
    height: '10px',
  })

  LoadingBar.start()

  await delay(200)
  const el = document.querySelector('.var-loading-bar')

  expect(el.style.backgroundColor).toBe('white')
  expect(el.style.height).toBe('10px')

  LoadingBar.error()
  await delay(200)
  expect(el.style.backgroundColor).toBe('black')

  el.remove()
})
