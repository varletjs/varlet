const supportTouch = 'ontouchstart' in window
let initiated = false
let eventTarget: EventTarget | null

const isMousedown = (eventType: string): boolean => eventType === 'mousedown'

const isMousemove = (eventType: string): boolean => eventType === 'mousemove'

const isMouseup = (eventType: string): boolean => eventType === 'mouseup'

const isUpdateTarget = (eventType: string): boolean =>
	isMousedown(eventType) || !eventTarget || (eventTarget && !eventTarget.dispatchEvent)

function updateTouchList(mouseEvent: MouseEvent): Touch[] {
	const { clientX, clientY, screenX, screenY, pageX, pageY } = mouseEvent
	const touchList: Touch[] = []
	const touchInitDict: TouchInit = {
		identifier: 1,
		target: eventTarget as EventTarget,
		clientX,
		clientY,
		screenX,
		screenY,
		pageX,
		pageY,
	}
	touchList.push(new Touch(touchInitDict))
	return touchList
}

function getActiveTouches(mouseEvent: MouseEvent): Touch[] {
	const { type } = mouseEvent
	const touchList: Touch[] = []
	if (isMouseup(type)) return touchList
	return updateTouchList(mouseEvent)
}

function triggerTouch(touchType: string, mouseEvent: MouseEvent) {
	const { altKey, ctrlKey, metaKey, shiftKey } = mouseEvent

	const eventInitDict: TouchEventInit = {
		touches: getActiveTouches(mouseEvent),
		targetTouches: getActiveTouches(mouseEvent),
		changedTouches: updateTouchList(mouseEvent),
		altKey,
		ctrlKey,
		metaKey,
		shiftKey,
		bubbles: true,
		cancelable: true,
	}

	const touchEvent = new TouchEvent(touchType, eventInitDict)

	;(eventTarget as EventTarget).dispatchEvent(touchEvent)
}

function onMouse(mouseEvent: MouseEvent, touchType: string) {
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
