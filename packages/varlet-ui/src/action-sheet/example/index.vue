<template>
  <app-type>{{ pack.functionCall }}</app-type>
  <var-button type="primary" block @click="createBasic">{{ pack.basicUsage }}</var-button>
  <var-button type="primary" block @click="modifyTitle">{{ pack.modifyTitle }}</var-button>
  <var-button type="primary" block @click="disableAction">{{ pack.disabled }}</var-button>
  <var-button type="primary" block @click="disableCloseOnClickAction">{{ pack.disableCloseOnClickAction }}</var-button>
  <var-button type="primary" block @click="customActionStyles">{{ pack.customActionStyles }}</var-button>

  <app-type>{{ pack.componentCall }}</app-type>
  <var-button type="warning" block @click="show = true">{{ pack.basicUsage }}</var-button>
  <var-action-sheet :actions="actions" v-model:show="show" @select="handleSelect" />

  <var-button type="warning" block @click="show1 = true">{{ pack.modifyTitle }}</var-button>
  <var-action-sheet :title="pack.customTitle" :actions="actions" v-model:show="show1" @select="handleSelect" />

  <var-button type="warning" block @click="show2 = true">{{ pack.disabled }}</var-button>
  <var-action-sheet :actions="disabledActions" v-model:show="show2" @select="handleSelect" />

  <var-button type="warning" block @click="show3 = true">{{ pack.disableCloseOnClickAction }}</var-button>
  <var-action-sheet :close-on-click-action="false" :actions="actions" v-model:show="show3" @select="handleSelect" />

  <var-button type="warning" block @click="show4 = true">{{ pack.customActionStyles }}</var-button>
  <var-action-sheet :actions="customStyleActions" v-model:show="show4" @select="handleSelect" />
</template>

<script>
import ActionSheet from '../index'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarButton from '../../button'
import Snackbar from '../../snackbar'
import dark from '../../themes/dark'
import { ref, reactive, onUnmounted } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

export default {
  name: 'ActionSheetExample',
  components: {
    VarActionSheet: ActionSheet.Component,
    VarButton,
    AppType,
  },
  setup() {
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
        color: '#00c48f',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
        color: '#ff9800',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
        color: '#00afef',
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

    const createBasic = async () => {
      const action = await ActionSheet({ actions: rawActions })

      action !== 'close' && Snackbar(`${pack.value.yourSelected}${action.name}`)
    }

    const modifyTitle = async () => {
      const action = await ActionSheet({
        actions: rawActions,
        title: pack.value.customTitle,
      })

      action !== 'close' && Snackbar(`${pack.value.yourSelected}${action.name}`)
    }

    const disableAction = async () => {
      const action = await ActionSheet({
        actions: rawDisabledActions,
      })

      action !== 'close' && Snackbar(`${pack.value.yourSelected}${action.name}`)
    }

    const customActionStyles = async () => {
      const action = await ActionSheet({
        actions: rawCustomStyleActions,
      })

      action !== 'close' && Snackbar(`${pack.value.yourSelected}${action.name}`)
    }

    const disableCloseOnClickAction = () => {
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
        onSelect: (action) => Snackbar(`${pack.value.yourSelected}${action.name}`),
      })
    }

    const handleSelect = (action) => {
      Snackbar(`${pack.value.yourSelected}${action.name}`)
    }

    watchLang(use)
    watchDarkMode(dark)

    return {
      pack,
      show,
      show1,
      show2,
      show3,
      show4,
      actions,
      disabledActions,
      customStyleActions,
      createBasic,
      modifyTitle,
      disableAction,
      customActionStyles,
      handleSelect,
      disableCloseOnClickAction,
    }
  },
}
</script>

<style scoped lang="less">
.var-button {
  margin-top: 10px;
}
</style>
