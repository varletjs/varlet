<script setup lang="ts">
import config from '@config'
import { get } from 'lodash-es'
import { ref } from 'vue'

defineProps({
  language: {
    type: String,
    required: true,
  },
})

const ad = ref(get(config, 'pc.ad'))
const storageKey = `varlet-site-ad-closed-${ad.value?.id}`
const isClose = ref(localStorage.getItem(storageKey) == 'true')

function handleClose() {
  localStorage.setItem(`varlet-site-ad-closed-${ad.value?.id}`, 'true')
  isClose.value = true
}
</script>

<template>
  <a
    class="varlet-site-ad varlet-site-ad--animation"
    :href="ad?.link[language]"
    target="_blank"
    :class="{ 'varlet-site-ad--close': isClose || !ad }"
    :style="{ background: ad?.background, color: ad?.textColor }"
  >
    <img class="varlet-site-ad__logo" :style="{ height: ad?.logoHeight }" :src="ad.logo" v-if="ad.logo" />
    <div class="varlet-site-ad__description" v-if="ad.description">{{ ad.description[language] }}</div>
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
  height: 56px;
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
    margin-left: 12px;
    font-size: 15px;
    font-weight: bold;
    padding-bottom: 2px;
  }

  &__close-button {
    position: absolute;
    top: 50%;
    right: 35px;
    transform: translateY(-50%);
  }

  &--close {
    height: 0;
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
