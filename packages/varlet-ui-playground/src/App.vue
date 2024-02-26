<script setup lang="ts">
import Header from './Header.vue'
import { ReplStore } from './store'
import { ref, watchEffect } from 'vue'
import { Repl } from '@vue/repl'
// @ts-ignore
import Monaco from '@vue/repl/monaco-editor'

const store = new ReplStore({
  serializedState: location.hash.slice(1),
})
const theme = ref(localStorage.getItem('varlet-ui-playground-theme') ?? 'md3DarkTheme')

function setVH() {
  document.documentElement.style.setProperty('--vh', window.innerHeight + `px`)
}

window.addEventListener('resize', setVH)
setVH()

// persist state
watchEffect(() => history.replaceState({}, '', store.serialize()))
</script>

<template>
  <Header :store="store" v-model:theme="theme" />
  <Repl
    :editor="Monaco"
    :store="store"
    :theme="theme?.toLowerCase().includes('dark') ? 'dark' : 'light'"
    :show-compile-output="true"
    :auto-resize="true"
    :clear-console="false"
    @keydown.ctrl.s.prevent
    @keydown.meta.s.prevent
  />
</template>

<style>
*::-webkit-scrollbar {
  display: none;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  margin: 0;

  --base: #444;
  --nav-height: 60px;

  color: var(--color-text);
}

.vue-repl {
  --color-branding: #5580f8 !important;
  --color-branding-dark: #5580f8 !important;

  height: calc(var(--vh) - var(--nav-height)) !important;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0;
  background-color: transparent;
}
</style>
