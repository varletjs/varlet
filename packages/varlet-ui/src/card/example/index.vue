<script setup>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarButton from '../../button'
import VarDivider from '../../divider'
import VarCard from '..'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { ref } from 'vue'
const floating = ref(false)
watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-card :title="pack.title" :description="pack.description" />
  <app-type>{{ pack.showSubtitle }}</app-type>
  <var-card :title="pack.title" :subtitle="pack.subtitle" :description="pack.description" />
  <app-type>{{ pack.showImage }}</app-type>
  <var-card
    :title="pack.title"
    :subtitle="pack.subtitle"
    :description="pack.description"
    src="https://varlet-varletjs.vercel.app/cat.jpg"
  />

  <app-type>{{ pack.useSlot }}</app-type>
  <var-card
    :title="pack.title"
    :subtitle="pack.subtitle"
    :description="pack.description"
    src="https://varlet-varletjs.vercel.app/cat.jpg"
  >
    <template #extra>
      <var-button text text-color="#ff9800">{{ pack.share }}</var-button>
      <var-button text text-color="#ff9800">{{ pack.explore }}</var-button>
    </template>
  </var-card>

  <app-type>{{ pack.horizontal }}</app-type>
  <var-card
    :title="pack.title"
    :subtitle="pack.description"
    layout="row"
    src="https://varlet-varletjs.vercel.app/cat.jpg"
  >
    <template #extra>
      <var-button text text-color="#ff9800" size="small">
        {{ pack.learnMore }}
      </var-button>
    </template>
  </var-card>

  <app-type>{{ pack.showRipple }}</app-type>
  <var-card :title="pack.title" :subtitle="pack.subtitle" :description="pack.description" ripple />

  <app-type>{{ pack.fullScreen }}</app-type>
  <var-card
    v-model:floating="floating"
    @click="floating = true"
    :title="pack.title"
    :subtitle="pack.subtitle"
    ripple
    src="https://varlet-varletjs.vercel.app/cat.jpg"
  >
    <template #extra>
      <var-button text text-color="#ff9800">{{ pack.share }}</var-button>
      <var-button text text-color="#ff9800">{{ pack.explore }}</var-button>
    </template>

    <template #content>
      <var-divider dashed></var-divider>
      <div class="card-example-text">
        {{ pack.description }}
        {{ pack.description }}
        {{ pack.description }}
        {{ pack.description }}
        {{ pack.description }}
        {{ pack.description }}
      </div>
    </template>
  </var-card>
</template>

<style scoped lang="less">
.card-example-text {
  padding: 14px;
  font-size: 14px;
  line-height: 28px;
}
</style>
