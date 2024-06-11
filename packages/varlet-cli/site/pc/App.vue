<script lang="ts">
import config from '@config'
import { defineComponent, onMounted, ref } from 'vue'
import { getPCLocationInfo, getMobileIndex } from '@varlet/cli/client'
import { isPhone } from '../utils'

export default defineComponent({
  setup() {
    const useMobile = ref(config?.useMobile)
    const defaultLanguage = config?.defaultLanguage

    const init = () => {
      const { language, menuName } = getPCLocationInfo()

      if (isPhone() && useMobile.value) {
        window.location.href = `${getMobileIndex()}#/${menuName}?language=${
          language || defaultLanguage
        }&platform=mobile`
        return
      }
    }

    onMounted(init)
  },
})
</script>

<template>
  <router-view></router-view>
</template>

<style lang="less">
body {
  transition: background-color 0.25s, box-shadow 0.25s;

  * {
    transition: background-color 0.25s, box-shadow 0.25s;
  }
}
</style>
