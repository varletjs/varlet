<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { computed, h, ref } from 'vue'
import { t, use } from './locale'

const basicActive = ref('overview')
const accordionActive = ref('projects')
const controlledActive = ref('reports')
const customActive = ref('tasks')
const fieldKeysActive = ref('users')
const disabledActive = ref('profile')
const controlledExpandedValues = ref(['analytics'])

watchLang(use)
onThemeChange()

const options = computed(() => [
  {
    value: 'overview',
    label: t('overview'),
    icon: 'home',
  },
  {
    value: 'workspace',
    label: t('workspace'),
    icon: 'notebook',
    children: [
      {
        value: 'projects',
        label: t('projects'),
        icon: 'star',
      },
      {
        value: 'tasks',
        label: t('tasks'),
        icon: 'check',
      },
    ],
  },
  {
    value: 'analytics',
    label: t('analytics'),
    icon: 'information',
    children: [
      {
        value: 'reports',
        label: t('reports'),
        icon: 'bookmark',
      },
    ],
  },
  {
    value: 'settings',
    label: t('settings'),
    icon: 'cog',
    children: [
      {
        value: 'profile',
        label: t('profile'),
        icon: 'account-circle',
      },
      {
        value: 'security',
        label: t('security'),
        icon: 'warning',
      },
    ],
  },
])

const customOptions = computed(() => [
  {
    value: 'workspace',
    label: t('workspace'),
    icon: 'notebook',
    children: [
      {
        value: 'projects',
        label: (option, active) =>
          h(
            'span',
            { class: ['tree-menu-example__custom-label', active && 'tree-menu-example__custom-label--active'] },
            [t('projects'), h('span', { class: 'tree-menu-example__tag' }, '12')],
          ),
        icon: () => h('span', { class: 'tree-menu-example__dot' }),
      },
      {
        value: 'tasks',
        label: t('tasks'),
        icon: 'check',
      },
    ],
  },
])

const fieldKeyOptions = computed(() => [
  {
    key: 'system',
    title: t('system'),
    iconName: 'cog',
    items: [
      {
        key: 'users',
        title: t('users'),
        iconName: 'account-circle',
      },
      {
        key: 'roles',
        title: t('roles'),
        iconName: 'information',
      },
    ],
  },
])

const disabledOptions = computed(() => [
  {
    value: 'settings',
    label: t('settings'),
    icon: 'cog',
    children: [
      {
        value: 'profile',
        label: t('profile'),
        icon: 'account-circle',
      },
      {
        value: 'security',
        label: t('security'),
        icon: 'warning',
        disabled: true,
      },
    ],
  },
  {
    value: 'archived',
    label: t('archived'),
    icon: 'delete',
    disabled: true,
  },
])
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-tree-menu v-model:active="basicActive" :options="options" class="tree-menu-example" />

  <app-type>{{ t('accordion') }}</app-type>
  <var-tree-menu v-model:active="accordionActive" :options="options" accordion class="tree-menu-example" />

  <app-type>{{ t('controlledExpandedValues') }}</app-type>
  <var-tree-menu
    v-model:active="controlledActive"
    v-model:expanded-values="controlledExpandedValues"
    :options="options"
    class="tree-menu-example"
  />

  <app-type>{{ t('customRender') }}</app-type>
  <var-tree-menu v-model:active="customActive" :options="customOptions" class="tree-menu-example" />

  <app-type>{{ t('fieldKeys') }}</app-type>
  <var-tree-menu
    v-model:active="fieldKeysActive"
    :options="fieldKeyOptions"
    value-key="key"
    label-key="title"
    icon-key="iconName"
    children-key="items"
    class="tree-menu-example"
  />

  <app-type>{{ t('disabled') }}</app-type>
  <var-tree-menu v-model:active="disabledActive" :options="disabledOptions" class="tree-menu-example" />
</template>

<style>
.tree-menu-example {
  width: 320px;
}

.tree-menu-example__custom-label {
  display: inline-flex;
  max-width: 100%;
  align-items: center;
}

.tree-menu-example__custom-label--active {
  font-weight: 600;
}

.tree-menu-example__tag {
  height: 18px;
  min-width: 18px;
  padding: 0 5px;
  margin-left: 8px;
  border-radius: 9px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  color: var(--color-on-primary);
  font-size: 12px;
  line-height: 18px;
}

.tree-menu-example__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-primary);
}
</style>
