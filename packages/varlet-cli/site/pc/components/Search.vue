<template>
    <div class="varlet-site-search">
      <Popper :show="showResult">
        <div class="varlet-site-search__input">
          <var-icon name="magnify" size="24px" />
          <input @input="handleInput" @focus="handleFocus" @blur="handleBlur" />
        </div>
  
        <template #content>
          <div class="varlet-site-search__result-list">
            <div
              class="varlet-site-search__result-item"
              v-for="item in searchResults"
              :key="item.id"
              @click="linkToSection(item.cmp, item.anchor)"
            >
              <div
                class="varlet-site-search__result-item__title"
                v-html="item.name + '-' + item.title"
              ></div>
              <div class="varlet-site-search__result-item__content" v-html="item.content"></div>
            </div>
          </div>
        </template>
      </Popper>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, watch, type Ref } from 'vue'
  import Popper from 'vue3-popper'
  import MiniSearch from 'minisearch'
  import localeSections from '@localSearchIndex'
  
  type Section = {
    level: string
    anchor: string
    title: string
    content: string
    words: string
    cmp: string
    name: string
    id: string
  }
  
  const START_NUM_SLICE = 20
  const START_NUM_BEFORE = 10
  
  export default defineComponent({
    name: 'Search',
    components: { Popper },
    props: {
      language: {
        type: String,
        default: 'zh-CN'
      }
    },
    setup(props) {
      const miniSearch: Ref<MiniSearch<Section>> = ref()
      const showResult: Ref<boolean> = ref(false)
      const searchResults: Ref<Record<string, any>[]> = ref([])
  
      const highlightKeywords = (text: string, keywords: string) => {
        return keywords
          .split(' ')
          .sort((a, b) => b.length - a.length)
          .reduce((text, keyword) => {
            return text.replace(
              new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig'),
              `<span>$1</span>`
            )
          }, text)
      }
  
      const formatContent = (text: string, keywords: string) => {
        const pos = keywords
          .split(' ')
          .map((keyword) =>
            text.search(new RegExp(`${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i'))
          )
  
        const start = Math.min(...pos.filter((e) => e !== -1))
  
        if (start <= START_NUM_SLICE || start === Infinity) {
          return text
        }
  
        return '...' + text.slice(start - START_NUM_BEFORE)
      }
  
      const linkToSection = (cmp: string, anchor: string) => {
        const url = encodeURI(`${location.origin}/#/${props.language}/${cmp}#${anchor}`)
        window.location.assign(url)
      }
  
      const handleInput = (event: Event) => {
        let searchText = (event.target as HTMLInputElement)?.value || ''
  
        if (Intl) {
          searchText = Array.from(
            new Intl.Segmenter('cn', { granularity: 'word' }).segment(searchText)
          )
            .map((e) => e.segment)
            .join(' ')
            .replace(/\s+/g, ' ')
            .trim()
        }
  
        const rawSearchResult = miniSearch.value?.search?.(searchText)
  
        searchResults.value = rawSearchResult?.map((result: any) => ({
          ...result,
          cmp: result.cmp,
          name: highlightKeywords(result.name, searchText),
          title: highlightKeywords(result.title, searchText),
          content: highlightKeywords(formatContent(result.content, searchText), searchText),
          anchor: result.anchor
        }))
      }
  
      const handleBlur = () => {
        showResult.value = false
      }
      const handleFocus = () => {
        showResult.value = true
      }
  
      watch(
        () => props.language,
        async () => {
          const sections: string = (await localeSections?.[props.language]?.())?.default
  
          miniSearch.value = MiniSearch.loadJSON(sections, {
            fields: ['name', 'cmp', 'title', 'content', 'words'], // fields to index for full-text search
            storeFields: ['title', 'anchor', 'name', 'content', 'words'], // fields to return with search results
            searchOptions: {
              fuzzy: 0.2,
              prefix: true,
              boost: { title: 10, content: 5, words: 3, name: 20 }
            }
          })
        },
        {
          immediate: true
        }
      )
  
      return {
        searchResults,
        showResult,
        handleInput,
        handleBlur,
        handleFocus,
        linkToSection
      }
    }
  })
  </script>
  
  <style lang="less">
  :root {
    --popper-theme-background-color: var(--site-config-color-bar);
    --popper-theme-background-color-hover: var(--site-config-color-bar);
    --popper-theme-text-color: var(--site-config-color-text);
    --popper-theme-border-radius: 2px;
    --popper-theme-padding: 0;
    --popper-theme-box-shadow: 0 3px 5px -1px var(--site-shadow-key-umbra-opacity),
      0 5px 8px 0 var(--site-shadow-key-penumbra-opacity),
      0 1px 14px 0 var(--site-shadow-key-ambient-opacity);
  }
  
  .varlet-site-search {
    margin-right: 6px;
  
    &__input {
      width: 200px;
      border-radius: 3px;
      background: var(--site-config-color-nav-button-hover-background);
      display: flex;
      height: 42px;
      padding: 0 10px;
  
      input {
        border: none;
        outline: none;
        background: transparent;
        font-size: 14px;
        color: inherit;
      }
    }
  
    &__result-list {
      max-height: calc(100vh - 180px);
      overflow-y: scroll;
    }
  
    &__result-item {
      border-radius: 3px;
      padding: 10px 12px;
  
      &:hover {
        background: var(--site-config-color-pc-language-active-background);
        color: var(--site-config-color-pc-language-active);
        cursor: pointer;
      }
  
      &:hover &__title span {
        color: var(--site-config-color-pc-language-active);
      }
  
      &__content {
        width: 400px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #888;
        font-size: 13px;
      }
  
      &__title span,
      &__content span {
        background: yellow;
        color: #000;
      }
    }
  }
  </style>
  