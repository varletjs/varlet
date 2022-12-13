// Styles
import './color-picker-swatches.less'

import colors from '../../utils/color'
import { parseColor } from '../../utils/color-utils'
// Types
import { defineComponent, PropType } from 'vue'
import { convertToUnit } from '../../utils/helpers'

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
                {swatch.map((color) => {
                  const hsv = parseColor(color)
                  return (
                    <div class="var-color-picker-swatches__color" onClick={() => emit('update:color', hsv)}>
                      <div style={{ background: color }}>
                        <var-icon size="15" name="checkbox-marked-circle" />
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

export type VColorPickerSwatches = InstanceType<typeof VColorPickerSwatches>
