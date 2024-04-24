declare module 'less' {
  declare const render: any

  export { render }
}

declare module 'node-sass' {
  declare const renderSync: any

  export { renderSync }
}

declare module 'jest' {
  declare const runCLI: any

  export default { runCLI }
}

declare module '@babel/helper-plugin-utils'
declare module '@varlet/markdown-vite-plugin'
declare module 'conventional-changelog'
declare module '@config'
declare module '*.vue'
