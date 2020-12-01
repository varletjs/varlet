<template>
  <div class="example">
    <varlet-button
      class="example__button"
      round
    >
      <img style="width: 40px; height: 40px" src="https://img.yzcdn.cn/vant/logo.png">
    </varlet-button>

    <varlet-button
      class="example__button"
      block
      type="warning"
      size="large"
      background="rgb(114, 50, 221)"
      color="rgb(255,192,0)"
    >
      修改颜色
    </varlet-button>

    <varlet-button class="example__button" type="primary" @click="trigger">切换状态</varlet-button>
    <varlet-button class="example__button" type="plain" size="large" :disabled="disabled">{{ disabled ? '禁用' : '启用' }}</varlet-button>

    <varlet-button
      class="example__button"
      type="primary"
      size="large"
      v-model:loading="loading"
      @click="trigger"
    >
      Large
    </varlet-button>
    <varlet-button
      class="example__button"
      type="primary"
      size="normal"
      v-model:loading="loading"
      @click="trigger"
    >
      Normal
    </varlet-button>
    <varlet-button
      class="example__button"
      type="primary"
      size="small"
      v-model:loading="loading"
      @click="trigger"
    >
      Small
    </varlet-button>
    <varlet-button
      class="example__button"
      type="primary"
      size="mini"
      v-model:loading="loading"
      @click="trigger"
    >
      Mini
    </varlet-button>

    <varlet-button
      class="example__button"
      type="danger"
      loading-type="cube"
      size="large"
      v-model:loading="loading"
      @click="trigger"
    >
      Large
    </varlet-button>
    <varlet-button
      class="example__button"
      type="danger"
      loading-type="cube"
      size="normal"
      v-model:loading="loading"
      @click="trigger"
    >
      Normal
    </varlet-button>
    <varlet-button
      class="example__button"
      type="danger"
      loading-type="cube"
      size="small"
      v-model:loading="loading"
      @click="trigger"
    >
      Small
    </varlet-button>
    <varlet-button
      class="example__button"
      type="danger"
      loading-type="cube"
      size="mini"
      v-model:loading="loading"
      @click="trigger"
    >
      Mini
    </varlet-button>

    <varlet-button
      class="example__button"
      type="warning"
      loading-type="rect"
      size="large"
      v-model:loading="loading"
      @click="trigger"
    >
      Large
    </varlet-button>
    <varlet-button
      class="example__button"
      type="warning"
      loading-type="rect"
      size="normal"
      v-model:loading="loading"
      @click="trigger"
    >
      Normal
    </varlet-button>
    <varlet-button
      class="example__button"
      type="warning"
      loading-type="rect"
      size="small"
      v-model:loading="loading"
      @click="trigger"
    >
      Small
    </varlet-button>
    <varlet-button
      class="example__button"
      type="warning"
      loading-type="rect"
      size="mini"
      v-model:loading="loading"
      @click="trigger"
    >
      Mini
    </varlet-button>

    <varlet-button
      class="example__button"
      type="success"
      loading-type="disappear"
      size="large"
      v-model:loading="loading"
      @click="trigger"
    >
      Large
    </varlet-button>
    <varlet-button
      class="example__button"
      type="success"
      loading-type="disappear"
      size="normal"
      v-model:loading="loading"
      @click="trigger"
    >
      Normal
    </varlet-button>
    <varlet-button
      class="example__button"
      type="success"
      loading-type="disappear"
      size="small"
      v-model:loading="loading"
      @click="trigger"
    >
      Small
    </varlet-button>
    <varlet-button
      class="example__button"
      type="success"
      loading-type="disappear"
      size="mini"
      v-model:loading="loading"
      @click="trigger"
    >
      Mini
    </varlet-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import Button from '..'

export default defineComponent({
  name: 'ButtonExample',
  components: {
    [Button.name]: Button
  },
  setup() {
    const disabled: Ref<boolean> = ref(true)
    const loading: Ref<boolean> = ref(true)

    return {
      disabled,
      loading,
      trigger() {
        disabled.value = !disabled.value
        loading.value = !loading.value
      }
    }
  }
})
</script>

<style lang="less">
.example {
  padding: 20px;

  &__button {
    margin-bottom: 20px;
    margin-right: 20px;
  }
}
</style>
