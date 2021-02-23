<template>
  <div style="position: relative">
    <header>{{ componentName }}</header>
    <div class="router-view__block">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const componentName: Ref<string> = ref('')
    const route = useRoute()
    watch(
      () => route.path,
      (to: string) => {
        const index = to.lastIndexOf('/')
        const componentNameInner = to.slice(index + 1).replace(/-([a-z])/g, (all: string, i: string) => i.toUpperCase())
        componentName.value = componentNameInner[0]?.toUpperCase() + componentNameInner.slice(1)
      }
    )
    return {
      componentName,
    }
  },
})
</script>

<style lang="less">
@import '../varlet-ui/src/styles/var';

body {
  margin: 0;
  padding: 0;
  background: white;
  min-height: 100%;
  font-family: '微软雅黑 Light', sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}

header {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: @color-primary;
  color: #fff;
  font-size: 18px;
  line-height: 40px;
  height: 40px;
  position: fixed;
  z-index: 1;
  width: 100%;
  font-weight: bold;
}

.router-view__block {
  padding: 45px 15px 30px;
}

* {
  box-sizing: border-box;
}
</style>
