<template>
  <Teleport :to="teleport" :disabled="!useTeleport">
    <Transition name="var-floating-actions-button-fade">
      <div v-show="overlay && show" :class="n('overlay')" :style="overlayStyle" @click="handleOverlayClick"></div>
    </Transition>
    <var-menu
      v-model:show="show"
      ref="fabRef"
      :disabled="disabled"
      :class="classes(n(), n(`--${fabLocation}`), [disabled, n('--disabled')])"
      :trigger="trigger"
      :placement="actionsLocation"
      :default-style="false"
      :style="fabStyle"
      @open="open"
      @opened="opened"
      @close="close"
      @closed="closed"
    >
      <var-button :class="n('--fab')" :disabled="disabled" :color="fabColor" var-floating-actions-button-cover round>
        <Transition name="var-floating-actions-button-fade">
          <slot :name="show ? 'active-icon' : 'inactive-icon'">
            <var-icon :color="fabIconColor" :size="fabIconSize" :name="show ? activeIcon : inactiveIcon" />
          </slot>
        </Transition>
      </var-button>

      <template #menu>
        <div :class="n('--actions')" :style="actionsStyle">
          <var-button
            v-for="(item, index) in actions"
            :class="n('--actions--action')"
            :style="[
              actionStyle,
              {
                width: toSizeUnit(item.buttonSize),
                height: toSizeUnit(item.buttonSize),
              },
            ]"
            :color="item.buttonColor"
            :key="index"
            @click="handleActionClick(item)"
            round
          >
            <var-icon
              :class="n('--actions--action--icon')"
              :name="item.icon || 'heart'"
              :color="item.iconColor"
              :size="item.iconSize"
              :namespace="item.iconNamespace"
            />
          </var-button>
        </div>
      </template>
    </var-menu>
  </Teleport>
</template>

<script lang="ts">
import VarButton from '../button'
import VarIcon from '../icon'
import VarMenu from '../menu'
import { Action, props } from './props'
import { call, createNamespace } from '../utils/components'
import { defineComponent, ref, Ref, watch, reactive } from 'vue'
import { toSizeUnit } from '../utils/elements'

const { n, classes } = createNamespace('floating-actions-button')

const actionMargin = toSizeUnit('8px')
const actionsMargin = toSizeUnit('16px')

export default defineComponent({
  name: 'VarFloatingActionsButton',
  components: {
    VarButton,
    VarIcon,
    VarMenu,
  },
  props,
  emits: ['onUpdate:show', 'click', 'open', 'opened', 'close', 'closed', 'onOverlayClick', 'onActionClick'],
  setup(props) {
    const show: Ref<boolean> = ref(false)
    const fabRef: Ref<HTMLElement | null> = ref(null)
    const fabStyle = reactive<{
      transform?: string
    }>({
      transform: `translate(${toSizeUnit(props.offsetX)}, ${toSizeUnit(props.offsetY)})`,
    })
    const actionStyle = reactive<{ margin: string }>({ margin: `${actionMargin} 0` })
    const actionsStyle = reactive<{
      marginTop?: string
      marginRight?: string
      marginBottom?: string
      marginLeft?: string
      flexDirection: string
    }>({ flexDirection: 'column' })

    function open() {
      call(props.onOpen)
    }

    function opened() {
      call(props.onOpened)
    }

    function close() {
      call(props.onClose)
    }

    function closed() {
      call(props.onClosed)
    }

    function handleActionClick(item: Action) {
      call(props.onActionClick, item)
      show.value = false
    }

    function handleOverlayClick() {
      call(props.onOverlayClick)
      show.value = false
    }

    watch(
      () => props.actionsLocation,
      (newValue) => {
        switch (newValue) {
          case 'top':
            actionStyle.margin = `${actionMargin} 0`
            actionsStyle.marginBottom = actionsMargin
            actionsStyle.flexDirection = 'column'
            break
          case 'bottom':
            actionStyle.margin = `${actionMargin} 0`
            actionsStyle.marginTop = actionsMargin
            actionsStyle.flexDirection = 'column'
            break
          case 'left':
            actionStyle.margin = `0 ${actionMargin}`
            actionsStyle.marginRight = actionsMargin
            actionsStyle.flexDirection = 'row'
            break
          case 'right':
            actionStyle.margin = `0 ${actionMargin}`
            actionsStyle.marginLeft = actionsMargin
            actionsStyle.flexDirection = 'row'
            break
        }
      },
      { immediate: true }
    )

    watch(
      () => props.show,
      (newValue) => {
        show.value = newValue ?? false
      },
      { immediate: true }
    )

    watch(
      () => show.value,
      (newValue) => {
        console.log('show.value', newValue)
        call(props['onUpdate:show'], newValue)
      },
      { immediate: true }
    )

    return {
      actionStyle,
      actionsStyle,
      close,
      closed,
      classes,
      fabRef,
      fabStyle,
      handleActionClick,
      handleOverlayClick,
      show,
      n,
      open,
      opened,
      toSizeUnit,
    }
  },
})
</script>

<style lang="less">
@import './floatingActionsButton.less';
</style>
