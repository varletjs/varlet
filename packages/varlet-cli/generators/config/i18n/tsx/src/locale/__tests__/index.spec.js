import enUS from '../en-US'
import { useLocale } from '../index'

function mockConsole(method, fn = () => {}) {
  const originMethod = console[method]

  console[method] = fn

  return {
    mockRestore() {
      console[method] = originMethod
    },
  }
}

test('test add lang', () => {
  const { add, use, pack, packs } = useLocale()

  const LANG = 'custom'
  const PACK = {
    button: 'Custom Text',
  }

  add(LANG, PACK)
  use(LANG)

  expect(pack.value.lang).toBe(LANG)
  expect(packs[LANG]).toBe(PACK)
})

test('test merge lang', () => {
  const fn = jest.fn()
  const { mockRestore } = mockConsole('warn', fn)
  const { add, use, merge, pack } = useLocale()

  const LANG = 'en-US'
  const PACK = {
    button: 'Custom Text',
  }

  add(LANG, enUS)
  use('zh_HK')
  use(LANG)
  merge('zh_HK', PACK)
  merge(LANG, PACK)

  expect(pack.value.button).toBe('Custom Text')
  expect(fn).toHaveBeenCalledTimes(2)

  mockRestore()
})
