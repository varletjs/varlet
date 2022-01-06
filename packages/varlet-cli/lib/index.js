#!/usr/bin/env node
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("./shared/logger"));
var commander_1 = require("commander");
var dev_1 = require("./commands/dev");
var build_1 = require("./commands/build");
var compile_1 = require("./commands/compile");
var create_1 = require("./commands/create");
var jest_1 = require("./commands/jest");
var lint_1 = require("./commands/lint");
var gen_1 = require("./commands/gen");
var preview_1 = require("./commands/preview");
var changelog_1 = require("./commands/changelog");
var release_1 = require("./commands/release");
var commitLint_1 = require("./commands/commitLint");
var program = new commander_1.Command();
program.version("varlet-cli ".concat(require('../package.json').version)).usage('<command> [options]');
program
    .command('dev')
    .option('-f --force', 'Force dep pre-optimization regardless of whether deps have changed')
    .description('Run varlet development environment')
    .action(dev_1.dev);
program.command('build').description('Build varlet site for production').action(build_1.build);
program.command('preview').description('Preview varlet site for production').action(preview_1.preview);
program
    .command('compile')
    .description('Compile varlet components library code')
    .option('-nu, --noUmd', 'Do not compile umd target code')
    .action(compile_1.compile);
program.command('lint').description('Lint code').action(lint_1.lint);
program.command('create <name>').description('Create a component directory').action(create_1.create);
program
    .command('jest')
    .description('Run Jest in work directory')
    .option('-w, --watch', 'Watch files for changes and rerun tests related to changed files')
    .option('-wa, --watchAll', 'Watch files for changes and rerun all tests when something changes')
    .option('-c, --component <componentName>', 'Test a specific component')
    .option('-cc --clearCache', 'Clear test cache')
    .action(jest_1.jest);
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
program.on('command:*', function (_a) {
    var _b = __read(_a, 1), cmd = _b[0];
    program.outputHelp();
    logger_1.default.error("\nUnknown command ".concat(cmd, ".\n"));
    process.exitCode = 1;
});
program.parse();
