import { defineComponent } from 'vue'
import VarColorPickerHueSlider from '../color-picker-hue-slider/color-picker-hue-slider'
import VarColorPickerAlphaSlider from '../color-picker-alpha-slider/color-picker-alpha-slider'
import { createNamespace } from '../../../utils/components'
import { ColorPickerPreviewProps, colorPickerPreviewProps } from './color-picker-preview-type'
import './color-picker-preview.less'

export default defineComponent({
  name: 'VarColorPickerPreview',
  props: colorPickerPreviewProps,
  emits: ['update:color'],
  setup(props: ColorPickerPreviewProps, ctx) {
    const { n, classes } = createNamespace('color-picker-preview')
    return () => {
      return (
        <div class={classes(n())}>
          <div class={classes(n('dots'))} style={{ backgroundColor: props.color.hexa }}></div>

          <div class={classes(n('slider'))}>
            <VarColorPickerHueSlider color={initialColor.value} onUpdate:color={updateColor} />
            {/* <VarColorPickerAlphaSlider  /> */}
          </div>
        </div>
      )
    }
  },
})
