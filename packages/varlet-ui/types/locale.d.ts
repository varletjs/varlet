import type { Ref } from 'vue'

export type Month = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12'

export type Week = '0' | '1' | '2' | '3' | '4' | '5' | '6'

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
}

interface Locale {
  packs: Record<string, Partial<Pack>>
  pack: Ref<Partial<Pack>>
  add(lang: string, pack: Partial<Pack>): void
  use(lang: string): void
  merge(lang: string, pack: Partial<Pack>): void
  useLocale<T = Pack>(): {
    packs: Record<string, Partial<T>>
    pack: Ref<Partial<T>>
    add(lang: string, pack: Partial<T> & { lang?: string }): void
    use(lang: string): void
    merge(lang: string, pack: Partial<T>): void
  }
}

export const Locale: Locale

export class _LocaleComponent {}
