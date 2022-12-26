<template>
  <component
    :is="isURL(name) ? 'img' : 'i'"
    :class="
      classes(
        n(),
        `${namespace}--set`,
        [isURL(name), n('image'), `${namespace}-${nextName}`],
        [shrinking, n('--shrinking')]
      )
    "
    :style="{
      color,
      transition: `transform ${toNumber(transition)}ms`,
      width: isURL(name) ? toSizeUnit(size) : null,
      height: isURL(name) ? toSizeUnit(size) : null,
      fontSize: toSizeUnit(size),
    }"
    :src="isURL(name) ? nextName : null"
    @click="onClick"
  />
</template>

<script lang="ts">
import { defineComponent, watch, ref, nextTick, type Ref } from 'vue'
import { isURL, toNumber } from '@varlet/shared'
import { props } from './props'
import { toSizeUnit } from '../utils/elements'
import { createNamespace } from '../utils/components'

const { n, classes } = createNamespace('icon')

export default defineComponent({
  name: 'VarIcon',
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
        oldName != null && (nextName.value = newName)
        shrinking.value = false
      }, toNumber(transition))
    }

    watch(() => props.name, handleNameChange, { immediate: true })

    return {
      n,
      classes,
      nextName,
      shrinking,
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
