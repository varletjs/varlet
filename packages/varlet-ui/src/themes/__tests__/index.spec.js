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

test('test toViewport', () => {
  expect(
    Themes.toViewport({
      '--a': '30px',
      '--b': '30px -30px',
      '--c': '30px 30px 30px',
      '--d': '30px 30px 30px 30px',
      '--e': '10px',
      '--f': '10.55px',
      '--g': 'calc(100% - 30px)',
    })
  ).toStrictEqual({
    '--a': '8vmin',
    '--b': '8vmin -8vmin',
    '--c': '8vmin 8vmin 8vmin',
    '--d': '8vmin 8vmin 8vmin 8vmin',
    '--e': '2.666667vmin',
    '--f': '2.813333vmin',
    '--g': 'calc(100% - 8vmin)',
  })

  expect(
    Themes.toViewport(
      {
        '--a': '30px',
        '--b': '30px -30px',
        '--c': '30px 30px 30px',
        '--d': '30px 30px 30px 30px',
        '--e': '10px',
        '--f': '10.55px',
        '--g': 'calc(100% - 30px)',
      },
      {
        viewportWidth: 750,
        viewportUnit: 'vw',
        unitPrecision: 4,
      }
    )
  ).toStrictEqual({
    '--a': '4vw',
    '--b': '4vw -4vw',
    '--c': '4vw 4vw 4vw',
    '--d': '4vw 4vw 4vw 4vw',
    '--e': '1.3333vw',
    '--f': '1.4067vw',
    '--g': 'calc(100% - 4vw)',
  })
})
