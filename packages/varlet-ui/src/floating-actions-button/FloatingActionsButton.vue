<template>
  <var-menu
    v-model:show="show"
    :class="classes(n(), [true, `${n()}--${fabLocation}`], [disabled, `${n()}--disabled`])"
    :trigger="trigger"
    :placement="actionsLocation"
    :default-style="false"
  >
    <var-button :class="`${n()}--fab`" :color="fabColor" var-floating-actions-button-cover round>
      <var-icon :color="fabIconColor" :size="fabIconSize" :name="inactiveIcon" />
    </var-button>

    <template #menu>
      <div :class="`${n()}--actions`" :style="actionsStyle">
        <var-button
          :class="`${n()}--actions--action`"
          :style="[
            actionStyle,
            {
              width: toSizeUnit(item.buttonSize ?? actionDefaultStyle.buttonSize),
              height: toSizeUnit(item.buttonSize ?? actionDefaultStyle.buttonSize),
            },
          ]"
          :color="item.buttonColor ?? actionDefaultStyle.buttonColor"
          v-for="(item, index) in actions"
          :key="index"
          round
        >
          <var-icon
            :color="item.iconColor ?? actionDefaultStyle.iconColor"
            :size="item.iconSize ?? actionDefaultStyle.iconSize"
            :name="item.icon ?? actionDefaultStyle.icon"
            :namespace="item.iconNamespace ?? actionDefaultStyle.iconNamespace"
          />
        </var-button>
      </div>
    </template>
  </var-menu>
</template>

<script lang="ts">
import VarButton from '../button'
import VarIcon from '../icon'
import VarMenu from '../menu'
import { props } from './props'
import { call, createNamespace } from '../utils/components'
import { defineComponent, ref, Ref, watch, reactive } from 'vue'
import { toSizeUnit } from '../utils/elements'

const { n, classes } = createNamespace('floating-actions-button')

const actionMargin = toSizeUnit('8px')
const actionsMargin = toSizeUnit('16px')
const actionDefaultStyle = {
  icon: 'heart',
  iconColor: 'rgb(255, 255, 255)',
  iconSize: 24,
  iconNamespace: 'var-icon',
  buttonColor: 'var(--color-primary)',
  buttonSize: 40,
}

export default defineComponent({
  name: 'VarFloatingActionsButton',
  components: {
    VarButton,
    VarIcon,
    VarMenu,
  },
  props,
  setup(props) {
    const show: Ref<boolean> = ref(false)
    const actionStyle = reactive<{ margin: string }>({ margin: `${actionMargin} 0` })
    const actionsStyle = reactive<{
      marginTop?: string
      marginBottom?: string
      marginLeft?: string
      marginRight?: string
      flexDirection: string
    }>({ flexDirection: 'column' })

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
      n,
      classes,
      show,
      actionDefaultStyle,
      actionsStyle,
      actionStyle,
      toSizeUnit,
    }
  },
})
</script>

<style lang="less">
@import './floatingActionsButton.less';
</style>
