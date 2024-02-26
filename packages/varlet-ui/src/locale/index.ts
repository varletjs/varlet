import zhCN from './zh-CN'
import enUS from './en-US'
import zhTW from './zh-TW'
import zhHK from './zh-HK'
import faIR from './fa-IR'
import { ref, type Ref } from 'vue'
import { type Month, type Week } from '../date-picker/props'
import { hasOwn } from '@varlet/shared'

export type Message = {
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
  datePickerHint: string
  // pagination
  paginationItem: string
  paginationPage: string
  paginationJump: string
  // time-picker
  timePickerHint: string
  // internal
  lang?: string
  [key: PropertyKey]: any
}

function useLocale<T = Message>() {
  const messages: Record<string, Partial<T>> = {}
  const currentMessage: Ref<Partial<T>> = ref({})

  const add = (lang: string, message: Partial<T> & { lang?: string }) => {
    message.lang = lang
    messages[lang] = message
  }

  const use = (lang: string) => {
    if (!messages[lang]) {
      console.warn(`The ${lang} does not exist. You can mount a language message using the add method`)
      return {}
    }

    currentMessage.value = messages[lang]
  }

  const merge = (lang: string, message: Partial<T>) => {
    if (!messages[lang]) {
      console.warn(`The ${lang} does not exist. You can mount a language message using the add method`)
      return
    }

    messages[lang] = { ...messages[lang], ...message }

    use(lang)
  }

  const t = (id: string) => {
    if (hasOwn(currentMessage.value, id)) {
      return currentMessage.value[id]
    }

    return id
  }

  return {
    messages,
    currentMessage,
    add,
    use,
    merge,
    t,
  }
}

const { messages, currentMessage, add, use, merge, t } = useLocale()

add('zh-CN', zhCN)
use('zh-CN')

export { zhCN, enUS, messages, currentMessage, add, use, merge, t, useLocale }

export const _LocaleComponent = { zhCN, enUS, messages, currentMessage, add, use, merge, t, useLocale }

export default {
  zhCN,
  enUS,
  zhTW,
  zhHK,
  faIR,
  messages,
  currentMessage,
  add,
  use,
  merge,
  t,
  useLocale,
}
