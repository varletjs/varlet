import chalk from 'chalk'

export default {
  info(text: string) {
    console.log(chalk.hex('#60AEDF')(text))
  },
  success(text: string) {
    console.log(chalk.hex('#15DD6A')(text))
  },
  warning(text: string) {
    console.log(chalk.hex('#DDBF69')(text))
  },
  error(text: string) {
    console.log(chalk.hex('#AE4434')(text))
  },
}
