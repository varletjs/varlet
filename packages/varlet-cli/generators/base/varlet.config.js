module.exports = {
  name: 'Basic',
  namespace: 'b',
  title: 'Basic UI',
  logo: './logo.svg',
  useMobile: true,
  themes: {
    'color-body': '#fff',
    'color-bar': '#fff',
    'color-sub-bar': '#f5f5f5',
    'color-text': '#555',
    'color-sub-text': '#888',
    'color-border': 'rgba(0, 0, 0, 0.12)',
    'color-shadow': '#eee',
    'color-introduce-border': '#009688',
    'color-primary': '#009688',
    'color-link': '#009688',
    'color-type': '#009688',
    'color-progress': '#009688',
    'color-progress-track': '#fff',
    'color-side-bar': '#009688',
    'color-side-bar-active-background': '#00968821',
    'color-app-bar': '#009688',
    'color-nav-button-hover-background': 'rgba(0, 0, 0, 0.08)',
    'color-pc-language-active': '#009688',
    'color-pc-language-active-background': '#00968821',
    'color-mobile-language-active': '#009688',
    'color-mobile-language-active-background': '#00968821',
    'color-mobile-cell-hover': '#009688'
  },
  darkThemes: {
    'color-body': '#121212',
    'color-bar': '#1e1e1e',
    'color-sub-bar': '#272727',
    'color-text': '#fff',
    'color-sub-text': '#aaa',
    'color-border': '#333',
    'color-shadow': '#121212',
    'color-introduce-border': '#555',
    'color-primary': '#009688',
    'color-link': '#009688',
    'color-type': '#009688',
    'color-progress': '#009688',
    'color-progress-track': '#202020',
    'color-side-bar': '#009688',
    'color-side-bar-active-background': '#00968821',
    'color-app-bar': '#009688',
    'color-nav-button-hover-background': 'rgba(255, 255, 255, 0.08)',
    'color-pc-language-active': '#009688',
    'color-pc-language-active-background': '#00968821',
    'color-mobile-language-active': '#009688',
    'color-mobile-language-active-background': '#00968821',
    'color-mobile-cell-hover': '#009688',
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
      github: 'https://github.com/haoziqaq/varlet',
    },
  },
}
