<script setup lang="ts">
import Sun from './icons/Sun.vue'
import Moon from './icons/Moon.vue'
import GitHub from './icons/GitHub.vue'
import Share from './icons/Share.vue'
import Download from './icons/Download.vue'
import Close from './icons/Close.vue'
import { downloadProject } from './download/download'
import { onMounted, ref } from 'vue'
import { Themes } from '@varlet/ui'

const inIframe = ref(Boolean(window.parent))

// eslint-disable-next-line no-undef
const props = defineProps(['store'])

async function copyLink() {
  await navigator.clipboard.writeText(location.href)
  Snackbar.success('Sharable URL has been copied to clipboard.')
}

function toggleDark() {
  const cls = document.documentElement.classList
  cls.toggle('dark')
  const saved = String(cls.contains('dark'))
  localStorage.setItem('varlet-ui-playground-prefer-dark', saved)

  StyleProvider(saved === 'true' ? Themes.dark : null)

  notifyEmulatorThemeChange()
  notifyParentThemeChange()
}

function notifyEmulatorThemeChange() {
  setTimeout(() => {
    window[0].postMessage({
      action: 'theme-change',
      value: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
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
      data: document.documentElement.classList.contains('dark') ? 'darkTheme' : 'lightTheme',
      from: 'playground',
    },
    '*'
  )
}

function handleClose() {
  window.parent.postMessage({ action: 'playground-close' }, '*')
}

function getURLInitialTheme() {
  const search = new URLSearchParams(window.location.search)

  return search.get('initialTheme')
}

onMounted(() => {
  const cls = document.documentElement.classList

  const initialTheme = getURLInitialTheme()

  if (initialTheme) {
    localStorage.setItem('varlet-ui-playground-prefer-dark', initialTheme === 'light' ? 'false' : 'true')
  }

  const saved = localStorage.getItem('varlet-ui-playground-prefer-dark')
  if (saved !== 'false') {
    cls.add('dark')
    StyleProvider(Themes.dark)
  }

  notifyEmulatorThemeChange()
})
</script>

<template>
  <nav>
    <Close class="close" v-if="inIframe" @click="handleClose" />
    <h1 v-else>
      <img alt="logo" src="./logo.svg" />
      <span>Varlet UI Playground</span>
    </h1>
    <div class="links">
      <button title="Toggle dark mode" class="toggle-dark" @click="toggleDark">
        <Sun class="light" />
        <Moon class="dark" />
      </button>
      <button title="Copy sharable URL" class="share" @click="copyLink">
        <Share />
      </button>
      <button title="Download project files" class="download" @click="downloadProject(props.store)">
        <Download />
      </button>
      <button title="View on GitHub" class="github">
        <a href="https://github.com/varletjs/varlet" target="_blank">
          <GitHub />
        </a>
      </button>
    </div>
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
  display: inline-block;
  vertical-align: middle;
}

h1 img {
  height: 24px;
  vertical-align: middle;
  margin-right: 10px;
  position: relative;
  top: -2px;
}

@media (max-width: 560px) {
  h1 span {
    font-size: 0.9em;
  }
}

@media (max-width: 520px) {
  h1 span {
    display: none;
  }
}

.links {
  display: flex;
}

.close {
  cursor: pointer;
}

.toggle-dark svg {
  width: 18px;
  height: 18px;
  fill: #666;
}

.toggle-dark .dark,
.dark .toggle-dark .light {
  display: none;
}

.dark .toggle-dark .dark {
  display: inline-block;
}
</style>
