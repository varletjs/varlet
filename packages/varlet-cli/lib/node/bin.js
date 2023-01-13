#!/usr/bin/env node
import { Command } from 'commander';
import { getCliVersion } from './shared/fsUtils.js';
const program = new Command();
program.version(`varlet-cli ${getCliVersion()}`).usage('<command> [options]');
program
    .command('dev')
    .option('-f --force', 'Force dep pre-optimization regardless of whether deps have changed')
    .description('Run varlet development environment')
    .action(async (options) => {
    const { dev } = await import('./commands/dev.js');
    return dev(options);
});
program
    .command('build')
    .description('Build varlet site for production')
    .action(async () => {
    const { build } = await import('./commands/build.js');
    return build();
});
program
    .command('build:vite')
    .description('Use vite build app for production')
    .action(async () => {
    const { vite } = await import('./commands/vite.js');
    return vite('build');
});
program
    .command('dev:vite')
    .description('Use vite start server for development')
    .action(async () => {
    const { vite } = await import('./commands/vite.js');
    return vite('dev');
});
program
    .command('preview')
    .description('Preview varlet site for production')
    .action(async () => {
    const { preview } = await import('./commands/preview.js');
    return preview();
});
program
    .command('compile')
    .description('Compile varlet components library code')
    .option('-nu, --noUmd', 'Do not compile umd target code')
    .action(async (options) => {
    const { compile } = await import('./commands/compile.js');
    return compile(options);
});
program
    .command('lint')
    .description('Lint code')
    .action(async () => {
    const { lint } = await import('./commands/lint.js');
    return lint();
});
program
    .command('create')
    .description('Create a component directory')
    .option('-n, --name <componentName>', 'Component name')
    .option('-s, --sfc', 'Generate files in sfc format')
    .option('-t, --tsx', 'Generate files in tsx format')
    .option('-l, --locale', 'Generator internationalized files')
    .action(async (options) => {
    const { create } = await import('./commands/create.js');
    return create(options);
});
program
    .command('jest')
    .description('Run Jest in work directory')
    .option('-w, --watch', 'Watch files for changes and rerun tests related to changed files')
    .option('-wa, --watchAll', 'Watch files for changes and rerun all tests when something changes')
    .option('-c, --component <componentName>', 'Test a specific component')
    .option('-cc --clearCache', 'Clear test cache')
    .action(async (option) => {
    const { jest } = await import('./commands/jest.js');
    return jest(option);
});
program
    .command('gen')
    .description('Generate cli application')
    .option('-n, --name <applicationName>', 'Application name')
    .option('-s, --sfc', 'Generate files in sfc format')
    .option('-t, --tsx', 'Generate files in tsx format')
    .option('-l, --locale', 'Generator internationalized files')
    .action(async (option) => {
    const { gen } = await import('./commands/gen.js');
    return gen(option);
});
program
    .command('changelog')
    .option('-rc --releaseCount <releaseCount>', 'Release count')
    .option('-f --file <file>', 'Changelog filename')
    .description('Generate changelog')
    .action(async (option) => {
    const { changelog } = await import('./commands/changelog.js');
    return changelog(option);
});
program
    .command('release')
    .option('-r --remote <remote>', 'Remote name')
    .description('Release all packages and generate changelogs')
    .action(async (option) => {
    const { release } = await import('./commands/release.js');
    return release(option);
});
program
    .command('commit-lint <gitParams>')
    .description('Lint commit message')
    .action(async (option) => {
    const { commitLint } = await import('./commands/commitLint.js');
    return commitLint(option);
});
program.on('command:*', async ([cmd]) => {
    const { default: logger } = await import('./shared/logger.js');
    program.outputHelp();
    logger.error(`\nUnknown command ${cmd}.\n`);
    process.exitCode = 1;
});
program.parse();
