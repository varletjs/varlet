const { defineConfig } = require('@varlet/cli')

module.exports = defineConfig({
  logo: './logo.svg',
  useMobile: true,
  pc: {
    header: {
      darkMode: null,
      playground: null,
    },
    menu: [
      {
        text: {
          'zh-CN': '开发指南',
          'en-US': 'Developer guide',
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
  },
})
