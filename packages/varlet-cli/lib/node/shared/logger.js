import chalk from 'chalk';
export default {
    info(text) {
        console.log(text);
    },
    success(text) {
        console.log(chalk.hex('#00c48f')(text));
    },
    warning(text) {
        console.log(chalk.hex('#ff9800')(text));
    },
    error(text) {
        console.log(chalk.hex('#f44336')(text));
    },
    title(text) {
        console.log(chalk.cyan(text));
    },
};
