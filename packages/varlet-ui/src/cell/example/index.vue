<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { t, use } from './locale'
import { ref } from 'vue'

const items = ref([
  {
    name: 'Vue2',
    icon: 'star',
    enabled: false,
  },
  {
    name: 'Vue3',
    icon: 'heart',
    enabled: false,
  },
  {
    name: 'React',
    icon: 'close-circle',
    enabled: false,
  },
])

const handleClick = (item) => {
  item.enabled = !item.enabled
}

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-cell> {{ t('content') }} </var-cell>
  <var-cell> {{ t('content') }} </var-cell>

  <app-type>{{ t('showIcon') }}</app-type>
  <var-cell icon="fire" :title="t('content')">
    <template #extra>
      <var-icon name="information" />
    </template>
  </var-cell>
  <var-cell icon="fire" :title="t('content')">
    <template #extra>
      <var-icon name="information" />
    </template>
  </var-cell>

  <app-type>{{ t('showDesc') }}</app-type>
  <var-cell icon="fire" :title="t('content')" :description="t('description')">
    <template #extra>
      <var-icon name="information" />
    </template>
  </var-cell>
  <var-cell :title="t('content')" :description="t('description')" />

  <app-type>{{ t('showBorder') }}</app-type>
  <var-cell border> {{ t('content') }} </var-cell>
  <var-cell border> {{ t('content') }} </var-cell>

  <app-type>{{ t('list') }}</app-type>
  <var-paper :elevation="2">
    <var-cell
      v-for="(item, index) in items"
      :key="item.name"
      ripple
      :icon="item.icon"
      :border="index !== items.length - 1"
      :border-offset="0"
      @click="handleClick(item)"
    >
      {{ item.name }}

      <template #extra>
        <var-switch v-model="item.enabled" @click.stop />
      </template>
    </var-cell>
  </var-paper>
</template>
