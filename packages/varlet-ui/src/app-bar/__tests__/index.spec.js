import example from '../example'
import { render } from '@testing-library/vue'

test('test appBar example', async () => {
  const wrapper = render(example)
  console.log(wrapper)
})
