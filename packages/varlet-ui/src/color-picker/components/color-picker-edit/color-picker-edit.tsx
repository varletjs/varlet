import { computed, defineComponent, toRefs } from 'vue'
import { colorPickerEditProps, ColorPickerEditProps } from './color-picker-edit-types'
import { call, createNamespace } from '../../../utils/components'
import { modes as defaultModes } from '../../utils/color-utils'
import './color-picker-edit.less'

const { n, classes } = createNamespace('color-picker-edit')
export default defineComponent({
  name: 'VarColorPickerEdit',
  props: colorPickerEditProps,
  setup(props: ColorPickerEditProps) {
    const { color, modes } = toRefs(props)
    const enabledModes = computed(() => {
      return modes.value.map((key) => ({ ...defaultModes[key], name: key }))
    })

    const inputs = computed(() => {
      const mode = enabledModes.value.find((m) => m.name === props.mode)
      if (!mode) return []
      const convertColor = color!.value ? mode.to(color!.value) : {}
      return mode.inputs?.map(({ getValue, getColor, ...inputProps }) => {
        return {
          ...mode.inputProps,
          ...inputProps,
          disabled: props.disabled,
          value: getValue(convertColor),
          onChange: (e: InputEvent) => {
            const target = e.target as HTMLInputElement | null
            if (!target) return
            call(props['onUpdate:color'], mode.from(getColor(convertColor, target.value)))
          },
        }
      })
    })
    return () => {
      return (
        <div class="var-color-picker-edit">
          {inputs.value?.map((props) => (
            <VColorPickerInput {...props} />
          ))}
          {enabledModes.value.length > 1 && (
            <var-button
              round
              text
              onClick={() => {
                const index = enabledModes.value.findIndex((m) => m.name === props.mode)
                call(props['onUpdate:mode'], enabledModes.value[(index + 1) % enabledModes.value.length].name)
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <var-icon size={20} name="unfold-more-horizontal" />
              </div>
            </var-button>
          )}
        </div>
      )
    }
  },
})

const VColorPickerInput = ({ label, ...rest }: any) => {
  return (
    <div class={classes(n('input'))}>
      <input {...rest} />
      <span>{label}</span>
    </div>
  )
}
