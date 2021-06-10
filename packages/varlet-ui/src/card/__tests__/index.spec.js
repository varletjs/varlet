import example from '../example'
import Card from '..'
import VarCard from '../Card'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test card example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test card plugin', () => {
  const app = createApp({}).use(Card)
  expect(app.component(Card.name)).toBeTruthy()
})

test('test card props', async () => {
  const wrapper = mount(VarCard, {
    props: {
      title: 'This is Card',
      description: 'This is description',
      subtitle: 'This is subtitle',
      src: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      fit: 'cover',
      height: '200px',
      alt: 'This is an image',
      elevation: '2',
      ripple: true,
    },
    slots: {
      extra: () => 'text',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test card onClick with null callback', () => {
  const wrapper = mount(VarCard)
  wrapper.trigger('click')
  wrapper.unmount()
})

test('test card onClick', () => {
  const onClick = jest.fn()
  const wrapper = mount(VarCard, {
    props: {
      onClick,
    },
  })

  wrapper.trigger('click')
  expect(onClick).toHaveBeenCalledTimes(1)
  wrapper.unmount()
})
