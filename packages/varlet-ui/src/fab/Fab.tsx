import { computed, defineComponent, Ref, ref, Transition, watch } from 'vue'
import { call, createNamespace, flatFragment } from '../utils/components'
import { props } from './props'
import './fab.less'

const { classes, n } = createNamespace('fab')

export default defineComponent({
  name: 'VarFab',
  props,
  setup(props, { slots }) {
    const internal: Ref<boolean> = ref(props.modelValue)
    const fabChildrens = flatFragment(slots.actions?.())

    watch(
      () => props.modelValue,
      (val) => {
        internal.value = val
      }
    )

    const isActive = computed({
      get(): boolean {
        return internal.value
      },
      set(newValue: boolean) {
        internal.value = newValue
        call(props['onUpdate:modelValue'], newValue)
      },
    })

    const classesContainer: any = computed(() => {
      return classes(n(), n('--fixed'), n(`--${props.position}`), n(`--direction-${props.direction}`), [
        isActive.value,
        n(`--is-active`),
      ])
    })

    const setIsActiveValue = (value: boolean) => {
      isActive.value = value
    }

    const clickHandle = (value: boolean) => {
      props.trigger === 'click' && setIsActiveValue(value)
    }

    const mouseHoverHandle = (value: boolean) => {
      props.trigger === 'hover' && setIsActiveValue(value)
    }

    return () => {
      return (
        <div
          class={classesContainer.value}
          onClick={() => clickHandle(!isActive.value)}
          onMouseleave={() => mouseHoverHandle(false)}
          onMouseenter={() => mouseHoverHandle(true)}
        >
          <Transition name={n(`--active-transition`)}>{slots.default?.()}</Transition>
          {isActive.value && fabChildrens.length ? (
            <Transition name={n(`--actions-transition`)} appear>
              <div class={n('list')}>
                {fabChildrens.map((chilren, index) => {
                  return <div style={{ transitionDelay: index * 0.05 + 's' }}>{chilren}</div>
                })}
              </div>
            </Transition>
          ) : null}
        </div>
      )
    }
  },
})
