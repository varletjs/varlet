<template>
  <div class="varlet-site-mobile varlet-site-mobile--375">
    <div class="varlet-site-mobile-content">
      <iframe id="mobile" :src="`./mobile.html#/${componentName}?language=${language}&platform=pc&replace=${replace}`"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMobile',
  props: {
    componentName: {
      type: String
    },
    language: {
      type: String
    },
    replace: {
      type: String
    }
  }
}
</script>

<style scoped lang="less">
.varlet-site-mobile {
  position: sticky;
  flex: 0 0 330px;
  top: 80px;
  height: calc(100vh - 100px);
  margin-right: 38px;
  overflow: hidden;
  box-shadow: 0 0 14px 6px var(--site-config-color-shadow);
  border-radius: 2px;

  @media screen and (min-width: 1600px) {
    &--375 {
      flex: 0 0 375px;
    }
  }

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
}
</style>
