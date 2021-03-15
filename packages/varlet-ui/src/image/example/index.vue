<template>
  <app-type>{{ pack.basicUse }}</app-type>
	<var-image src="https://varlet-ui.github.io/cat.jpg" />

  <app-type>{{ pack.fitMode }}</app-type>
  <var-row>
    <div class="fit-item">
      <var-image
        width="85px"
        height="85px"
        src="https://varlet-ui.github.io/cat.jpg"
      />
      <div>fill</div>
    </div>

    <div class="fit-item">
      <var-image
        width="85px"
        height="85px"
        fit="cover"
        src="https://varlet-ui.github.io/cat.jpg"
      />
      <div>cover</div>
    </div>

    <div class="fit-item">
      <var-image
        width="85px"
        height="85px"
        fit="contain"
        src="https://varlet-ui.github.io/cat.jpg"
      />
      <div>contain</div>
    </div>

    <div class="fit-item">
      <var-image
        width="85px"
        height="85px"
        fit="none"
        src="https://varlet-ui.github.io/cat.jpg"
      />
      <div>none</div>
    </div>

    <div class="fit-item">
      <var-image
        width="85px"
        height="85px"
        fit="scale-down"
        src="https://varlet-ui.github.io/cat.jpg"
      />
      <div>scale-down</div>
    </div>
  </var-row>

  <app-type>{{ pack.setRadius }}</app-type>
  <var-row>
    <var-image
      width="85px"
      height="85px"
      fit="cover"
      :radius="10"
      src="https://varlet-ui.github.io/cat.jpg"
      style="margin-right: 10px;"
    />

    <var-image
      width="85px"
      height="85px"
      fit="cover"
      radius="50%"
      src="https://varlet-ui.github.io/cat.jpg"
    />
  </var-row>


  <app-type>{{ pack.useRipple }}</app-type>
  <var-image ripple src="https://varlet-ui.github.io/cat.jpg"/>

  <app-type>{{ pack.useLazyLoad }}</app-type>
  <var-image lazy src="https://varlet-ui.github.io/cat.jpg"/>
</template>

<script>
import Image from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Row from '../../row'
import { watchLang } from '../../utils/components'
import { use, pack } from './locale'

export default {
  name: 'ImageExample',
  components: {
    [Image.name]: Image,
    [Row.name]: Row,
    AppType
  },
  setup() {
    watchLang(use)

    return { pack }
  },
}
</script>

<style scoped lang="less">
.fit-item {
  color: #888;
  text-align: center;
  margin-right: 11px;
  margin-bottom: 11px;
}
</style>
