<template>
  <div>
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-pagination current="6" total="115" />
  </div>
  <div>
    <app-type>{{ pack.hideSize }}</app-type>
    <var-pagination current="3" total="115" :show-size-changer="false" />
  </div>
  <div>
    <app-type>{{ pack.showTotal }}</app-type>
    <var-pagination current="3" size="20" total="66" :show-total="(total) => `${pack.total} ${total} ${pack.item}`" />
  </div>
  <div>
    <app-type>{{ pack.disabled }}</app-type>
    <var-pagination total="66" disabled />
  </div>
</template>

<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang } from '@varlet/cli/site/utils'
import Pagination from '..'
import { use, pack } from './locale'

export default {
  name: 'PaginationExample',
  components: {
    [Pagination.name]: Pagination,
    AppType,
  },
  setup() {
    watchLang(use)

    return {
      pack,
    }
  },
}
</script>
