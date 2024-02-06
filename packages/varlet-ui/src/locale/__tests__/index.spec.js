import enUS from '../en-US'
import { useLocale } from '..'
import { mockConsole } from '../../utils/test'
import { expect, vi } from 'vitest'

test('test add lang', () => {
  const { add, use, pack, packs } = useLocale()

  const LANG = 'custom'
  const PACK = {
    dialogTitle: 'Custom Dialog Title',
  }

  add(LANG, PACK)
  use(LANG)

  expect(t('lang')).toBe(LANG)
  expect(packs[LANG]).toBe(PACK)
})

test('test merge lang', () => {
  const fn = vi.fn()
  const { mockRestore } = mockConsole('warn', fn)
  const { add, use, merge, pack } = useLocale()

  const LANG = 'en-US'
  const PACK = {
    dialogTitle: 'Custom Dialog Title',
  }

  add(LANG, enUS)
  use('zh-HK')
  use(LANG)
  merge('zh-HK', PACK)
  merge(LANG, PACK)

  expect(t('dialogTitle')).toBe('Custom Dialog Title')
  expect(fn).toHaveBeenCalledTimes(2)

  mockRestore()
})
