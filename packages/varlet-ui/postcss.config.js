module.exports = () => {
  const plugins = {}

  if (process.env.NODE_ENV !== 'compile') {
    plugins['postcss-px-to-viewport'] = {
      viewportWidth: 375,
      unitPrecision: 6,
      unitToConvert: 'px',
      selectorBlackList: ['.var-slider__track-background'],
      propList: ['*'],
      exclude: [/site\/components\//, /site\/pc/],
    }
  }

  return { plugins }
}
