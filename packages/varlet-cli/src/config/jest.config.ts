import { JEST_MEDIA_MOCK, JEST_STYLE_MOCK } from '../shared/constant'

module.exports = {
  moduleNameMapper: {
    '\\.(css|less|scss)$': JEST_STYLE_MOCK,
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': JEST_MEDIA_MOCK,
  },
  moduleFileExtensions: ['js'],
  transformIgnorePatterns: ['/node_modules/'],
}
