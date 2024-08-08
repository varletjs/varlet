import { PropType } from 'vue'
import { MenuSelectOption } from '../../types'
import { defineListenerProp } from '../utils/components'

export type AutoCompleteOption = MenuSelectOption

export const props = {
  /**
   * 自动完成的数据源
   */
  options: {
    type: Array as PropType<AutoCompleteOption[]>,
    default: () => [],
  },
  /**
   * 输入框的值
   */
  modelValue: String,
  /**
   *  更新 modelValue 的回调
   */
  'onUpdate:modelValue': defineListenerProp<(value: string | undefined) => void>(),
}
