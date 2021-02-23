import example from '../example'
import { render, fireEvent } from '@testing-library/vue'

test('test button example', async () => {
  const { html } = render(example)

  expect(html()).toMatchSnapshot()
})

test('test button click', async () => {
  const { getByText } = render(example)
  await fireEvent.click(getByText('点击'))

  expect(getByText('click success!')).toBeTruthy()
})

test('test button touch', async () => {
  const { getByText } = render(example)
  await fireEvent.touchStart(getByText('触摸开始(移动端)'))

  expect(getByText('touchstart success!')).toBeTruthy()
})
