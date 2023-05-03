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
    const { n, classes } = createNamespace('color-picker')

    const { modelValue, mode, disabled, modes } = toRefs(props)
    const currentMode = ref(DEFAULT_MODE)
    const dragTransferFlag = ref<boolean>(false)
    const initialColor = ref<any>()

    function updateModelValueColor(color: any) {
      initialColor.value = parseBaseColor(color) ?? nullColor
      const value = extractBaseColor(parseBaseColor(color) ?? nullColor, props.modelValue)
      call(props['onUpdate:modelValue'], value)
    }

    function updateColor(hsva: HSV) {
      updateModelValueColor(hsva)
    }

    function updateMode(mode: string) {
      currentMode.value = mode
    }

    function handleDragger(flag: boolean) {
      dragTransferFlag.value = flag
    }

    const containerStyle = computed(() => {
      return {
        width: `${props.width}px`,
        maxWidth: `${props.width}px`,
      }
    })

    const dotStyle = computed(() => {
      const defaultColor = HSVtoCSS(initialColor.value ?? nullColor)
      return {
        background: defaultColor,
        border: `1px solid ${defaultColor}`,
      }
    })

    const dotContainerStyle = computed(() => {
      const defaultColor = HSVtoCSS(initialColor.value ?? nullColor)
      return {
        border: `14px solid ${defaultColor}`,
      }
    })

    onMounted(() => {
      if (!props.modes.includes(mode.value)) mode.value = props.modes[0]
    })

    watch(
      () => modelValue.value,
      (newV, oldV) => {
        if (oldV !== newV && !dragTransferFlag.value) {
          updateModelValueColor(newV)
        }
      },
      {
        immediate: true,
      }
    )

    watch(
      () => mode.value,
      (newV) => {
        updateMode(newV)
      }
    )

    return () => {
      return (
        <>
          <div class={classes(n(), n('$-elevation--2'))} style={containerStyle.value}>
            <div></div>
            {props.canvasLayout && (
              <VarColorPickerCanvas
                width={props.width}
                height={props.canvasHeight}
                color={initialColor.value}
                onUpdate:color={updateColor}
                dragger={handleDragger}
                disabled={disabled.value}
              />
            )}
            {(props.sliderLayout || props.inputLayout) && (
              <div class={n('control')}>
                {props.sliderLayout && (
                  <div class={n('preview')}>
                    <div class={n('preview__dots')} style={dotContainerStyle.value}>
                      <div style={dotStyle.value} />
                    </div>
                    <div class={n('preview__slider')}>
                      <VarColorPickerHueSlider
                        color={initialColor.value}
                        onUpdate:color={updateColor}
                        disabled={disabled.value}
                      />

                      {currentMode.value.endsWith('a') ? (
                        <VarColorPickerAlphaSlider
                          color={initialColor.value}
                          onUpdate:color={updateColor}
                          disabled={disabled.value}
                        />
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
            {props.swatchesLayout && (
              <VarColorPickerSwatches
                color={initialColor.value}
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
