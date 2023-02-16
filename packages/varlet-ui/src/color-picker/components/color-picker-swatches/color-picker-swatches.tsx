import { HexToHSV, parseBaseColor } from '../../utils/color-utils'
import { defineComponent, toRefs } from 'vue'
import { convertToUnit, deepEqual } from '../../utils/helpers'
import { changeColorValue } from '../../utils/composable'
import { call, createNamespace } from '../../../utils/components'
import { colorPickerSwatchesColorProps, ColorPickerSwatchesColorProps } from './color-picker-swatches-types'
import './color-picker-swatches.less'

export default defineComponent({
  name: 'VarColorPickerSwatches',
  props: colorPickerSwatchesColorProps,
  setup(props: ColorPickerSwatchesColorProps) {
    const { color } = toRefs(props)
    const { n } = createNamespace('color-picker-swatches')
    return () => {
      return (
        <div
          class={n()}
          style={{
            maxHeight: convertToUnit(props.maxHeight),
          }}
        >
          <div class={n('colorful')}>
            {props.swatches.map((swatch) => (
              <div class={n('swatch')}>
                {swatch.map((colorItem) => {
                  const hsv = HexToHSV(colorItem)
                  const iconColor = changeColorValue(hsv!, 0.5)
                  return (
                    <div class={n('color')} onClick={() => call(props['onUpdate:color'], hsv)}>
                      <div style={{ background: colorItem }}>
                        {color!.value && deepEqual(color!.value, hsv) ? (
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
