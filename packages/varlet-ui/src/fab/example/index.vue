<script setup>
import VarFab from '../index'
import VarAvatar from '../../avatar'
import VarRadioGroup from '../../radio-group'
import VarRadio from '../../radio'
import VarButton from '../../button'
import VarIcon from '../../icon'
import VarSelect from '../../select'
import VarOption from '../../option'
import Snackbar from '../../snackbar'
import dark from '../../themes/dark'
import { ref } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode, AppType } from '@varlet/cli/client'

const type = ref('primary')
const trigger = ref('click')
const direction = ref('top')
const position = ref('right-bottom')

function log(v) {
  console.log(v)
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <div>
    <app-type>{{ pack.themeColor }}</app-type>
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

    <var-fab
      :type="type"
      :position="position"
      :direction="direction"
      :trigger="trigger"
      @open="Snackbar('open')"
      @opened="Snackbar('opened')"
      @close="Snackbar('close')"
      @closed="Snackbar('closed')"
    >
      <var-button class="action" type="primary" round>
        <var-icon name="check" />
      </var-button>
      <var-button class="action" type="danger" round>
        <var-icon name="check" />
      </var-button>
      <var-button class="action" type="success" round>
        <var-icon name="check" />
      </var-button>
      <var-avatar class="action" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </var-fab>
  </div>
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
