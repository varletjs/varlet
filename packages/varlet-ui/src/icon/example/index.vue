<template>
  <div class="example">
    <app-type>icons列表</app-type>
    <div class="example__icons">
      <div
        class="example__icon"
        v-for="iconName in iconNames"
        :key="iconName"
        v-ripple
        :data-clipboard-text="iconName"
      >
        <var-icon :name="iconName" />
        <div class="example__icon-name">
          {{ iconName }}
        </div>
      </div>
    </div>

    <var-icon :name="iconImageName" :transition="300" size="30px"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref, Ref } from 'vue'
import Icon from '..'
import Button from '../../button'
import Ripple from '../../ripple'
import Snackbar from '../../snackbar'

const Clipboard = require('clipboard')

export default defineComponent({
  name: 'IconExample',
  components: {
    [Icon.name]: Icon,
    [Button.name]: Button
  },
  directives: { Ripple },
  setup() {
    const iconNames: string[] = reactive(require('@varlet/icons'))
    const iconImageName: Ref<string> = ref('https://cn.vuejs.org/images/logo.png')

    onMounted(() => {
      const clipboard = new Clipboard('.example__icon', {
        text(trigger: any) {
          const iconName = trigger.getAttribute('data-clipboard-text')
          return `<var-icon name="${iconName}" />`
        }
      })

      clipboard.on('success', (e: any) => {
        Snackbar.success(`成功完成复制${e.text}`)
      })
    })

    setTimeout(() => {
      iconImageName.value = 'https://note.youdao.com/yws/api/image/normal/1565792881686?userId=qqC7BBADB97773D2540188750E1F63884B'
    }, 1000)

    return {
      iconNames,
      iconImageName
    }
  }
})
</script>

<style lang="less" scoped>
.example {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__icons {
    display: flex;
    flex-wrap: wrap;
  }

  &__icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
    padding: 10px;
  }

  &__icon-name {
    font-size: 12px;
    text-align: center;
  }
}
</style>
