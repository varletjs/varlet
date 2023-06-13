const { resolve } = require('path')
const { pathExistsSync } = require('fs-extra')

const JEST_MEDIA_MOCK = resolve(__dirname, 'jest.media.mock.cjs')
const JEST_STYLE_MOCK = resolve(__dirname, 'jest.style.mock.cjs')

function getRootConfig() {
  const file = resolve(process.cwd(), 'jest.config.js')

  if (pathExistsSync(file)) {
    delete require.cache[require.resolve(file)]
    return require(file)
  }

  return {}
}

module.exports = {
  testEnvironment: 'jsdom',
  coverageProvider: 'v8',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
  moduleNameMapper: {
    '^@config$': '<rootDir>/.varlet/site.config.json',
    '\\.(css|less)$': JEST_STYLE_MOCK,
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': JEST_MEDIA_MOCK,
  },
  transform: {
    '\\.(vue)$': '@vue/vue3-jest',
    '\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx,vue}', `!**/example/**`, `!**/docs/**`, `!**/__tests__/**`],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
  transformIgnorePatterns: [],
  ...getRootConfig(),
}
