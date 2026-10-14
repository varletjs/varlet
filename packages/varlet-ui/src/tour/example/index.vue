<script setup lang="ts">
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { computed, ref } from 'vue'
import VarTour, { type TourStep } from '..'
import { t, use } from './locale'

const show = ref(false)
const current = ref(0)
const showCustom = ref(false)
const customCurrent = ref(0)
const create = ref<HTMLElement>()
const search = ref<HTMLElement>()
const overview = ref<HTMLElement>()
const tour = ref<InstanceType<typeof VarTour>>()
const steps = computed<TourStep[]>(() => [
  { target: () => create.value, title: t('createTitle'), description: t('createDescription'), placement: 'bottom' },
  { target: () => search.value, title: t('searchTitle'), description: t('searchDescription'), placement: 'bottom' },
  { target: () => overview.value, title: t('overviewTitle'), description: t('overviewDescription'), placement: 'top' },
])
const customSteps = computed<TourStep[]>(() => [
  { title: t('welcomeTitle'), description: t('welcomeDescription') },
  { target: () => overview.value, title: t('overviewTitle'), description: t('overviewDescription') },
])

function start() {
  current.value = 0
  show.value = true
}

function startCustom() {
  customCurrent.value = 0
  showCustom.value = true
}

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUse') }}</app-type>
  <var-button type="primary" block @click="start">{{ t('start') }}</var-button>

  <var-paper class="workspace" :elevation="1">
    <div class="workspace-header">
      <strong>{{ t('workspace') }}</strong>
      <div ref="create">
        <var-button type="primary" size="small">{{ t('create') }}</var-button>
      </div>
    </div>
    <div ref="search" class="workspace-search">
      <var-input :placeholder="t('search')" variant="outlined" />
    </div>
    <div ref="overview">
      <var-cell :title="t('project')" :description="t('projectDescription')">
        <template #extra>
          <var-chip type="success" size="small">{{ t('active') }}</var-chip>
        </template>
      </var-cell>
    </div>
  </var-paper>

  <var-tour ref="tour" v-model:show="show" v-model:current="current" :steps="steps" />

  <app-type>{{ t('customContent') }}</app-type>
  <var-button type="primary" outline block @click="startCustom">{{ t('customStart') }}</var-button>
  <var-tour v-model:show="showCustom" v-model:current="customCurrent" :steps="customSteps" :show-progress="false">
    <template #default="{ step, current: index }">
      <div class="custom-content">
        <var-icon :name="index === 0 ? 'information' : 'check-circle'" :size="32" />
        <p>{{ step.description }}</p>
      </div>
    </template>
    <template #actions="{ next, close, current: index, total }">
      <var-button text size="small" @click="close">{{ t('skip') }}</var-button>
      <var-button type="primary" size="small" :elevation="false" @click="next">
        {{ index === total - 1 ? t('finish') : t('next') }}
      </var-button>
    </template>
  </var-tour>

  <app-type>{{ t('methods') }}</app-type>
  <var-button block @click="tour?.open(1)">{{ t('startFromSearch') }}</var-button>
</template>

<style scoped lang="less">
.workspace {
  padding: 16px;
  margin-top: 16px;
  border-radius: 8px;
}

.workspace-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--color-on-surface);
}

.workspace-search {
  margin: 20px 0 12px;
}

.custom-content {
  .var-icon {
    color: var(--color-primary);
  }

  p {
    margin: 12px 0 0;
  }
}
</style>
