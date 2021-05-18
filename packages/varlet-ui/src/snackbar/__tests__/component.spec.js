import Snackbar from '..'
import VarSnackbar from '../Snackbar'
import example from '../example'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay } from '../../utils/jest'

test('test snackbar example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test snackbar component plugin', () => {
  const app = createApp({}).use(Snackbar.Component)
  expect(app.component(Snackbar.Component.name)).toBeTruthy()
})

test('test snackbar style', async () => {
  const template = `
     <var-snackbar
      v-model:show="show"
      type="loading"
      position="center"
      content-class="test-snackbar"
      vertical
      :duration="500"
      loading-type="wave"
      loading-size="large"
      content="test snackbar"
      forbid-click
      lock-scroll
    />
   `
  mount({
    components: {
      [VarSnackbar.name]: VarSnackbar
    },
    data() {
      return {
        show: true
      }
    },
    template
  })

  await delay(200)
  expect(document.body.innerHTML).toMatchSnapshot()

  await delay(500)
  expect(document.querySelector('.var-snackbar').style.display).toBe('none')
})
