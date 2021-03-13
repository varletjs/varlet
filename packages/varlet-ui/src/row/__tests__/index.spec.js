import example from '../example'
import { render } from '@testing-library/vue'

test('test row example', async () => {
  const wrapper = render(example)
  console.log(wrapper)
})
