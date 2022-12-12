// Styles
import './color-swatches.less'

import colors from '../../utils/color'

// Types
import { defineComponent, PropType } from 'vue'

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
  name: 'ColorSwatches',

  props: {
    swatches: {
      type: Array as PropType<string[][]>,
      default: () => parseDefaultColors(colors),
    },
    disabled: Boolean,
    color: Object as PropType<null>,
    maxHeight: [Number, String],
  },

  emits: {
    'update:color': (color) => true,
  },

  setup(props, { emit }) {
    return () => {
      return (
        <div
          class="var-color-picker-swatches"
          style={
            {
              // maxHeight: convertToUnit(props.maxHeight),
            }
          }
        >
          <div class="var-color-picker-swatches__colorful">
            {props.swatches.map((swatch) => (
              <div class="var-color-picker-swatches__swatch">
                {swatch.map((color) => {
                  return (
                    <div class="var-color-picker-swatches__color" onClick={() => emit('update:color', color)}>
                      <div style={{ background: color }}></div>
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
