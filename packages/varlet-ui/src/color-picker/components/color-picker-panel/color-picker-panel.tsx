import { defineComponent, ref, watch, nextTick, inject, getCurrentInstance } from 'vue'
import { colorPickerProps, ColorPickerProps } from './color-picker-panel-types'
import { ProvideColorOptions } from '../../utils/color-utils-types'
import colorPalette from '../color-palette/color-palette'
import colorHueSlider from '../color-hue-slider/color-hue-slider'
import colorAlphaSlider from '../color-alpha-slider/color-alpha-slider'
// import colorEdit from '../color-edit/color-edit'
import colorBasic from '../color-basic/color-basic'
import './color-picker-panel.less'
// import colorHistory from '../color-history/color-history'
import { createI18nTranslate } from '../../../../locale/create'
export default defineComponent({
  name: 'ColorPanel',
  components: {
    colorPalette,
    colorHueSlider,
    colorAlphaSlider,
    // colorEdit,
    colorBasic,
    // Tabs,
    // colorHistory,
  },
  props: colorPickerProps,
  emits: ['update:modelValue', 'changeTextColor', 'changeTriggerColor', 'changePaletteColor', 'changeTextModeType'],
  setup(props: ColorPickerProps, { emit }) {
    const app = getCurrentInstance()
    // const t = createI18nTranslate('DColorPicker', app)

    const injectData = inject('provideData') as ProvideColorOptions
    const paletteElement = ref<(HTMLElement & { renderCanvas: () => void }) | null>(null)
    const showAlpha = injectData.showAlpha
    const tab = ref('basic')
    function changeTextColor(isChange: boolean) {
      emit('changeTextColor', isChange)
    }
    function changeTextModeColor(currentType: string) {
      emit('changeTextModeType', currentType)
    }

    // 画板值
    const paletteColorMap = ref(props.modelValue)
    // hue slider 值
    watch(
      () => paletteColorMap.value,
      (newValue) => {
        emit('update:modelValue', newValue)
        emit('changePaletteColor', newValue)
        nextTick(() => {
          paletteElement.value && paletteElement.value.renderCanvas()
        })
      }
    )
    return () => {
      return (
        <div class="var-color-picker-panel">
          {/* <d-tabs type="tabs" v-model={tab.value}> */}
          {/* <d-tab id="basic" title={('foundationPanel')} tabId="basic"> */}
          <color-basic color={paletteColorMap}></color-basic>
          {/* </d-tab> */}
          {/* <d-tab id="palette" title={('advancedPanel')} tabId="palette"> */}
          <color-palette
            ref={paletteElement}
            v-model={paletteColorMap.value}
            onChangeTextColor={changeTextColor}
          ></color-palette>
          {/* </d-tab> */}
          {/* </d-tabs> */}
          <color-hue-slider v-model={paletteColorMap.value}></color-hue-slider>
          {showAlpha ? <color-alpha-slider v-model={paletteColorMap.value}></color-alpha-slider> : null}
          {/* <colorEdit
            show-alpha={props.showAlpha}
            mode={props.mode}
            color={paletteColorMap}
            onChangeTextModeColor={changeTextModeColor}
          ></colorEdit> */}
          {/* {injectData.showHistory ? <colorHistory color={paletteColorMap}></colorHistory> : null} */}
        </div>
      )
    }
  },
})
