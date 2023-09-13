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
export const LANGUAGE_TEXTS = {
  'zh-CN': {
    documentation: DOCUMENTATION_ZH,
    linkWebviewText: '查看组件文档 (VSCode Webview)',
    linkText: '查看组件文档 (外部浏览器)',
    prop: '属性',
    event: '事件',
    slot: '插槽',
    description: '描述',
    default: '默认值',
  },
  'en-US': {
    documentation: DOCUMENTATION_EN,
    linkWebviewText: 'Watch the documentation of the component (VSCode Webview)',
    linkText: 'Watch the documentation of the component (External Browser)',
    prop: 'Prop',
    event: 'Event',
    slot: 'Slot',
    description: 'Description',
    default: 'Default',
  },
}
