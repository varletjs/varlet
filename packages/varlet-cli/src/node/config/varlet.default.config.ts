import { defineConfig } from './varlet.config.js'

export default defineConfig({
  name: 'Varlet',
  namespace: 'var',
  host: 'localhost',
  port: 8080,
  title: 'VARLET',
  logo: 'https://varlet.gitee.io/varlet-ui/varlet_icon.png',
  defaultLanguage: 'zh-CN',
  highlight: {
    /**
     * @see https://highlightjs.org/
     */
    style: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css',
  },
  analysis: {
    baidu: '',
  },
  useMobile: false,
  pc: {
    menu: [],
    redirect: '/index',
    indexPage: {
      description: {
        'zh-CN':
          'Varlet 是一个基于 Vue3 开发的 Material 风格移动端组件库，全面拥抱 Vue3 生态，由社区团队维护。支持 Typescript、按需引入、暗黑模式、主题定制、国际化，并提供 VSCode 插件保障良好的开发体验',
        'en-US':
          'Varlet is a Material design mobile component library developed based on Vue3, developed and maintained by partners in the community. Support Typescript, import on demand, dark mode, theme customization, internationalization, and provide VSCode plugin to ensure a good development experience',
      },
      started: {
        'zh-CN': '起步',
        'en-US': 'GET STARTED',
      },
      features: [
        {
          name: {
            'zh-CN': '组件丰富',
            'en-US': 'Rich components',
          },
          description: {
            'zh-CN': '提供 50 个高质量通用组件',
            'en-US': 'Provide 50 high quality general purpose components',
          },
        },
        {
          name: {
            'zh-CN': '按需引入',
            'en-US': 'On-Demand',
          },
          description: {
            'zh-CN': '每一个组件都可单独引入，并有着良好的 tree-shaking 优化',
            'en-US': 'Each component can be imported separately and has good tree-shaking optimization',
          },
        },
        {
          name: {
            'zh-CN': '主题定制',
            'en-US': 'Theme customization',
          },
          description: {
            'zh-CN': '内置亮色和暗色两种主题，支持组件的样式自定义',
            'en-US': 'Built-in light and dark themes, support style customization of components',
          },
        },
        {
          name: {
            'zh-CN': '国际化',
            'en-US': 'Locale',
          },
          description: {
            'zh-CN': '内置国际化 API，内置中文和英文的语言包',
            'en-US': 'Built-in i18n API, which supports both Chinese and English languages by default',
          },
        },
        {
          name: {
            'zh-CN': '支持 Typescript',
            'en-US': 'Support typescript',
          },
          description: {
            'zh-CN': '使用 Typescript 构建，提供良好的组件类型系统',
            'en-US': 'Built with typescript, which provides a nice components type system',
          },
        },
        {
          name: {
            'zh-CN': '服务端渲染',
            'en-US': 'Server-side rendering',
          },
          description: {
            'zh-CN': '对服务端渲染支持良好，并对 Nuxt 进行了适配',
            'en-US': 'Good support for server-side rendering and adaptation to Nuxt',
          },
        },
        {
          name: {
            'zh-CN': '国人开发',
            'en-US': 'Developed by Chinese',
          },
          description: {
            'zh-CN': '由国人开发，完善的中英文文档和后勤保障',
            'en-US': 'Complete Chinese and English documentation and logistics support',
          },
        },
        {
          name: {
            'zh-CN': 'IDE 支持',
            'en-US': 'IDE Code Support',
          },
          description: {
            'zh-CN': '支持在 webstorm，vscode 中的组件语法高亮, 并提供 vscode 插件为开发提升效率',
            'en-US':
              'Supports to highlight the component syntax for webstorm and vscode, and provides a separate helper plugin for vscode',
          },
        },
        {
          name: {
            'zh-CN': '组件库快速成型工具',
            'en-US': 'Component library toolchain',
          },
          description: {
            'zh-CN': '开源了搭建本组件库的所有工具链，提供快速开发组件库的能力',
            'en-US':
              'Open-sourced the toolchain for building this component library, providing the ability to rapidly develop the component library',
          },
        },
      ],
      contributors: {
        label: {
          'zh-CN': '贡献者',
          'en-US': 'Contributors',
        },
        link: 'https://github.com/varletjs/varlet/graphs/contributors',
        image: 'https://contrib.rocks/image?repo=varletjs/varlet',
      },
      license: {
        'zh-CN': '组件库基于 MIT 协议，您可以自由的使用和分享',
        'en-US': 'Released under the MIT License, You can use and share freely.',
      },
      copyright: {
        'zh-CN': 'Copyright © 2022 varletjs 组织成员以及 varlet 的贡献者们',
        'en-US': 'Copyright © 2022 varletjs member and varlet contributors.',
      },
    },
    title: {
      'zh-CN': '面向 Vue3 的 Material 风格移动端组件库',
      'en-US': 'Material design mobile components built for Vue3',
    },
    header: {
      i18n: {
        'zh-CN': '中文',
        'en-US': 'English',
      },
      versions: null,
      github: 'https://github.com/varletjs/varlet',
      playground: 'https://varlet.gitee.io/varlet-ui-playground',
      darkMode: true,
    },
    clipboard: {
      'zh-CN': '代码已复制到剪切板',
      'en-US': 'The code has been copied to the clipboard',
    },
    fold: {
      defaultFold: false,
      foldHeight: 50,
    },
  },
  mobile: {
    redirect: '/home',
    title: {
      'zh-CN': '面向 Vue3 的 Material 风格移动端组件库',
      'en-US': 'Material design mobile components built for Vue3',
    },
    header: {
      i18n: {
        'zh-CN': '中文',
        'en-US': 'English',
      },
      github: 'https://github.com/varletjs/varlet',
      darkMode: true,
    },
  },
  themeKey: 'VARLET_THEME',
  lightTheme: {
    'color-body': '#fff',
    'color-index-page-background': '#f2f2f2',
    'color-index-page-feature-background': '#fff',
    'color-index-page-logo-mask-background': 'linear-gradient(-45deg, #8baff8 50%, #84e0ff 50%)',
    'color-index-page-second-text-color': 'rgba(60, 60, 60, .7)',
    'color-index-page-divider-color': '#ddd',
    'color-bar': '#fff',
    'color-sub-bar': '#f5f5f5',
    'color-text': '#555',
    'color-sub-text': '#888',
    'color-border': 'rgba(0, 0, 0, 0.12)',
    'color-shadow': '#eee',
    'color-introduce-border': '#2196f3',
    'color-primary': '#2196f3',
    'color-link': '#00c48f',
    'color-type': '#00c48f',
    'color-loading-bar': '#1d92e9',
    'color-side-bar': '#3a7afe',
    'color-side-bar-active-background': '#3a7afe1a',
    'color-app-bar': '#3a7afe',
    'color-nav-button-hover-background': 'rgba(0, 0, 0, 0.08)',
    'color-mobile-cell-hover': '#3a7afe',
    'color-pc-language-active': '#3a7afe',
    'color-pc-language-active-background': '#edf5ff',
    'color-pc-github-active-background': '#212121',
    'color-mobile-language-active': '#3a7afe',
    'color-mobile-language-active-background': '#edf5ff',
    'color-hl-background': '#fafafa',
    'color-hl-code': '#58727e',
    'color-hl-border': '#f3f3f3',
    'color-hl-group-a': '#7c7c7c',
    'color-hl-group-b': '#2196f3',
    'color-hl-group-c': '#ff9422',
    'color-hl-group-d': '#58c193',
    'color-hl-group-e': '#ff9422',
    'color-hl-group-f': '#ff9422',
    'color-hl-group-g': '#ff9422',
    'color-hl-group-h': '#06a6e9',
    'color-hl-group-i': '#f23733',
  },
  darkTheme: {
    'color-body': '#121212',
    'color-index-page-background': '#1e1e1e',
    'color-index-page-feature-background': '#303030',
    'color-index-page-logo-mask-background': 'linear-gradient(-45deg, #729dfc 50%, #6859f4 50%)',
    'color-index-page-second-text-color': 'rgba(255, 255, 255, .75)',
    'color-index-page-divider-color': 'rgba(84, 84, 84, .8)',
    'color-bar': '#1e1e1e',
    'color-sub-bar': '#272727',
    'color-text': '#fff',
    'color-sub-text': '#aaa',
    'color-border': '#333',
    'color-shadow': '#121212',
    'color-introduce-border': '#555',
    'color-primary': '#96cbfe',
    'color-link': '#A8FFC4',
    'color-type': '#A8FFC4',
    'color-loading-bar': '#5580f8',
    'color-side-bar': '#4a7afe',
    'color-side-bar-active-background': '#4a7afe1a',
    'color-app-bar': '#272727',
    'color-nav-button-hover-background': 'rgba(255, 255, 255, 0.08)',
    'color-mobile-cell-hover': '#4a7afe',
    'color-pc-language-active': '#4a7afe',
    'color-pc-language-active-background': '#4a7afe20',
    'color-pc-github-active-background': '#303030',
    'color-mobile-language-active': '#4a7afe',
    'color-mobile-language-active-background': '#4a7afe20',
    'color-hl-background': '#272727',
    'color-hl-code': '#fff',
    'color-hl-border': '#272727',
    'color-hl-group-a': '#7c7c7c',
    'color-hl-group-b': '#96cbfe',
    'color-hl-group-c': '#ff7b1e',
    'color-hl-group-d': '#A8FFC4',
    'color-hl-group-e': '#ff7b1e',
    'color-hl-group-f': '#ff7b1e',
    'color-hl-group-g': '#ff7b1e',
    'color-hl-group-h': '#14a6e9',
    'color-hl-group-i': '#ed4648',
  },
  icons: {
    name: 'varlet-icons',
    namespace: 'var-icon',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamilyClassName: 'var-icon--set',
    base64: true,
  },
})
