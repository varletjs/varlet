import { ref, type Ref } from 'vue'
import { hasOwn } from '@varlet/shared'
import { type Month, type Week } from '../date-picker/props'
import enUS from './en-US'
import faIR from './fa-IR'
import zhCN from './zh-CN'
import zhHK from './zh-HK'
import zhTW from './zh-TW'

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

type ValueOf<T> = T[keyof T]

function useLocale<T = Message>() {
  const messages = ref<Record<string, Partial<T>>>({})
  const currentMessage: Ref<Partial<T>> = ref({})

  const add = (lang: string, message: Partial<T> & { lang?: string }) => {
    message.lang = lang
    messages.value[lang] = message
  }

  const use = (lang: string) => {
    if (!messages.value[lang]) {
      console.warn(`The ${lang} does not exist. You can mount a language message using the add method`)
      return {}
    }

    currentMessage.value = messages.value[lang]
  }

  const merge = (lang: string, message: Partial<T>) => {
    if (!messages.value[lang]) {
      console.warn(`The ${lang} does not exist. You can mount a language message using the add method`)
      return
    }

    messages.value[lang] = { ...messages.value[lang], ...message }

    use(lang)
  }

  const t = (id: string): ValueOf<T> | undefined => {
    if (hasOwn(currentMessage.value, id)) {
      return currentMessage.value[id]
    }
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

export { zhCN, enUS, zhTW, zhHK, faIR, messages, currentMessage, add, use, merge, t, useLocale }

export const _LocaleComponent = {
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
