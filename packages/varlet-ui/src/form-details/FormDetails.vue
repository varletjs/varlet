<template>
  <transition :name="n()">
    <div :class="n()" v-if="errorMessage || maxlengthText">
      <div :class="n('message')">{{ errorMessage }}</div>
      <div :class="n('length')">{{ maxlengthText }}</div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespace } from '../utils/components'
import { props } from './props'

const { n } = createNamespace('form-details')

export default defineComponent({
  name: 'VarFormDetails',
  props,
  setup: () => ({ n }),
})
</script>

<style lang="less">
@import '../styles/common';
@import './formDetails';
</style>
