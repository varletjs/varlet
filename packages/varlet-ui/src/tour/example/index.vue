<script setup lang="ts">
import { ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { t, use } from './locale'

const basicUsageOpen = ref(false)
const basicUsageCurrent = ref(0)
const basicUsageRef1 = ref()
const basicUsageRef2 = ref()
const BasicUsageRef3 = ref()

const nonModalOpen = ref(false)
const nonModalCurrent = ref(0)
const nonModalRef1 = ref()
const nonModalRef2 = ref()
const nonModalRef3 = ref()

const placementOpen = ref(false)
const placementCurrent = ref(0)
const placementRef1 = ref()
const placementRef2 = ref()
const placementRef3 = ref()

const indicatorOpen = ref(false)
const indicatorCurrent = ref(0)
const indicatorRef1 = ref()
const indicatorRef2 = ref()
const indicatorRef3 = ref()

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-button type="primary" @click="basicUsageOpen = true">{{ t('beginTour') }}</var-button>
  <var-divider />
  <var-space>
    <var-button ref="basicUsageRef1">{{ t('upload') }}</var-button>
    <var-button ref="basicUsageRef2" type="primary">{{ t('save') }}</var-button>
    <var-button ref="BasicUsageRef3"><var-icon name="dots-vertical" /></var-button>
  </var-space>
  <var-tour v-model:open="basicUsageOpen" v-model:current="basicUsageCurrent" closeable>
    <var-tour-step :target="basicUsageRef1?.$el" :title="t('firstTitle')" :description="t('firstDescription')" />
    <var-tour-step :target="basicUsageRef2?.$el" :title="t('secondTitle')" :description="t('secondDescription')" />
    <var-tour-step :target="BasicUsageRef3?.$el" :title="t('thirdTitle')" :description="t('thirdDescription')" />
  </var-tour>

  <app-type>{{ t('nonModel') }}</app-type>
  <var-button type="primary" @click="nonModalOpen = true">{{ t('beginTour') }}</var-button>
  <var-divider />
  <var-space>
    <var-button ref="nonModalRef1">{{ t('upload') }}</var-button>
    <var-button ref="nonModalRef2" type="primary">{{ t('save') }}</var-button>
    <var-button ref="nonModalRef3"><var-icon name="dots-vertical" /></var-button>
  </var-space>
  <var-tour v-model:open="nonModalOpen" v-model:current="nonModalCurrent" :overlay="false" type="primary" closeable>
    <var-tour-step :target="nonModalRef1?.$el" :title="t('firstTitle')" :description="t('firstDescription')" />
    <var-tour-step :target="nonModalRef2?.$el" :title="t('secondTitle')" :description="t('secondDescription')" />
    <var-tour-step :target="nonModalRef3?.$el" :title="t('thirdTitle')" :description="t('thirdDescription')" />
  </var-tour>

  <app-type>{{ t('placement') }}</app-type>
  <var-button type="primary" @click="placementOpen = true">{{ t('beginTour') }}</var-button>
  <var-divider />
  <var-space>
    <var-button ref="placementRef1">{{ t('upload') }}</var-button>
    <var-button ref="placementRef2" type="primary">{{ t('save') }}</var-button>
    <var-button ref="placementRef3"><var-icon name="dots-vertical" /></var-button>
  </var-space>
  <var-tour v-model:open="placementOpen" v-model:current="placementCurrent" closeable>
    <var-tour-step :title="t('firstTitle')" :description="t('firstDescription')"> </var-tour-step>
    <var-tour-step
      :target="placementRef2?.$el"
      :title="t('secondTitle')"
      :description="t('secondDescription')"
      placement="bottom-start"
    />
    <var-tour-step
      :target="placementRef3?.$el"
      :title="t('thirdTitle')"
      :description="t('thirdDescription')"
      placement="top"
    />
  </var-tour>

  <app-type>{{ t('indicator') }}</app-type>
  <var-button type="primary" @click="indicatorOpen = true">{{ t('beginTour') }}</var-button>
  <var-divider />
  <var-space>
    <var-button ref="indicatorRef1">{{ t('upload') }}</var-button>
    <var-button ref="indicatorRef2" type="primary">{{ t('save') }}</var-button>
    <var-button ref="indicatorRef3"><var-icon name="dots-vertical" /></var-button>
  </var-space>
  <var-tour v-model:open="indicatorOpen" v-model:current="indicatorCurrent" closeable>
    <var-tour-step :target="indicatorRef1?.$el" :title="t('firstTitle')" :description="t('firstDescription')" />
    <var-tour-step :target="indicatorRef2?.$el" :title="t('secondTitle')" :description="t('secondDescription')" />
    <var-tour-step :target="indicatorRef3?.$el" :title="t('thirdTitle')" :description="t('thirdDescription')" />
    <template #indicators="{ current, total }">
      <span>{{ current + 1 }} / {{ total }}</span>
    </template>
  </var-tour>
</template>
