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
    v-model:active="active3"
  >
    <var-tab>{{ pack.option }}1</var-tab>
    <var-tab>{{ pack.option }}2</var-tab>
    <var-tab disabled>{{ pack.disabled }}</var-tab>
  </var-tabs>

  <app-type>{{  pack.enableScroll }}</app-type>
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
  >
    <var-tab>{{ pack.option }}1</var-tab>
    <var-tab>{{ pack.option }}2</var-tab>
    <var-tab>{{ pack.option }}3</var-tab>
  </var-tabs>

  <var-tabs-items v-model:active="activeRelation">
    <var-tab-item style="padding: 8px 5px">
      {{ pack.text }}
    </var-tab-item>
    <var-tab-item style="padding: 8px 5px">
      {{ pack.text2 }}
    </var-tab-item>
    <var-tab-item style="padding: 8px 5px">
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
    :offset-top="50"
    v-model:active="active7"
  >
    <var-tab>{{ pack.option }}1</var-tab>
    <var-tab>{{ pack.option }}2</var-tab>
    <var-tab>{{ pack.option }}3</var-tab>
  </var-tabs>

  <div style="height: 120vh"></div>
</template>

<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Tabs from '..'
import Tab from '../../tab'
import Icon from '../../icon'
import TabsItems from '../../tabs-items'
import TabItem from '../../tab-item'
import context from '../../context'
import { use, pack } from './locale'
import { onUnmounted, ref } from 'vue'
import { watchPlatform, watchLang } from '../../utils/components'

export default {
  name: 'TabsExample',
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [TabsItems.name]: TabsItems,
    [TabItem.name]: TabItem,
    [Icon.name]: Icon,
    AppType
  },
  setup() {
    const active = ref(0)
    const active2 = ref(0)
    const active3 = ref(0)
    const active4 = ref(0)
    const active5 = ref(0)
    const active6 = ref(0)
    const active7 = ref(0)
    const activeRelation = ref(0)

    watchLang(use)

    const prevTouchmoveForbid = context.touchmoveForbid
    watchPlatform((platform) => {
      if (platform === 'pc') {
        context.touchmoveForbid = false
      }
    })
    onUnmounted(() => {
      context.touchmoveForbid = prevTouchmoveForbid
    })

    return {
      pack,
      active,
      active2,
      active3,
      active4,
      active5,
      active6,
      active7,
      activeRelation,
    }
  },
}
</script>

<style lang="less" scoped>
.vertical-tabs {
  width: 80px;
  height: 120px;
}

.icon {
  margin-bottom: 5px;
}

.var-tab-item {
  color: #888
}
</style>
