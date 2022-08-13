#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var create_1 = require("./commands/create");
var program = new commander_1.Command();
// program.version(`varlet-cli ${require('../package.json').version}`).usage('<command> [options]')
// program
//   .command('dev')
//   .option('-f --force', 'Force dep pre-optimization regardless of whether deps have changed')
//   .description('Run varlet development environment')
//   .action(dev)
// program.command('build').description('Build varlet site for production').action(build)
// program.command('preview').description('Preview varlet site for production').action(preview)
// program
//   .command('compile')
//   .description('Compile varlet components library code')
//   .option('-nu, --noUmd', 'Do not compile umd target code')
//   .action(compile)
// program.command('lint').description('Lint code').action(lint)
program
    .command('create <name>')
    .description('Create a component directory')
    .option('-d, --disableI18n', 'Disable to generator i18n files')
    .action(create_1.create);
// program
//   .command('jest')
//   .description('Run Jest in work directory')
//   .option('-w, --watch', 'Watch files for changes and rerun tests related to changed files')
//   .option('-wa, --watchAll', 'Watch files for changes and rerun all tests when something changes')
//   .option('-c, --component <componentName>', 'Test a specific component')
//   .option('-cc --clearCache', 'Clear test cache')
//   .action(jest)
// program.command('gen <name>').description('Generate cli application').action(gen)
// program
//   .command('changelog')
//   .option('-rc --releaseCount <releaseCount>', 'Release count')
//   .option('-f --file <file>', 'Changelog filename')
//   .description('Generate changelog')
//   .action(changelog)
// program
//   .command('release')
//   .option('-r --remote <remote>', 'Remote name')
//   .description('Release all packages and generate changelogs')
//   .action(release)
// program.command('commit-lint <gitParams>').description('Lint commit message').action(commitLint)
// program.on('command:*', ([cmd]) => {
//   program.outputHelp()
//   logger.error(`\nUnknown command ${cmd}.\n`)
//   process.exitCode = 1
// })
program.parse();
