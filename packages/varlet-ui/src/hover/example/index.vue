<script setup>
import vHover from '../../hover'
import VarImage from '../../image'
import VarPaper from '../../paper'
import dark from '../../themes/dark'
import { ref } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode, AppType } from '@varlet/cli/client'

const translateY = ref('100%')

function handleHover(hovering) {
  translateY.value = hovering ? '0' : '100%'
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.styleBinding }}</app-type>
  <var-paper
    class="paper"
    :elevation="2"
    :width="100"
    :height="100"
    ripple
    v-hover="{ color: '#fff', background: ' var(--color-primary)' }"
  >
    HOVER
  </var-paper>

  <app-type>{{ pack.functionBinding }}</app-type>
  <div class="image-container" v-hover="handleHover">
    <var-image src="https://varlet.gitee.io/varlet-ui/tree.jpeg" />
    <div class="image-mask" :style="{ transform: `translateY(${translateY})` }">HOVER</div>
  </div>
</template>

<style scoped lang="less">
.paper {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.image-container {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 6px;
}

.image-mask {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  color: #fff;
  background-color: var(--color-primary);
  font-size: 50px;
}
</style>
