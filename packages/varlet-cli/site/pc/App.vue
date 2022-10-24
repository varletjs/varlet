<script lang="ts">
import config from '@config'
import LogoAnimation from './components/LogoAnimation.vue'
import { defineComponent, onMounted, ref } from 'vue'
import { getPCLocationInfo, isPhone } from '@varlet/cli/client'
import { get } from 'lodash-es'

export default defineComponent({
  components: {
    LogoAnimation
  },
  setup() {
    const useMobile = ref(get(config, 'useMobile'))
    const defaultLanguage = get(config, 'defaultLanguage')

    const init = () => {
      const { language, menuName } = getPCLocationInfo()

      if (isPhone() && useMobile.value) {
        window.location.href = `./mobile.html#/${menuName}?language=${language || defaultLanguage}&platform=mobile`
        return
      }
    }

    onMounted(init)
  }
})
</script>

<template>
  <router-view></router-view>
  <logo-animation />
</template>

<style lang="less">
body {
  transition: background-color 0.25s, box-shadow 0.25s;

  * {
    transition: background-color 0.25s, box-shadow 0.25s;
  }
}
</style>
