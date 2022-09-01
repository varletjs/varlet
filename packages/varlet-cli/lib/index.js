#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./shared/logger"));
const commander_1 = require("commander");
const dev_1 = require("./commands/dev");
const build_1 = require("./commands/build");
const vite_1 = require("./commands/vite");
const compile_1 = require("./commands/compile");
const create_1 = require("./commands/create");
const test_1 = require("./commands/test");
const lint_1 = require("./commands/lint");
const gen_1 = require("./commands/gen");
const preview_1 = require("./commands/preview");
const changelog_1 = require("./commands/changelog");
const release_1 = require("./commands/release");
const commitLint_1 = require("./commands/commitLint");
const program = new commander_1.Command();
program.version(`varlet-cli ${require('../package.json').version}`).usage('<command> [options]');
program
    .command('dev')
    .option('-f --force', 'Force dep pre-optimization regardless of whether deps have changed')
    .description('Run varlet development environment')
    .action(dev_1.dev);
program.command('build').description('Build varlet site for production').action(build_1.build);
program
    .command('build:vite')
    .description('Use vite build app for production')
    .action(() => (0, vite_1.vite)('build'));
program
    .command('dev:vite')
    .description('Use vite start server for development')
    .action(() => (0, vite_1.vite)('dev'));
program.command('preview').description('Preview varlet site for production').action(preview_1.preview);
program
    .command('compile')
    .description('Compile varlet components library code')
    .option('-nu, --noUmd', 'Do not compile umd target code')
    .action(compile_1.compile);
program.command('lint').description('Lint code').action(lint_1.lint);
program
    .command('create')
    .description('Create a component directory')
    .option('-n, --name <componentName>', 'Component name')
    .option('-s, --sfc', 'Generate files in sfc format')
    .option('-t, --tsx', 'Generate files in tsx format')
    .option('-l, --locale', 'Generator internationalized files')
    .action(create_1.create);
program
    .command('test')
    .description('Run test in work directory')
    .option('-w, --watch', 'Watch files for changes and rerun tests related to changed files')
    .option('-c, --component <componentName>', 'Test a specific component')
    .option('-cov, --coverage', 'Generate the coverage')
    .action(test_1.test);
program.command('gen <name>').description('Generate cli application').action(gen_1.gen);
program
    .command('changelog')
    .option('-rc --releaseCount <releaseCount>', 'Release count')
    .option('-f --file <file>', 'Changelog filename')
    .description('Generate changelog')
    .action(changelog_1.changelog);
program
    .command('release')
    .option('-r --remote <remote>', 'Remote name')
    .description('Release all packages and generate changelogs')
    .action(release_1.release);
program.command('commit-lint <gitParams>').description('Lint commit message').action(commitLint_1.commitLint);
program.on('command:*', ([cmd]) => {
    program.outputHelp();
    logger_1.default.error(`\nUnknown command ${cmd}.\n`);
    process.exitCode = 1;
});
program.parse();
