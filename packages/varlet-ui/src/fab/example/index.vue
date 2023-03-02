<script setup>
import VarFab from '../index'
import VarAvatar from '../../avatar'
import VarTooltip from '../../tooltip'
import VarRadioGroup from '../../radio-group'
import VarRadio from '../../radio'

import { ref } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode, AppType } from '@varlet/cli/client'
import dark from '../../themes/dark'

const fab = ref(false)
const trigger = ref('click')
const direction = ref('top')
const position = ref('right-bottom')
const transition = ref('slide-y-reverse-transition')

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <div style="height: calc(100vh - 200px); position: relative">
    <app-type>{{ pack.basicUsage }}</app-type>

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

    <app-type>{{ pack.position }}</app-type>

    <var-radio-group v-model="position">
      <var-radio checked-value="left-top">left-top</var-radio>
      <var-radio checked-value="right-top">right-top</var-radio>
      <var-radio checked-value="left-bottom">left-bottom</var-radio>
      <var-radio checked-value="right-bottom">right-bottom</var-radio>
    </var-radio-group>

    <app-type>{{ pack.transition }} </app-type>
    <var-radio-group v-model="transition">
      <var-radio checked-value="scale-transition">scale-transition</var-radio>
      <var-radio checked-value="slide-x-transition">slide-x-transition</var-radio>
      <var-radio checked-value="slide-x-reverse-transition">slide-x-reverse-transition</var-radio>
      <var-radio checked-value="slide-y-transition">slide-y-transition</var-radio>
      <var-radio checked-value="slide-y-reverse-transition">slide-y-reverse-transition</var-radio>
    </var-radio-group>

    <var-fab v-model="fab" :position="position" :direction="direction" :transition="transition" :trigger="trigger">
      <template #activator>
        <var-button type="primary" round size="large">
          <var-icon v-if="!fab" name="plus" />
          <var-icon v-else name="window-close" />
        </var-button>
      </template>

      <var-tooltip content="Tooltip" placement="left">
        <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
      </var-tooltip>

      <var-button type="primary" round>
        <var-icon name="check" />
      </var-button>
    </var-fab>
  </div>
</template>
