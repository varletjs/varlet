import { computed, defineComponent, ref, watch } from 'vue'
import { createNamespace, flatten } from '../utils/components'
import { MaybeTransition } from './provide'
import { props } from './props'
import '../styles/transitions.less'
import './speedDial.less'

const { classes, n } = createNamespace('speed-dial')

export default defineComponent({
  name: 'VarSpeedDial',
  props,
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const internal = ref(props.modelValue)

    watch(
      () => props.modelValue,
      (val) => {
        internal.value = val
      }
    )

    const isActive = computed({
      get(): any {
        return internal.value
      },
      set(newValue: boolean) {
        internal.value = newValue
        emit(`update:modelValue`, newValue)
      },
    })

    const setIsActive = (value: boolean) => {
      isActive.value = value
    }

    const classesContainer: any = computed(() => {
      return classes(
        n(),
        [props.fixed, n(`--fixed`)],
        [props.absolute, n(`--absolute`)],
        [props.left, n(`--left`)],
        [props.right, n(`--right`)],
        [props.top, n(`--top`)],
        [props.bottom, n(`--bottom`)],
        n(`--direction-${props.direction}`),
        [isActive.value, n(`--is-active`)]
      )
    })

    return {
      n,
      classes,
      classesContainer,
      isActive,
      setIsActive,
      transition: computed(() => props.transition),
      trigger: computed(() => props.trigger),
    }
  },
  render() {
    const {
      transition,
      classesContainer,
      isActive,
      setIsActive,
      trigger,
      n,
      $slots: { default: defaultSlot, activator },
    } = this

    const speedDialChildren = defaultSlot
      ? flatten(defaultSlot()).filter((v) => {
          return (v.type as any).name === 'VarButton' || (v.type as any).name === 'VarTooltip'
        })
      : []

    return (
      <div
        class={classesContainer}
        onClick={() => {
          trigger === 'click' && setIsActive(!isActive)
        }}
        onMouseleave={() => {
          trigger === 'hover' && setIsActive(false)
        }}
        onMouseenter={() => {
          trigger === 'hover' && setIsActive(true)
        }}
      >
        {activator && activator()}
        {isActive && speedDialChildren.length ? (
          <MaybeTransition transition={transition} appear>
            <div class={n('list')}>
              {speedDialChildren.map((chilren, index) => {
                return <div style={{ transitionDelay: index * 0.05 + 's' }}>{chilren}</div>
              })}
            </div>
          </MaybeTransition>
        ) : null}
      </div>
    )
  },
})
