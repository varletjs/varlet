<template>
  <app-type class="pb">{{ pack.basicUsage }}</app-type>
  <var-input :placeholder="pack.placeholder" v-model="value" />

  <app-type class="pb">{{ pack.plainMode }}</app-type>
  <var-input :hint="false" :line="false" :placeholder="pack.placeholder" v-model="value7" />

  <app-type class="pb">{{ pack.textarea }}</app-type>
  <var-input :placeholder="pack.placeholder" textarea v-model="value2" />

  <app-type class="pb">{{ pack.maxlength }}</app-type>
  <var-input :placeholder="pack.placeholder" :maxlength="10" v-model="value8" />

  <app-type class="pb">{{ pack.disabled }}</app-type>
  <var-input :placeholder="pack.placeholder" disabled v-model="value3" />

  <app-type class="pb">{{ pack.readonly }}</app-type>
  <var-input :placeholder="pack.placeholder" readonly v-model="value4" />

  <app-type class="pb">{{ pack.clearable }}</app-type>
  <var-input :placeholder="pack.placeholder" clearable v-model="value5" />

  <app-type class="pb">{{ pack.displayIcon }}</app-type>
  <var-input :placeholder="pack.placeholder" v-model="value6">
    <template #prepend-icon>
      <var-icon class="prepend-icon" name="plus" />
    </template>
    <template #append-icon>
      <var-icon class="append-icon" name="minus" />
    </template>
  </var-input>

  <app-type>{{ pack.validate }}</app-type>
  <var-input :placeholder="pack.placeholder" :rules="[(v) => v.length > 6 || pack.maxMessage]" v-model="value9" />

  <div style="height: 40px"></div>
</template>

<script>
import Input from '..'
import Button from '../../button'
import Icon from '../../icon'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { ref } from 'vue'
import { use, pack } from './locale'
import { watchLang } from '../../utils/components'

export default {
  name: 'InputExample',
  components: {
    [Input.name]: Input,
    [Button.name]: Button,
    [Icon.name]: Icon,
    AppType,
  },
  setup() {
    const value = ref('')
    const value2 = ref('')
    const value3 = ref('')
    const value4 = ref('')
    const value5 = ref('')
    const value6 = ref('')
    const value7 = ref('')
    const value8 = ref('')
    const value9 = ref('')

    watchLang((lang) => {
      use(lang)
      value5.value = pack.value.clearableText
    })

    return {
      pack,
      value,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      value8,
      value9,
    }
  },
}
</script>

<style scoped lang="less">
.prepend-icon {
  margin-right: 2px;
}

.append-icon {
  margin-left: 2px;
}

.pb {
  padding-bottom: 10px;
}
</style>
