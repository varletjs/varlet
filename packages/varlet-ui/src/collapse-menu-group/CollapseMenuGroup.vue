<template>
  <div
    :class="{
      'var-collapse-menu-group': true,
      'var-collapse-menu-group__disable': disabled,
    }"
  >
    <div v-ripple="{ disabled }" class="var-collapse-menu-group-header" @click="handleClick()">
      <div class="var-collapse-menu-group-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="var-collapse-item-header__icon">
        <slot name="icon">
          <var-icon
            name="chevron-down"
            :transition="250"
            :class="{
              'var-collapse-menu-group-header__icon': true,
              'var-collapse-menu-group-header__open': expanded,
              'var-collapse-menu-group-header__disable': disabled,
            }"
          />
        </slot>
      </div>
    </div>
    <div ref="contentEl" v-show="show" class="var-collapse-menu-group-content" @transitionend="transitionend">
      <div class="var-collapse-menu-group__wrap">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VarIcon from '../icon'
import { props } from './props'
import { defineComponent, ref, watch, nextTick } from 'vue'
import type { Ref } from 'vue'

export default defineComponent({
  name: 'VarCollapseMenuGroup',
  components: {
    VarIcon,
  },
  props,
  setup(props) {
    // TODO var-collapse-menu-item disabled 状态传递
    const contentEl: Ref<HTMLDivElement | null> = ref(null)
    const expanded: Ref<boolean> = ref(props.status === 'open')
    // TODO 默认展开点击收起没有动画
    const show: Ref<boolean> = ref(props.status === 'open')

    // 点击 header
    const handleClick = () => {
      if (props.disabled) return
      expanded.value = !expanded.value

      // TODO 完成其他逻辑
    }

    const openPanel = () => {
      if (!contentEl.value) return
      ;(contentEl.value as HTMLDivElement).style.height = ''
      show.value = true

      nextTick(() => {
        const { offsetHeight } = contentEl.value as HTMLDivElement
        ;(contentEl.value as HTMLDivElement).style.height = 0 + 'px'

        requestAnimationFrame(() => {
          ;(contentEl.value as HTMLDivElement).style.height = offsetHeight + 'px'
        })
      })
    }

    const closePanel = () => {
      if (!contentEl.value) return
      ;(contentEl.value as HTMLDivElement).style.height = 0 + 'px'
    }

    const transitionend = () => {
      if (!expanded.value) {
        show.value = false
        ;(contentEl.value as HTMLDivElement).style.height = ''
      }
    }

    watch(expanded, (value) => {
      if (value) openPanel()
      else closePanel()
    })

    return {
      show,
      expanded,
      contentEl,
      handleClick,
      transitionend,
    }
  },
})
</script>

<style lang="less">
@import './collapseMenuGroup';
</style>
