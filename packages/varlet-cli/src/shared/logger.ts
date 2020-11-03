import chalk from 'chalk'
import { Stats } from 'webpack'

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
  error(text: string | Stats) {
    console.log(chalk.hex('#AE4434')(text))
  }
}
