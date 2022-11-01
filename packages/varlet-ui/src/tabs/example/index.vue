<script setup>
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import VarTabs from '..'
import VarTab from '../../tab'
import VarIcon from '../../icon'
import VarTabsItems from '../../tabs-items'
import VarTabItem from '../../tab-item'
import dark from '../../themes/dark'
import { use, pack } from './locale'
import { computed, reactive, ref, toRefs } from 'vue'

const actives = reactive({
  active: 0,
  active2: 0,
  active3: 0,
  active4: 0,
  active5: 0,
  active6: 0,
  active7: 0,
  activeRelation: 0,
})
const { active, active2, active3, active4, active5, active6, active7, activeRelation } = toRefs(actives)

const theme = ref('lightTheme')
const tabItemStyle = computed(() => ({
  color: theme.value === 'lightTheme' ? '#888' : '#aaa',
}))

watchLang(use)
watchDarkMode(dark, (mode) => {
  theme.value = mode
})
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-tabs v-model:active="active">
    <var-tab>{{ pack.option }}1</var-tab>
    <var-tab>{{ pack.option }}2</var-tab>
    <var-tab>{{ pack.option }}3</var-tab>
  </var-tabs>

  <app-type>{{ pack.modifyStyle }}</app-type>
  <var-tabs
    elevation
    color="#2979ff"
    active-color="#fff"
    inactive-color="hsla(0, 0%, 100%, .6)"
    v-model:active="active2"
  >
    <var-tab>{{ pack.option }}1</var-tab>
    <var-tab>{{ pack.option }}2</var-tab>
    <var-tab>{{ pack.option }}3</var-tab>
  </var-tabs>

  <app-type>{{ pack.disabled }}</app-type>
  <var-tabs
    elevation
    color="#2979ff"
    active-color="#fff"
    inactive-color="hsla(0, 0%, 100%, .6)"
    disabled-color="#aaa"
    v-model:active="active3"
  >
    <var-tab>{{ pack.option }}1</var-tab>
    <var-tab>{{ pack.option }}2</var-tab>
    <var-tab disabled>{{ pack.disabled }}</var-tab>
  </var-tabs>

  <app-type>{{ pack.enableScroll }}</app-type>
  <var-tabs
    elevation
    color="#2979ff"
    active-color="#fff"
    inactive-color="hsla(0, 0%, 100%, .6)"
    v-model:active="active4"
  >
    <var-tab>{{ pack.option }}1</var-tab>
    <var-tab>{{ pack.option }}2</var-tab>
    <var-tab>{{ pack.option }}3</var-tab>
    <var-tab>{{ pack.option }}4</var-tab>
    <var-tab>{{ pack.option }}5</var-tab>
    <var-tab>{{ pack.option }}6</var-tab>
    <var-tab>{{ pack.option }}7</var-tab>
    <var-tab>{{ pack.option }}8</var-tab>
  </var-tabs>

  <app-type>{{ pack.tabVerticalLayout }}</app-type>
  <var-tabs
    elevation
    item-direction="vertical"
    color="#2979ff"
    active-color="#fff"
    inactive-color="hsla(0, 0%, 100%, .6)"
    v-model:active="active5"
  >
    <var-tab>
      <var-icon class="icon" name="information" />
      <div>{{ pack.option }}1</div>
    </var-tab>
    <var-tab>
      <var-icon class="icon" name="warning" />
      <div>{{ pack.option }}2</div>
    </var-tab>
    <var-tab>
      <var-icon class="icon" name="error" />
      <div>{{ pack.option }}3</div>
    </var-tab>
  </var-tabs>

  <app-type>{{ pack.tabsVerticalLayout }}</app-type>
  <var-tabs
    class="vertical-tabs"
    elevation
    layout-direction="vertical"
    color="#2979ff"
    active-color="#fff"
    inactive-color="hsla(0, 0%, 100%, .6)"
    v-model:active="active6"
  >
    <var-tab>{{ pack.option }}1</var-tab>
    <var-tab>{{ pack.option }}2</var-tab>
    <var-tab>{{ pack.option }}3</var-tab>
  </var-tabs>

  <app-type>{{ pack.viewRelation }}</app-type>
  <var-tabs
    elevation
    color="#2979ff"
    active-color="#fff"
    inactive-color="hsla(0, 0%, 100%, .6)"
    v-model:active="activeRelation"
    offset-top="50"
  >
    <var-tab>{{ pack.option }}1</var-tab>
    <var-tab>{{ pack.option }}2</var-tab>
    <var-tab>{{ pack.option }}3</var-tab>
  </var-tabs>

  <var-tabs-items style="margin: 8px 0" v-model:active="activeRelation">
    <var-tab-item :style="tabItemStyle">
      {{ pack.text }}
    </var-tab-item>
    <var-tab-item :style="tabItemStyle">
      {{ pack.text2 }}
    </var-tab-item>
    <var-tab-item :style="tabItemStyle">
      {{ pack.text3 }}
    </var-tab-item>
  </var-tabs-items>

  <app-type>{{ pack.stickyLayout }}</app-type>
  <var-tabs
    sticky
    elevation
    color="#2979ff"
    active-color="#fff"
    inactive-color="hsla(0, 0%, 100%, .6)"
    offset-top="14.4vw"
    v-model:active="active7"
  >
    <var-tab>{{ pack.option }}1</var-tab>
    <var-tab>{{ pack.option }}2</var-tab>
    <var-tab>{{ pack.option }}3</var-tab>
  </var-tabs>

  <div style="height: 120vh"></div>
</template>

<style lang="less" scoped>
.vertical-tabs {
  width: 80px;
  height: 120px;
}

.icon {
  margin-bottom: 5px;
}

.var-tab-item {
  color: #888;
}
</style>
