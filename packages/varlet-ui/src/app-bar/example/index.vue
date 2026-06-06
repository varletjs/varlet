<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { ref } from 'vue'
import { t, use } from './locale'

const active = ref(0)

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-app-bar>
    <template #left>
      <var-button round text>
        <var-icon name="arrow-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text>
        <var-icon name="magnify" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="dots-vertical" :size="24" />
      </var-button>
    </template>
  </var-app-bar>

  <app-type>{{ t('round') }}</app-type>
  <var-app-bar round>
    <template #left>
      <var-button round text>
        <var-icon name="arrow-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text>
        <var-icon name="magnify" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="dots-vertical" :size="24" />
      </var-button>
    </template>
  </var-app-bar>

  <app-type>{{ t('largeSize') }}</app-type>
  <var-app-bar size="large">
    <template #left>
      <var-button round text>
        <var-icon name="arrow-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text>
        <var-icon name="magnify" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="dots-vertical" :size="24" />
      </var-button>
    </template>
  </var-app-bar>

  <app-type>{{ t('addLeftAndRightSlot') }}</app-type>
  <var-app-bar>
    <template #left>
      <var-button round text>
        <var-icon name="arrow-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text>
        <var-icon name="magnify" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="dots-vertical" :size="24" />
      </var-button>
    </template>
  </var-app-bar>

  <app-type>{{ t('surface') }}</app-type>
  <var-app-bar type="surface" :elevation="false">
    <template #left>
      <var-button round text>
        <var-icon name="arrow-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text>
        <var-icon name="magnify" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="dots-vertical" :size="24" />
      </var-button>
    </template>
  </var-app-bar>

  <app-type>{{ t('custom') }}</app-type>
  <var-app-bar
    round
    image="tree.jpeg"
    image-linear-gradient="to right top, rgba(29, 68, 147, 0.5) 0%, rgba(74, 198, 170, 0.9) 100%"
  >
    <template #left>
      <var-button round text>
        <var-icon name="arrow-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text>
        <var-icon name="magnify" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="heart" :size="24" />
      </var-button>
      <var-button round text>
        <var-icon name="dots-vertical" :size="24" />
      </var-button>
    </template>

    <template #content>
      <var-tabs
        v-model:active="active"
        style="margin-top: 20vmin"
        color="transparent"
        active-color="#fff"
        inactive-color="#ddd"
      >
        <var-tab>{{ t('option') }}</var-tab>
        <var-tab>{{ t('option') }}</var-tab>
        <var-tab>{{ t('option') }}</var-tab>
      </var-tabs>
    </template>
  </var-app-bar>
</template>
