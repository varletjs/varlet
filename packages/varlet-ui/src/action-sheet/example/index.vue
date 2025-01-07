<script setup>
import { reactive, ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { ActionSheet, Snackbar } from '@varlet/ui'
import { t, use } from './locale'

const rawActions = [
  {
    name: 'Item 01',
    icon: 'account-circle',
  },
  {
    name: 'Item 02',
    icon: 'notebook',
  },
  {
    name: 'Item 03',
    icon: 'wifi',
  },
]
const rawDisabledActions = [
  {
    name: 'Item 01',
    icon: 'account-circle',
  },
  {
    name: 'Item 02',
    icon: 'notebook',
  },
  {
    name: 'Item 03',
    icon: 'wifi',
    disabled: true,
  },
]
const rawCustomStyleActions = [
  {
    name: 'Item 01',
    icon: 'account-circle',
    color: 'var(--color-success)',
  },
  {
    name: 'Item 02',
    icon: 'notebook',
    color: 'var(--color-warning)',
  },
  {
    name: 'Item 03',
    icon: 'wifi',
    color: 'var(--color-info)',
  },
]
const actions = reactive(rawActions)
const disabledActions = reactive(rawDisabledActions)
const customStyleActions = reactive(rawCustomStyleActions)
const show = ref(false)
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)

watchLang(use)
onThemeChange()

async function createBasic() {
  const action = await ActionSheet({ actions: rawActions })

  action !== 'close' && Snackbar(`${t('yourSelected')}${action.name}`)
}

async function modifyTitle() {
  const action = await ActionSheet({
    actions: rawActions,
    title: t('customTitle'),
  })
  action !== 'close' && Snackbar(`${t('yourSelected')}${action.name}`)
}

async function disableAction() {
  const action = await ActionSheet({
    actions: rawDisabledActions,
  })

  action !== 'close' && Snackbar(`${t('yourSelected')}${action.name}`)
}

async function customActionStyles() {
  const action = await ActionSheet({
    actions: rawCustomStyleActions,
  })

  action !== 'close' && Snackbar(`${t('yourSelected')}${action.name}`)
}

function disableCloseOnClickAction() {
  ActionSheet({
    actions: [
      {
        name: 'Item 01',
        icon: 'account-circle',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
      },
    ],
    closeOnClickAction: false,
    onSelect: (action) => Snackbar(`${t('yourSelected')}${action.name}`),
  })
}

function handleSelect(action) {
  Snackbar(`${t('yourSelected')}${action.name}`)
}
</script>

<template>
  <app-type>{{ t('functionCall') }}</app-type>
  <var-space direction="column" :size="['3vmin', '4vmin']">
    <var-button type="primary" block @click="createBasic">{{ t('basicUsage') }}</var-button>
    <var-button type="primary" block @click="modifyTitle">{{ t('modifyTitle') }}</var-button>
    <var-button type="primary" block @click="disableAction">{{ t('disabled') }}</var-button>
    <var-button type="primary" block @click="disableCloseOnClickAction"
      >{{ t('disableCloseOnClickAction') }}
    </var-button>
    <var-button type="primary" block @click="customActionStyles">{{ t('customActionStyles') }}</var-button>
  </var-space>

  <app-type>{{ t('componentCall') }}</app-type>
  <var-space direction="column" :size="['3vmin', '4vmin']">
    <var-button type="warning" block @click="show = true">{{ t('basicUsage') }}</var-button>
    <var-button type="warning" block @click="show1 = true">{{ t('modifyTitle') }}</var-button>
    <var-button type="warning" block @click="show2 = true">{{ t('disabled') }}</var-button>
    <var-button type="warning" block @click="show3 = true">{{ t('disableCloseOnClickAction') }}</var-button>
    <var-button type="warning" block @click="show4 = true">{{ t('customActionStyles') }}</var-button>
  </var-space>

  <var-action-sheet v-model:show="show" :actions="actions" @select="handleSelect" />
  <var-action-sheet v-model:show="show1" :title="t('customTitle')" :actions="actions" @select="handleSelect" />
  <var-action-sheet v-model:show="show2" :actions="disabledActions" @select="handleSelect" />
  <var-action-sheet v-model:show="show3" :close-on-click-action="false" :actions="actions" @select="handleSelect" />
  <var-action-sheet v-model:show="show4" :actions="customStyleActions" @select="handleSelect" />
</template>
