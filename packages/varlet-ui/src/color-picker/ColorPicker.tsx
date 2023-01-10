import { defineComponent, ref, computed, toRefs, onMounted, StyleValue, ComputedRef } from 'vue'
import { colorPickerProps, ColorPickerProps } from './props'
import { createNamespace } from '../utils/components'
import { parseBaseColor, extractBaseColor, HSVAtoHex } from './utils/color-utils'
import { HSVA } from './utils/color-utils-types'
import VarColorPickerCanvas from './components/color-picker-canvas/color-picker-canvas'
import VarColorPickerEdit from './components/color-picker-edit/color-picker-edit'
import VarColorPickerSwatches from './components/color-picker-swatches/color-picker-swatches'
import VarColorPickerHueSlider from './components/color-picker-hue-slider/color-picker-hue-slider'
import VarColorPickerAlphaSlider from './components/color-picker-alpha-slider/color-picker-alpha-slider'
import './colorPicker.less'
import '../styles/elevation.less'

export default defineComponent({
  name: 'VarColorPicker',
  props: colorPickerProps,
  emits: ['update:modelValue'],
  setup(props: ColorPickerProps, { emit }) {
    const { modelValue, mode, disabled, modes } = toRefs(props)
    const { n, classes } = createNamespace('color-picker')
    const initialColor = ref<any>()
    const hsva = computed(() => parseBaseColor(modelValue.value))
    const hex = computed(() => HSVAtoHex(hsva.value))
    console.log(hex.value)

    function updateModelValueColor(color: any) {
      initialColor.value = parseBaseColor(color)
      console.log(initialColor.value)
      const value = extractBaseColor(initialColor.value, props.modelValue)
      emit('update:modelValue', value)
    }
    updateModelValueColor(modelValue.value)
    const currentMode = ref('rgba')
    function updateColor(hsva: HSVA) {
      updateModelValueColor(hsva)
    }
    function updateMode(mode: string) {
      currentMode.value = mode
    }
    const dotStyle: ComputedRef<any> = computed(() => {
      return { '--var-color-picker-preview-dots': hex.value }
    })
    onMounted(() => {
      if (!props.modes.includes(mode.value)) mode.value = props.modes[0]
    })
    return () => {
      return (
        <>
          <div class={[classes(n()), 'var-elevation--3']}>
            <div></div>
            {props.canvasLayout && (
              <VarColorPickerCanvas
                width={props.width}
                height={props.canvasHeight}
                color={initialColor.value}
                onUpdate:color={updateColor}
              />
            )}
            {(props.sliderLayout || props.inputLayout) && (
              <div class={classes(n('control'))}>
                {props.sliderLayout && (
                  <div class={classes(n('preview'))}>
                    <div class={classes(n('preview__dots'))} style={dotStyle.value}></div>
                    <div class={classes(n('preview__slider'))}>
                      <VarColorPickerHueSlider color={initialColor.value} onUpdate:color={updateColor} />

                      {currentMode.value.endsWith('a') ? (
                        <VarColorPickerAlphaSlider color={initialColor.value} onUpdate:color={updateColor} />
                      ) : null}
                    </div>
                  </div>
                )}
                {props.inputLayout && (
                  <VarColorPickerEdit
                    color={initialColor.value}
                    onUpdate:color={updateColor}
                    disabled={disabled.value}
                    modes={modes.value}
                    mode={currentMode.value}
                    onUpdate:mode={updateMode}
                  />
                )}
              </div>
            )}
            {props.swatchesLayout && <VarColorPickerSwatches color={initialColor.value} onUpdate:color={updateColor} />}
          </div>
        </>
      )
    }
  },
})
