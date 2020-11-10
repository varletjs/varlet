#!/usr/bin/env node
'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var commander_1 = require('commander')
var dev_1 = require('./commands/dev')
var build_1 = require('./commands/build')
var compile_1 = require('./commands/compile')
var create_1 = require('./commands/create')
commander_1
	.command('dev')
	.description('Run varlet development environment')
	.action(dev_1.dev)
commander_1
	.command('build')
	.description('Build varlet site for production')
	.action(build_1.build)
commander_1
	.command('compile')
	.description('Compile varlet components library code')
	.option('--watch', 'Watch files change auto compile')
	.action(compile_1.compile)
commander_1
	.command('create <name>')
	.description('Create a component directory')
	.action(create_1.create)
commander_1.parse()
