import { defineComponent, ref, toRefs, onMounted, watch, computed } from 'vue'
import { colorPickerProps, ColorPickerProps } from './props'
import { createNamespace, call } from '../utils/components'
import { parseBaseColor, extractBaseColor, HSVtoCSS, nullColor } from './utils/color-utils'
import { HSV } from './utils/color-utils-types'
import VarColorPickerCanvas from './components/color-picker-canvas/color-picker-canvas'
import VarColorPickerEdit from './components/color-picker-edit/color-picker-edit'
import VarColorPickerSwatches from './components/color-picker-swatches/color-picker-swatches'
import VarColorPickerHueSlider from './components/color-picker-hue-slider/color-picker-hue-slider'
import VarColorPickerAlphaSlider from './components/color-picker-alpha-slider/color-picker-alpha-slider'
import './colorPicker.less'
import '../styles/elevation.less'

const DEFAULT_MODE = 'rgba'
export default defineComponent({
  name: 'VarColorPicker',
  props: colorPickerProps,
  setup(props: ColorPickerProps) {
    const { modelValue, mode, disabled, modes } = toRefs(props)
    const { n, classes } = createNamespace('color-picker')
    const initialColor = ref<any>()
    const currentValue = computed({
      get() {
        return parseBaseColor(modelValue.value) ?? nullColor
      },
      set(newV) {
        const value = extractBaseColor(newV, props.modelValue)
        if (value === parseBaseColor(modelValue.value)) return
        call(props['onUpdate:modelValue'], value)
      },
    })
    function updateModelValueColor(color: any, flag = false) {
      currentValue.value = color
      // console.log(color)
      // initialColor.value = parseBaseColor(color) ?? nullColor
      // if (flag) return
      // const value = extractBaseColor(initialColor.value, props.modelValue)
      // call(props['onUpdate:modelValue'], value)
    }
    // updateModelValueColor(modelValue.value)
    const currentMode = ref(DEFAULT_MODE)
    function updateColor(hsva: HSV) {
      updateModelValueColor(hsva)
    }
    function updateMode(mode: string) {
      currentMode.value = mode
    }
    onMounted(() => {
      if (!props.modes.includes(mode.value)) mode.value = props.modes[0]
    })
    watch(
      () => mode.value,
      (newV) => {
        updateMode(newV)
      }
    )
    return () => {
      return (
        <>
          <div class={classes(n(), n('$-elevation--2'))}>
            <div></div>
            {currentValue.value.h}
            {props.canvasLayout && (
              <VarColorPickerCanvas
                width={props.width}
                height={props.canvasHeight}
                color={currentValue.value}
                onUpdate:color={updateColor}
                disabled={disabled.value}
              />
            )}
            {(props.sliderLayout || props.inputLayout) && (
              <div class={n('control')}>
                {props.sliderLayout && (
                  <div class={n('preview')}>
                    <div class={n('preview__dots')}>
                      <div style={{ background: HSVtoCSS(initialColor.value ?? nullColor) }} />
                    </div>
                    <div class={n('preview__slider')}>
                      <VarColorPickerHueSlider
                        color={currentValue.value}
                        onUpdate:color={updateColor}
                        disabled={disabled.value}
                      />

                      {currentMode.value.endsWith('a') ? (
                        <VarColorPickerAlphaSlider
                          color={currentValue.value}
                          onUpdate:color={updateColor}
                          disabled={disabled.value}
                        />
                      ) : null}
                    </div>
                  </div>
                )}
                {props.inputLayout && (
                  <VarColorPickerEdit
                    color={currentValue.value}
                    onUpdate:color={updateColor}
                    disabled={disabled.value}
                    modes={modes.value}
                    mode={currentMode.value}
                    onUpdate:mode={updateMode}
                  />
                )}
              </div>
            )}
            {props.swatchesLayout && (
              <VarColorPickerSwatches
                color={currentValue.value}
                onUpdate:color={updateColor}
                disabled={disabled.value}
              />
            )}
          </div>
        </>
      )
    }
  },
})
