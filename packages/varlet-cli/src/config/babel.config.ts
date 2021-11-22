import type { ConfigAPI } from '@babel/core'

type PresetOption = {
  loose?: boolean
  enableObjectSlots?: boolean
}

module.exports = (api?: ConfigAPI, options: PresetOption = {}) => {
  if (api) {
    api.cache.never()
  }

  const isCommonJS = process.env.NODE_ENV === 'test' || process.env.BABEL_MODULE === 'commonjs'

  return {
    presets: [
      [
        require.resolve('@babel/preset-env'),
        {
          modules: isCommonJS ? 'commonjs' : false,
          loose: options.loose,
        },
      ],
      require.resolve('@babel/preset-typescript'),
      require('./babel.sfc.transform'),
    ],
    plugins: [
      [
        require.resolve('@vue/babel-plugin-jsx'),
        {
          enableObjectSlots: options.enableObjectSlots,
        },
      ],
    ],
  }
}

export default module.exports
