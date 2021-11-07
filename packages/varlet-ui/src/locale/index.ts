import { ref } from 'vue'
import type { Ref } from 'vue'
import type { Month, Week } from '../date-picker/props'
import zhCN from './zh-CN'

export type Pack = {
  // Dialog
  dialogTitle: string
  dialogConfirmButtonText: string
  dialogCancelButtonText: string
  // ActionSheet
  actionSheetTitle: string
  // List
  listLoadingText: string
  listFinishedText: string
  listErrorText: string
  // Picker
  pickerTitle: string
  pickerConfirmButtonText: string
  pickerCancelButtonText: string
  // date-picker
  datePickerMonthDict: Record<Month, { name: string; abbr: string }>
  datePickerWeekDict: Record<Week, { name: string; abbr: string }>
  datePickerSelected: string
  // pagination
  paginationItem: string
  paginationPage: string
  paginationJump: string
} & {
  lang?: string
}

export function useLocale() {
  const packs: Record<string, Partial<Pack>> = {}
  const pack: Ref<Partial<Pack>> = ref({})

  const add = (lang: string, pack: Partial<Pack>) => {
    pack.lang = lang
    packs[lang] = pack
  }

  const use = (lang: string) => {
    if (!packs[lang]) {
      console.warn(`The ${lang} does not exist. You can mount a language package using the add method`)
      return {}
    }

    pack.value = packs[lang]
  }

  const merge = (lang: string, pack: Partial<Pack>) => {
    if (!packs[lang]) {
      console.warn(`The ${lang} does not exist. You can mount a language package using the add method`)
      return
    }

    packs[lang] = { ...packs[lang], ...pack }
    use(lang)
  }

  return {
    packs,
    pack,
    add,
    use,
    merge,
  }
}

const { packs, pack, add, use, merge } = useLocale()

add('zh-CN', zhCN)
use('zh-CN')

export { packs, pack, add, use, merge }

export const _LocaleComponent = { packs, pack, add, use, merge, useLocale }

export default {
  packs,
  pack,
  add,
  use,
  merge,
  useLocale,
}
