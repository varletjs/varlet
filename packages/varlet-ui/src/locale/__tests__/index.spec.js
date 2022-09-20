import enUS from '../en-US'
import { useLocale } from '..'
import { mockConsole } from '../../utils/jest'

test('test add lang', () => {
  const { add, use, pack, packs } = useLocale()

  const LANG = 'custom'
  const PACK = {
    dialogTitle: 'Custom Dialog Title',
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
    dialogTitle: 'Custom Dialog Title',
  }

  add(LANG, enUS)
  use('zh_HK')
  use(LANG)
  merge('zh_HK', PACK)
  merge(LANG, PACK)

  expect(pack.value.dialogTitle).toBe('Custom Dialog Title')
  expect(fn).toHaveBeenCalledTimes(2)

  mockRestore()
})
