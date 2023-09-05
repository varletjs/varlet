import { computed, defineComponent, toRefs } from 'vue'
import VarButton from '../../../button'
import VarIcon from '../../../icon'
import { call, createNamespace } from '../../../utils/components'
import { modes as defaultModes } from '../../utils/color-utils'
import { colorPickerEditProps, ColorPickerEditProps } from './color-picker-edit-types'
import './color-picker-edit.less'

const { n, classes } = createNamespace('color-picker-edit')
export default defineComponent({
  name: 'VarColorPickerEdit',
  props: colorPickerEditProps,
  setup(props: ColorPickerEditProps) {
    const { color, modes } = toRefs(props)

    const enabledModes = computed(() => modes.value.map((key) => ({ ...defaultModes[key], name: key })))

    const inputs = computed(() => {
      const mode = enabledModes.value.find((m) => m.name === props.mode)
      if (!mode) return []
      const convertColor = color!.value ? mode.to(color!.value) : {}
      return mode.inputs?.map(({ getValue, getColor, ...inputProps }) => ({
          ...mode.inputProps,
          ...inputProps,
          disabled: props.disabled,
          value: getValue(convertColor),
          onChange: (e: InputEvent) => {
            const target = e.target as HTMLInputElement | null
            if (!target) return
            call(props['onUpdate:color'], mode.from(getColor(convertColor, target.value)))
          },
        }))
    })

    return () => (
        <div class={n()}>
          {inputs.value?.map((props) => (
            <VarColorPickerInput {...props} />
          ))}
          {enabledModes.value.length > 1 && (
            <VarButton
              round
              text
              onClick={() => {
                const index = enabledModes.value.findIndex((m) => m.name === props.mode)
                call(props['onUpdate:mode'], enabledModes.value[(index + 1) % enabledModes.value.length].name)
              }}
            >
              <div class={n('icon')}>
                <VarIcon size={20} name="unfold-more-horizontal" />
              </div>
            </VarButton>
          )}
        </div>
      )
  },
})

const VarColorPickerInput = ({ label, ...rest }: any) => (
    <div class={classes(n('input'))}>
      <input {...rest} />
      <span>{label}</span>
    </div>
  )
