<template>
  <div class="varlet-site-search">
    <var-menu :show="showMenu" placement="bottom-end">
      <div class="varlet-site-search__input">
        <var-icon name="magnify" size="24px" />
        <input ref="inputRef" @input="handleInput" @focus="handleFocus" @blur="handleBlur" />
      </div>

      <template #menu>
        <div
          v-if="searchResults.length > 0 && inputText.length > 0"
          class="varlet-site-search__result-list"
        >
          <div
            class="varlet-site-search__result-item"
            v-for="result in searchResults"
            :key="result.id"
            @click="linkToSection(result.cmp, result.anchor)"
            @mouseenter="hoveredSection = result"
            @mouseleave="handleMouseLeave"
          >
            <div
              class="varlet-site-search__result-item__title"
              v-html="result.name + '-' + result.title"
            ></div>
            <div class="varlet-site-search__result-item__content" v-html="result.content"></div>
          </div>
        </div>
        <div
          v-if="searchResults.length === 0 && inputText.length > 0"
          class="varlet-site-search__no-result"
        >
          {{ onResultPrompt }}
        </div>
      </template>
    </var-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, type Ref, computed } from 'vue'
import MiniSearch from 'minisearch'
import { useEventListener } from '@varlet/use'
import localeSections from '@localSearchIndex'

type Section = {
  level: string
  anchor: string
  title: string
  content: string
  cmp: string
  words: string
  name: string
  score: string
  id: string
}

const START_NUM_SLICE = 20
const START_NUM_BEFORE = 10

export default defineComponent({
  name: 'Search',
  props: {
    language: {
      type: String,
      default: 'zh-CN'
    }
  },
  setup(props) {
    const miniSearch: Ref<MiniSearch<Section>> = ref()
    const showResult: Ref<boolean> = ref(false)
    const searchResults: Ref<Section[]> = ref([])
    const inputText: Ref<string> = ref('')
    const inputRef: Ref<HTMLElement | null> = ref(null)
    const hoveredSection: Ref<Section> = ref({
      level: '',
      anchor: '',
      title: '',
      content: '',
      words: '',
      cmp: '',
      name: '',
      score: '',
      id: ''
    })

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
      inputRef.value?.blur()

      setTimeout(() => {
        const url = encodeURI(`${location.origin}/#/${props.language}/${cmp}#${anchor}`)
        window.location.assign(url)
      }, 350)
    }

    const handleInput = (event: Event) => {
      let searchText = (event.target as HTMLInputElement)?.value || ''
      inputText.value = searchText.trim()

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

      searchResults.value =
        rawSearchResult?.map((result: Section) => ({
          ...result,
          cmp: result.cmp,
          name: highlightKeywords(result.name, searchText),
          title: highlightKeywords(result.title, searchText),
          content: highlightKeywords(formatContent(result.content, searchText), searchText),
          anchor: result.anchor
        })) || []
    }

    const handleBlur = () => {
      showResult.value = false
    }
    const handleFocus = () => {
      showResult.value = true
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const { cmp, anchor, id } = hoveredSection.value
      if (event.key === 'Enter' && id) {
        linkToSection(cmp, anchor)
      }

      if (event.metaKey && event.key === 'k' && inputRef.value) {
        inputRef.value.focus()
      }
    }

    const handleMouseLeave = () => {
      hoveredSection.value = {
        level: '',
        anchor: '',
        title: '',
        content: '',
        words: '',
        cmp: '',
        name: '',
        score: '',
        id: ''
      }
    }

    useEventListener(() => document, 'keydown', handleKeyDown)

    const showMenu = computed(() => {
      return showResult.value && inputText.value.length > 0
    })

    const onResultPrompt = computed(() => {
      if (props.language === 'zh-CN') {
        return '无匹配结果'
      }

      return 'No Results'
    })

    watch(
      () => props.language,
      async () => {
        const sections: string = (await localeSections?.[props.language]?.())?.default

        miniSearch.value = MiniSearch.loadJSON(sections, {
          fields: ['name', 'title', 'content'], // fields to index for full-text search
          storeFields: ['title', 'name', 'content', 'cmp','anchor',], // fields to return with search results
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: {name: 20, title: 10, content: 5, words: 3}
          }
        })
      },
      {
        immediate: true
      }
    )

    return {
      searchResults,
      inputRef,
      hoveredSection,
      showResult,
      inputText,
      showMenu,
      onResultPrompt,
      handleInput,
      handleBlur,
      handleFocus,
      handleMouseLeave,
      linkToSection
    }
  }
})
</script>

<style lang="less">

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
    background-color: var(--site-config-color-bar);
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

  &__no-result {
    width: 300px;
    padding: 10px 5px;
    text-align: center;
    border-radius: 3px;
    background-color: var(--site-config-color-bar);
    border: 1px solid #888;
  }
}
</style>
