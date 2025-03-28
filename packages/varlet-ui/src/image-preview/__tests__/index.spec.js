import { createApp } from 'vue'
import { expect, test, vi } from 'vitest'
import { delay, trigger, triggerDrag } from '../../utils/test'
import VarImagePreview from '../ImagePreview.vue'
import ImagePreview from '../index'

test('image preview plugin', () => {
  const app = createApp({}).use(ImagePreview)
  expect(app.component(VarImagePreview.name)).toBeTruthy()
})

test('image preview functional show & close', async () => {
  const onOpen = vi.fn()
  const onOpened = vi.fn()
  const onClose = vi.fn()
  const onClosed = vi.fn()

  ImagePreview({
    onOpen,
    onOpened,
    onClose,
    onClosed,
  })

  await delay(200)
  expect(onOpen).toHaveBeenCalledTimes(1)
  await delay(300)
  expect(onOpened).toHaveBeenCalledTimes(1)
  expect(document.querySelector('.var-popup').style.display).toBe('')

  ImagePreview.close()

  await delay(20)
  expect(onClose).toHaveBeenCalledTimes(1)
  await delay(300)
  expect(onClosed).toHaveBeenCalledTimes(1)
  expect(document.querySelector('.var-popup')).toBeFalsy()
})

test('image preview onChange callback', async () => {
  const onChange = vi.fn()

  ImagePreview({
    images: ['https://varletjs.org/varlet/cat.jpg', 'https://varletjs.org/varlet/cat2.jpg'],
    onChange,
  })
  await delay(200)

  const track = document.querySelector('.var-swipe__track')
  await triggerDrag(track, -100, 0)
  expect(onChange).toHaveBeenLastCalledWith(1)

  await triggerDrag(track, 100, 0)
  expect(onChange).toHaveBeenLastCalledWith(0)

  ImagePreview.close()
  await delay(16)
})

test('image preview closeable', async () => {
  ImagePreview({
    closeable: true,
  })
  await delay(200)
  await trigger(document.querySelector('.var-image-preview__close-icon'), 'click')
  await delay(300)
  expect(document.querySelector('.var-popup')).toBeFalsy()
})

test('image preview setDefaultOptions and resetDefaultOptions', async () => {
  ImagePreview.setDefaultOptions({ closeable: true })
  await delay(16)
  ImagePreview()
  await delay(200)
  await trigger(document.querySelector('.var-image-preview__close-icon'), 'click')
  await delay(300)
  expect(document.querySelector('.var-popup')).toBeFalsy()

  ImagePreview.resetDefaultOptions()
  await delay(16)
  ImagePreview()
  await delay(200)
  expect(document.querySelector('.var-image-preview__close-icon')).toBeFalsy()
  ImagePreview.close()
})

test('image preview imagePreventDefault', async () => {
  ImagePreview({
    images: ['https://varletjs.org/varlet/cat.jpg'],
    imagePreventDefault: true,
  })

  await delay(200)
  expect(document.querySelector('.var-image-preview--prevent')).toBeTruthy()

  ImagePreview.close()
})

test('image preview onLongPress callback', async () => {
  const onLongPress = vi.fn()

  ImagePreview({
    images: ['https://varletjs.org/varlet/cat.jpg'],
    onLongPress,
  })

  await delay(200)
  await trigger(document.querySelector('.var-image-preview__zoom-container'), 'touchstart')
  await delay(550)
  await trigger(document.querySelector('.var-image-preview__zoom-container'), 'touchend')
  expect(onLongPress).toBeCalledTimes(1)
  expect(onLongPress).toHaveBeenCalledWith(0)

  ImagePreview.close()
})

test('image preview initialIndex', async () => {
  ImagePreview({
    images: ['https://varletjs.org/varlet/cat.jpg', 'https://varletjs.org/varlet/cat2.jpg'],
    initialIndex: 1,
  })

  await delay(200)
  expect(document.querySelector('.var-image-preview__indicators').textContent).toBe('2 / 2')

  ImagePreview.close()
})
