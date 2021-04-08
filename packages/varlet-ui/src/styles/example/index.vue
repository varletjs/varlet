<template>
  <div class="list">
    <div class="list__item" :class="`var-elevation--${e}`" v-for="e in elevations" :key="e">
      {{ e }}
    </div>
  </div>
</template>

<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  name: 'RippleExample',
  components: { AppType },
  setup() {
    const elevations = Array.from({ length: 25 }).map((_, index) => index)

    return {
      elevations,
    }
  },
}
</script>

<style scoped lang="less">
@import '../../styles/elevation';

.list {
  display: flex;
  flex-wrap: wrap;
  padding: 6px;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    color: #888;
    margin: 6px;
  }
}
</style>
