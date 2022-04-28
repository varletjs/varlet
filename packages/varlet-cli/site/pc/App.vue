<template>
  <router-view></router-view>
  <logo-animation />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogoAnimation from "./components/LogoAnimation.vue";
export default defineComponent({
  components:{
    LogoAnimation
  }
})
</script>

