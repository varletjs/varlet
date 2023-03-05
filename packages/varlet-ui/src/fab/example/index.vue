<script setup>
import VarFab from '../index'
import VarAvatar from '../../avatar'
import VarTooltip from '../../tooltip'
import VarRadioGroup from '../../radio-group'
import VarRadio from '../../radio'
import VarButton from '../../button'
import VarIcon from '../../icon'
import VarSelect from '../../select'
import VarOption from '../../option'
import { ref } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode, AppType } from '@varlet/cli/client'
import dark from '../../themes/dark'

const themeColorOptions = ref(['default', 'primary', 'info', 'success', 'warning', 'danger'])
const themeColorValue = ref('primary')

const show = ref(true)
const unfold = ref(false)
const trigger = ref('click')
const direction = ref('top')
const position = ref('right-bottom')

function handleShow() {
  show.value = !show.value
}

function handleUnfold() {
  unfold.value = !unfold.value
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <div>
    <app-type>{{ pack.themeColor }}</app-type>

    <var-select :hint="false" v-model="themeColorValue">
      <var-option v-for="(item, index) in themeColorOptions" :key="index" :label="pack[item]" :value="item" />
    </var-select>

    <app-type>{{ pack.animationOnDisplay }}</app-type>

    <var-button type="primary" @click="handleShow">
      {{ show ? pack.hidden : pack.show }}
    </var-button>

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

    <var-fab :type="themeColorValue" :position="position" :direction="direction" :trigger="trigger">
      <var-tooltip content="Tooltip" placement="left">
        <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
      </var-tooltip>
      <var-button type="danger" round>
        <var-icon name="check" />
      </var-button>
    </var-fab>

    <var-fab v-model="unfold" style="right: 50%">
      <template #activator>
        <var-button type="success" v-show="show" round @click.stop="handleUnfold">
          <var-icon v-if="!unfold" name="cog-outline" />
          <var-icon v-else name="window-close" />
        </var-button>
      </template>
      <var-tooltip content="camera" placement="left">
        <var-button type="warning" round>
          <var-icon name="camera-outline" />
        </var-button>
      </var-tooltip>
      <var-button type="primary" round>
        <var-icon name="phone-outline" />
      </var-button>
    </var-fab>
  </div>
</template>
