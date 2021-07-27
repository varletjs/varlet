module.exports = {
  host: 'localhost',
  port: 8080,
  name: 'Varlet',
  title: 'VARLET',
  namespace: 'var',
  logo: 'https://varlet.gitee.io/varlet-ui/varlet_icon.png',
  useMobile: false,
  pc: {
    redirect: '/zh-CN/home',
    title: {
      'zh-CN': 'Varlet 面向Vue3的Material风格移动端组件库',
      'en-US': 'Material design mobile components built for Vue3',
    },
    header: {
      language: {
        'zh-CN': '中文',
        'en-US': 'English',
      },
    },
  },
  mobile: {
    redirect: '/home',
    title: {
      'zh-CN': 'Varlet 面向Vue3的Material风格移动端组件库',
      'en-US': 'Material design mobile components built for Vue3',
    },
    header: {
      language: {
        'zh-CN': '中文',
        'en-US': 'English',
      },
    },
  },
}
