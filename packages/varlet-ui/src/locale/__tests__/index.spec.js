import enUS from '../en-US'
import { useLocale } from '..'

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
  const { add, use, merge, pack } = useLocale()

  const LANG = 'en-US'
  const PACK = {
    dialogTitle: 'Custom Dialog Title',
  }

  add(LANG, enUS)
  use(LANG)
  merge(LANG, PACK)

  expect(pack.value.dialogTitle).toBe('Custom Dialog Title')
})
