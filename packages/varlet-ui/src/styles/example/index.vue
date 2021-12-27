<template>
  <div class="list">
    <div class="list__item" :class="`var-elevation--${e}`" :style="{ background }" v-for="e in elevations" :key="e">
      {{ e }}
    </div>
  </div>
</template>

<script>
import dark from '../../themes/dark'
import { ref } from 'vue'
import { watchDarkMode } from '@varlet/cli/site/utils'

export default {
  name: 'RippleExample',
  setup() {
    const elevations = Array.from({ length: 25 }).map((_, index) => index)
    const background = ref(dark)

    watchDarkMode(dark, (themes) => {
      background.value = themes === 'darkThemes' ? '#303030' : '#fff'
    })

    return {
      background,
      elevations,
    }
  },
}
</script>

<style lang="less">
@import '../../styles/elevation';
</style>

<style scoped lang="less">
.list {
  display: flex;
  flex-wrap: wrap;
  padding: 2vw;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 25vw;
    color: var(--site-config-color-sub-text);
    margin: 2vw;
    transition: 0.25s background-color;
  }
}
</style>
