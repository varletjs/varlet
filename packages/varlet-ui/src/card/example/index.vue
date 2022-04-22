<script setup>
import vRipple from '../../ripple'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarButton from '../../button'
import VarSpace from '../../space'
import VarIcon from '../../icon'
import VarCard from '..'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { ref } from 'vue'

const floating = ref(false)
const floating1 = ref(false)

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <var-card
    style="margin-top: 20px"
    v-model:floating="floating"
    @click="floating = true"
    :title="pack.title"
    :subtitle="pack.subtitle"
    ripple
    src="https://varlet-varletjs.vercel.app/cat.jpg"
  >
    <template #extra>
      <var-button text type="info" style="margin-right: 10px">{{ pack.button }}</var-button>
      <var-button text type="info">{{ pack.button }}</var-button>
    </template>

    <template #content>
      <p style="padding: 0 14px">
        {{ pack.description }}
      </p>
    </template>

    <template #toolbar-extra>
      <var-space align="center">
        <var-icon name="heart" v-ripple />
        <var-icon name="dots-vertical" v-ripple />
      </var-space>
    </template>
  </var-card>

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

  <app-type>{{ pack.horizontal }}</app-type>
  <var-card
    :title="pack.title"
    :subtitle="pack.subtitle"
    :floating="floating1"
    @click="floating1 = !floating1"
    src="https://varlet-varletjs.vercel.app/cat.jpg"
    ripple
    layout="row"
  >
    <template #content>
      <p style="padding: 0 14px">
        {{ pack.description }}
      </p>
    </template>
  </var-card>

  <app-type>{{ pack.useSlot }}</app-type>
  <var-card
    :title="pack.title"
    :subtitle="pack.subtitle"
    :description="pack.description"
    src="https://varlet-varletjs.vercel.app/cat.jpg"
  >
    <template #extra>
      <var-button type="primary" style="margin-right: 10px">{{ pack.button }}</var-button>
      <var-button type="warning">{{ pack.button }}</var-button>
    </template>
  </var-card>
  <app-type>{{ pack.showRipple }}</app-type>
  <var-card :title="pack.title" :subtitle="pack.subtitle" :description="pack.description" ripple />
</template>
