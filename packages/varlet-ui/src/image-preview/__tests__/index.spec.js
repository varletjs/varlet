import ImagePreview from '../index'
import VarImagePreview from '../ImagePreview.vue'
import { createApp } from 'vue'
import { delay, trigger, triggerDrag } from '../../utils/test'

test('test image preview plugin', () => {
  const app = createApp({}).use(ImagePreview)
  expect(app.component(VarImagePreview.name)).toBeTruthy()
})

test('test image preview functional show & close', async () => {
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

test('test image preview onChange callback', async () => {
  const onChange = vi.fn()

  ImagePreview({
    images: ['https://varlet.gitee.io/varlet-ui/cat.jpg', 'https://varlet.gitee.io/varlet-ui/cat2.jpg'],
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

test('test image preview closeable', async () => {
  ImagePreview({
    closeable: true,
  })
  await delay(200)
  await trigger(document.querySelector('.var-image-preview__close-icon'), 'click')
  await delay(300)
  expect(document.querySelector('.var-popup')).toBeFalsy()
})
