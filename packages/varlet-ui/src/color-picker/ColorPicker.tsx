import { defineComponent, ref, computed, watch, provide, unref, readonly, toRefs, onMounted } from 'vue'
import { useReactive, changeColorValue } from './utils/composable'
import { colorPickerProps, ColorPickerProps } from './props'
import colorPanel from './components/colorPickerPanel/color-picker-panel'
import './colorPicker.less'
import '../styles/elevation.less'
import { createNamespace } from '../utils/components'
import { parseColor, extractColor, parseBaseColor, extractBaseColor, HSVAtoHex } from './utils/color-utils'
import { ColorPickerColor } from './utils/color-utils-types'
import VarColorPickerPreview from './components/color-picker-preview/color-picker-preview'
import VarColorPickerCanvas from './components/color-picker-canvas/color-picker-canvas'
import VarColorPickerEdit from './components/color-picker-edit/color-picker-edit'
import VarColorPickerSwatches from './components/color-picker-swatches/color-picker-swatches'
import VarColorPickerHueSlider from './components/color-picker-hue-slider/color-picker-hue-slider'
import VarColorPickerAlphaSlider from './components/color-picker-alpha-slider/color-picker-alpha-slider'
import { useProxiedModel } from './utils/proxiedModel'

export default defineComponent({
  name: 'VarColorPicker',
  components: {
    colorPanel,
    VarColorPickerPreview,
  },
  props: colorPickerProps,
  emits: ['update:modelValue'],
  setup(props: ColorPickerProps, { emit }) {
    const { modelValue, mode, disabled, modes } = toRefs(props)
    const { n, classes } = createNamespace('color-picker')
    // const DEFAULT_MODE = 'rgb'
    // const provideData = {
    //   showAlpha: useReactive(() => props.showAlpha),
    //   swatches: useReactive(() => props.swatches),
    // }
    // provide('provideData', readonly(provideData))
    const initialColor = ref<Partial<ColorPickerColor>>()
    // const colorCubeRef = ref<HTMLElement | null>(null)
    // const pickerRef = ref<HTMLElement | null>(null)
    // const containerRef = ref<HTMLElement | null>(null)
    // const isChangeTextColor = ref(true)
    // const formItemText = ref(`${props.mode ?? DEFAULT_MODE}`)
    // const mode = ref(unref(props.mode))
    const hsva = computed(() => parseBaseColor(modelValue.value))
    const hex = computed(() => HSVAtoHex(hsva.value))

    // 更新用户输入颜色 2021.12.10
    function updateModelValueColor(color: Partial<ColorPickerColor>) {
      initialColor.value = parseBaseColor(color)
      console.log(initialColor.value)

      // 提取颜色 2021.12.10
      const value = extractBaseColor(initialColor.value, props.modelValue)
      console.log(value)
      // const value = extractColor(initialColor.value as ColorPickerColor, modelValue.value, mode.value as string, true)
      emit('update:modelValue', value)
    }
    updateModelValueColor(modelValue.value)
    // // 交互触发item 颜色 面板  动态修改alpha后要还原 alpha 2021.12.18
    // const triggerColor = computed(() => {
    //   const currentColor = (initialColor.value as ColorPickerColor).rgba
    //   const trigger = { ...currentColor, a: props.showAlpha ? currentColor.a : 1 }
    //   return {
    //     backgroundColor: `${RGBAtoCSS(trigger)}`,
    //   }
    // })
    // // 交互面板 的value 值 动态展示 根据不同 type
    // const formItemValue = computed(() => {
    //   return extractColor(initialColor.value as ColorPickerColor, '', formItemText.value, props.showAlpha)
    // })
    // // 动态 根据当前 透明度修改文本颜色 tips：根据不同 面板颜色 目前 不够优雅
    // const textColor = computed(() => {
    //   // 数字代表 hsv 中的value 值 纵轴 动态切换 文本颜色
    //   return changeColorValue(initialColor.value as ColorPickerColor, 0.5)
    // })
    // // ** emits
    // // 动态 交互面板 文本展示颜色  tips：根据不同 面板颜色 目前 不够优雅
    // function changeTextColor(value: boolean): void {
    //   isChangeTextColor.value = value
    // }
    // // 通过修改画板 颜色 修改 v-model 颜色
    // function changePaletteColor(colorMap: ColorPickerColor): void {
    //   updateUserColor(colorMap)
    // }
    // // 通过用户点击触发修改 交互面板 文本类型
    // function changeTextModeType(type: string): void {
    //   mode.value = type
    //   formItemText.value = type
    // }
    // 监听用户输入
    const currentMode = ref('rgba')
    function updateColor(hsva) {
      // emit('update:modelValue', hsva)
      updateModelValueColor(hsva)
    }
    onMounted(() => {
      // if (!props.modes.includes(mode.value)) mode.value = props.modes[0]
    })
    // watch(
    //   modelValue,
    //   (newValue) => {
    //     console.log(newValue);
    //     updateModelValueColor(parseBaseColor(newValue))
    //   },
    //   { immediate: true }
    // )
    return () => {
      return (
        <>
          <div class={[classes(n()), 'var-elevation--3']}>
            {/* <div ref={pickerRef} class={['var-color-picker-position']}>
              <color-panel
                v-model={initialColor.value}
                ref={containerRef}
                mode={mode.value}
                onChangeTextColor={changeTextColor}
                onChangePaletteColor={changePaletteColor}
                onChangeTextModeType={changeTextModeType}
              ></color-panel>
            </div> */}
            <div></div>
            {JSON.stringify(initialColor.value)}
            {props.canvasLayout && <VarColorPickerCanvas color={initialColor.value} onUpdate:color={updateColor} />}
            {(props.sliderLayout || props.inputLayout) && (
              <div class={classes(n('control'))}>
                {props.sliderLayout && (
                  <div class={classes(n('preview'))}>
                    <div
                      class={classes(n('preview__dots'))}
                      style={{ '--var-color-picker-preview-dots': hex.value }}
                    ></div>
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
                    onUpdate:mode={(m) => (currentMode.value = m)}
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
