<script setup lang="ts">
import Header from './Header.vue'
import { ReplStore } from './store'
import { watchEffect } from 'vue'

const setVH = () => {
  document.documentElement.style.setProperty('--vh', window.innerHeight + `px`)
}

window.addEventListener('resize', setVH)
setVH()

const store = new ReplStore({
  serializedState: location.hash.slice(1),
  defaultVueRuntimeURL: import.meta.env.PROD ? undefined : `${location.origin}/src/vue-dev-proxy`,
})

// enable experimental features
const sfcOptions = {
  script: {
    reactivityTransform: true,
  },
}

// persist state
watchEffect(() => history.replaceState({}, '', store.serialize()))
</script>

<template>
  <Header :store="store" />
  <Repl
    @keydown.ctrl.s.prevent
    @keydown.meta.s.prevent
    :store="store"
    :show-compile-output="true"
    :auto-resize="true"
    :sfc-options="sfcOptions"
    :clear-console="false"
  />
</template>

<style>
body {
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  margin: 0;

  --base: #444;
  --nav-height: 50px;
}

.vue-repl {
  --color-branding: #5580f8 !important;
  --color-branding-dark: #5580f8 !important;

  height: calc(var(--vh) - var(--nav-height));
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0;
  background-color: transparent;
}
</style>
