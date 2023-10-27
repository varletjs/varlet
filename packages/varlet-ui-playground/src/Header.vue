<script setup lang="ts">
import Sun from './icons/Sun.vue'
import Moon from './icons/Moon.vue'
import GitHub from './icons/GitHub.vue'
import Share from './icons/Share.vue'
import Download from './icons/Download.vue'
import Close from './icons/Close.vue'
import { downloadProject } from './download/download'
import { nextTick, onMounted, ref, watch } from 'vue'
import { Snackbar, StyleProvider, Themes } from '@varlet/ui'
import { usePreviewVersion } from './utils/env'

// eslint-disable-next-line vue/require-prop-types
const props = defineProps(['store', 'dark'])
const emit = defineEmits(['update:dark'])
const inIframe = ref(window.self !== window.top)
const currentVueVersion = ref('')
const currentVarletVersion = ref('')
const vueVersions = ref<string[]>([])
const varletVersions = ref<string[]>([])

async function copyLink() {
  await navigator.clipboard.writeText(location.href)
  Snackbar('Sharable URL has been copied to clipboard')
}

function openGithub() {
  window.open('https://github.com/varletjs/varlet', '_blank')
}

function toggleDark() {
  emit('update:dark', !props.dark)
}

function notifyEmulatorThemeChange() {
  setTimeout(() => {
    window[0].postMessage({
      action: 'theme-change',
      value: props.dark ? 'dark' : 'light',
    })
  })
}

function notifyParentThemeChange() {
  if (!inIframe.value) {
    return
  }

  // varlet documentation need this
  window.parent.postMessage(
    {
      action: 'theme-change',
      data: props.dark ? 'darkTheme' : 'lightTheme',
      from: 'playground',
    },
    '*'
  )
}

function handleClose() {
  window.parent.postMessage({ action: 'playground-close' }, '*')
}

function getInitialTheme() {
  const search = new URLSearchParams(window.location.search)

  return search.get('initialTheme')
}

function syncTheme() {
  localStorage.setItem('varlet-ui-playground-prefer-dark', String(props.dark))
  StyleProvider(props.dark ? Themes.dark : null)

  props.dark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  notifyEmulatorThemeChange()
  notifyParentThemeChange()
}

async function fetchVueVersions() {
  const res = await fetch('https://api.github.com/repos/vuejs/core/releases?per_page=100')
  const releases: any[] = await res.json()
  const versions = releases.map((r) => (/^v/.test(r.tag_name) ? r.tag_name.slice(1) : r.tag_name))
  vueVersions.value = versions
}

async function fetchVarletVersions() {
  const res = await fetch('https://api.github.com/repos/varletjs/varlet/releases?per_page=100')
  const releases: any[] = await res.json()
  const versions = releases
    .map((r) => (/^v/.test(r.tag_name) ? r.tag_name.slice(1) : r.tag_name))
    .filter((version) => !version.startsWith('1'))

  if (usePreviewVersion) {
    versions.unshift('preview')
  }

  varletVersions.value = versions
}

async function setVueVersion(v: string) {
  await props.store.setVueVersion(v)
}

async function setVarletVersion(v: string) {
  await props.store.setVarletVersion(v)
}

onMounted(() => {
  document.documentElement.classList.add('dark')

  const initialTheme = getInitialTheme()
  if (initialTheme) {
    emit('update:dark', initialTheme !== 'light')
  }

  fetchVueVersions()
  fetchVarletVersions()
  nextTick().then(syncTheme)
})

watch(() => props.dark, syncTheme)
watch(() => currentVueVersion.value, setVueVersion)
watch(() => currentVarletVersion.value, setVarletVersion)
</script>

<template>
  <nav>
    <Close class="close" v-if="inIframe" @click="handleClose" />
    <h1 v-else>
      <img alt="logo" src="./logo.svg" />
      <span>Varlet UI Playground</span>
    </h1>
    <var-space align="center">
      <var-select
        style="width: 210px"
        :offset-y="8"
        variant="outlined"
        size="small"
        placeholder="Varlet Version"
        v-model="currentVarletVersion"
      >
        <var-option v-for="v in varletVersions" :key="v" :label="`${v === 'preview' ? '' : 'v'}${v}`" :value="v" />
      </var-select>
      <var-select
        style="width: 210px"
        :offset-y="8"
        variant="outlined"
        size="small"
        placeholder="Vue Version"
        v-model="currentVueVersion"
      >
        <var-option v-for="v in vueVersions" :key="v" :label="`v${v}`" :value="v" />
      </var-select>

      <var-tooltip content="Toggle Theme">
        <var-button class="link-button" text round @click="toggleDark">
          <Moon v-if="dark" />
          <Sun v-else />
        </var-button>
      </var-tooltip>

      <var-tooltip content="Copy Link">
        <var-button class="link-button" text round @click="copyLink">
          <Share />
        </var-button>
      </var-tooltip>

      <var-tooltip content="Download Project">
        <var-button class="link-button" text round @click="downloadProject(store)">
          <Download />
        </var-button>
      </var-tooltip>

      <var-tooltip content="Open Github" placement="bottom-end">
        <var-button class="link-button" text round @click="openGithub">
          <GitHub />
        </var-button>
      </var-tooltip>
    </var-space>
  </nav>
</template>

<style>
nav {
  --bg: #fff;
  --bg-light: #fff;
  --border: #ddd;

  color: var(--base);
  height: var(--nav-height);
  box-sizing: border-box;
  padding: 0 1em;
  background-color: var(--bg);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.33);
  position: relative;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dark nav {
  --base: #ddd;
  --bg: #1a1a1a;
  --bg-light: #242424;
  --border: #383838;

  box-shadow: none;
  border-bottom: 1px solid var(--border);
}

h1 {
  margin: 0;
  line-height: var(--nav-height);
  font-weight: 500;
  display: flex;
  align-items: center;
}

h1 img {
  width: 32px;
  height: 32px;
  vertical-align: middle;
  margin-right: 12px;
  position: relative;
}

@media (max-width: 1000px) {
  h1 span {
    display: none;
  }
}

@media (max-width: 700px) {
  .var-select {
    display: none;
  }
}

.close {
  cursor: pointer;
}

.link-button svg {
  width: 23px;
  height: 23px;
  fill: var(--color-text);
}
</style>
