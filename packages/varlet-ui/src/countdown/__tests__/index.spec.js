import example from '../example'
import { render } from '@testing-library/vue'

test('test countdown example', async () => {
  const wrapper = render(example)
  console.log(wrapper)
})
