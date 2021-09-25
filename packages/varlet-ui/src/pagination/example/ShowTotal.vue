<template>
  <var-pagination
    current="3"
    size="10"
    total="66"
    :simple="false"
    :show-total="(total) => `${pack.pcTotal} ${total} ${pack.item}`"
  />
  <var-pagination
    current="3"
    size="10"
    total="66"
    :simple="false"
    :show-total="(total, range) => `${pack.pcTotal} ${total}, ${pack.current} ${range[0]}-${range[1]}`"
  />
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
