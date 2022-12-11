import { defineComponent, ref, inject } from 'vue'
import { colorPickerBasicColorProps, ColorPickerBasicColorProps } from './color-basic-types'
import { ProvideColorOptions, ColorPickerColor } from '../../utils/color-utils-types'
import { fromHex } from '../../utils/color-utils'
import './color-basic.scss'
import { color } from '../../utils/color'
export default defineComponent({
  name: 'ColorBasic',
  props: colorPickerBasicColorProps,
  setup(props: ColorPickerBasicColorProps) {
    const swatchesInject = inject<ProvideColorOptions>('provideData')

    const currentColor = ref<Partial<ColorPickerColor> | undefined>(props.color)
    function changeBasicColor(hex: string) {
      if (currentColor.value) {
        currentColor.value = fromHex(hex)
      }
    }
    const swatches = ref(Object.values(swatchesInject?.swatches ?? []))
    return () => {
      return (
        <div class="devui-color-picker-basic flex">
          {(swatches.value.length !== 0 ? swatches.value : color).map((hex: string) => (
            <div
              onClick={() => changeBasicColor(hex)}
              class={['devui-color-picker-basic-div']}
              style={{ backgroundColor: hex }}
            ></div>
          ))}
        </div>
      )
    }
  },
})
