import { expect, test, vi } from 'vitest'
import { useLocale } from '..'
import { mockConsole } from '../../utils/test'
import enUS from '../en-US'

test('add lang', () => {
  const { add, use, t, messages } = useLocale()

  const lang = 'custom'
  const message = {
    dialogTitle: 'Custom Dialog Title',
  }

  add(lang, message)
  use(lang)

  expect(t('lang')).toBe(lang)
  expect(messages.value[lang]).toStrictEqual(message)
})

test('merge lang', () => {
  const fn = vi.fn()
  const { mockRestore } = mockConsole('warn', fn)
  const { add, use, merge, t } = useLocale()

  const lang = 'en-US'
  const message = {
    dialogTitle: 'Custom Dialog Title',
  }

  add(lang, enUS)
  use('zh-HK')
  use(lang)
  merge('zh-HK', message)
  merge(lang, message)

  expect(t('dialogTitle')).toBe('Custom Dialog Title')
  expect(fn).toHaveBeenCalledTimes(2)

  mockRestore()
})
