import { defineComponent, Ref, ref, UnwrapRef, watch, inject } from 'vue'
import { ColorPickerHistoryProps, colorPickerHistoryProps } from './color-picker-history-types'
import { Icon } from '../../../../icon'
import './color-history.scss'
import { fromHexa } from '../../utils/color-utils'
import { ProvideColorOptions, ColorPickerColor } from '../../utils/color-utils-types'
import { debounce } from 'lodash'

const STORAGE_KEY = 'STORAGE_COLOR_PICKER_HISTORY_KEY'
const MAX_HISTORY_COUNT = 8

/**
 * 创建支持存储Store
 * @param v
 * @param params
 * @returns
 */
function useStore<T>(v: T, { storage }: { storage?: boolean } = {}): Ref<T | UnwrapRef<T>> {
  // 获取默认值
  const getDefaultValue = (): T => {
    if (storage) {
      const storageValue = localStorage.getItem(STORAGE_KEY)
      return JSON.parse(storageValue + '') || v
    } else {
      return v
    }
  }

  // 创建Store
  const store = ref(getDefaultValue())

  // 监听Store修改
  watch(store, (value) => {
    if (storage) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    }
  })

  return store
}

export default defineComponent({
  name: 'ColorEdit',
  components: {
    Icon,
  },
  props: colorPickerHistoryProps,
  emits: ['update:color'],
  setup(props: ColorPickerHistoryProps) {
    // 获取 是否showalpha
    const alphaInject = inject('provideData') as ProvideColorOptions

    // 创建历史存储
    const history = useStore<string[]>([], { storage: true })
    const color = ref<Partial<ColorPickerColor> | undefined>(props.color)

    // 更新历史值函数
    // 进行缓冲处理
    const updateHistory = debounce((value: ColorPickerColor) => {
      const index = history.value.findIndex((x) => x === value.hexa || (x.endsWith('00') && value.alpha === 0))
      if (index >= 0) {
        history.value.splice(index, 1)
      }

      history.value = [alphaInject.showAlpha ? value.hexa : value.hex, ...history.value].slice(0, MAX_HISTORY_COUNT)
    }, 100)

    // 更新历史值
    watch(props.color as ColorPickerColor, (value) => {
      updateHistory(value)
    })

    /**
     * 选择历史色
     * @param value
     */
    function onChangeColor(value: string) {
      color.value = fromHexa(value)
    }

    return () => (
      <div class="devui-color-picker-history flex flex-wrap">
        {history.value.map((hexa: string) => (
          <div
            onClick={() => onChangeColor(hexa)}
            class={['devui-color-picker-history_color-box', hexa.endsWith('00') ? 'transparent' : '']}
            style={{ backgroundColor: hexa }}
          ></div>
        ))}
      </div>
    )
  },
})
