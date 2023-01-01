// Styles
import './color-picker-swatches.less'

import colors from '../../utils/color'
import { fromHSVA, HSVAtoHex, parseBaseColor, parseColor } from '../../utils/color-utils'
// Types
import { defineComponent, PropType, toRefs } from 'vue'
import { convertToUnit, deepEqual } from '../../utils/helpers'
import { changeColorValue } from '../../utils/composable'

function parseDefaultColors(colors: Record<string, Record<string, string>>) {
  return Object.keys(colors).map((key) => {
    const color = colors[key]
    return color.base
      ? [
          color.base,
          color.darken4,
          color.darken3,
          color.darken2,
          color.darken1,
          color.lighten1,
          color.lighten2,
          color.lighten3,
          color.lighten4,
          color.lighten5,
        ]
      : [color.black, color.white, color.transparent]
  })
}

export default defineComponent({
  name: 'VarColorPickerSwatches',
  props: {
    swatches: {
      type: Array as PropType<string[][]>,
      default: () => parseDefaultColors(colors),
    },
    disabled: Boolean,
    color: Object as PropType<null>,
    maxHeight: [Number, String],
  },
  emits: ['update:color'],
  setup(props, { emit }) {
    const { color } = toRefs(props)
    return () => {
      return (
        <div
          class="var-color-picker-swatches"
          style={{
            maxHeight: convertToUnit(props.maxHeight),
          }}
        >
          <div class="var-color-picker-swatches__colorful">
            {props.swatches.map((swatch) => (
              <div class="var-color-picker-swatches__swatch">
                {swatch.map((colorItem) => {
                  const hsv = parseBaseColor(colorItem)
                  const iconColor = changeColorValue(fromHSVA(hsv), 0.5)
                  return (
                    <div class="var-color-picker-swatches__color" onClick={() => emit('update:color', hsv)}>
                      <div style={{ background: colorItem }}>
                        {props.color && deepEqual(props.color, hsv) ? (
                          <var-icon size="15" name="checkbox-marked-circle" color={iconColor.color} />
                        ) : undefined}
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      )
    }
  },
})

export type VarColorPickerSwatches = InstanceType<typeof VarColorPickerSwatches>
