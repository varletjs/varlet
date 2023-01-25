import colors from '../../utils/color'
import { parseBaseColor } from '../../utils/color-utils'
import { defineComponent, PropType, toRefs } from 'vue'
import { convertToUnit, deepEqual } from '../../utils/helpers'
import { changeColorValue } from '../../utils/composable'
import { call } from '../../../utils/components'
import './color-picker-swatches.less'

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
  setup(props) {
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
                  const iconColor = changeColorValue(hsv!, 0.5)
                  return (
                    <div class="var-color-picker-swatches__color" onClick={() => call(props['onUpdate:color'], hsv)}>
                      <div style={{ background: colorItem }}>
                        {color.value && deepEqual(color.value, hsv) ? (
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
