// import Avatar from '..'
// import VarAvatar from '../Avatar'
// import { mount } from '@vue/test-utils'
// import { createApp } from 'vue'

// const SRC = 'https://varlet.gitee.io/varlet-ui/cat.png'

// test('test avatar plugin', () => {
//   const app = createApp({}).use(Avatar)
//   expect(app.component(Avatar.name)).toBeTruthy()
// })

// describe('test avatar component event', () => {
//   test('test avatar onLoad & onError', () => {
//     const onLoad = jest.fn()
//     const onError = jest.fn()
//     const wrapper = mount(VarAvatar, {
//       props: {
//         src: SRC,
//         onLoad,
//         onError,
//       },
//     })
//     const img = wrapper.find('.var-avatar__image')

//     img.trigger('load')
//     img.trigger('error')
//     expect(onLoad).toHaveBeenCalledTimes(1)
//     expect(onError).toHaveBeenCalledTimes(1)
//     wrapper.unmount()
//   })

//   // test('test avatar onLoad & onError in lazy mode', () => {
//   //   const onLoad = jest.fn()
//   //   const onError = jest.fn()
//   //   const wrapper = mount(VarAvatar, {
//   //     props: {
//   //       src: SRC,
//   //       lazy: true,
//   //       onLoad,
//   //       onError,
//   //     },
//   //   })

//   //   const img = wrapper.find('.var-avatar__image')

//   //   img.element._lazy.state = 'success'
//   //   img.trigger('load')
//   //   expect(onLoad).toHaveBeenCalledTimes(1)

//   //   img.element._lazy.state = 'error'
//   //   img.trigger('load')
//   //   expect(onError).toHaveBeenCalledTimes(1)

//   //   wrapper.unmount()
//   // })

//   // test('test avatar onLoad & onError null callback', async () => {
//   //   const wrapper = mount(VarAvatar)
//   //   const img = wrapper.find('img')
//   //   await img.trigger('load')
//   //   await img.trigger('error')

//   //   await wrapper.setProps({ lazy: true })

//   //   const lazyImage = wrapper.find('img')
//   //   lazyImage.element._lazy.state = 'success'
//   //   await lazyImage.trigger('load')
//   //   lazyImage.element._lazy.state = 'error'
//   //   await lazyImage.trigger('load')
//   //   wrapper.unmount()
//   // })

//   // test('test avatar onClick', () => {
//   //   function expectOnClick(props = {}) {
//   //     const onClick = jest.fn()
//   //     const wrapper = mount(VarAvatar, {
//   //       props: {
//   //         onClick,
//   //         ...props,
//   //       },
//   //     })

//   //     wrapper.find('.var-avatar').trigger('click')
//   //     expect(onClick).toHaveBeenCalledTimes(1)
//   //     wrapper.unmount()
//   //   }

//   //   expectOnClick()
//   //   expectOnClick({ lazy: true })
//   // })
// })

// describe('test avatar component props', () => {
//   test('test avatar round', () => {
//     const wrapper = mount(VarAvatar, {
//       props: {
//         round: true,
//       },
//     })

//     expect(wrapper.find('.var-avatar').attributes('style')).toContain(`border-radius: 50%;`)
//     wrapper.unmount()
//   })

//   test('test avatar size', async () => {
//     ;['mini' | 'small' | 'normal' | 'large'].forEach = (type) => {
//       const wrapper = mount(VarAvatar, {
//         props: {
//           size: type,
//         },
//       })

//       expect(wrapper.find('.var-avatar').classes()).toContain('var-avatar--' + type)
//       wrapper.unmount()
//     }
//   })

//   test('test avatar color', () => {
//     const wrapper = mount(VarAvatar, {
//       props: {
//         src: '#000',
//       },
//     })

//     expect(wrapper.find('.var-avatar').attributes('style')).toContain(`background-color: #000;`)
//     wrapper.unmount()
//   })

//   test('test avatar src', () => {
//     const wrapper = mount(VarAvatar, {
//       props: {
//         src: SRC,
//       },
//     })

//     expect(wrapper.find('img').element.src).toEqual(SRC)
//     wrapper.unmount()
//   })

//   test('test avatar fit', () => {
//     ;['fill', 'contain', 'cover', 'none', 'scale-down'].forEach((fit) => {
//       const wrapper = mount(VarAvatar, {
//         props: { fit },
//       })

//       expect(wrapper.find('.var-avatar__image').attributes('style')).toContain(`object-fit: ${fit};`)
//       wrapper.unmount()
//     })
//   })

//   test('test avatar bordered', () => {
//     const wrapper = mount(VarAvatar, {
//       props: {
//         bordered: true,
//       },
//     })

//     expect(wrapper.find('.var-avatar').classes()).toContain('var-avatar--bordered')
//     wrapper.unmount()
//   })

//   test('test avatar color', () => {
//     const wrapper = mount(VarAvatar, {
//       props: {
//         src: '#fff',
//       },
//     })

//     expect(wrapper.find('.var-avatar').attributes('style')).toContain(`border-color: #fff;`)
//     wrapper.unmount()
//   })

//   test('test avatar lazy', async () => {
//     const wrapper = mount(VarAvatar, {
//       props: {
//         lazy: false,
//         src: SRC,
//       },
//     })

//     expect(wrapper.find('.var-avatar__image').attributes('src')).toContain(SRC)
//     await wrapper.setProps({ lazy: true })
//     expect(wrapper.find('.var-avatar__image').attributes('src')).not.toContain(SRC)
//     wrapper.unmount()
//   })

//   test('test avatar loading', () => {
//     const wrapper = mount(VarAvatar, {
//       props: {
//         src: SRC,
//         lazy: true,
//         loading: SRC,
//       },
//     })

//     expect(wrapper.find('.var-avatar__image').attributes('lazy-loading')).toContain(SRC)
//     wrapper.unmount()
//   })

//   test('test avatar error', () => {
//     const wrapper = mount(VarAvatar, {
//       props: {
//         src: SRC,
//         lazy: true,
//         error: SRC,
//       },
//     })

//     expect(wrapper.find('.var-avatar__image').attributes('lazy-error')).toContain(SRC)
//     wrapper.unmount()
//   })
// })
