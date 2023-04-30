import type { App } from 'vue'
import DatePicker from './DatePicker.vue'

DatePicker.install = function (app: App) {
  app.component(DatePicker.name, DatePicker)
}

export { props as datePickerProps } from './props'

export const _DatePickerComponent = DatePicker

export default DatePicker
