module.exports = (api, options) => {
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
      require('./babel.sfc.transform.cjs'),
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
