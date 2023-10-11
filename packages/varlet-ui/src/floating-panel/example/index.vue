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

const active = ref(0)
const anchors = [100, window.innerHeight * 0.4, window.innerHeight * 0.8]
const anchor = ref(anchors[0])

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <var-tabs
    elevation
    color="var(--color-primary)"
    active-color="#fff"
    inactive-color="hsla(0, 0%, 100%, .6)"
    v-model:active="active"
  >
    <var-tab>{{ pack.basicUsage }}</var-tab>
    <var-tab>{{ pack.customAnchors }}</var-tab>
    <var-tab>{{ pack.dragHeadOnly }}</var-tab>
  </var-tabs>

  <var-tabs-items v-model:active="active">
    <var-tab-item>
      <var-floating-panel teleport="body">
        <var-cell v-for="i in 26" :key="i" :title="String.fromCharCode(i + 64)"> </var-cell>
      </var-floating-panel>
    </var-tab-item>
    <var-tab-item>
      <var-floating-panel v-model:anchor="anchor" :anchors="anchors" teleport="body">
        <div style="text-align: center; padding: 15px">
          <p>{{ pack.currentAnchorText }} {{ Math.floor(anchor) }} px</p>
        </div>
      </var-floating-panel>
    </var-tab-item>
    <var-tab-item>
      <var-floating-panel :content-draggable="false" teleport="body">
        <div style="text-align: center; padding: 15px">
          <p>{{ pack.dragHeadText }}</p>
        </div>
      </var-floating-panel>
    </var-tab-item>
  </var-tabs-items>
</template>
