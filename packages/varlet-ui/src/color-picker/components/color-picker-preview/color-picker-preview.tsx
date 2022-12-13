import { defineComponent } from 'vue'
import VarColorPickerHueSlider from '../color-hue-slider/color-hue-slider'
import VarColorPickerAlphaSlider from '../color-alpha-slider/color-alpha-slider'
import { createNamespace } from '../../../utils/components'
import { ColorPickerPreviewProps, colorPickerPreviewProps } from './color-picker-preview-type'
import './color-picker-preview.less'

export default defineComponent({
  name: 'VarColorPickerPreview',
  props: colorPickerPreviewProps,
  emits: [''],
  setup(props: ColorPickerPreviewProps, ctx) {
    const { n, classes } = createNamespace('color-picker-preview')
    return () => {
      return (
        <div class={classes(n())}>
          <div class={classes(n('dots'))} style={{ backgroundColor: props.modelValue.hexa }}></div>

          <div class={classes(n('slider'))}>
            {/* <VSlider
              class="v-color-picker-preview__track v-color-picker-preview__hue"
              modelValue={props.color?.h}
              onUpdate:modelValue={(h) => emit('update:color', { ...(props.color ?? nullColor), h })}
              step={0}
              min={0}
              max={360}
              disabled={props.disabled}
              thumbSize={14}
              trackSize={8}
              trackFillColor="white"
              hideDetails
            /> */}
            <VarColorPickerHueSlider />
            {props.alpha && <VarColorPickerAlphaSlider />}
            {/* {!props.hideAlpha && (
              <VSlider
                class="v-color-picker-preview__track v-color-picker-preview__alpha"
                modelValue={props.color?.a}
                onUpdate:modelValue={(a) => emit('update:color', { ...(props.color ?? nullColor), a })}
                step={0}
                min={0}
                max={1}
                disabled={props.disabled}
                thumbSize={14}
                trackSize={8}
                trackFillColor="white"
                hideDetails
              />
            )} */}
          </div>
        </div>
      )
    }
  },
})
