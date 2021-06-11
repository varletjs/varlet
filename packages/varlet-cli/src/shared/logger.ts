import chalk from 'chalk'

export default {
  info(text: string) {
    console.log(chalk.hex('#00afef')(text))
  },
  success(text: string) {
    console.log(chalk.hex('#10ca93')(text))
  },
  warning(text: string) {
    console.log(chalk.hex('#ff9800')(text))
  },
  error(text: string) {
    console.log(chalk.hex('#f44336')(text))
  },
}
