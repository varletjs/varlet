<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { Snackbar } from '@varlet/ui'
import { computed, nextTick, ref } from 'vue'
import VarSwipeAction from '..'
import { t, use } from './locale'

const swipeAction = ref(null)
const leftActions = computed(() => [{ key: 'read', text: t('read'), type: 'primary' }])
const rightActions = computed(() => [
  { key: 'edit', text: t('edit'), type: 'info' },
  { key: 'delete', text: t('delete'), type: 'danger' },
])

function handleAction(action) {
  Snackbar(action.text)
}

watchLang((lang) => {
  use(lang)
  nextTick(() => swipeAction.value.resize())
})
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUse') }}</app-type>
  <var-swipe-action :right-actions="rightActions.slice(1)" @action="handleAction">
    <var-cell :title="t('swipeLeft')" />
  </var-swipe-action>

  <app-type>{{ t('bothSides') }}</app-type>
  <var-swipe-action :left-actions="leftActions" :right-actions="rightActions" @action="handleAction">
    <var-cell :title="t('swipeBothSides')" />
  </var-swipe-action>

  <app-type>{{ t('disabled') }}</app-type>
  <var-swipe-action disabled :right-actions="rightActions">
    <var-cell :title="t('disabledDescription')" />
  </var-swipe-action>

  <app-type>{{ t('keepOpen') }}</app-type>
  <var-swipe-action :right-actions="rightActions" :close-on-click-action="false" @action="handleAction">
    <var-cell :title="t('keepOpenDescription')" />
  </var-swipe-action>

  <app-type>{{ t('customActions') }}</app-type>
  <var-swipe-action>
    <var-cell :title="t('customDescription')" />
    <template #right="{ close }">
      <var-button class="custom-action" type="danger" :elevation="false" @click="close">
        <var-icon name="delete" />
      </var-button>
    </template>
  </var-swipe-action>

  <app-type>{{ t('methods') }}</app-type>
  <var-swipe-action ref="swipeAction" :left-actions="leftActions" :right-actions="rightActions" @action="handleAction">
    <var-cell :title="t('methodsDescription')" />
  </var-swipe-action>
  <div class="method-buttons">
    <var-space>
      <var-button type="primary" @click="swipeAction.open('left')">{{ t('openLeft') }}</var-button>
      <var-button type="primary" @click="swipeAction.open()">{{ t('openRight') }}</var-button>
      <var-button @click="swipeAction.close()">{{ t('close') }}</var-button>
    </var-space>
  </div>
</template>

<style scoped lang="less">
.custom-action {
  height: 100%;
  border-radius: 0;
}

.method-buttons {
  margin-top: 16px;
}
</style>
