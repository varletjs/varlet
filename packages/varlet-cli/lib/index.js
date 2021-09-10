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
var commander_1 = require("commander");
var dev_1 = require("./commands/dev");
var build_1 = require("./commands/build");
var compile_1 = require("./commands/compile");
var create_1 = require("./commands/create");
var jest_1 = require("./commands/jest");
var lint_1 = require("./commands/lint");
var gen_1 = require("./commands/gen");
var logger_1 = __importDefault(require("./shared/logger"));
commander_1.version("varlet-cli " + require('../package.json').version).usage('<command> [options]');
commander_1.command('dev').description('Run varlet development environment').action(dev_1.dev);
commander_1.command('build').description('Build varlet site for production').action(build_1.build);
commander_1.command('compile')
    .description('Compile varlet components library code')
    .option('-nu, --noUmd', 'Do not compile umd target code')
    .action(compile_1.compile);
commander_1.command('lint').description('Lint code').action(lint_1.lint);
commander_1.command('create <name>').description('Create a component directory').action(create_1.create);
commander_1.command('jest')
    .description('Run Jest in work directory')
    .option('-w, --watch', 'Watch files change auto jest')
    .option('-c, --component <componentName>', 'Test a specific component')
    .option('-cc --clearCache', 'Clear test cache')
    .action(jest_1.jest);
commander_1.command('gen <name>').description('Generate cli application').action(gen_1.gen);
commander_1.on('command:*', function (_a) {
    var _b = __read(_a, 1), cmd = _b[0];
    commander_1.outputHelp();
    logger_1.default.error("\nUnknown command " + cmd + ".\n");
    process.exitCode = 1;
});
commander_1.parse();
