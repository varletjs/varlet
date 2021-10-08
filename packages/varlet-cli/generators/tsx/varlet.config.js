module.exports = {
  name: 'Basic',
  namespace: 'b',
  title: 'Basic UI',
  logo: './logo.svg',
  useMobile: true,
  themes: {
    'color-primary': '#009688',
    'color-link': '#009688',
    'color-type': '#009688',
    'color-progress': '#009688',
    'color-progress-track': '#fff',
    'color-side-bar': '#009688',
    'color-side-bar-active-background': '#00968821',
    'color-app-bar': '#009688',
    'color-pc-language-active': '#009688',
    'color-pc-language-active-background': '#00968821',
    'color-mobile-language-active': '#009688',
    'color-mobile-language-active-background': '#00968821',
    'color-mobile-cell-hover': '#009688'
  },
  highlight: {
    style: './highlight.css',
  },
  pc: {
    redirect: '/home',
    title: {
      'zh-CN': '一个组件库',
    },
    header: {
      i18n: null,
      github: 'https://github.com/haoziqaq/varlet',
    },
    menu: [
      {
        text: {
          'zh-CN': '开发指南',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': '基本介绍',
        },
        doc: 'home',
        type: 3,
      },
      {
        text: {
          'zh-CN': '基础组件',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Button 按钮',
        },
        doc: 'button',
        type: 2,
      },
    ],
  },
  mobile: {
    redirect: '/home',
    title: {
      'zh-CN': '一个组件库',
    },
    header: {
      i18n: null,
    },
  },
}
