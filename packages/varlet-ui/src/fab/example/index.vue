<script setup>
import VarFab from '../index'
import VarRadioGroup from '../../radio-group'
import VarRadio from '../../radio'
import VarSwitch from '../../switch'
import VarButton from '../../button'
import VarIcon from '../../icon'
import VarSelect from '../../select'
import VarOption from '../../option'
import dark from '../../themes/dark'
import { ref } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode, AppType } from '@varlet/cli/client'

const type = ref('primary')
const trigger = ref('click')
const direction = ref('top')
const position = ref('right-bottom')
const show = ref(true)
const active = ref(false)
const disabled = ref(false)

function toggleTrigger() {
  show.value = !show.value
}

function toggleActions() {
  active.value = !active.value
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type :style="{ marginTop: position.includes('top') ? '20vw' : undefined }">{{ pack.type }}</app-type>
  <var-select :hint="false" v-model="type">
    <var-option :label="pack.default" value="default" />
    <var-option :label="pack.primary" value="primary" />
    <var-option :label="pack.info" value="info" />
    <var-option :label="pack.success" value="success" />
    <var-option :label="pack.warning" value="warning" />
    <var-option :label="pack.danger" value="danger" />
  </var-select>

  <app-type>{{ pack.position }}</app-type>
  <var-radio-group v-model="position">
    <var-radio checked-value="left-top">left-top</var-radio>
    <var-radio checked-value="right-top">right-top</var-radio>
    <var-radio checked-value="left-bottom">left-bottom</var-radio>
    <var-radio checked-value="right-bottom">right-bottom</var-radio>
  </var-radio-group>

  <app-type>{{ pack.trigger }}</app-type>
  <var-radio-group v-model="trigger">
    <var-radio checked-value="click">click</var-radio>
    <var-radio checked-value="hover">hover</var-radio>
  </var-radio-group>

  <app-type>{{ pack.direction }}</app-type>
  <var-radio-group v-model="direction">
    <var-radio checked-value="top">top</var-radio>
    <var-radio checked-value="right">right</var-radio>
    <var-radio checked-value="bottom">bottom</var-radio>
    <var-radio checked-value="left">left</var-radio>
  </var-radio-group>

  <app-type>{{ pack.disabled }}</app-type>
  <var-switch v-model="disabled" />

  <app-type>{{ pack.triggerToggle }}</app-type>
  <var-button type="primary" @click.stop="toggleTrigger">{{ pack.toggle }}</var-button>

  <app-type>{{ pack.actionsToggle }}</app-type>
  <var-button type="primary" @click.stop="toggleActions">{{ pack.toggle }}</var-button>

  <var-fab
    v-model:active="active"
    :show="show"
    :type="type"
    :position="position"
    :direction="direction"
    :trigger="trigger"
    :disabled="disabled"
  >
    <var-button class="action" type="info" round :disabled="disabled">
      <var-icon name="account-circle" />
    </var-button>
    <var-button class="action" type="success" round :disabled="disabled">
      <var-icon name="checkbox-marked-circle" />
    </var-button>
    <var-button class="action" type="warning" round :disabled="disabled">
      <var-icon name="bell" />
    </var-button>
    <var-button class="action" type="danger" round :disabled="disabled">
      <var-icon name="delete" />
    </var-button>
  </var-fab>
</template>

<style lang="less" scoped>
.fade {
  transform: scale(0.4);
}

.action {
  display: flex;
  width: 40px;
  height: 40px;
}
</style>
