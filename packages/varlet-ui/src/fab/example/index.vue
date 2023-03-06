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
import VarSwitch from '../../switch'
import { ref, computed } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode, AppType } from '@varlet/cli/client'
import dark from '../../themes/dark'

const open = ref(false)
const show = ref(true)
const active = ref(false)
const type = ref('primary')
const trigger = ref('click')
const direction = ref('top')
const position = ref('right-bottom')

const iconName = computed(() => (active.value ? 'window-close' : 'cog-outline'))

function handleActive() {
  active.value = !active.value
  if (trigger.value === 'hover') active.value = false
}

function handleActiveHidden() {
  active.value = false
}

function handleShow() {
  show.value = !show.value
  handleActiveHidden()
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
    <var-radio-group v-model="direction" @change="handleActiveHidden">
      <var-radio checked-value="top">top</var-radio>
      <var-radio checked-value="right">right</var-radio>
      <var-radio checked-value="bottom">bottom</var-radio>
      <var-radio checked-value="left">left</var-radio>
    </var-radio-group>

    <app-type>{{ pack.customSlots }}</app-type>
    <var-switch v-model="open" @change="handleActiveHidden" />

    <app-type>{{ pack.animationOnDisplay }}</app-type>
    <var-button type="primary" @click="handleShow" :disabled="!open">
      {{ show ? pack.hidden : pack.show }}
    </var-button>

    <var-fab v-if="!open" :type="type" :position="position" :direction="direction" :trigger="trigger">
      <var-tooltip content="Tooltip" placement="left">
        <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
      </var-tooltip>
      <var-button type="danger" round>
        <var-icon name="check" />
      </var-button>
    </var-fab>

    <var-fab v-else v-model:active="active" :position="position" :direction="direction" :trigger="trigger">
      <template #activator>
        <var-button :type="type" v-show="show" round @click.stop="handleActive">
          <var-icon animation-class="fade" :name="iconName" :transition="200" />
        </var-button>
      </template>
      <var-tooltip content="camera" placement="left">
        <var-button type="warning" round @click.stop="handleActive">
          <var-icon name="camera-outline" />
        </var-button>
      </var-tooltip>
      <var-button type="primary" round @click.stop="handleActive">
        <var-icon name="phone-outline" />
      </var-button>
    </var-fab>
  </div>
</template>

<style lang="less" scoped>
.fade {
  transform: scale(0.4);
}
</style>
