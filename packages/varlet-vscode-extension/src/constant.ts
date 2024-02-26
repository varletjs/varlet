export const LANGUAGE_IDS = ['vue', 'typescript', 'javascript', 'javascriptreact', 'typescriptreact']
export const TAG_LINK_RE = /(?<=<var-)([\w-]+)/g
export const TAG_BIG_CAMELIZE_RE = /(?<=<Var)([\w-]+)/g
// https://regexr.com/77ppf
export const ATTR_RE = /(?:<(var-[\w-]+)[^>/]*)|(?:<(Var[\w-]+)[^>/]*)/g
export const PROP_NAME_RE = /name=['"][\w-]*/
