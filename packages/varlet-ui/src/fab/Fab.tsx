import { computed, defineComponent, Ref, ref, watch } from 'vue'
import { createNamespace, flatten } from '../utils/components'
import { MaybeTransition } from './provide'
import { props } from './props'
import '../styles/transitions.less'
import './fab.less'

const { classes, n } = createNamespace('fab')

export default defineComponent({
  name: 'VarFab',
  props,
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    const { default: defaultSlot, activator } = slots
    const internal: Ref<boolean> = ref(props.modelValue)

    const fabChildren = defaultSlot
      ? flatten(defaultSlot()).filter((v) => {
          return (v.type as any).name === 'VarButton' || (v.type as any).name === 'VarTooltip'
        })
      : []

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
      return classes(n(), n('--fixed'), n(`--${props.position}`), n(`--direction-${props.direction}`), [
        isActive.value,
        n(`--is-active`),
      ])
    })

    return () => {
      return (
        <div
          class={classesContainer.value}
          onClick={() => {
            props.trigger === 'click' && setIsActive(!isActive.value)
          }}
          onMouseleave={() => {
            props.trigger === 'hover' && setIsActive(false)
          }}
          onMouseenter={() => {
            props.trigger === 'hover' && setIsActive(true)
          }}
        >
          {activator && activator()}
          {isActive.value && fabChildren.length ? (
            <MaybeTransition transition={props.transition} appear>
              <div class={n('list')}>
                {fabChildren.map((chilren, index) => {
                  return <div style={{ transitionDelay: index * 0.05 + 's' }}>{chilren}</div>
                })}
              </div>
            </MaybeTransition>
          ) : null}
        </div>
      )
    }
  },
})
