module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      unitPrecision: 6,
      unitToConvert: 'px',
      propList: ['*'],
      exclude: [/site\/components\//, /site\/pc/],
    },
  },
}
