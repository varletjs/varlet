import { expect } from 'vitest'
import Themes from '..'

test('test dark theme', () => {
  expect(Themes.dark).toMatchSnapshot()
})

test('test md3Light theme', () => {
  expect(Themes.md3Light).toMatchSnapshot()
})

test('test md3Dark theme', () => {
  expect(Themes.md3Dark).toMatchSnapshot()
})
