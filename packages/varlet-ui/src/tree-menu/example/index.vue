<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { computed, h, ref } from 'vue'
import { RouterLink } from 'vue-router'
import VarBadge from '../../badge'
import VarTooltip from '../../tooltip'
import { t, use } from './locale'

const basicActive = ref('overview')
const accordionActive = ref('projects')
const customActive = ref('tooltip')
const groupActive = ref('overview')
const fieldKeysActive = ref('users')
const disabledActive = ref('profile')
const rippleActive = ref('overview')
const dynamicActive = ref('settings')
const showSecurity = ref(true)
const slotsActive = ref('overview')
const indentActive = ref('projects')

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
        value: 'custom-label-icon',
        label: () =>
          h('span', { style: { display: 'inline-flex', alignItems: 'center' } }, [
            t('customLabelIcon'),
            h(VarBadge, { style: { marginLeft: '12px' }, type: 'primary', value: 12 }),
          ]),
        icon: () => h(VarBadge, { type: 'primary', dot: true }),
      },
      {
        value: 'link',
        label: t('linkMenu'),
        icon: 'github',
        render: ({ node }) =>
          h(
            'a',
            {
              href: 'https://github.com/varletjs/varlet',
              target: '_blank',
              rel: 'noreferrer',
              style: { display: 'block', color: 'inherit', textDecoration: 'none' },
            },
            node,
          ),
      },
      {
        value: 'tooltip',
        label: t('tooltipMenu'),
        icon: 'check',
        render: ({ node }) =>
          h(
            VarTooltip,
            {
              content: t('tooltipMenu'),
              placement: 'bottom',
              style: { display: 'block', width: '100%' },
            },
            {
              default: () => node,
            },
          ),
      },
      {
        value: 'router-link',
        label: t('routerLinkMenu'),
        icon: 'bookmark',
        render: ({ node }) =>
          h(
            RouterLink,
            {
              to: '/button',
              style: { display: 'block', color: 'inherit', textDecoration: 'none' },
            },
            {
              default: () => node,
            },
          ),
      },
    ],
  },
])

const groupOptions = computed(() => [
  {
    type: 'group',
    value: 'main',
    label: t('main'),
    children: [
      {
        value: 'overview',
        label: t('overview'),
        icon: 'home',
      },
      {
        value: 'workspace',
        label: t('workspace'),
        icon: 'notebook',
      },
    ],
  },
  {
    type: 'divider',
    value: 'main-divider',
  },
  {
    type: 'group',
    value: 'management',
    label: t('management'),
    children: [
      {
        value: 'settings',
        label: t('settings'),
        icon: 'cog',
      },
      {
        value: 'security',
        label: t('security'),
        icon: 'warning',
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

const dynamicOptions = computed(() => [
  {
    value: 'settings',
    label: t('settings'),
    icon: 'cog',
  },
  {
    value: 'security',
    label: t('security'),
    icon: 'warning',
    show: showSecurity.value,
  },
])
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-tree-menu v-model:active="basicActive" :options="options" class="tree-menu-example" />

  <app-type>{{ t('accordion') }}</app-type>
  <var-tree-menu v-model:active="accordionActive" :options="options" accordion class="tree-menu-example" />

  <app-type>{{ t('menuGroup') }}</app-type>
  <var-tree-menu v-model:active="groupActive" :options="groupOptions" class="tree-menu-example" />

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

  <app-type>{{ t('ripple') }}</app-type>
  <var-tree-menu v-model:active="rippleActive" :options="options" ripple class="tree-menu-example" />

  <app-type>{{ t('dynamicShow') }}</app-type>
  <var-switch v-model="showSecurity" variant />
  <var-tree-menu v-model:active="dynamicActive" :options="dynamicOptions" class="tree-menu-example" />

  <app-type>{{ t('slots') }}</app-type>
  <var-tree-menu v-model:active="slotsActive" :options="options" class="tree-menu-example">
    <template #start>
      <var-button fab type="primary">
        <var-icon name="plus" />
      </var-button>
    </template>

    <template #end>
      <var-button fab type="primary">
        <var-icon name="plus" />
      </var-button>
    </template>
  </var-tree-menu>

  <app-type>{{ t('customIndent') }}</app-type>
  <var-tree-menu v-model:active="indentActive" :options="options" indent="32px" class="tree-menu-example" />

  <app-type>{{ t('customRender') }}</app-type>
  <var-tree-menu v-model:active="customActive" :options="customOptions" class="tree-menu-example" />
</template>

<style>
.tree-menu-example {
  width: 320px;
}
</style>
