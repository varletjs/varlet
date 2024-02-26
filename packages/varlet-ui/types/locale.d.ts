import type { Ref } from 'vue'

export type Month = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12'

export type Week = '0' | '1' | '2' | '3' | '4' | '5' | '6'

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
  // pagination
  paginationItem: string
  paginationPage: string
  paginationJump: string

  [key: PropertyKey]: any
}

interface Locale {
  zhCN: Message
  enUS: Message
  zhTW: Message
  zhHK: Message
  messages: Record<string, Partial<Message>>
  currentMessage: Ref<Partial<Pack>>
  add(lang: string, message: Partial<Message>): void
  use(lang: string): void
  merge(lang: string, message: Partial<Message>): void
  t(id: string): string

  useLocale<T = Message>(): {
    messages: Record<string, Partial<T>>
    currentMessage: Ref<Partial<T>>
    add(lang: string, message: Partial<T> & { lang?: string }): void
    use(lang: string): void
    merge(lang: string, message: Partial<T>): void
    t(id: string): string
  }
}

export declare const Locale: Locale

export class _LocaleComponent {}
