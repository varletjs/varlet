import { requestAnimationFrame, clamp, cancelAnimationFrame } from 'rattail'

export interface MotionOptions {
  from: number
  to: number
  duration?: number
  frame?: ({ value, done }: { value: number; done: boolean }) => void
  timingFunction?: (v: number) => number
  onStateChange?: (state: MotionState) => void
}

export type MotionState = 'running' | 'paused' | 'pending' | 'finished'

export interface Motion {
  state: MotionState
  start: () => void
  pause: () => void
  reset: () => void
}

export function motion(options: MotionOptions) {
  const {
    from,
    to,
    duration = 300,
    frame = () => {},
    timingFunction = (value) => value,
    onStateChange = () => {},
  } = options

  let state: MotionState = 'pending'
  let value = from
  const distance = to - from
  let ticker: number | undefined = undefined
  let startTime: number | undefined = undefined
  let pausedTime: number | undefined = undefined
  let sleepTime: number = 0

  function start() {
    if (state === 'running' || state === 'finished') {
      return
    }

    setState('running')

    const now = performance.now()
    startTime = startTime != null ? startTime : now
    sleepTime += pausedTime != null ? now - pausedTime : 0
    pausedTime = undefined
    tick()

    function tick() {
      ticker = requestAnimationFrame(() => {
        if (state !== 'running') {
          return
        }

        const now = performance.now()
        const executionTime = now - startTime! - sleepTime
        const progress = clamp(executionTime / duration, 0, 1)
        value = distance * timingFunction(progress) + from

        if (progress >= 1) {
          setState('finished')
          frame({ value: to, done: true })
          return
        }

        frame({ value, done: false })
        tick()
      })
    }
  }

  function pause() {
    if (state !== 'running') {
      return
    }

    setState('paused')
    pausedTime = performance.now()
    cancelAnimationFrame(ticker!)
  }

  function reset() {
    cancelAnimationFrame(ticker!)
    setState('pending')
    value = from
    ticker = undefined
    startTime = undefined
    pausedTime = undefined
    sleepTime = 0
  }

  function getState() {
    return state
  }

  function setState(_state: MotionState) {
    state = _state
    onStateChange(_state)
  }

  return {
    start,
    pause,
    reset,
    getState,
  }
}
