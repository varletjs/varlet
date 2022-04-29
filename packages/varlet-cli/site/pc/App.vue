<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import LogoAnimation from "./components/LogoAnimation.vue";
import { getPCLocationInfo, isPhone, MenuTypes } from '../utils'
import { get } from 'lodash-es'
import config from '@config'

export default defineComponent({
  components: {
    LogoAnimation
  },
  setup() {
    const showLogo = ref<boolean>(false);
    const useMobile = ref(get(config, 'useMobile'))
    const defaultLanguage = get(config, 'defaultLanguage')

    const init = () => {
      const { language, menuName } = getPCLocationInfo()

      if (isPhone() && useMobile.value) {
        window.location.href = `./mobile.html#/${menuName}?language=${language || defaultLanguage}&platform=mobile`
        return
      }
      showLogo.value = true;
    }

    onMounted(init);

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
