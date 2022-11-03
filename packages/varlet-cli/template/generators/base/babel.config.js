module.exports = {
  presets: [
    [
      '@varlet/cli/preset.cjs',
      {
        loose: process.env.NODE_ENV === 'compile',
      },
    ],
  ],
}
