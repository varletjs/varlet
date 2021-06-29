import type { App } from 'vue'
import TimePicker from './TimePicker.vue'

TimePicker.install = function (app: App) {
  app.component(TimePicker.name, TimePicker)
}

export const _TimePickerComponent = TimePicker

export default TimePicker
