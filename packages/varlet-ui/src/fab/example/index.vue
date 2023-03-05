<script setup>
import VarFab from '../index'
import VarAvatar from '../../avatar'
import VarTooltip from '../../tooltip'
import VarRadioGroup from '../../radio-group'
import VarRadio from '../../radio'
import VarButton from '../../button'
import VarIcon from '../../icon'
import Snackbar from '../../snackbar'
import { ref } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode, AppType } from '@varlet/cli/client'
import dark from '../../themes/dark'

const show = ref(true)
const fab = ref(false)
const trigger = ref('click')
const direction = ref('top')
const position = ref('right-bottom')

function handleClick() {
  Snackbar.success(pack.value.clickSuccess)
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <div>
    <app-type>{{ pack.basicUsage }}</app-type>

    <var-button type="primary" @click="show = !show">
      {{ show ? pack.hidden : pack.show }}
    </var-button>

    <app-type>{{ pack.combinedUsage }}</app-type>
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

    <var-fab v-model="fab" :position="position" :direction="direction" :trigger="trigger">
      <var-button type="primary" round>
        <var-icon v-if="!fab" name="plus" />
        <var-icon v-else name="window-close" />
      </var-button>
      <template #actions>
        <var-tooltip content="Tooltip" placement="left">
          <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
        </var-tooltip>

        <var-button type="primary" round>
          <var-icon name="check" />
        </var-button>
      </template>
    </var-fab>

    <var-fab style="right: 50%">
      <var-button type="primary" round v-show="show" @click="handleClick">
        <var-icon name="plus" />
      </var-button>
    </var-fab>
  </div>
</template>
