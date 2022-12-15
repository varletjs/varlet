import { computed, defineComponent, toRefs } from 'vue'
import { colorPickerEditProps, ColorPickerEditProps } from './color-picker-edit-types'
import { createNamespace } from '../../../utils/components'
import { modes as defaultModes } from '../../utils/color-utils'
import './color-picker-edit.less'

const { n, classes } = createNamespace('color-picker-edit')
export default defineComponent({
  name: 'VarColorPickerEdit',
  props: colorPickerEditProps,
  emit: ['update:color'],
  setup(props: ColorPickerEditProps, { emit }) {
    const { color, mode, alpha, modes } = toRefs(props)
    const enabledModes = computed(() => {
      return modes.value.map((key) => ({ ...defaultModes[key], name: key }))
    })

    const inputs = computed(() => {
      const mode = enabledModes.value.find((m) => m.name === props.mode)
      console.log(mode)
      if (!mode) return []

      const convertColor = color.value ? mode.to(color.value) : {}

      return mode.inputs?.map(({ getValue, getColor, ...inputProps }) => {
        return {
          ...mode.inputProps,
          ...inputProps,
          disabled: props.disabled,
          value: getValue(convertColor),
          onChange: (e: InputEvent) => {
            const target = e.target as HTMLInputElement | null

            if (!target) return

            emit('update:color', mode.from(getColor(convertColor, target.value)))
          },
        }
      })
    })
    console.log(inputs.value)

    return () => {
      return (
        <div class="var-color-picker-edit">
          {inputs.value?.map((props) => (
            <VColorPickerInput {...props} />
          ))}
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
