<script setup>
import { Snackbar, Icon, Button } from '@varlet/ui'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { reactive, toRefs, onBeforeUnmount, h } from 'vue'
import { t, use } from './locale'

const shows = reactive({
  show1: false,
  show2: false,
  show3: false,
  show4: false,
  show5: false,
  show9: false,
})

const VarSnackbar = Snackbar.Component

const { show1, show2, show3, show4, show5, show9 } = toRefs(shows)

onBeforeUnmount(() => {
  Snackbar.allowMultiple(false)
})

watchLang(use)
onThemeChange()

function changeValue(type) {
  shows[type] = !shows[type]
}

function create(type) {
  const text = type === 'loading' ? t('wait') : t('text')
  const snackbar = Snackbar[type](text)

  if (type === 'loading') {
    setTimeout(() => {
      snackbar.clear()
      Snackbar.success(t('loaded'))
    }, 2000)
  }
}

function createSnackbar(type) {
  if (type === 'time') {
    Snackbar({
      content: t('text'),
      duration: 1000,
    })
  }

  if (type === 'position') {
    Snackbar({
      content: t('text'),
      position: 'bottom',
    })
  }

  if (type === 'custom') {
    const customSnackbar = Snackbar({
      content: 'Hello, Varlet',
      icon: () => h(Icon, { name: 'heart', style: { paddingRight: '12px' } }),
      action: () =>
        h(
          Button,
          { size: 'small', type: 'primary', onClick: () => customSnackbar.clear() },
          { default: () => t('close') }
        ),
    })
  }

  if (!type) {
    Snackbar(t('text'))
  }
}

function openMultiple() {
  Snackbar.allowMultiple(true)

  const snackbar1 = Snackbar('Snackbar 1')
  Snackbar.success('Snackbar 2')

  setTimeout(() => {
    snackbar1.clear()
  }, 1000)
}
</script>

<template>
  <app-type>{{ t('componentCall') }}</app-type>
  <var-space direction="column" :size="['3vmin', '4vmin']">
    <var-button type="primary" block @click="changeValue('show1')">{{ t('basicUsage') }}</var-button>
    <var-button type="primary" block @click="changeValue('show3')">{{ t('multiLine') }}</var-button>
    <var-button type="primary" block @click="changeValue('show2')">{{ t('bottomDisplay') }}</var-button>
    <var-button type="primary" block @click="changeValue('show4')">{{ t('hiddenTime') }}</var-button>
    <var-button type="primary" block @click="changeValue('show5')">{{ t('customIcon') }}</var-button>
    <var-button type="primary" block @click="changeValue('show9')">{{ t('forbidClick') }}</var-button>
  </var-space>

  <app-type>{{ t('functionCall') }}</app-type>
  <var-space direction="column" :size="['3vmin', '4vmin']">
    <var-button type="warning" block @click="createSnackbar()">{{ t('basicUsage') }}</var-button>
    <var-button type="warning" block @click="createSnackbar('time')">{{ t('hiddenTime') }}</var-button>
    <var-button type="warning" block @click="createSnackbar('position')">{{ t('bottomDisplay') }}</var-button>
    <var-button type="warning" block @click="createSnackbar('custom')">{{ t('custom') }}</var-button>
  </var-space>

  <app-type>{{ t('type') }}</app-type>
  <var-space direction="column" :size="['3vmin', '4vmin']">
    <var-button type="success" block @click="create('success')">{{ t('success') }}</var-button>
    <var-button type="warning" block @click="create('warning')">{{ t('warning') }}</var-button>
    <var-button type="info" block @click="create('info')">{{ t('info') }}</var-button>
    <var-button type="danger" block @click="create('error')">{{ t('error') }}</var-button>
    <var-button type="primary" block @click="create('loading')">{{ t('loading') }}</var-button>
  </var-space>

  <app-type>{{ t('multiple') }}</app-type>
  <var-button type="primary" block @click="openMultiple">{{ t('multiple') }}</var-button>

  <div class="snackbar-demo">
    <var-snackbar v-model:show="show1">
      {{ t('text') }}
    </var-snackbar>

    <var-snackbar v-model:show="show2" position="bottom">
      {{ t('text') }}
      <template #action>
        <var-button type="primary" :elevation="false" size="small" @click="show2 = false">{{ t('close') }}</var-button>
      </template>
    </var-snackbar>

    <var-snackbar v-model:show="show3" :vertical="true">
      {{ t('text') }}
      <template #action>
        <var-button type="primary" :elevation="false" size="small" @click="show3 = false">{{ t('close') }}</var-button>
      </template>
    </var-snackbar>

    <var-snackbar v-model:show="show4" :duration="1000">
      {{ t('text') }}
    </var-snackbar>

    <var-snackbar v-model:show="show5">
      {{ t('text') }}
      <template #icon>
        <var-icon name="heart-outline" />
      </template>
    </var-snackbar>

    <var-snackbar v-model:show="show9" :forbid-click="true">
      {{ t('text') }}
    </var-snackbar>
  </div>
</template>
