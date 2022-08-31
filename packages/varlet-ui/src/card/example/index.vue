<script setup>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarButton from '../../button'
import VarDivider from '../../divider'
import VarIcon from '../../icon'
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
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
  />

  <app-type>{{ pack.useSlot }}</app-type>
  <var-card
    :title="pack.title"
    :subtitle="pack.subtitle"
    :description="pack.description"
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
  >
    <template #extra>
      <var-button text type="warning">{{ pack.action1 }}</var-button>
      <var-button text type="warning">{{ pack.action2 }}</var-button>
    </template>
  </var-card>

  <app-type>{{ pack.horizontal }}</app-type>
  <var-card
    :title="pack.title"
    :subtitle="pack.description"
    layout="row"
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
  >
    <template #extra>
      <var-button text round>
        <var-icon name="star" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" />
      </var-button>
    </template>
  </var-card>

  <app-type>{{ pack.showRipple }}</app-type>
  <var-card :title="pack.title" :subtitle="pack.subtitle" :description="pack.description" ripple />

  <app-type>{{ pack.floating }}</app-type>
  <var-card
    v-model:floating="floating"
    @click="floating = true"
    :title="pack.title"
    :subtitle="pack.subtitle"
    ripple
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
  >
    <template #extra>
      <var-button text type="warning">{{ pack.action1 }}</var-button>
      <var-button text type="warning">{{ pack.action2 }}</var-button>
    </template>

    <template #content>
      <var-divider dashed></var-divider>
      <div class="card-example-text">
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
