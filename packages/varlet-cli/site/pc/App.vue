<template>
  <div class="varlet-site">
    <div class="varlet-site-header">
      <span class="varlet-site-header__logo">
        <img :src="header.logo" alt="" />
        <span>{{ title }}</span>
      </span>
      <span class="varlet-site-header__nav">
        <a target="_blank" href="https://github.com/haoziqaq/varlet" class="varlet-site-header__link">
          <img src="https://b.yzcdn.cn/vant/logo/github.svg" />
        </a>
        <span class="varlet-site-header__version varlet-site-header__cube" @click="isHideVersion = !isHideVersion">
          3.6.12
          <span
            :class="{
              'varlet-site-header__version-pop': true,
              'varlet-site-header__version-pop-hidden': isHideVersion,
            }"
          >
            <span class="varlet-site-header__version-pop-item" v-for="version in versionList">
              {{ version }}
            </span>
          </span>
        </span>
        <button @click="switchLanguage" class="varlet-site-header__cube">
          {{ header.i18nButton[language] }}
        </button>
      </span>
    </div>
    <div class="varlet-site-content">
      <div class="varlet-site-nav">
        <p v-for="item in menu" class="varlet-site-nav__item">
          <span v-if="item.isTitle">{{ item.text[language] }}</span>
          <router-link :to="'/' + language + '/' + item.doc" v-else>
            {{ item.text[language] }}
          </router-link>
        </p>
      </div>
      <router-view />
      <div class="varlet-site-mobile">
        <iframe :src="`./mobile.html#/${componentName}`"></iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {},
  data() {
    return {
      menu: [],
      language: '',
      header: {},
      componentName: 'button',
      title: '',
      versionList: ['2.10.14', '1.x', '3.x'],
      isHideVersion: true,
    }
  },
  methods: {
    switchLanguage() {
      this.language = this.language === 'zh_CN' ? 'en_US' : 'zh_CN'
      const pathArr = this.$route.fullPath.split('/')
      const componentName = pathArr[pathArr.length - 1]
      this.$router.push(`/${this.language}/${componentName}`)
    },
  },
  created() {
    const _this: any = this
    const { pc = {}, title } = _this.$config
    const { description, header = {}, logo, menu = [], language } = pc
    this.menu = menu
    this.language = language
    this.header = header
    this.title = title
  },
  watch: {
    $route(to, from) {
      // todo 还需拿取对应组件名的数组进行判断
      const index = to.path.lastIndexOf('/')
      this.componentName = to.path.slice(index + 1)
    },
  },
})
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}

iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
}

