import { JEST_MEDIA_MOCK, JEST_STYLE_MOCK, DOCS_DIR_NAME, TESTS_DIR_NAME, EXAMPLE_DIR_NAME } from '../shared/constant'

module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': JEST_STYLE_MOCK,
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': JEST_MEDIA_MOCK,
  },
  transform: {
    '\\.(vue)$': 'vue-jest',
    '\\.(js|ts)$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,ts,vue}',
    `!**/${EXAMPLE_DIR_NAME}/**`,
    `!**/${DOCS_DIR_NAME}/**`,
    `!**/${TESTS_DIR_NAME}/**`,
  ],
  moduleFileExtensions: ['js', 'vue', 'ts'],
  transformIgnorePatterns: ['/node_modules/'],
}
