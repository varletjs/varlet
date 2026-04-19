import { defineConfig } from '@varlet/cli'

export default defineConfig({
  logo: './logo.svg',
  useMobile: true,
  title: 'Varlet X',
  pc: {
    description: {
      'zh-CN':
        'Varlet X 是一个基于 Vue3 开发的 Material design 组件库，支持移动端和桌面端，由 varletjs 组织开发和维护。支持 Typescript、按需引入、暗黑模式、主题定制、国际化，并提供 VSCode 插件以保证良好的开发体验。',
      'en-US':
        'Varlet X is a Material design component library developed based on Vue3, supporting mobile and desktop, developed and maintained by varletjs organization. Support Typescript, import on demand, dark mode, theme customization, internationalization, and provide VSCode plugin to ensure a good development experience.',
    },
    header: {
      darkMode: null,
      playground: null,
      versions: null,
      changelog: null,
    },
    indexPage: {
      sponsors: null,
      contributors: null,
      teamMembers: null,
      features: [
        {
          name: {
            'zh-CN': '特性',
            'en-US': 'Feature',
          },
          description: {
            'zh-CN': '特性描述',
            'en-US': 'Feature description',
          },
        },
        {
          name: {
            'zh-CN': '特性',
            'en-US': 'Feature',
          },
          description: {
            'zh-CN': '特性描述',
            'en-US': 'Feature description',
          },
        },
        {
          name: {
            'zh-CN': '特性',
            'en-US': 'Feature',
          },
          description: {
            'zh-CN': '特性描述',
            'en-US': 'Feature description',
          },
        },
        {
          name: {
            'zh-CN': '特性',
            'en-US': 'Feature',
          },
          description: {
            'zh-CN': '特性描述',
            'en-US': 'Feature description',
          },
        },
        {
          name: {
            'zh-CN': '特性',
            'en-US': 'Feature',
          },
          description: {
            'zh-CN': '特性描述',
            'en-US': 'Feature description',
          },
        },
        {
          name: {
            'zh-CN': '特性',
            'en-US': 'Feature',
          },
          description: {
            'zh-CN': '特性描述',
            'en-US': 'Feature description',
          },
        },
      ],
    },
    menu: [
      {
        text: {
          'zh-CN': '开发指南',
          'en-US': 'Developer Guide',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': '基本介绍',
          'en-US': 'Basic Introduce',
        },
        doc: 'home',
        type: 3,
      },
      {
        text: {
          'zh-CN': '基础组件',
          'en-US': 'Basic Components',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Button 按钮',
          'en-US': 'Button',
        },
        doc: 'button',
        type: 2,
      },
    ],
  },
  mobile: {
    header: {
      darkMode: null,
    },
    title: {
      'zh-CN':
        'Varlet X 是一个基于 Vue3 开发的 Material design 组件库，支持移动端和桌面端，由 varletjs 组织开发和维护。支持 Typescript、按需引入、暗黑模式、主题定制、国际化，并提供 VSCode 插件以保证良好的开发体验。',
      'en-US':
        'Varlet X is a Material design component library developed based on Vue3, supporting mobile and desktop, developed and maintained by varletjs organization. Support Typescript, import on demand, dark mode, theme customization, internationalization, and provide VSCode plugin to ensure a good development experience.',
    },
  },
})
