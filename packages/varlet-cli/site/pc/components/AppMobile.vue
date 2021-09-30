<template>
  <div class="varlet-site-mobile var-site-elevation--3">
    <div class="varlet-site-mobile-content">
      <iframe :src="`./mobile.html#/${componentName}?language=${language}&platform=pc&replace=${replace}`"></iframe>
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
  flex: 0 0 325px;
  top: 80px;
  height: calc(100vh - 100px);
  margin-right: 38px;
  overflow: hidden;
  border-radius: 8px;

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
