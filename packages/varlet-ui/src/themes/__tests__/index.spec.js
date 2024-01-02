import { expect } from 'vitest'
import Themes from '..'

test('test dark theme', () => {
  expect(Themes.dark).toMatchSnapshot()
})
