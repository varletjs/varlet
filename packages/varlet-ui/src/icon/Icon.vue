<template>
  <component
    class="var-icon"
    :is="isURL(name) ? 'img' : 'i'"
    :class="[
      `${namespace}--set`,
      isURL(name) ? 'var-icon__image' : `${namespace}-${nextName}`,
      shrinking ? 'var-icon--shrinking' : null,
    ]"
    :style="{
      color,
      transition: `all ${toNumber(transition)}ms`,
      width: isURL(name) ? toPx(size) : null,
      height: isURL(name) ? toPx(size) : null,
      fontSize: toPx(size),
    }"
    :src="isURL(name) ? nextName : null"
    v-bind="$attrs"
    @click="onClick"
  />
</template>

<script lang="ts">
import { defineComponent, watch, ref, Ref, nextTick } from 'vue'
import { isURL, toNumber } from '../utils/shared'
import { props } from './props'
import { toPx } from '../utils/elements'

export default defineComponent({
  name: 'VarIcon',
  inheritAttrs: false,
  props,
  setup(props) {
    const nextName: Ref<string | undefined> = ref('')
    const shrinking: Ref<boolean> = ref(false)

    const handleNameChange = async (newName: string | undefined, oldName: string | undefined) => {
      const { transition } = props

      if (oldName == null || toNumber(transition) === 0) {
        nextName.value = newName
        return
      }

      shrinking.value = true
      await nextTick()
      setTimeout(() => {
        if (oldName != null) {
          nextName.value = newName
        }

        shrinking.value = false
      }, toNumber(transition))
    }

    watch(() => props.name, handleNameChange, { immediate: true })

    return {
      nextName,
      shrinking,
      isURL,
      toNumber,
      toPx,
    }
  },
})
</script>

<style lang="less">
@import './icon';
</style>
