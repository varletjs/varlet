import { Message } from './index'

export default {
  // Dialog
  dialogTitle: 'اشاره',
  dialogConfirmButtonText: 'تایید',
  dialogCancelButtonText: 'لغو',
  // ActionSheet
  actionSheetTitle: 'انتخاب یک مورد',
  // List
  listLoadingText: 'در حال بارگزاری',
  listFinishedText: 'مورد دیگری وجود ندارد',
  listErrorText: 'بارگزاری ناموفق',
  // Picker
  pickerTitle: 'انتخاب کنید',
  pickerConfirmButtonText: 'تایید',
  pickerCancelButtonText: 'لغو',
  // date-picker
  datePickerMonthDict: {
    '01': {
      name: 'ژانویه',
      abbr: 'JAN',
    },
    '02': {
      name: 'فوریه',
      abbr: 'FEB',
    },
    '03': {
      name: 'مارس',
      abbr: 'MAR',
    },
    '04': {
      name: 'آوریل',
      abbr: 'APR',
    },
    '05': {
      name: 'مه',
      abbr: 'MAY',
    },
    '06': {
      name: 'ژوئن',
      abbr: 'JUN',
    },
    '07': {
      name: 'جولای',
      abbr: 'JUL',
    },
    '08': {
      name: 'آگوست',
      abbr: 'AUG',
    },
    '09': {
      name: 'سپتامبر',
      abbr: 'SEP',
    },
    '10': {
      name: 'اوکتبر',
      abbr: 'OCT',
    },
    '11': {
      name: 'نوامبر',
      abbr: 'NOV',
    },
    '12': {
      name: 'دسامبر',
      abbr: 'DEC',
    },
  },
  datePickerWeekDict: {
    '0': {
      name: 'یکشنبه',
      abbr: 'S',
    },
    '1': {
      name: 'دوشنبه',
      abbr: 'M',
    },
    '2': {
      name: 'سه‌شنبه',
      abbr: 'T',
    },
    '3': {
      name: 'چهارشنبه',
      abbr: 'W',
    },
    '4': {
      name: 'پنجشنبه',
      abbr: 'T',
    },
    '5': {
      name: 'جمعه',
      abbr: 'F',
    },
    '6': {
      name: 'شنبه',
      abbr: 'S',
    },
  },
  datePickerSelected: ' انتخاب شده',
  datePickerHint: 'انتخاب تاریخ',
  // pagination
  paginationItem: '',
  paginationPage: 'صفحه',
  paginationJump: 'برو به',
  // time-picker
  timePickerHint: 'انتخاب زمان',
} as Message
