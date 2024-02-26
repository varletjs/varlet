<template>
  <component
    :is="isURL(name) ? 'img' : 'i'"
    :class="
      classes(
        n(),
        [namespace !== n(), namespace],
        `${namespace}--set`,
        [isURL(name), n('image'), `${namespace}-${nextName}`],
        [animateInProgress, animationClass == null ? n('--shrinking') : animationClass]
      )
    "
    :style="{
      color,
      'transition-duration': `${toNumber(transition)}ms`,
      width: isURL(name) ? toSizeUnit(size) : null,
      height: isURL(name) ? toSizeUnit(size) : null,
      fontSize: toSizeUnit(size),
    }"
    :src="isURL(name) ? nextName : null"
    @click="onClick"
  />
</template>

<script lang="ts">
import { defineComponent, watch, ref, nextTick } from 'vue'
import { isURL, toNumber } from '@varlet/shared'
import { props } from './props'
import { toSizeUnit } from '../utils/elements'
import { createNamespace } from '../utils/components'

const { name, n, classes } = createNamespace('icon')

export default defineComponent({
  name,
  props,
  setup(props) {
    const nextName = ref<string | undefined>('')
    const animateInProgress = ref(false)

    watch(() => props.name, handleNameChange, { immediate: true })

    async function handleNameChange(newName?: string, oldName?: string) {
      const { transition } = props

      if (oldName == null || toNumber(transition) === 0) {
        nextName.value = newName
        return
      }

      animateInProgress.value = true

      await nextTick()

      setTimeout(() => {
        if (oldName != null) {
          nextName.value = newName
        }

        animateInProgress.value = false
      }, toNumber(transition))
    }

    return {
      nextName,
      animateInProgress,
      n,
      classes,
      isURL,
      toNumber,
      toSizeUnit,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './icon';
</style>
