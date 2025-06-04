<script setup>
import { ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import VarVirtualList from '..'
import VarTab from '../../tab'
import VarTabItem from '../../tab-item'
import VarTabs from '../../tabs'
import VarTabsItems from '../../tabs-items'
import { t, use } from './locale'

// 创建1000个列表项
const fixedHeightList = ref(Array.from({ length: 1000 }, (_, i) => i + 1))

// 创建不定高列表项
const variableHeightList = ref(
  Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    height: Math.floor(Math.random() * 50) + 50, // 50-100px随机高度
    desc: t('variableDesc'),
  })),
)

const active = ref(0)

watchLang(use)
onThemeChange()
</script>

<template>
  <var-tabs v-model:active="active" sticky offset-top="14.4vmin" style="margin-bottom: 10px">
    <var-tab>{{ t('basicUsage') }}</var-tab>
    <var-tab>{{ t('variableHeight') }}</var-tab>
  </var-tabs>

  <var-tabs-items v-model:active="active">
    <var-tab-item>
      <app-type>{{ t('basicUsage') }}</app-type>
      <var-virtual-list
        :data="fixedHeightList"
        :item-height="56"
        style="height: 448px; background: var(--color-surface-container-low)"
      >
        <template #default="{ item }">
          <div class="list-item">{{ t('listItem') }} {{ item }}</div>
        </template>
      </var-virtual-list>
    </var-tab-item>

    <var-tab-item>
      <app-type>{{ t('variableHeight') }}</app-type>
      <var-virtual-list
        :data="variableHeightList"
        :item-height="80"
        style="height: 448px; background: var(--color-surface-container-low)"
      >
        <template #default="{ item }">
          <div class="variable-height-item" :style="{ height: item.height + 'px' }">
            <div class="item-content">{{ t('listItem') }} {{ item.id }}</div>
            <div class="item-desc">{{ item.desc }}</div>
          </div>
        </template>
      </var-virtual-list>
    </var-tab-item>
  </var-tabs-items>
</template>

<style>
.list-item {
  display: flex;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  color: #333;
  font-size: 16px;
}

.variable-height-item {
  padding: 12px 16px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.item-content {
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
}

.item-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}
</style>
