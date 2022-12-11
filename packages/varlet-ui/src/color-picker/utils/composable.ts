import { Ref, ref, watch } from 'vue'
import { ColorPickerColor, CssColorObject } from './color-utils-types'
export function colorPickerResize(colorCubeRef: Ref<HTMLElement | null>, top: Ref<number>, left: Ref<number>): void {
  if (colorCubeRef.value) {
    const rect = colorCubeRef.value.getBoundingClientRect()
    left.value = rect.left
    top.value = rect.top + window.scrollY + rect.height
  }
}
export function isExhibitionColorPicker(
  event: PointerEvent,
  colorCubeRef: Ref<HTMLElement | null>,
  pickerRef: Ref<HTMLElement | null>,
  showColorPicker: Ref<boolean>
): void {
  if (colorCubeRef.value?.contains?.(event.target as Node) && !showColorPicker.value) {
    showColorPicker.value = true
  }
  if (!!pickerRef.value && !pickerRef.value?.contains(event.target as Node)) {
    showColorPicker.value = !showColorPicker.value
  }
}
export function useReactive<T>(source: () => T): Ref<T | undefined> {
  const model = ref<T>()
  model.value = source()
  watch(source, (newValue) => {
    model.value = newValue
  })
  return model
}

// 根据 value  饱和度 判断文本颜色
export function changeColorValue(value: ColorPickerColor, maxValue: number): CssColorObject {
  if (value.alpha > maxValue) {
    return value.hsva.v > maxValue && value.hsva.s < maxValue ? { color: '#000' } : { color: '#fff' }
  } else {
    return { color: '#000' }
  }
}
