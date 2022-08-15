import chalk from 'chalk'

export default {
  info(text: string) {
    console.log(text)
  },
  success(text: string) {
    console.log(chalk.hex('#00c48f')(text))
  },
  warning(text: string) {
    console.log(chalk.hex('#ff9800')(text))
  },
  error(text: string) {
    console.log(chalk.hex('#f44336')(text))
  },
  title(text: string) {
    console.log(chalk.cyan(text))
  },
}
