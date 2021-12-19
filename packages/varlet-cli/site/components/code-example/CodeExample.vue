<template>
  <div class="var-site-code-example">
    <div class="var-site-code-example__toolbar">
      <var-site-button text round @click="toggle" v-if="fold">
        <var-site-icon name="xml"/>
      </var-site-button>

      <var-site-button
        :id="`clip-trigger-${cid}`"
        :data-clipboard-target="`#clip-target-${cid}`"
        text
        round
        v-if="clipboard"
      >
        <var-site-icon name="content-copy"/>
      </var-site-button>
    </div>
    <div
      :id="`clip-target-${cid}`"
      class="var-site-code-example__code"
      ref="code"
      :style="{
        height: height >= 0 ? `${height}px` : undefined,
        opacity
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
import { defineComponent, nextTick, ref, Ref, onMounted } from 'vue'
import { doubleRaf } from '../utils/elements'
import { get } from 'lodash-es'
import { getPCLocationInfo } from '../../utils'

let clipId = 0

export default defineComponent({
  name: 'VarSiteCodeExample',
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon
  },
  setup() {
    const code: Ref<HTMLElement | null> = ref(null)
    const cid: Ref<number> = ref(clipId++)
    const fold: Ref<any> = ref(get(config, 'pc.fold'))
    const clipboard: Ref<any> = ref(get(config, 'pc.clipboard', {}))
    const height: Ref<number> = ref(fold.value?.defaultFold ? fold.value?.foldHeight : -1)
    const opacity: Ref<number> = ref(fold.value?.defaultFold ? 0.76 : 1)

    const toggle = async () => {
      const foldHeight = fold.value.foldHeight

      if (height.value === foldHeight) {
        height.value = -1
        await nextTick()
        const { offsetHeight } = code.value as HTMLElement

        height.value = foldHeight
        await doubleRaf()
        height.value = offsetHeight
        opacity.value = 1
      } else {
        const { offsetHeight } = code.value as HTMLElement

        height.value = offsetHeight
        await doubleRaf()
        height.value = foldHeight
        opacity.value = 0.76
      }
    }

    onMounted(() => {
      const trigger = new Clipboard(`#clip-trigger-${cid.value}`)

      trigger.on('success', () => {
        Snackbar.success(clipboard.value[getPCLocationInfo().language])
      })
    })

    return {
      code,
      height,
      opacity,
      cid,
      fold,
      clipboard,
      toggle
    }
  }
})
</script>

<style lang="less">
@import "./codeExample";
</style>