.varlet {
  &-site {
    &-header {
      display: flex;
      align-items: center;
      background-color: #001938;
      color: white;
      height: 60px;
      padding: 0 30px;
      justify-content: space-between;
      user-select: none;

      &__logo {
        display: flex;
        align-items: center;

        img {
          width: 24px;
          margin-right: 10px;
        }

        span {
          font-size: 22px;
        }
      }

      &__nav {
        display: flex;
      }

      &__link {
        img {
          display: block;
          width: 26px;
          height: 26px;
          margin-right: 24px;
          transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

          &:hover {
            transform: scale(1.2);
          }
        }
      }

      &__cube {
        display: inline-block;
        padding: 0 12px;
        color: #fff;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-radius: 20px;
        outline: none;
        cursor: pointer;
        background: transparent;
        transition: 0.3s ease-in-out;
      }

      &__version {
        margin-right: 24px;
        position: relative;
        padding-right: 20px;

        &::after {
          position: absolute;
          top: 7px;
          right: 7px;
          width: 5px;
          height: 5px;
          color: rgba(255, 255, 255, 0.9);
          border: 1px solid;
          border-color: transparent transparent currentColor currentColor;
          transform: rotate(-45deg);
          content: '';
        }
      }

      &__version-pop {
        position: absolute;
        top: 30px;
        right: 0;
        left: 0;
        z-index: 99;
        color: #333;
        line-height: 36px;
        text-align: left;
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 12px #ebedf0;
        transform-origin: top;
        transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      &__version-pop-hidden {
        transform: scaleY(0);
        opacity: 0;
      }

      &__version-pop-item {
        padding-left: 12px;
        display: inline-block;
        width: 100%;
        transition: 0.2s;

        &:hover {
          color: #1989fa;
        }
      }
    }

    &-content {
      display: flex;
      background-color: #f7f8fa;
    }

    &-doc {
      flex: 1;
      margin: 30px;

      a {
        margin: 0 1px;
        color: #1989fa;
        text-decoration: none;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: #323233;
        font-weight: normal;
        line-height: 1.5;
      }

      h1 {
        margin: 0 0 30px;
        font-size: 30px;
        cursor: default;
      }

      h2 {
        margin: 45px 0 20px;
        font-size: 25px;
      }

      h3 {
        margin-bottom: 16px;
        font-weight: 600;
        font-size: 18px;
      }

      p {
        color: #34495e;
        font-size: 15px;
        line-height: 26px;
      }

      pre {
        margin: 20px 0 0;
      }

      code {
        position: relative;
        display: block;
        padding: 16px;
        overflow-x: auto;
        color: #58727e;
        font-weight: 400;
        font-size: 14px;
        font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;
        line-height: 26px;
        white-space: pre-wrap;
        word-wrap: break-word;
        background-color: #fafafa;
        border-radius: 16px;
      }

      p code,
      li code,
      table code {
        display: inline;
        margin: 0 2px;
        padding: 2px 5px;
        font-size: 14px;
        font-family: inherit;
        word-break: keep-all;
        background-color: #f7f8fa;
        border-radius: 4px;
        -webkit-font-smoothing: antialiased;
      }

      table {
        width: 100%;
        margin-top: 12px;
        color: #34495e;
        font-size: 14px;
        line-height: 1.5;
        border-collapse: collapse;

        th {
          padding: 8px 10px;
          font-weight: 600;
          text-align: left;

          &:first-child {
            padding-left: 0;
          }
        }

        td {
          padding: 8px;
          border-top: 1px solid #f1f4f8;

          code {
            white-space: nowrap;
          }

          &:first-child {
            padding-left: 0;

            code {
              margin: 0;
              padding: 2px 6px;
              color: #1989fa;
              font-weight: 600;
              font-size: 11px;
              background-color: rgba(25, 137, 250, 0.1);
              border-radius: 20px;
            }
          }
        }

        em {
          color: #4fc08d;
          font-size: 14px;
          font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;
          font-style: normal;
        }
      }

      .card {
        margin-bottom: 24px;
        padding: 24px;
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0 8px 12px #ebedf0;
      }
    }

    &-nav {
      padding: 10px 0;
      flex: 0 0 220px;
      position: sticky;
      height: 100vh;
      top: 0;
      left: 0;
      z-index: 1;
      overflow-y: scroll;
      background-color: #fff;
      box-shadow: 0 8px 12px #ebedf0;

      &__item {
        margin: 0;

        a,
        span {
          display: inline-block;
          margin: 0;
          padding: 8px 0 8px 30px;
          line-height: 28px;
        }

        span {
          font-weight: 700;
          font-size: 16px;
        }

        a {
          text-decoration: none;
          font-size: 14px;
          color: #455a64;
          transition: color 0.2s;

          &:hover {
            color: blueviolet;
          }
        }

        .router-link-active {
          color: blueviolet;
        }
      }
    }

    &-mobile {
      flex: 0 0 360px;
      top: 30px;
      position: sticky;
      margin-top: 30px;
      margin-right: 30px;
      height: 85vh;
      z-index: 1;
      box-sizing: border-box;
      overflow: hidden;
      background: #fafafa;
      border-radius: 12px;
      box-shadow: #ebedf0 0 4px 12px;
    }
  }
}
</style>
