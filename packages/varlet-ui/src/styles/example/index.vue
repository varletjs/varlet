<template>
  <div class="list">
    <div class="list__item" :class="`var-elevation--${deep}`" v-for="deep in deeps" :key="deep">
      {{ deep }}
    </div>
  </div>
</template>

<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  name: 'RippleExample',
  components: { AppType },
  setup() {
    const deeps = Array.from({ length: 25 }).map((_, index) => index)

    return {
      deeps,
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
