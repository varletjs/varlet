import { Ref, ref, watch } from 'vue'
import { ColorPickerColor, CssColorObject } from './color-utils-types'

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
  console.log(value.alpha)

  if (value.alpha > maxValue) {
    return value.hsva.v > maxValue && value.hsva.s < maxValue ? { color: '#000' } : { color: '#fff' }
  }
  return { color: '#000' }
}
