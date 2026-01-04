<script setup lang="ts">
import { ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { t, use } from './locale'

const basicUsageShow = ref(false)
const basicUsageCurrent = ref(0)
const basicUsageRef1 = ref()
const basicUsageRef2 = ref()
const BasicUsageRef3 = ref()

const nonModalShow = ref(false)
const nonModalCurrent = ref(0)
const nonModalRef1 = ref()
const nonModalRef2 = ref()
const nonModalRef3 = ref()

const placementShow = ref(false)
const placementCurrent = ref(0)
const placementRef1 = ref()
const placementRef2 = ref()
const placementRef3 = ref()

const indicatorShow = ref(false)
const indicatorCurrent = ref(0)
const indicatorRef1 = ref()
const indicatorRef2 = ref()
const indicatorRef3 = ref()

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-button type="primary" @click="basicUsageShow = true">{{ t('beginTour') }}</var-button>
  <var-divider />
  <var-space>
    <var-button ref="basicUsageRef1">{{ t('upload') }}</var-button>
    <var-button ref="basicUsageRef2" type="primary">{{ t('save') }}</var-button>
    <var-button ref="BasicUsageRef3"><var-icon name="dots-vertical" /></var-button>
  </var-space>
  <var-tour v-model:show="basicUsageShow" v-model:current="basicUsageCurrent" closeable>
    <var-tour-step :target="basicUsageRef1?.$el" :title="t('firstTitle')" :message="t('firstMessage')" />
    <var-tour-step :target="basicUsageRef2?.$el" :title="t('secondTitle')" :message="t('secondMessage')" />
    <var-tour-step :target="BasicUsageRef3?.$el" :title="t('thirdTitle')" :message="t('thirdMessage')" />
  </var-tour>

  <app-type>{{ t('nonModel') }}</app-type>
  <var-button type="primary" @click="nonModalShow = true">{{ t('beginTour') }}</var-button>
  <var-divider />
  <var-space>
    <var-button ref="nonModalRef1">{{ t('upload') }}</var-button>
    <var-button ref="nonModalRef2" type="primary">{{ t('save') }}</var-button>
    <var-button ref="nonModalRef3"><var-icon name="dots-vertical" /></var-button>
  </var-space>
  <var-tour v-model:show="nonModalShow" v-model:current="nonModalCurrent" :overlay="false" type="primary" closeable>
    <var-tour-step :target="nonModalRef1?.$el" :title="t('firstTitle')" :message="t('firstMessage')" />
    <var-tour-step :target="nonModalRef2?.$el" :title="t('secondTitle')" :message="t('secondMessage')" />
    <var-tour-step :target="nonModalRef3?.$el" :title="t('thirdTitle')" :message="t('thirdMessage')" />
  </var-tour>

  <app-type>{{ t('placement') }}</app-type>
  <var-button type="primary" @click="placementShow = true">{{ t('beginTour') }}</var-button>
  <var-divider />
  <var-space>
    <var-button ref="placementRef1">{{ t('upload') }}</var-button>
    <var-button ref="placementRef2" type="primary">{{ t('save') }}</var-button>
    <var-button ref="placementRef3"><var-icon name="dots-vertical" /></var-button>
  </var-space>
  <var-tour v-model:show="placementShow" v-model:current="placementCurrent" closeable>
    <var-tour-step :target="placementRef1?.$el" :title="t('firstTitle')" :message="t('firstMessage')"> </var-tour-step>
    <var-tour-step
      :target="placementRef2?.$el"
      :title="t('secondTitle')"
      :message="t('secondMessage')"
      placement="bottom-start"
    />
    <var-tour-step :target="placementRef3?.$el" :title="t('thirdTitle')" :message="t('thirdMessage')" placement="top" />
  </var-tour>

  <app-type>{{ t('indicator') }}</app-type>
  <var-button type="primary" @click="indicatorShow = true">{{ t('beginTour') }}</var-button>
  <var-divider />
  <var-space>
    <var-button ref="indicatorRef1">{{ t('upload') }}</var-button>
    <var-button ref="indicatorRef2" type="primary">{{ t('save') }}</var-button>
    <var-button ref="indicatorRef3"><var-icon name="dots-vertical" /></var-button>
  </var-space>
  <var-tour v-model:show="indicatorShow" v-model:current="indicatorCurrent" closeable>
    <var-tour-step :target="indicatorRef1?.$el" :title="t('firstTitle')" :message="t('firstMessage')" />
    <var-tour-step :target="indicatorRef2?.$el" :title="t('secondTitle')" :message="t('secondMessage')" />
    <var-tour-step :target="indicatorRef3?.$el" :title="t('thirdTitle')" :message="t('thirdMessage')" />
    <template #indicators="{ current, total }">
      <span>{{ current + 1 }} / {{ total }}</span>
    </template>
  </var-tour>
</template>
