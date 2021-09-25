<template>
  <var-pagination current="6" total="115" :simple="false" :show-size-changer="false" />
  <var-pagination current="3" total="115" :simple="false" :size-option="[10, 20, 30, 40]" />
</template>

<script>
import Pagination from '../Pagination'
import { watchLang } from '@varlet/cli/site/utils'
import { pack, use } from './locale'

export default {
  name: 'BasicUse',
  components: {
    [Pagination.name]: Pagination,
  },
  setup() {
    watchLang(use, 'pc')

    return {
      pack,
    }
  },
}
</script>
