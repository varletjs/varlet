#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var dev_1 = require("./commands/dev");
var build_1 = require("./commands/build");
var compile_1 = require("./commands/compile");
var create_1 = require("./commands/create");
var jest_1 = require("./commands/jest");
var lint_1 = require("./commands/lint");
commander_1.command('dev').description('Run varlet development environment').action(dev_1.dev);
commander_1.command('build').description('Build varlet site for production').action(build_1.build);
commander_1.command('compile').description('Compile varlet components library code').action(compile_1.compile);
commander_1.command('lint').description('Lint code').action(lint_1.lint);
commander_1.command('create <name>').description('Create a component directory').action(create_1.create);
commander_1.command('jest')
    .description('Run Jest in work directory')
    .option('-w, --watch', 'Watch files change auto jest')
    .option('-c, --component <componentName>', 'Test a specific component')
    .action(jest_1.jest);
commander_1.parse();
