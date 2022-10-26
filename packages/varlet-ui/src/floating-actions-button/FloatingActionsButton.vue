<template>
  <div :class="n()">
    <var-button :class="fabLocation" :disabled="disabled" round>
      <var-icon :name="inactiveIcon" />
    </var-button>
  </div>
</template>

<script lang="ts">
// import VarButton from "../button";
// import VarIcon from "../icon";
import { props } from './props'
import { call, createNamespace } from '../utils/components'
import { defineComponent, ref, Ref, watch } from 'vue'

const { n } = createNamespace('floating-actions-button')

export default defineComponent({
  name: 'VarFloatingActionsButton',
  props,
  setup(props) {
    const show: Ref<boolean> = ref(false)

    // expose
    // const open = () => {
    //   const { disabled } = props;
    //
    //   if (disabled) {
    //     return;
    //   }
    //
    //   show.value = true;
    //   call(props["onUpdate:show"], true);
    // };

    // expose
    const close = () => {
      show.value = false
      call(props['onUpdate:show'], false)
    }

    watch(() => props.disabled, close)

    return {
      n,
    }
  },
})
</script>

<style lang="less">
@import './floatingActionsButton.less';
</style>
