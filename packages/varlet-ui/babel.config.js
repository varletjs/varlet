module.exports = {
  presets: [
    '@varlet/cli/preset',
    {
      loose: process.env.NODE_ENV === 'compile',
    },
  ],
}
