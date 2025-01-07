<script setup>
import { ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { t, use } from './locale'

const translateY = ref('100%')

function handleHover(hovering) {
  translateY.value = hovering ? '0' : '100%'
}

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('styleBinding') }}</app-type>
  <var-paper
    v-hover="{ color: 'var(--color-on-primary)', background: ' var(--color-primary)' }"
    class="paper"
    :elevation="2"
    :width="100"
    :height="100"
    ripple
  >
    HOVER
  </var-paper>

  <app-type>{{ t('functionBinding') }}</app-type>
  <div v-hover="handleHover" class="image-container">
    <var-image src="tree.jpeg" />
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
  color: var(--color-on-primary);
  background-color: var(--color-primary);
  font-size: 50px;
}
</style>
