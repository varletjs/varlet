import { VarComponent } from './varComponent'

type TimeData = {
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

interface CountdownProps {
  time?: string | number
  format?: string
  autoStart?: boolean
  onEnd?: () => void
  onChange?: (value: TimeData) => void
}

export class Countdown extends VarComponent {
  $props: CountdownProps

  start(): void

  pause(): void

  reset(): void
}
