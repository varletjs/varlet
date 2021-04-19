module.exports = {
  name: 'Varlet',
  namespace: 'var',
  title: 'VARLET',
  host: '0.0.0.0',
  port: 8080,
  pc: {
    title: 'Varlet 面向Vue3的Material风格移动端组件库',
    description: 'Varlet 面向Vue3的Material风格移动端组件库',
    logo: 'https://varlet.gitee.io/varlet-ui/varlet_icon.png',
    redirect: '/zh-CN/home',
    header: {
      logo: 'https://varlet.gitee.io/varlet-ui/varlet_icon.png',
      search: {
        'zh-CN': '搜索文档...',
        'en-US': 'Search...',
      },
      language: {
        'zh-CN': '中文',
        'en-US': 'English',
      },
    },
    menu: [
      {
        text: {
          'zh-CN': '开发指南',
          'en-US': 'Developer guide',
        },
        isTitle: true,
      },
      {
        text: {
          'zh-CN': '基本介绍',
          'en-US': 'Basic Introduce',
        },
        doc: 'home',
        nonComponent: true,
      },
      {
        text: {
          'zh-CN': '快速开始',
          'en-US': 'Quickstart',
        },
        doc: 'quickstart',
        nonComponent: true,
      },
      {
        text: {
          'zh-CN': '按需引入',
          'en-US': 'Import on demand',
        },
        doc: 'importOnDemand',
        nonComponent: true,
      },
      {
        text: {
          'zh-CN': '浏览器适配',
          'en-US': 'Browser Adaptation',
        },
        doc: 'browserAdaptation',
        nonComponent: true,
      },
      {
        text: {
          'zh-CN': '主题定制',
          'en-US': 'Custom Theme',
        },
        doc: 'customTheme',
        nonComponent: true,
      },
      {
        text: {
          'zh-CN': '国际化',
          'en-US': 'Locale',
        },
        doc: 'locale',
        nonComponent: true,
      },
      {
        text: {
          'zh-CN': 'IDE语法高亮',
          'en-US': 'IDE Code Highlight',
        },
        doc: 'highlight',
        nonComponent: true,
      },
      {
        text: {
          'zh-CN': '基础组件',
          'en-US': 'Basic Components',
        },
        isTitle: true,
      },
      {
        text: {
          'zh-CN': 'Button 按钮',
          'en-US': 'Button',
        },
        doc: 'button',
      },
      {
        text: {
          'zh-CN': 'Cell 单元格',
          'en-US': 'Cell',
        },
        doc: 'cell',
      },
      {
        text: {
          'zh-CN': 'Icon 图标',
          'en-US': 'Icon',
        },
        doc: 'icon',
      },
      {
        text: {
          'zh-CN': 'Image 图片',
          'en-US': 'Image',
        },
        doc: 'image',
      },
      {
        text: {
          'zh-CN': 'Loading 加载',
          'en-US': 'Loading',
        },
        doc: 'loading',
      },
      {
        text: {
          'zh-CN': 'Chip 标签',
          'en-US': 'Chip',
        },
        doc: 'chip',
      },
      {
        text: {
          'zh-CN': 'Badge 徽标',
          'en-US': 'Badge',
        },
        doc: 'badge',
      },
      {
        text: {
          'zh-CN': 'Elevation 海拔效果',
          'en-US': 'Elevation',
        },
        doc: 'styles',
      },
      {
        text: {
          'zh-CN': '展示组件',
          'en-US': 'Display Components',
        },
        isTitle: true,
      },
      {
        text: {
          'zh-CN': 'Skeleton 骨架屏',
          'en-US': 'Skeleton',
        },
        doc: 'skeleton',
      },
      {
        text: {
          'zh-CN': 'Collapse 拓展面板',
          'en-US': 'Collapse',
        },
        doc: 'Collapse',
      },
      {
        text: {
          'zh-CN': 'Layout 布局',
          'en-US': 'Layout',
        },
        doc: 'row',
      },
      {
        text: {
          'zh-CN': 'Sticky 粘性布局',
          'en-US': 'Sticky',
        },
        doc: 'sticky',
      },
      {
        text: {
          'zh-CN': 'Progress 进度条',
          'en-US': 'Progress',
        },
        doc: 'progress',
      },
      {
        text: {
          'zh-CN': 'List 无限滚动列表',
          'en-US': 'List',
        },
        doc: 'list',
      },
      {
        text: {
          'zh-CN': 'Swipe 轮播',
          'en-US': 'Swipe',
        },
        doc: 'swipe',
      },
      {
        text: {
          'zh-CN': 'Steps 步骤条',
          'en-US': 'Steps',
        },
        doc: 'steps',
      },
      {
        text: {
          'zh-CN': '导航组件',
          'en-US': 'Navigation Components',
        },
        isTitle: true,
      },
      {
        text: {
          'zh-CN': 'Tabs 选项卡',
          'en-US': 'Tabs',
        },
        doc: 'tabs',
      },
      {
        text: {
          'zh-CN': 'IndexBar 索引栏',
          'en-US': 'IndexBar',
        },
        doc: 'index-bar',
      },
      {
        text: {
          'zh-CN': 'AppBar 导航栏',
          'en-US': 'AppBar',
        },
        doc: 'app-bar',
      },
      {
        text: {
          'zh-CN': '功能指令',
          'en-US': 'Functional Directives',
        },
        isTitle: true,
      },
      {
        text: {
          'zh-CN': 'Ripple 水波指令',
          'en-US': 'Ripple',
        },
        doc: 'ripple',
      },
      {
        text: {
          'zh-CN': 'Lazy 懒加载',
          'en-US': 'Lazy',
        },
        doc: 'lazy',
      },
      {
        text: {
          'zh-CN': '反馈组件',
          'en-US': 'Action Components',
        },
        isTitle: true,
      },
      {
        text: {
          'zh-CN': 'Snackbar 消息条',
          'en-US': 'Snackbar',
        },
        doc: 'snackbar',
      },
      {
        text: {
          'zh-CN': 'Dialog 对话框',
          'en-US': 'Dialog',
        },
        doc: 'dialog',
      },
      {
        text: {
          'zh-CN': 'PullRefresh 下拉刷新',
          'en-US': 'PullRefresh',
        },
        doc: 'pull-refresh',
      },
      {
        text: {
          'zh-CN': 'Popup 弹出层',
          'en-US': 'Popup',
        },
        doc: 'popup',
      },
      {
        text: {
          'zh-CN': 'Menu 菜单',
          'en-US': 'Menu',
        },
        doc: 'menu',
      },
      {
        text: {
          'zh-CN': 'BackTop 回到顶部',
          'en-US': 'BackTop',
        },
        doc: 'back-top',
      },
      {
        text: {
          'zh-CN': 'Countdown 倒计时',
          'en-US': 'Countdown',
        },
        doc: 'countdown',
      },
      {
        text: {
          'zh-CN': 'Picker 多列选择器',
          'en-US': 'Picker',
        },
        doc: 'picker',
      },
      {
        text: {
          'zh-CN': 'DatePicker 日期选择器',
          'en-US': 'DatePicker',
        },
        doc: 'date-picker',
      },
      {
        text: {
          'zh-CN': 'TimePicker 时间选择器',
          'en-US': 'TimePicker',
        },
        doc: 'time-picker',
      },
      {
        text: {
          'zh-CN': '表单组件',
          'en-US': 'Form Components',
        },
        isTitle: true,
      },
      {
        text: {
          'zh-CN': 'Form 表单',
          'en-US': 'Form',
        },
        doc: 'form',
      },
      {
        text: {
          'zh-CN': 'Input 输入框',
          'en-US': 'Input',
        },
        doc: 'input',
      },
      {
        text: {
          'zh-CN': 'Select 选择框',
          'en-US': 'Select',
        },
        doc: 'select',
      },
      {
        text: {
          'zh-CN': 'Radio 单选框',
          'en-US': 'Radio',
        },
        doc: 'radio-group',
      },
      {
        text: {
          'zh-CN': 'Checkbox 复选框',
          'en-US': 'Checkbox',
        },
        doc: 'checkbox-group',
      },
      {
        text: {
          'zh-CN': 'Counter 计数器',
          'en-US': 'Counter',
        },
        doc: 'counter',
      },
      {
        text: {
          'zh-CN': 'Switch 开关',
          'en-US': 'Switch',
        },
        doc: 'switch',
      },
      {
        text: {
          'zh-CN': 'Slider 滑块',
          'en-US': 'slider',
        },
        doc: 'slider',
      },
      {
        text: {
          'zh-CN': 'Rate 评分',
          'en-US': 'Rate',
        },
        doc: 'rate',
      },
      {
        text: {
          'zh-CN': 'Uploader 文件上传',
          'en-US': 'Uploader',
        },
        doc: 'uploader',
      },
    ],
  },
  mobile: {
    title: 'Varlet 面向Vue3的Material风格移动端组件库',
    description: 'Varlet 面向Vue3的Material风格移动端组件库',
    logo: 'https://cn.vuejs.org/images/logo.png',
    redirect: '/home',
  },
}
