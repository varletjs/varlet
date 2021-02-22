import { hours24, hoursAmpm, AmPm } from './props'

export const notConvert = (format: string, ampm: AmPm | undefined) => format === '24hr' || ampm === 'am'

export const convertHour = (format: string, ampm: AmPm | undefined, hour: string) => {
  const index = hoursAmpm.findIndex((hourAmpm) => +hourAmpm === +hour)
  return notConvert(format, ampm) ? hour : hours24[index]
}
