<template>
  <div class="example">
    <app-type>{{ pack.chipType }}</app-type>
    <var-chip type="primary">{{ pack.primaryChip }}</var-chip>
    <var-chip type="success">{{ pack.successChip }}</var-chip>
    <var-chip type="danger">{{ pack.dangerChip }}</var-chip>
    <var-chip type="warning">{{ pack.warningChip }}</var-chip>
    <var-chip type="info">{{ pack.infoChip }}</var-chip>
    <var-chip>{{ pack.defaultChip }}</var-chip>

    <app-type>{{ pack.simpleChip }}</app-type>
    <var-chip plain type="primary">{{ pack.simpleChip }}</var-chip>

    <app-type>{{ pack.nonRoundChip }}</app-type>
    <var-chip :round="false" type="primary">{{ pack.nonRoundChip }}</var-chip>

    <app-type>{{ pack.chipSize }}</app-type>
    <var-chip size="large">{{ pack.largeChip }}</var-chip>
    <var-chip>{{ pack.normalChip }}</var-chip>
    <var-chip size="small">{{ pack.smallChip }}</var-chip>
    <var-chip size="mini">{{ pack.miniChip }}</var-chip>
    <app-type>{{ pack.blockChip }}</app-type>
    <var-chip type="primary" block>{{ pack.blockChip }}</var-chip>

    <app-type>{{ pack.canCloseChip }}</app-type>
    <var-chip closable v-if="show" @close="show = false">{{ pack.canCloseChip }}</var-chip>
    <var-chip closable icon-name="delete" v-if="show1" @close="show1 = false"> {{ pack.customCloseIcon }}</var-chip>

    <app-type>{{ pack.customColor }}</app-type>
    <var-chip color="#009688" text-color="#fff">{{ pack.chip }}</var-chip>
    <var-chip color="#009688" plain>{{ pack.chip }}</var-chip>
    <var-chip color="#faecd8" text-color="#e6a23c" plain>{{ pack.chip }}</var-chip>
    <var-chip color="#faecd8" text-color="#e6a23c">{{ pack.chip }}</var-chip>

    <app-type>{{ pack.addLeftAndRightSlot }}</app-type>
    <var-chip type="primary" plain>
      {{ pack.leftSlot }}

      <template #left>
        <var-icon name="star"></var-icon>
      </template>
    </var-chip>
    <var-chip type="primary" plain>
      {{ pack.rightSlot }}

      <template #right>
        <var-icon name="fire"></var-icon>
      </template>
    </var-chip>
    <var-chip type="primary" plain>
      {{ pack.leftAndRightSlot }}

      <template #left>
        <var-icon name="account-circle"></var-icon>
      </template>

      <template #right>
        <var-icon name="cake-variant"></var-icon>
      </template>
    </var-chip>
  </div>
</template>

<script>
import { ref } from 'vue'
import Chip from '..'
import Icon from '../../icon'
import { pack, use } from './locale'
import { watchLang } from '../../utils/components'
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  name: 'ChipExample',
  components: {
    [Chip.name]: Chip,
    [Icon.name]: Icon,
    AppType,
  },
  setup() {
    const show = ref(true)
    const show1 = ref(true)

    watchLang(use)

    return {
      show,
      show1,
      pack,
    }
  },
}
</script>

<style scoped>
.var-chip {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
