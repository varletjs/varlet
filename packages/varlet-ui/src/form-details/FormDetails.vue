<template>
  <transition :name="n()">
    <div :class="n()" v-if="errorMessage || extraMessage || $slots['extra-message']">
      <div :class="n('error-message')">
        <transition :name="n('message')">
          <div v-if="errorMessage">
            {{ errorMessage }}
          </div>
        </transition>
      </div>
      <div :class="n('extra-message')">
        <transition :name="n('message')">
          <slot name="extra-message">
            <div v-if="extraMessage">
              {{ extraMessage }}
            </div>
          </slot>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespace } from '../utils/components'
import { props } from './props'

const { name, n } = createNamespace('form-details')

export default defineComponent({
  name,
  props,
  setup: () => ({ n }),
})
</script>

<style lang="less">
@import '../styles/common';
@import './formDetails';
</style>
