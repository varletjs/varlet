<script setup>
import { Themes, StyleProvider } from '@varlet/ui'
import { AppType, getBrowserTheme, watchLang, getSiteStyleVars, onThemeChange } from '@varlet/cli/client'
import { ref, reactive, onUnmounted } from 'vue'
import { use, t } from './locale'

const VarStyleProvider = StyleProvider.Component

const state = reactive({
  score: 5,
  license: true,
})

const styleVars = ref(null)

let isRootStyleChanged = false

const successTheme = {
  '--rate-primary-color': 'var(--color-success)',
  '--button-primary-color': 'var(--color-success)',
  '--switch-handle-active-background': 'var(--color-success)',
  '--switch-track-active-background': 'var(--color-success)',
}

const themeMap = {
  lightTheme: null,
  darkTheme: Themes.dark,
  md3LightTheme: Themes.md3Light,
  md3DarkTheme: Themes.md3Dark,
}

watchLang(use)

onThemeChange(() => {
  isRootStyleChanged = false
})

onUnmounted(() => {
  const siteTheme = getBrowserTheme()
  StyleProvider({ ...getSiteStyleVars(siteTheme), ...themeMap[siteTheme] })
})

function toggleTheme() {
  styleVars.value = styleVars.value ? null : successTheme
}

function toggleRootTheme() {
  const siteTheme = getBrowserTheme()
  const styleVars = isRootStyleChanged
    ? themeMap[siteTheme]
    : {
        ...themeMap[siteTheme],
        ...{
          '--color-primary': 'var(--color-info)',
        },
      }
  StyleProvider({ ...getSiteStyleVars(siteTheme), ...styleVars })
  isRootStyleChanged = !isRootStyleChanged
}
</script>

<template>
  <app-type>{{ t('componentCall') }}</app-type>
  <var-style-provider :style-vars="styleVars">
    <var-rate v-model="state.score" />
    <var-switch v-model="state.license" />
    <var-button style="margin-top: 10px" type="primary" block @click="toggleTheme">{{ t('toggleTheme') }}</var-button>
  </var-style-provider>

  <app-type>{{ t('functionCall') }}</app-type>
  <var-button type="primary" block @click="toggleRootTheme">{{ t('toggleRootTheme') }}</var-button>
</template>
