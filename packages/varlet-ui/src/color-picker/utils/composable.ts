import { Ref, ref, watch } from 'vue'
import { ColorPickerColor, CssColorObject, HSV } from './color-utils-types'

export function useReactive<T>(source: () => T): Ref<T | undefined> {
  const model = ref<T>()
  model.value = source()
  watch(source, (newValue) => {
    model.value = newValue
  })
  return model
}

// 根据 value  饱和度 判断文本颜色
export function changeColorValue(value: HSV, maxValue: number): CssColorObject {
  return value.v > maxValue && value.s < maxValue ? { color: '#000' } : { color: '#fff' }
}
