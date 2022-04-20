<template>
  <div class="var-site-code-example">
    <div class="var-site-code-example__toolbar">
      <var-site-button text round @click="toggle" v-if="fold && !disabledFold">
        <var-site-icon name="xml" size="18" />
      </var-site-button>

      <var-site-button
        :id="`clip-trigger-${cid}`"
        :data-clipboard-target="`#clip-target-${cid}`"
        text
        round
        v-if="clipboard"
      >
        <var-site-icon name="content-copy" size="18" />
      </var-site-button>

      <var-site-button text round @click="toPlayground" v-if="playground">
        <var-site-icon name="code-json" size="18" />
      </var-site-button>
    </div>
    <div
      :id="`clip-target-${cid}`"
      class="var-site-code-example__code"
      :class="[disabledFold ? 'var-site-code-example--scroller' : null]"
      ref="code"
      :style="{
        height: height >= 0 ? `${height}px` : undefined,
      }"
      >
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import Icon from '../icon'
import Button from '../button'
import Snackbar from '../snackbar'
import Clipboard from 'clipboard'
import config from '@config'
import { defineComponent, nextTick, ref, onMounted } from 'vue'
import { doubleRaf } from '../utils/elements'
import { get } from 'lodash-es'
import { getPCLocationInfo, utoa } from '../../utils'
import type { Ref } from 'vue'

let clipId = 0
const offset = 10

export default defineComponent({
  name: 'VarSiteCodeExample',
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon
  },
  props: {
    playgroundIgnore: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const code: Ref<HTMLElement | null> = ref(null)
    const cid: Ref<number> = ref(clipId++)
    const fold: Ref = ref(get(config, 'pc.fold'))
    const disabledFold: Ref<boolean> = ref(false)
    const clipboard: Ref = ref(get(config, 'pc.clipboard', {}))
    const height: Ref<number> = ref(-1)
    const playground: Ref<string | undefined> = ref(!props.playgroundIgnore ? get(config, 'pc.header.playground') : undefined )
    let timer: any = null

    const toggle = async () => {
      const foldHeight = fold.value.foldHeight

      if (height.value === foldHeight) {
        height.value = -1
        await nextTick()
        const { offsetHeight } = code.value as HTMLElement
        height.value = foldHeight
        await doubleRaf()
        height.value = offsetHeight

        timer = setTimeout(() => {
          height.value = -1
        }, 250)
      } else {
        clearTimeout(timer)
        const { offsetHeight } = code.value as HTMLElement
        height.value = offsetHeight
        await doubleRaf()
        height.value = foldHeight
      }
    }

    const toPlayground = () => {
      const scriptStart = '<script setup>\n'
      const scriptEnd = '<\/script>'
      const injectImport = 'import { installVarletUI } from \'./varlet-repl-plugin.js\'\n'
      const injectCall = '\ninstallVarletUI()\n'
      let codeText = code.value?.innerText ?? ''

      if (codeText.includes(scriptStart)) {
        codeText = codeText.replace(scriptStart, `${scriptStart}${injectImport}`)
        codeText = codeText.replace(scriptEnd, `${injectCall}${scriptEnd}`)
      } else {
        codeText = `${scriptStart}${injectImport}${injectCall}<\/script>\n\n${codeText}`
      }

      const file = { 'App.vue': codeText }
      window.open(`${playground.value}/#${utoa(JSON.stringify(file))}`)
    }

    onMounted(() => {
      const trigger = new Clipboard(`#clip-trigger-${cid.value}`)

      trigger.on('success', () => {
        Snackbar.success(clipboard.value[getPCLocationInfo().language])
      })

      const { offsetHeight } = code.value as HTMLElement
      disabledFold.value = offsetHeight - fold.value.foldHeight < offset
      height.value = fold.value?.defaultFold ? fold.value?.foldHeight : -1
    })

    return {
      code,
      height,
      cid,
      fold,
      disabledFold,
      clipboard,
      playground,
      toggle,
      toPlayground
    }
  }
})
</script>

<style lang="less">
@import "./codeExample";
</style>
