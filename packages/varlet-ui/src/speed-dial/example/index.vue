<script setup>
import VarSpeedDial from '../index'
import VarAvatar from '../../avatar'
import VarTooltip from '../../tooltip'
import VarRadioGroup from '../../radio-group'
import VarRadio from '../../radio'
import VarCheckbox from '../../checkbox'

import { ref } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode, AppType } from '@varlet/cli/client'
import dark from '../../themes/dark'

const fab = ref(false)
const trigger = ref('click')
const direction = ref('top')
const transition = ref('slide-y-reverse-transition')

const top = ref(false)
const right = ref(true)
const bottom = ref(true)
const left = ref(false)

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <div style="height: calc(100vh - 200px); position: relative">
    <app-type>{{ pack.basicUsage }}</app-type>

    <app-type>trigger</app-type>
    <var-radio-group v-model="trigger">
      <var-radio checked-value="click">click</var-radio>
      <var-radio checked-value="hover">hover</var-radio>
    </var-radio-group>

    <app-type>Speed dial direction</app-type>
    <var-radio-group v-model="direction">
      <var-radio checked-value="top">top</var-radio>
      <var-radio checked-value="right">right</var-radio>
      <var-radio checked-value="bottom">bottom</var-radio>
      <var-radio checked-value="left">left</var-radio>
    </var-radio-group>

    <app-type>Speed dial location</app-type>
    <var-checkbox v-model="top">top</var-checkbox>
    <var-checkbox v-model="right">right</var-checkbox>
    <var-checkbox v-model="bottom">bottom</var-checkbox>
    <var-checkbox v-model="left">left</var-checkbox>

    <app-type>Transition</app-type>
    <var-radio-group v-model="transition">
      <var-radio checked-value="scale-transition">scale-transition</var-radio>
      <var-radio checked-value="slide-x-transition">slide-x-transition</var-radio>
      <var-radio checked-value="slide-x-reverse-transition">slide-x-reverse-transition</var-radio>
      <var-radio checked-value="slide-y-transition">slide-y-transition</var-radio>
      <var-radio checked-value="slide-y-reverse-transition">slide-y-reverse-transition</var-radio>
    </var-radio-group>

    <var-speed-dial
      v-model="fab"
      absolute
      :bottom="bottom"
      :right="right"
      :top="top"
      :left="left"
      :direction="direction"
      :transition="transition"
      :trigger="trigger"
    >
      <template #activator>
        <var-button type="primary" round size="large">
          <var-icon v-if="!fab" name="plus" />
          <var-icon v-else name="window-close" />
        </var-button>
      </template>

      <var-tooltip content="Tooltip" placement="left">
        <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" appear />
      </var-tooltip>

      <var-tooltip content="Tooltip" placement="left">
        <var-button type="primary" round appear>
          <var-icon name="check" />
        </var-button>
      </var-tooltip>
    </var-speed-dial>
  </div>
</template>
