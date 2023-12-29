<script setup>
import { ref } from 'vue'
import { pack, use } from './locale'
import { watchLang, onThemeChange, AppType } from '@varlet/cli/client'

const translateY = ref('100%')

function handleHover(hovering) {
  translateY.value = hovering ? '0' : '100%'
}

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ pack.styleBinding }}</app-type>
  <var-paper
    class="paper"
    :elevation="2"
    :width="100"
    :height="100"
    ripple
    v-hover="{ color: 'var(--button-primary-text-color)', background: ' var(--color-primary)' }"
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
  background: var(--card-background);
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
  color: var(--button-primary-text-color);
  background-color: var(--color-primary);
  font-size: 50px;
}
</style>
