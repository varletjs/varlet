import { hours24, hoursAmpm, AmPm } from './props'
import { toNumber } from '../utils/shared'

type DisableProps = {
  time: number
  format: string
  ampm: AmPm | undefined
  hour: string
  minute: number
  max: string | undefined
  min: string | undefined
  disableHour: Array<string>
}

export const notConvert = (format: string, ampm: AmPm | undefined) => format === '24hr' || ampm === 'am'

export const convertHour = (format: string, ampm: AmPm | undefined, hour: string) => {
  const index = hoursAmpm.findIndex((hourAmpm) => toNumber(hourAmpm) === toNumber(hour))
  const getHour = notConvert(format, ampm) ? hour : hours24[index]

  return {
    hourStr: getHour,
    hourNum: toNumber(getHour),
  }
}

export const getNumberTime = (time: string) => {
  const [hour, minute, second] = time.split(':')

  return {
    hour: toNumber(hour),
    minute: toNumber(minute),
    second: toNumber(second),
  }
}

export const getIsDisableMinute = (values: Omit<DisableProps, 'minute'>) => {
  const { time, format, ampm, hour, max, min, disableHour } = values
  const { hourStr, hourNum } = convertHour(format, ampm, hour)

  if (disableHour.includes(hourStr)) return true

  if (max && !min) {
    const { hour: maxHour, minute: maxMinute } = getNumberTime(max)
    return maxHour === hourNum && time > maxMinute
  }

  if (!max && min) {
    const { hour: minHour, minute: minMinute } = getNumberTime(min)

    return minHour === hourNum && time < minMinute
  }

  if (max && min) {
    const { hour: maxHour, minute: maxMinute } = getNumberTime(max)
    const { hour: minHour, minute: minMinute } = getNumberTime(min)

    return (minHour === hourNum && time < minMinute) || (maxHour === hourNum && time > maxMinute)
  }
  return false
}

export const getIsDisableSecond = (values: DisableProps) => {
  const { time, format, ampm, hour, minute, max, min, disableHour } = values
  const { hourStr, hourNum } = convertHour(format, ampm, hour)

  if (disableHour.includes(hourStr)) return true

  if (max && !min) {
    const { hour: maxHour, minute: maxMinute, second: maxSecond } = getNumberTime(max)

    return (maxHour === hourNum && maxMinute < minute) || (maxMinute === minute && time > maxSecond)
  }

  if (!max && min) {
    const { hour: minHour, minute: minMinute, second: minSecond } = getNumberTime(min)

    return (minHour === hourNum && minMinute > minute) || (minMinute === minute && time > minSecond)
  }

  if (max && min) {
    const { hour: maxHour, minute: maxMinute, second: maxSecond } = getNumberTime(max)
    const { hour: minHour, minute: minMinute, second: minSecond } = getNumberTime(min)

    return (
      (maxHour === hourNum && maxMinute < minute) ||
      (minHour === hourNum && minMinute > minute) ||
      (maxHour === hourNum && maxMinute === minute && time > maxSecond) ||
      (minHour === hourNum && minMinute === minute && time < minSecond)
    )
  }
  return false
}
