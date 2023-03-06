import pico from 'picocolors'

export default {
  info(text: string) {
    console.log(text)
  },
  success(text: string) {
    console.log(pico.green(text))
  },
  warning(text: string) {
    console.log(pico.yellow(text))
  },
  error(text: string) {
    console.log(pico.red(text))
  },
  title(text: string) {
    console.log(pico.cyan(text))
  },
}
