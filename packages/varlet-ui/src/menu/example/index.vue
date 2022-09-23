<script setup>
import VarMenu from '..'
import VarButton from '../../button'
import VarSelect from '../../select'
import VarOption from '../../option'
import VarCell from '../../cell'
import Snackbar from '../../snackbar'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { reactive, toRefs, ref } from 'vue'
import { pack, use } from './locale/index'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import dark from '../../themes/dark'

const values = reactive({
  top: false,
  bottom: false,
  offsetX: false,
  offsetX1: false,
  offsetY: false,
  offsetY1: false,
  event: false,
  disabled: false,
  placement: false,
  trigger: false,
})
const bgColor = ref('#fff')
const { top, bottom, offsetX, offsetX1, offsetY, offsetY1, event, disabled, placement, trigger } = toRefs(values)
const placementValue = ref('cover-top-start')
const placementOption = ref([
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end',
  'cover-top',
  'cover-top-start',
  'cover-top-end',
  'cover-bottom',
  'cover-bottom-start',
  'cover-bottom-end',
  'cover-left',
  'cover-right',
])
const triggerValue = ref('click')

watchLang(use)
watchDarkMode(dark, (themes) => {
  bgColor.value = themes === 'darkThemes' ? '#272727' : '#fff'
})
</script>

<template>
  <app-type>{{ pack.alignmentMethods }}</app-type>
  <div class="block-1">
    <var-menu v-model:show="top">
      <var-button type="primary" @click="top = true">{{ pack.topAlignment }}</var-button>

      <template #menu>
        <div class="cell-list" :style="{ background: bgColor }">
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
        </div>
      </template>
    </var-menu>
  </div>

  <div class="block">
    <var-menu alignment="bottom" v-model:show="bottom">
      <var-button type="primary" @click="bottom = true">{{ pack.bottomAlignment }}</var-button>

      <template #menu>
        <div class="cell-list" :style="{ background: bgColor }">
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
        </div>
      </template>
    </var-menu>
  </div>

  <app-type>{{ pack.offset }}</app-type>

  <div class="block-1">
    <var-menu :offset-x="72" v-model:show="offsetX">
      <var-button type="primary" @click="offsetX = true">{{ pack.offsetRight }}</var-button>

      <template #menu>
        <div class="cell-list" :style="{ background: bgColor }">
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
        </div>
      </template>
    </var-menu>

    <var-menu :offset-x="-72" v-model:show="offsetX1">
      <var-button type="primary" @click="offsetX1 = true">{{ pack.offsetLeft }}</var-button>

      <template #menu>
        <div class="cell-list" :style="{ background: bgColor }">
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
        </div>
      </template>
    </var-menu>
  </div>

  <div class="block-2">
    <var-menu :offset-y="36" v-model:show="offsetY">
      <var-button type="primary" @click="offsetY = true">{{ pack.offsetBottom }}</var-button>

      <template #menu>
        <div class="cell-list" :style="{ background: bgColor }">
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
        </div>
      </template>
    </var-menu>

    <var-menu :offset-y="-36" v-model:show="offsetY1">
      <var-button type="primary" @click="offsetY1 = true">{{ pack.offsetTop }}</var-button>

      <template #menu>
        <div class="cell-list" :style="{ background: bgColor }">
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
          <var-cell>{{ pack.menuOption }}</var-cell>
        </div>
      </template>
    </var-menu>
  </div>

  <app-type>{{ pack.events }}</app-type>
  <var-menu
    v-model:show="event"
    @open="() => Snackbar.info('open')"
    @opened="() => Snackbar.success('opened')"
    @close="() => Snackbar.warning('close')"
    @closed="() => Snackbar.error('closed')"
    @update="(show) => console.log('show改变了')"
  >
    <var-button type="primary" @click="event = true">{{ pack.events }}</var-button>

    <template #menu>
      <div class="cell-list" :style="{ background: bgColor }">
        <var-cell>{{ pack.menuOption }}</var-cell>
        <var-cell>{{ pack.menuOption }}</var-cell>
        <var-cell>{{ pack.menuOption }}</var-cell>
      </div>
    </template>
  </var-menu>

  <app-type>{{ pack.trigger }}</app-type>
  <var-select :hint="false" :line="false" placeholder="请选择菜单显示方向" v-model="triggerValue">
    <var-option label="click" />
    <var-option label="hover" />
  </var-select>
  <var-menu v-model:show="trigger" :trigger="triggerValue">
    <var-button type="primary" @click="trigger = true">{{ pack.trigger }}</var-button>

    <template #menu>
      <div class="cell-list" :style="{ background: bgColor }">
        <var-cell>{{ pack.menuOption }}</var-cell>
        <var-cell>{{ pack.menuOption }}</var-cell>
        <var-cell>{{ pack.menuOption }}</var-cell>
      </div>
    </template>
  </var-menu>

  <app-type>{{ pack.placement }}</app-type>
  <var-select :hint="false" :line="false" placeholder="请选择菜单显示方向" v-model="placementValue">
    <var-option v-for="(item, index) in placementOption" :key="index" :label="item" />
  </var-select>
  <var-menu v-model:show="placement" :placement="placementValue">
    <var-button type="primary" @click="placement = true">{{ pack.placement }}</var-button>

    <template #menu>
      <div class="cell-list" :style="{ background: bgColor }">
        <var-cell>{{ pack.menuOption }}</var-cell>
        <var-cell>{{ pack.menuOption }}</var-cell>
        <var-cell>{{ pack.menuOption }}</var-cell>
      </div>
    </template>
  </var-menu>

  <app-type>{{ pack.disabled }}</app-type>
  <var-menu v-model:show="disabled" :disabled="disabled">
    <var-button @click="disabled = true">{{ pack.disabled }}</var-button>

    <template #menu>
      <div class="cell-list" :style="{ background: bgColor }">
        <var-cell>{{ pack.menuOption }}</var-cell>
        <var-cell>{{ pack.menuOption }}</var-cell>
        <var-cell>{{ pack.menuOption }}</var-cell>
      </div>
    </template>
  </var-menu>

  <div style="margin-bottom: 100px"></div>
</template>

<style scoped lang="less">
.cell-list {
  transition: background-color 0.25s;
}

.block {
  margin-top: 130px;
}

.block-1 {
  display: flex;
  justify-content: space-between;
}

.block-2 {
  display: flex;
  justify-content: space-between;
  margin-top: 130px;
}
</style>
