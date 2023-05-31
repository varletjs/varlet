export const LANGUAGE_IDS = ['vue', 'typescript', 'javascript', 'javascriptreact', 'typescriptreact']
export const TAG_LINK_RE = /(?<=<var-)([\w-]+)/g
export const TAG_BIG_CAMELIZE_RE = /(?<=<Var)([\w-]+)/g
// https://regexr.com/77ppf
export const ATTR_RE = /(?:<(var-[\w-]+)[^>/]*)|(?:<(Var[\w-]+)[^>/]*)/g
export const PROP_NAME_RE = /name=['"][\w-]*/
export const DOCUMENTATION_EN = 'https://varlet.gitee.io/varlet-ui/#/en-US'
export const DOCUMENTATION_ZH = 'https://varlet.gitee.io/varlet-ui/#/zh-CN'
export const PLAYGROUND = 'https://varlet.gitee.io/varlet-ui-playground'
export const ICONS_STATIC = 'https://varlet.gitee.io/varlet-ui/icons/png'
export const LANGUAGES_TEXT = {
  'zh-CN': {
    hover: {
      linkText: '查看组件的官方文档',
      propname: '属性名称',
      eventname: '事件名称',
      slotname: '插槽名称',
      description: '描述',
      default: '默认值',
    },
  },
  'en-US': {
    hover: {
      linkText: 'Watch the documentation of the component',
      propname: 'Prop Name',
      eventname: 'Event Name',
      slotname: 'Slot Name',
      description: 'Description',
      default: 'Default',
    },
  },
}
