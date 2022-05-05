<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import LogoAnimation from './components/LogoAnimation.vue'
import { getPCLocationInfo, isPhone } from '../utils'
import { get } from 'lodash-es'
import config from '@config'

export default defineComponent({
  components: {
    LogoAnimation
  },
  setup() {
    const showLogo = ref<boolean>(false)
    const useMobile = ref(get(config, 'useMobile'))
    const defaultLanguage = get(config, 'defaultLanguage')

    const init = () => {
      const { language, menuName } = getPCLocationInfo()

      if (isPhone() && useMobile.value) {
        window.location.href = `./mobile.html#/${menuName}?language=${language || defaultLanguage}&platform=mobile`
        return
      }
      showLogo.value = true
    }

    onMounted(init)

    return {
      showLogo
    }
  }
})
</script>

<template>
  <router-view></router-view>
  <template v-if="showLogo">
    <logo-animation />
  </template>
</template>

<style lang="less">
body {
  transition: background-color 0.25s, box-shadow 0.25s;

  * {
    transition: background-color 0.25s, box-shadow 0.25s;
  }
}
</style>
