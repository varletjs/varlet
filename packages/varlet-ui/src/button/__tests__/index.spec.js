const Button = require('../../../cjs/button').default
const { render, fireEvent } = require('@testing-library/vue')

test('increments value on click', async () => {
  const { getByText } = render(Button)

  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  getByText('Times clicked: 0')

  const button = getByText('increment')

  // Dispatch a native click event to our button element.
  await fireEvent.click(button)
  await fireEvent.click(button)

  getByText('Times clicked: 2')
})
