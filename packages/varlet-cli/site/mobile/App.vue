<template>
  <div style="position: relative">
    <header>{{ componentName }}</header>
    <div class="router-view__block">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      componentName: '',
    }
  },
  watch: {
    $route(this: any, to: any) {
      const index = to.path.lastIndexOf('/')
      const componentName = to.path.slice(index + 1).replace(/-([a-z])/g, (all: string, i: string) => i.toUpperCase())
      this.componentName = componentName[0]?.toUpperCase() + componentName.slice(1)
    },
  },
}
</script>

<style lang="less">
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
  background-color: #fff;
  font-weight: 500;
  font-size: 18px;
  height: 80px;
  position: fixed;
  z-index: 1;
  width: 100%;
}

.router-view__block {
  padding: 80px 15px 30px;
}

* {
  box-sizing: border-box;
}
</style>
