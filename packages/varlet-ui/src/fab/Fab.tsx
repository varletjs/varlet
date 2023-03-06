import { computed, defineComponent, Ref, ref, Transition, watch } from 'vue'
import { useClickOutside } from '@varlet/use'
import { call, createNamespace, flatFragment } from '../utils/components'
import { props } from './props'
import Button from '../button'
import Icon from '../icon'

import './fab.less'

const { classes, n } = createNamespace('fab')

export default defineComponent({
  name: 'VarFab',
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
  },
  props,
  setup(props, { slots }) {
    const internal: Ref<boolean> = ref(props.active)
    const host: Ref<null | HTMLElement> = ref(null)

    watch(
      () => props.active,
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
        call(props['onUpdate:active'], newValue)
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

    const handleClick = (e: Event, value: boolean) => {
      e.stopPropagation()
      props.trigger === 'click' && setIsActiveValue(value)
    }

    const handleMouse = (value: boolean) => {
      props.trigger === 'hover' && setIsActiveValue(value)
    }

    const handleClickOutside = () => {
      if (props.trigger !== 'click') {
        return
      }
      setIsActiveValue(false)
    }

    useClickOutside(host, 'click', handleClickOutside)

    return () => {
      const fabChildrens = flatFragment(slots.default?.())

      return (
        <div
          ref={host}
          class={classesContainer.value}
          onClick={(e) => handleClick(e, !isActive.value)}
          onMouseleave={() => handleMouse(false)}
          onMouseenter={() => handleMouse(true)}
        >
          <Transition name={n(`--active-transition`)}>
            {slots.activator ? (
              slots.activator?.()
            ) : (
              <var-button type={props.type} color={props.color} textColor={props.textColor} round>
                <var-icon name={props.icon} size={props.iconSize} />
              </var-button>
            )}
          </Transition>
          <Transition name={n(`--actions-transition`)} appear>
            <div v-show={isActive.value && fabChildrens.length} class={n('list')}>
              {fabChildrens.map((chilren, index) => {
                return <div style={{ transitionDelay: index * 0.05 + 's' }}>{chilren}</div>
              })}
            </div>
          </Transition>
        </div>
      )
    }
  },
})
