<script setup>
import VarFloatingPanel from '..'
import VarTabs from '../../tabs'
import VarTab from '../../tab'
import VarTabsItems from '../../tabs-items'
import VarTabItem from '../../tab-item'
import VarCell from '../../cell'
import { ref } from 'vue'
import { watchDarkMode, watchLang } from '@varlet/cli/client'
import { use, pack } from './locale'
import dark from '../../themes/dark'

const tabsRef = ref(null)
const active = ref(0)
const anchors = ref([100, window.innerHeight * 0.4, window.innerHeight * 0.8])
const anchor = ref(100)
const styleVars = ref({
  '--tab-padding': '2px',
})

watchLang((lang) => {
  use(lang)
  if (tabsRef.value) {
    tabsRef.value.resize()
  }
})
watchDarkMode(dark)
</script>

<template>
  <var-style-provider :style-vars="styleVars">
    <var-tabs
      ref="tabsRef"
      elevation
      color="var(--color-primary)"
      active-color="#fff"
      inactive-color="hsla(0, 0%, 100%, .6)"
      v-model:active="active"
    >
      <var-tab style="font-size: 13px">{{ pack.basicUsage }}</var-tab>
      <var-tab style="font-size: 13px">{{ pack.customAnchors }}</var-tab>
      <var-tab style="font-size: 13px">{{ pack.dragHeadOnly }}</var-tab>
    </var-tabs>
  </var-style-provider>

  <var-tabs-items v-model:active="active">
    <var-tab-item>
      <var-floating-panel v-if="active === 0" teleport="body">
        <var-cell v-for="i in 26" :key="i" :title="String.fromCharCode(i + 64)" border> </var-cell>
      </var-floating-panel>
    </var-tab-item>
    <var-tab-item>
      <var-floating-panel v-if="active === 1" v-model:anchor="anchor" :anchors="anchors" teleport="body">
        <div style="text-align: center; padding: 5px 15px">
          <p>{{ pack.currentAnchorText }} {{ Math.floor(anchor) }} px</p>
        </div>
      </var-floating-panel>
    </var-tab-item>
    <var-tab-item>
      <var-floating-panel v-if="active === 2" :content-draggable="false" teleport="body">
        <div style="text-align: center; padding: 5px 15px">
          <p>{{ pack.dragHeadText }}</p>
        </div>
      </var-floating-panel>
    </var-tab-item>
  </var-tabs-items>
</template>
