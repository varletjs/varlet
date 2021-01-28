const supportTouch = 'ontouchstart' in window
let initiated = false
let eventTarget

const isMousedown = (eventType) => eventType === 'mousedown'

const isMousemove = (eventType) => eventType === 'mousemove'

const isMouseup = (eventType) => eventType === 'mouseup'

const isUpdateTarget = (eventType) =>
  isMousedown(eventType) || !eventTarget || (eventTarget && !eventTarget.dispatchEvent)

function Touch(target, identifier, mouseEvent) {
  const { clientX, clientY, screenX, screenY, pageX, pageY } = mouseEvent

  this.identifier = identifier
  this.target = target
  this.clientX = clientX
  this.clientY = clientY
  this.screenX = screenX
  this.screenY = screenY
  this.pageX = pageX
  this.pageY = pageY
}

function updateTouchList(mouseEvent) {
  const touchList = createTouchList()

  touchList.push(new Touch(eventTarget, 1, mouseEvent))
  return touchList
}

function createTouchList() {
  const touchList = []

  touchList.item = function (index) {
    return this[index] || null
  }

  return touchList
}

function getActiveTouches(mouseEvent) {
  const { type } = mouseEvent
  if (isMouseup(type)) return createTouchList()
  return updateTouchList(mouseEvent)
}

function triggerTouch(touchType, mouseEvent) {
  const { altKey, ctrlKey, metaKey, shiftKey } = mouseEvent
  const touchEvent = document.createEvent('Event')
  touchEvent.initEvent(touchType, true, true)

  touchEvent.altKey = altKey
  touchEvent.ctrlKey = ctrlKey
  touchEvent.metaKey = metaKey
  touchEvent.shiftKey = shiftKey

  touchEvent.touches = getActiveTouches(mouseEvent)
  touchEvent.targetTouches = getActiveTouches(mouseEvent)
  touchEvent.changedTouches = createTouchList(mouseEvent)

  eventTarget.dispatchEvent(touchEvent)
}

function onMouse(mouseEvent, touchType) {
  const { type, target } = mouseEvent

  initiated = isMousedown(type) ? true : isMouseup(type) ? false : initiated

  if (isMousemove(type) && !initiated) return

  if (isUpdateTarget(type)) eventTarget = target

  triggerTouch(touchType, mouseEvent)

  if (isMouseup(type)) eventTarget = null
}

function createTouchEmulator() {
  window.addEventListener('mousedown', (event) => onMouse(event, 'touchstart'), true)
  window.addEventListener('mousemove', (event) => onMouse(event, 'touchmove'), true)
  window.addEventListener('mouseup', (event) => onMouse(event, 'touchend'), true)
}

if (!supportTouch) createTouchEmulator()
