<script setup lang="ts">
import config from '@config'
import { ref } from 'vue'

defineProps({
  language: {
    type: String,
    required: true,
  },
})

const ad = ref(config?.pc?.ad)
const storageKey = `varlet-site-ad-closed-${ad.value?.id}`
const isClose = ref(localStorage.getItem(storageKey) == 'true')

setSiteAddHeight()

function setSiteAddHeight() {
  document.documentElement.style.setProperty('--site-ad-height', isClose.value || !ad.value ? '0px' : '52px')
}

function handleClose() {
  localStorage.setItem(`varlet-site-ad-closed-${ad.value?.id}`, 'true')
  isClose.value = true
  setSiteAddHeight()
}
</script>

<template>
  <a
    class="varlet-site-ad varlet-site-ad--animation"
    :href="ad?.link[language]"
    target="_blank"
    :style="{
      background: ad?.background,
      color: ad?.textColor,
    }"
  >
    <img class="varlet-site-ad__logo" :style="{ height: ad?.logoHeight }" :src="ad?.logo" v-if="ad?.logo" />
    <div
      class="varlet-site-ad__description"
      :style="{ background: ad?.descriptionBackground, color: ad?.descriptionTextColor }"
      v-if="ad?.description"
    >
      <span>{{ ad?.description?.[language] }}</span>
      <var-icon style="margin-left: 4px" name="chevron-right" :size="24" />
    </div>
    <var-button class="varlet-site-ad__close-button" text round @click.prevent="handleClose">
      <var-icon name="window-close" :size="20" />
    </var-button>
  </a>
</template>

<style lang="less">
.varlet-site-ad {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--site-ad-height);
  color: #fff;
  text-decoration: unset;
  overflow: hidden;

  @keyframes varlet-site-ad-animation {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(100%);
    }
  }

  &__logo {
    height: 36px;
    border-radius: 8px;
  }

  &__description {
    display: flex;
    align-items: center;
    height: 34px;
    border-radius: 100px;
    padding: 0 18px;
    margin-left: 12px;
    font-size: 15px;
    background: #d0bcff;
    color: #381e72;
  }

  &__close-button {
    position: absolute !important;
    top: 50%;
    right: 35px;
    transform: translateY(-50%);
  }

  &--animation {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;
      animation: varlet-site-ad-animation 8s infinite;
      background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.2), hsla(0, 0%, 100%, 0));
      transition: 0.25s background-color;
    }
  }
}
</style>
