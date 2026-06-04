<template>
  <div class="varlet-site-mobile">
    <div class="varlet-site-mobile-content">
      <iframe
        id="mobile"
        :src="`${getMobileIndex()}#/${componentName}?language=${language}&platform=pc&replace=${replace}${
          hash ? `#${hash}` : ''
        }`"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { getMobileIndex } from '@varlet/cli/client'

export default {
  name: 'AppMobile',
  props: {
    componentName: {
      type: String,
    },
    language: {
      type: String,
    },
    replace: {
      type: String,
    },
    hash: {
      type: String,
    },
  },
  setup() {
    return {
      getMobileIndex,
    }
  },
}
</script>

<style lang="less">
.varlet-site-mobile {
  position: sticky;
  flex: 0 0 375px;
  top: 80px;
  height: calc(100vh - 100px);
  margin-right: 38px;
  overflow: hidden;
  box-shadow: 0 0 14px 6px var(--site-config-color-shadow);
  border-radius: 2px;
  margin-top: 20px;

  &-content {
    width: 100%;
    height: 100%;
  }

  &-image {
    width: 100%;
    pointer-events: none;
    height: 100%;
    top: 0;

    img {
      width: 100%;
      height: 100%;
    }
  }

  iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
