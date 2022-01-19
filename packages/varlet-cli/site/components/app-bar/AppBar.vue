<template>
  <div
    class="var-site-app-bar"
    :class="{ 'var-site-elevation--3': elevation }"
    :style="{
      background: color,
      color: textColor,
    }"
  >
    <div class="var-site-app-bar__left">
      <slot name="left" />
      <div
        class="var-site-app-bar__title"
        :style="{ paddingLeft }"
        v-if="titlePosition === 'left'"
      >
        <slot>{{ title }}</slot>
      </div>
    </div>

    <div class="var-site-app-bar__title" v-if="titlePosition === 'center'">
      <slot>{{ title }}</slot>
    </div>

    <div class="var-site-app-bar__right">
      <div
        class="var-site-app-bar__title"
        :style="{ paddingRight }"
        v-if="titlePosition === 'right'"
      >
        <slot>{{ title }}</slot>
      </div>
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUpdated, ref, Ref} from 'vue'
import { props } from './props'

export default defineComponent({
  name: 'VarSiteAppBar',
  props,
  setup(props, { slots }) {
    const paddingLeft: Ref<number | undefined> = ref()
    const paddingRight: Ref<number | undefined> = ref()

    const computePadding = () => {
      paddingLeft.value = slots.left ? 0 : undefined
      paddingRight.value = slots.right ? 0 : undefined
    }

    onMounted(computePadding)
    onUpdated(computePadding)

    return {
      paddingLeft,
      paddingRight
    }
  }
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './appBar';
</style>
