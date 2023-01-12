import { defineConfig } from '@varlet/cli'

export default defineConfig({
  useMobile: true,
  analysis: {
    baidu: 'https://hm.baidu.com/hm.js?5c628ce58967c90ff4dd9c8803d930fa',
  },
  pc: {
    header: {
      version: {
        current: 'Vue 3',
      },
      playground:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://varlet.gitee.io/varlet-ui-playground',
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
          'zh-CN': '快速开始',
          'en-US': 'Quickstart',
        },
        doc: 'quickstart',
        type: 3,
      },
      {
        text: {
          'zh-CN': '按需引入',
          'en-US': 'Import on demand',
        },
        doc: 'importOnDemand',
        type: 3,
      },
      {
        text: {
          'zh-CN': '暗黑模式',
          'en-US': 'Dark Mode',
        },
        doc: 'themes',
        type: 2,
      },
      {
        text: {
          'zh-CN': '服务端渲染',
          'en-US': 'Server side rendering',
        },
        doc: 'serverSideRendering',
        type: 3,
      },
      {
        text: {
          'zh-CN': '浏览器适配',
          'en-US': 'Browser Adaptation',
        },
        doc: 'browserAdaptation',
        type: 3,
      },
      {
        text: {
          'zh-CN': '国际化',
          'en-US': 'Locale',
        },
        doc: 'locale',
        type: 3,
      },
      {
        text: {
          'zh-CN': '开发工具支持',
          'en-US': 'IDE Code Support',
        },
        doc: 'ide',
        type: 3,
      },
      {
        text: {
          'zh-CN': '组件库快速成型工具',
          'en-US': 'Components Library Tools',
        },
        doc: 'cli',
        type: 3,
      },
      {
        text: {
          'zh-CN': '开源指南',
          'en-US': 'Open Source Guide',
        },
        doc: 'openSourceGuide',
        type: 3,
      },
      {
        text: {
          'zh-CN': '从 1.x 迁移',
          'en-US': 'Migrating from 1.x',
        },
        doc: 'migrationGuide',
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
          'zh-CN': 'StyleProvider 样式定制',
          'en-US': 'StyleProvider',
        },
        doc: 'style-provider',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Button 按钮',
          'en-US': 'Button',
        },
        doc: 'button',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Breadcrumbs 面包屑',
          'en-US': 'Breadcrumbs',
        },
        doc: 'breadcrumbs',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Link 链接',
          'en-US': 'Link',
        },
        doc: 'link',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Cell 单元格',
          'en-US': 'Cell',
        },
        doc: 'cell',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Icon 图标',
          'en-US': 'Icon',
        },
        doc: 'icon',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Image 图片',
          'en-US': 'Image',
        },
        doc: 'image',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Loading 加载',
          'en-US': 'Loading',
        },
        doc: 'loading',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Chip 纸片',
          'en-US': 'Chip',
        },
        doc: 'chip',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Badge 徽标',
          'en-US': 'Badge',
        },
        doc: 'badge',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Elevation 海拔效果',
          'en-US': 'Elevation',
        },
        doc: 'styles',
        type: 2,
      },
      {
        text: {
          'zh-CN': '展示组件',
          'en-US': 'Display Components',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Skeleton 骨架屏',
          'en-US': 'Skeleton',
        },
        doc: 'skeleton',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Collapse 折叠面板',
          'en-US': 'Collapse',
        },
        doc: 'collapse',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Space 间隔',
          'en-US': 'Space',
        },
        doc: 'space',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Layout 布局',
          'en-US': 'Layout',
        },
        doc: 'row',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Sticky 粘性布局',
          'en-US': 'Sticky',
        },
        doc: 'sticky',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Progress 进度条',
          'en-US': 'Progress',
        },
        doc: 'progress',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'List 无限滚动列表',
          'en-US': 'List',
        },
        doc: 'list',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Swipe 轮播',
          'en-US': 'Swipe',
        },
        doc: 'swipe',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Steps 步骤条',
          'en-US': 'Steps',
        },
        doc: 'steps',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'ImagePreview 图片预览',
          'en-US': 'ImagePreview',
        },
        doc: 'image-preview',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Card 卡片',
          'en-US': 'Card',
        },
        doc: 'card',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Result 结果',
          'en-US': 'Result',
        },
        doc: 'result',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Divider 分割线',
          'en-US': 'Divider',
        },
        doc: 'divider',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Table 表格',
          'en-US': 'Table',
        },
        doc: 'table',
        type: 2,
      },
      {
        text: {
          'zh-CN': '导航组件',
          'en-US': 'Navigation Components',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Tabs 选项卡',
          'en-US': 'Tabs',
        },
        doc: 'tabs',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'IndexBar 索引栏',
          'en-US': 'IndexBar',
        },
        doc: 'index-bar',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'AppBar 导航栏',
          'en-US': 'AppBar',
        },
        doc: 'app-bar',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'BottomNavigation 底部导航栏',
          'en-US': 'BottomNavigation',
        },
        doc: 'bottom-navigation',
        type: 2,
      },
      {
        text: {
          'zh-CN': '功能指令',
          'en-US': 'Functional Directives',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Ripple 水波指令',
          'en-US': 'Ripple',
        },
        doc: 'ripple',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Lazy 懒加载',
          'en-US': 'Lazy',
        },
        doc: 'lazy',
        type: 2,
      },
      {
        text: {
          'zh-CN': '反馈组件',
          'en-US': 'Action Components',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Snackbar 消息条',
          'en-US': 'Snackbar',
        },
        doc: 'snackbar',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'ActionSheet 动作面板',
          'en-US': 'ActionSheet',
        },
        doc: 'action-sheet',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Dialog 对话框',
          'en-US': 'Dialog',
        },
        doc: 'dialog',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'PullRefresh 下拉刷新',
          'en-US': 'PullRefresh',
        },
        doc: 'pull-refresh',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Overlay 遮罩层',
          'en-US': 'Overlay',
        },
        doc: 'overlay',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Popup 弹出层',
          'en-US': 'Popup',
        },
        doc: 'popup',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Pagination 分页',
          'en-US': 'Pagination',
        },
        doc: 'pagination',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Menu 菜单',
          'en-US': 'Menu',
        },
        doc: 'menu',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Tooltip 提示',
          'en-US': 'Tooltip',
        },
        doc: 'tooltip',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'BackTop 回到顶部',
          'en-US': 'BackTop',
        },
        doc: 'back-top',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'LoadingBar 加载条',
          'en-US': 'LoadingBar',
        },
        doc: 'loading-bar',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Countdown 倒计时',
          'en-US': 'Countdown',
        },
        doc: 'countdown',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Picker 多列选择器',
          'en-US': 'Picker',
        },
        doc: 'picker',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'DatePicker 日期选择器',
          'en-US': 'DatePicker',
        },
        doc: 'date-picker',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'TimePicker 时间选择器',
          'en-US': 'TimePicker',
        },
        doc: 'time-picker',
        type: 2,
      },
      {
        text: {
          'zh-CN': '表单组件',
          'en-US': 'Form Components',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Form 表单',
          'en-US': 'Form',
        },
        doc: 'form',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Input 输入框',
          'en-US': 'Input',
        },
        doc: 'input',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Select 选择框',
          'en-US': 'Select',
        },
        doc: 'select',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Radio 单选框',
          'en-US': 'Radio',
        },
        doc: 'radio-group',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Checkbox 复选框',
          'en-US': 'Checkbox',
        },
        doc: 'checkbox-group',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Counter 计数器',
          'en-US': 'Counter',
        },
        doc: 'counter',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Switch 开关',
          'en-US': 'Switch',
        },
        doc: 'switch',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Slider 滑块',
          'en-US': 'Slider',
        },
        doc: 'slider',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Rate 评分',
          'en-US': 'Rate',
        },
        doc: 'rate',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Uploader 文件上传',
          'en-US': 'Uploader',
        },
        doc: 'uploader',
        type: 2,
      },
    ],
  },
  highlight: {
    style: null,
  },
  moduleCompatible: {
    "import dayjs from 'dayjs/esm'\n": "import dayjs from 'dayjs'\n",
    "import isSameOrBefore from 'dayjs/esm/plugin/isSameOrBefore'\n":
      "import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'\n",
    "import isSameOrAfter from 'dayjs/esm/plugin/isSameOrAfter'\n":
      "import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'\n",
  },
})
