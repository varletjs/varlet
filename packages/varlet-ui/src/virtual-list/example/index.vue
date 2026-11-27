<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { onBeforeUnmount, ref } from 'vue'
import { t, use } from './locale'

watchLang(use)
onThemeChange()

const items = Array.from({ length: 10000 }, (_, id) => ({ id }))
const pageItems = items.slice(0, 100)
const virtualList = ref()
const scroller = ref()
const loadingScroller = ref()
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)
const loadedItems = ref([])
const messages = ref(items.slice(0, 100).map(({ id }) => ({ id })))
let earlierId = 0
let timer

function prepend() {
  const start = earlierId - 10
  messages.value.unshift(...Array.from({ length: 10 }, (_, index) => ({ id: start + index })))
  earlierId = start
}

function load() {
  clearTimeout(timer)
  timer = setTimeout(() => {
    loadedItems.value = items.slice(0, Math.min(loadedItems.value.length + 50, 500))
    finished.value = loadedItems.value.length === 500
    loading.value = false
    refreshing.value = false
  }, 500)
}

function refresh() {
  finished.value = false
  loadedItems.value = []
  loading.value = true
  loadingScroller.value.scrollTop = 0
  load()
}

onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-space style="margin-bottom: 12px">
    <var-button type="primary" size="small" @click="virtualList.scrollToIndex(4999)">{{ t('jump') }}</var-button>
    <var-button size="small" @click="virtualList.scrollToIndex(0)">{{ t('back') }}</var-button>
  </var-space>
  <var-virtual-list ref="virtualList" :items="items" :item-size="50" item-key="id" :height="300">
    <template #default="{ item }">
      <var-cell border class="virtual-list-example-row">{{ t('listItem') }} {{ item.id + 1 }}</var-cell>
    </template>
  </var-virtual-list>

  <app-type>{{ t('dynamicHeight') }}</app-type>
  <div style="margin-bottom: 12px">
    <var-button size="small" @click="prepend">{{ t('loadEarlier') }}</var-button>
  </div>
  <var-virtual-list :items="messages" :item-size="80" item-key="id" dynamic preserve-scroll-position>
    <template #default="{ item }">
      <div class="virtual-list-example-message" :data-message-id="item.id">
        <strong>{{ t('listItem') }} {{ item.id }}</strong>
        <div>{{ t('message').repeat((Math.abs(item.id) % 5) + 1) }}</div>
      </div>
    </template>
  </var-virtual-list>

  <app-type>{{ t('externalScroller') }}</app-type>
  <div ref="scroller" class="virtual-list-example-scroller">
    <var-cell>{{ t('header') }}</var-cell>
    <var-virtual-list :items="items" :item-size="50" item-key="id" :scroll-target="() => scroller">
      <template #default="{ item }">
        <var-cell border class="virtual-list-example-row">{{ t('listItem') }} {{ item.id + 1 }}</var-cell>
      </template>
    </var-virtual-list>
  </div>

  <app-type>{{ t('infiniteLoading') }}</app-type>
  <var-button size="small" style="margin-bottom: 12px" @click="refresh">{{ t('refresh') }}</var-button>
  <div ref="loadingScroller" class="virtual-list-example-scroller">
    <var-pull-refresh v-model="refreshing" :target="loadingScroller" @refresh="refresh">
      <var-list v-model:loading="loading" :finished="finished" @load="load">
        <var-virtual-list :items="loadedItems" :item-size="50" item-key="id" :scroll-target="() => loadingScroller">
          <template #default="{ item }">
            <var-cell border class="virtual-list-example-row">{{ t('listItem') }} {{ item.id + 1 }}</var-cell>
          </template>
        </var-virtual-list>
      </var-list>
    </var-pull-refresh>
  </div>

  <app-type>{{ t('pageScrolling') }}</app-type>
  <var-cell>{{ t('pageHint') }}</var-cell>
  <var-virtual-list :items="pageItems" :item-size="50" item-key="id" scroll-target="window">
    <template #default="{ item }">
      <var-cell border class="virtual-list-example-row">{{ t('listItem') }} {{ item.id + 1 }}</var-cell>
    </template>
  </var-virtual-list>
</template>

<style lang="less">
.virtual-list-example-scroller {
  height: 300px;
  overflow-y: auto;
  border: 1px solid var(--color-outline);
  border-radius: 4px;
}

.virtual-list-example-row {
  height: 50px;
}

.virtual-list-example-message {
  padding: 12px 16px;
  line-height: 24px;
  overflow-wrap: anywhere;
  border-bottom: 1px solid var(--color-outline);
}
</style>
