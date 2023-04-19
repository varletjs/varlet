<script setup>
import Snackbar from '../index'
import VarButton from '../../button'
import VarSpace from '../../space'
import VarIcon from '../../icon'
import dark from '../../themes/dark'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { reactive, toRefs, onBeforeUnmount, h } from 'vue'
import { pack, use } from './locale'

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

function changeValue(type) {
  shows[type] = !shows[type]
}

function create(type) {
  const text = type === 'loading' ? pack.value.wait : pack.value.text
  const snackbar = Snackbar[type](text)

  if (type === 'loading') {
    setTimeout(() => {
      snackbar.clear()
      Snackbar.success(pack.value.loaded)
    }, 2000)
  }
}

function createSnackbar(type) {
  if (type === 'time') {
    Snackbar({
      content: pack.value.text,
      duration: 1000,
    })
  }

  if (type === 'position') {
    Snackbar({
      content: pack.value.text,
      position: 'bottom',
    })
  }

  if (type === 'custom') {
    const customSnackbar = Snackbar({
      content: 'Hello, Varlet',
      icon: () => h(VarIcon, { name: 'heart', style: { paddingRight: '12px' } }),
      action: () =>
        h(
          VarButton,
          { size: 'small', type: 'primary', onClick: () => customSnackbar.clear() },
          { default: () => pack.value.close }
        ),
    })
  }

  if (!type) {
    Snackbar(pack.value.text)
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

onBeforeUnmount(() => {
  Snackbar.allowMultiple(false)
})

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.componentCall }}</app-type>
  <var-space direction="column" :size="['3vw', '4vw']">
    <var-button type="primary" block @click="changeValue('show1')">{{ pack.basicUsage }}</var-button>
    <var-button type="primary" block @click="changeValue('show3')">{{ pack.multiLine }}</var-button>
    <var-button type="primary" block @click="changeValue('show2')">{{ pack.bottomDisplay }}</var-button>
    <var-button type="primary" block @click="changeValue('show4')">{{ pack.hiddenTime }}</var-button>
    <var-button type="primary" block @click="changeValue('show5')">{{ pack.customIcon }}</var-button>
    <var-button type="primary" block @click="changeValue('show9')">{{ pack.forbidClick }}</var-button>
  </var-space>

  <app-type>{{ pack.functionCall }}</app-type>
  <var-space direction="column" :size="['3vw', '4vw']">
    <var-button type="warning" block @click="createSnackbar()">{{ pack.basicUsage }}</var-button>
    <var-button type="warning" block @click="createSnackbar('time')">{{ pack.hiddenTime }}</var-button>
    <var-button type="warning" block @click="createSnackbar('position')">{{ pack.bottomDisplay }}</var-button>
    <var-button type="warning" block @click="createSnackbar('custom')">{{ pack.custom }}</var-button>
  </var-space>

  <app-type>{{ pack.type }}</app-type>
  <var-space direction="column" :size="['3vw', '4vw']">
    <var-button type="success" block @click="create('success')">{{ pack.success }}</var-button>
    <var-button type="warning" block @click="create('warning')">{{ pack.warning }}</var-button>
    <var-button type="info" block @click="create('info')">{{ pack.info }}</var-button>
    <var-button type="danger" block @click="create('error')">{{ pack.error }}</var-button>
    <var-button type="primary" block @click="create('loading')">{{ pack.loading }}</var-button>
  </var-space>

  <app-type>{{ pack.multiple }}</app-type>
  <var-button type="primary" block @click="openMultiple">{{ pack.multiple }}</var-button>

  <div class="snackbar-demo">
    <var-snackbar v-model:show="show1">
      {{ pack.text }}
    </var-snackbar>

    <var-snackbar v-model:show="show2" position="bottom">
      {{ pack.text }}
      <template #action>
        <var-button type="primary" size="small" @click="show2 = false">{{ pack.close }}</var-button>
      </template>
    </var-snackbar>

    <var-snackbar v-model:show="show3" :vertical="true">
      {{ pack.text }}
      <template #action>
        <var-button type="primary" size="small" @click="show3 = false">{{ pack.close }}</var-button>
      </template>
    </var-snackbar>

    <var-snackbar v-model:show="show4" :duration="1000">
      {{ pack.text }}
    </var-snackbar>

    <var-snackbar v-model:show="show5" :duration="1000">
      {{ pack.text }}
      <template #icon>
        <var-icon name="heart-outline" />
      </template>
    </var-snackbar>

    <var-snackbar v-model:show="show9" :forbid-click="true">
      {{ pack.text }}
    </var-snackbar>
  </div>
</template>
