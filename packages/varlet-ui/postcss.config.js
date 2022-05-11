module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      unitPrecision: 6,
      unitToConvert: 'px',
      propList: ['*'],
      selectorBlackList: ['.router-view__block'],
      exclude: [/site\/components\//, /site\/pc/],
    },
  },
}
