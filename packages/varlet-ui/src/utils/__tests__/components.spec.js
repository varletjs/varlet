import { expect, vi } from 'vitest'
import { withPropsDefaultsSetter } from '../components'

test('test withPropsDefaultsSetter', () => {
  const mock = {}
  const props = {
    name: String,
    age: [String, Number],
    gender: {
      type: String,
    },
  }

  withPropsDefaultsSetter(mock, props)

  mock.setPropsDefaults({
    name: 'default name',
    age: 'default age',
    gender: 'default gender',
  })

  expect(props).toStrictEqual({
    name: {
      type: String,
      default: 'default name',
    },
    age: {
      type: [String, Number],
      default: 'default age',
    },
    gender: {
      type: String,
      default: 'default gender',
    },
  })
})
