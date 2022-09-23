<script setup>
import VarMenu from '..'
import VarButton from '../../button'
import VarSelect from '../../select'
import VarOption from '../../option'
import VarCell from '../../cell'
import Snackbar from '../../snackbar'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { reactive, toRefs, ref, onMounted } from 'vue'
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
const scroll = ref(null)
onMounted(() => {
  scroll.value.scrollTo(0, 175)
})

watchLang(use)
watchDarkMode(dark, (themes) => {
  bgColor.value = themes === 'darkThemes' ? '#272727' : '#fff'
})
</script>

<template>
  <app-type>{{ pack.placement }}</app-type>

  <div class="scroll" ref="scroll">
    <div class="scroll-child">
      <div class="flex-box">
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
      </div>
    </div>
  </div>

  <var-select :hint="false" :line="false" placeholder="请选择菜单显示方向" v-model="placementValue">
    <var-option v-for="(item, index) in placementOption" :key="index" :label="item" />
  </var-select>

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
.scroll {
  height: 250px;
  overflow-y: scroll;
  &-child {
    height: 600px;
    .flex-box {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.cell-list {
  // transition: background-color 0.25s;
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
