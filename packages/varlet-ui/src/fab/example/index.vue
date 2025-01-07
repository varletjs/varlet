<script setup>
import { ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { t, use } from './locale'

const type = ref('primary')
const trigger = ref('click')
const direction = ref('top')
const position = ref('right-bottom')
const show = ref(true)
const active = ref(false)
const drag = ref(false)
const disabled = ref(false)
const elevation = ref(2)

watchLang(use)
onThemeChange()

function toggleTrigger() {
  show.value = !show.value
}

function toggleActions() {
  active.value = !active.value
}
</script>

<template>
  <app-type :style="{ marginTop: position.includes('top') ? '20vmin' : undefined }">{{ t('type') }}</app-type>
  <var-select v-model="type" :hint="false">
    <var-option :label="t('default')" value="default" />
    <var-option :label="t('primary')" value="primary" />
    <var-option :label="t('info')" value="info" />
    <var-option :label="t('success')" value="success" />
    <var-option :label="t('warning')" value="warning" />
    <var-option :label="t('danger')" value="danger" />
  </var-select>

  <app-type>{{ t('position') }}</app-type>
  <var-radio-group v-model="position">
    <var-radio checked-value="left-top">left-top</var-radio>
    <var-radio checked-value="right-top">right-top</var-radio>
    <var-radio checked-value="left-bottom">left-bottom</var-radio>
    <var-radio checked-value="right-bottom">right-bottom</var-radio>
  </var-radio-group>

  <app-type>{{ t('trigger') }}</app-type>
  <var-radio-group v-model="trigger">
    <var-radio checked-value="click">click</var-radio>
    <var-radio checked-value="hover">hover</var-radio>
  </var-radio-group>

  <app-type>{{ t('direction') }}</app-type>
  <var-radio-group v-model="direction">
    <var-radio checked-value="top">top</var-radio>
    <var-radio checked-value="right">right</var-radio>
    <var-radio checked-value="bottom">bottom</var-radio>
    <var-radio checked-value="left">left</var-radio>
  </var-radio-group>

  <app-type>{{ t('drag') }}</app-type>
  <var-switch v-model="drag" />

  <app-type>{{ t('disabled') }}</app-type>
  <var-switch v-model="disabled" />

  <app-type>{{ t('elevation') }}</app-type>
  <var-slider v-model="elevation" max="24"></var-slider>

  <app-type>{{ t('triggerToggle') }}</app-type>
  <var-button type="primary" @click.stop="toggleTrigger">{{ t('toggle') }}</var-button>

  <app-type>{{ t('actionsToggle') }}</app-type>
  <var-button type="primary" @click.stop="toggleActions">{{ t('toggle') }}</var-button>

  <var-fab
    v-model:active="active"
    :show="show"
    :type="type"
    :position="position"
    :direction="direction"
    :trigger="trigger"
    :drag="drag"
    :disabled="disabled"
    :elevation="elevation"
  >
    <var-button type="info" icon-container :disabled="disabled">
      <var-icon name="account-circle" />
    </var-button>
    <var-button type="success" icon-container :disabled="disabled">
      <var-icon name="checkbox-marked-circle" />
    </var-button>
    <var-button type="warning" icon-container :disabled="disabled">
      <var-icon name="bell" />
    </var-button>
    <var-button type="danger" icon-container :disabled="disabled">
      <var-icon name="delete" />
    </var-button>
  </var-fab>
</template>
