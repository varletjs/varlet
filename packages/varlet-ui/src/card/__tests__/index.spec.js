import example from '../example'
import Card from '..'
import VarCard from '../Card'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay } from '../../utils/jest'

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
      src: 'https://varlet-varletjs.vercel.app/cat.jpg',
      fit: 'cover',
      height: '200px',
      width: '200px',
      alt: 'This is an image',
      elevation: '2',
      ripple: true,
    },
    slots: {
      extra: () => 'text',
    },
  })

  expect(wrapper.find('img').attributes('style')).toMatch('height: 200px')
  expect(wrapper.find('img').attributes('style')).toMatch('width: 200px')
  expect(wrapper.find('img').attributes('style')).toMatch('object-fit: cover')
  expect(wrapper.find('img').attributes('alt')).toMatch('This is an image')
  expect(wrapper.find('img').attributes('src')).toMatch('https://varlet-varletjs.vercel.app/cat.jpg')
  expect(wrapper.find('.var-card__title').text()).toBe('This is Card')
  expect(wrapper.find('.var-card__subtitle').text()).toBe('This is subtitle')
  expect(wrapper.find('.var-card__description').text()).toBe('This is description')
  expect(wrapper.find('.var-card__footer').text()).toBe('text')
  expect(wrapper.find('.var-card__floater').classes()).toContain('var-elevation--2')
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test card layout', async () => {
  const wrapper = mount(VarCard, {
    props: {
      layout: 'row',
      src: 'https://varlet-varletjs.vercel.app/cat.jpg',
      title: 'This is Card',
    },
  })

  expect(wrapper.find('.var-card--layout-row').exists()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({
    layout: 'column',
  })

  expect(wrapper.find('.var-card--layout-row').exists()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test card floating', async () => {
  const wrapper = mount({
    components: {
      [VarCard.name]: VarCard,
    },
    data: () => ({
      title: 'Title',
      floating: false,
      layout: 'column',
      src: 'https://varlet-varletjs.vercel.app/cat.jpg',
      content: 'Content',
      floatingDuration: 300,
    }),
    template: `<var-card v-model:floating="floating" :title="title" @click="floating=!floating" :layout="layout"
      :src="src"
    >
      <template #content>{{content}}</template>
    </var-card>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.trigger('click')
  await delay(300)
  expect(wrapper.find('.var-card__floater').attributes('style')).toMatch('width: 100vw')

  await wrapper.trigger('click')
  await delay(300)
  expect(wrapper.find('.var-card__floater').attributes('style')).toMatch('width: 100%')

  await wrapper.trigger('click')
  await delay(300)
  await wrapper.find('.var-card__toolbar-close').trigger('click')
  await delay(300)
  expect(wrapper.find('.var-card__floater').attributes('style')).toMatch('width: 100%')

  await wrapper.setData({
    floating: true,
  })
  await delay(300)
  expect(wrapper.find('.var-card__floater').attributes('style')).toMatch('width: 100vw')
  await wrapper.setData({
    floating: false,
  })
  await delay(300)
  expect(wrapper.find('.var-card__floater').attributes('style')).toMatch('width: 100%')

  await wrapper.setData({
    layout: 'row',
  })
  await wrapper.trigger('click')
  await delay(300)
  expect(wrapper.find('.var-card__floater').attributes('style')).toMatch('width: 100%')
  expect(wrapper.find('.var-card__content').exists()).toBeFalsy()
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
