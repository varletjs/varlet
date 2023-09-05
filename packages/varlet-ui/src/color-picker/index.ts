// Component entry, the folder where the file exists will be exposed to the user
import ColorPicker from './ColorPicker'
import type { App } from 'vue'

ColorPicker.install = function (app: App) {
  app.component(ColorPicker.name, ColorPicker)
}

export const _ColorPickerComponent = ColorPicker

export default ColorPicker
