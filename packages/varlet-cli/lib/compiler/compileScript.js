'use strict'
var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value)
				  })
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value))
				} catch (e) {
					reject(e)
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value))
				} catch (e) {
					reject(e)
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected)
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next())
		})
	}
var __generator =
	(this && this.__generator) ||
	function (thisArg, body) {
		var _ = {
				label: 0,
				sent: function () {
					if (t[0] & 1) throw t[1]
					return t[1]
				},
				trys: [],
				ops: [],
			},
			f,
			y,
			t,
			g
		return (
			(g = { next: verb(0), throw: verb(1), return: verb(2) }),
			typeof Symbol === 'function' &&
				(g[Symbol.iterator] = function () {
					return this
				}),
			g
		)
		function verb(n) {
			return function (v) {
				return step([n, v])
			}
		}
		function step(op) {
			if (f) throw new TypeError('Generator is already executing.')
			while (_)
				try {
					if (
						((f = 1),
						y &&
							(t =
								op[0] & 2
									? y['return']
									: op[0]
									? y['throw'] || ((t = y['return']) && t.call(y), 0)
									: y.next) &&
							!(t = t.call(y, op[1])).done)
					)
						return t
					if (((y = 0), t)) op = [op[0] & 2, t.value]
					switch (op[0]) {
						case 0:
						case 1:
							t = op
							break
						case 4:
							_.label++
							return { value: op[1], done: false }
						case 5:
							_.label++
							y = op[1]
							op = [0]
							continue
						case 7:
							op = _.ops.pop()
							_.trys.pop()
							continue
						default:
							if (
								!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
								(op[0] === 6 || op[0] === 2)
							) {
								_ = 0
								continue
							}
							if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
								_.label = op[1]
								break
							}
							if (op[0] === 6 && _.label < t[1]) {
								_.label = t[1]
								t = op
								break
							}
							if (t && _.label < t[2]) {
								_.label = t[2]
								_.ops.push(op)
								break
							}
							if (t[2]) _.ops.pop()
							_.trys.pop()
							continue
					}
					op = body.call(thisArg, _)
				} catch (e) {
					op = [6, e]
					y = 0
				} finally {
					f = t = 0
				}
			if (op[0] & 5) throw op[1]
			return { value: op[0] ? op[1] : void 0, done: true }
		}
	}
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod }
	}
Object.defineProperty(exports, '__esModule', { value: true })
exports.compileLibraryEntry = exports.compileScriptFile = exports.compileScript = exports.replaceTSExt = exports.replaceVueExt = exports.REQUIRE_TS_PATH_RE = exports.IMPORT_TS_PATH_RE = exports.REQUIRE_VUE_PATH_RE = exports.IMPORT_VUE_PATH_RE = void 0
var core_1 = require('@babel/core')
var fsUtils_1 = require('../shared/fsUtils')
var compileStyle_1 = require('./compileStyle')
var fs_extra_1 = require('fs-extra')
var path_1 = require('path')
var logger_1 = __importDefault(require('../shared/logger'))
exports.IMPORT_VUE_PATH_RE = /((?<!['"`])import\s+.+from\s+['"]\s*\.{1,2}\/.+)\.vue(\s*['"`])(?!\s*['"`])/g
exports.REQUIRE_VUE_PATH_RE = /(?<!['"`]\s*)(require\s*\(\s*['"]\.{1,2}\/.+)\.vue(\s*['"`]\))(?!\s*['"`])/g
exports.IMPORT_TS_PATH_RE = /((?<!['"`])import\s+.+from\s+['"]\s*\.{1,2}\/.+\.)ts(\s*['"`])(?!\s*['"`])/g
exports.REQUIRE_TS_PATH_RE = /(?<!['"`]\s*)(require\s*\(\s*['"]\.{1,2}\/.+\.)ts(\s*['"`]\))(?!\s*['"`])/g
function replaceVueExt(script) {
	var replacer = function (_, p1, p2) {
		return p1 + 'Sfc.js' + p2
	}
	return script
		.replace(exports.IMPORT_VUE_PATH_RE, replacer)
		.replace(exports.REQUIRE_VUE_PATH_RE, replacer)
}
exports.replaceVueExt = replaceVueExt
function replaceTSExt(script) {
	var replacer = function (_, p1, p2) {
		return p1 + 'js' + p2
	}
	return script
		.replace(exports.IMPORT_TS_PATH_RE, replacer)
		.replace(exports.REQUIRE_TS_PATH_RE, replacer)
}
exports.replaceTSExt = replaceTSExt
function compileScript(script, path, modules) {
	if (modules === void 0) {
		modules = false
	}
	return __awaiter(this, void 0, void 0, function () {
		var code, e_1
		return __generator(this, function (_a) {
			switch (_a.label) {
				case 0:
					_a.trys.push([0, 2, , 3])
					return [
						4 /*yield*/,
						core_1.transformAsync(script, {
							filename: fsUtils_1.replaceExt(path, '.ts'),
							presets: [
								[
									require('@babel/preset-env'),
									{
										loose: true,
										modules: modules,
									},
								],
								require('@babel/preset-typescript'),
							],
							plugins: [require('@babel/plugin-transform-runtime')],
						}),
					]
				case 1:
					code = _a.sent().code
					code = compileStyle_1.replaceStyleExt(code)
					code = replaceVueExt(code)
					code = replaceTSExt(code)
					fs_extra_1.removeSync(path)
					fs_extra_1.writeFileSync(
						fsUtils_1.replaceExt(path, '.js'),
						code,
						'utf8'
					)
					return [3 /*break*/, 3]
				case 2:
					e_1 = _a.sent()
					logger_1.default.error(e_1.toString())
					return [3 /*break*/, 3]
				case 3:
					return [2 /*return*/]
			}
		})
	})
}
exports.compileScript = compileScript
function compileScriptFile(path, modules) {
	if (modules === void 0) {
		modules = false
	}
	return __awaiter(this, void 0, void 0, function () {
		var sources
		return __generator(this, function (_a) {
			switch (_a.label) {
				case 0:
					sources = fs_extra_1.readFileSync(path, 'utf-8')
					return [4 /*yield*/, compileScript(sources, path, modules)]
				case 1:
					_a.sent()
					return [2 /*return*/]
			}
		})
	})
}
exports.compileScriptFile = compileScriptFile
function compileLibraryEntry(dir, componentNames, modules) {
	if (modules === void 0) {
		modules = false
	}
	var imports = componentNames
		.map(function (componentName) {
			return (
				'import ' +
				fsUtils_1.bigCamelize(componentName) +
				" from './" +
				componentName +
				"'"
			)
		})
		.join('\n')
	var cssImports = componentNames
		.map(function (componentName) {
			return "import './" + componentName + "/style'"
		})
		.join('\n')
	var requires = componentNames
		.map(function (componentName) {
			return (
				'var ' +
				fsUtils_1.bigCamelize(componentName) +
				" = require('./" +
				componentName +
				"')"
			)
		})
		.join('\n')
	var cssRequires = componentNames
		.map(function (componentName) {
			return "require('./" + componentName + "/style')"
		})
		.join('\n')
	var install =
		'function install(app) {\n  ' +
		componentNames
			.map(function (componentName) {
				return 'app.use(' + fsUtils_1.bigCamelize(componentName) + ')'
			})
			.join('\n  ') +
		'\n}\n'
	var esExports =
		'export {\n  ' +
		componentNames
			.map(function (componentName) {
				return '' + fsUtils_1.bigCamelize(componentName)
			})
			.join(',\n  ') +
		'\n}\n\nexport default {\n  install,\n  ' +
		componentNames
			.map(function (componentName) {
				return '' + fsUtils_1.bigCamelize(componentName)
			})
			.join(',\n  ') +
		',\n}'
	var cjsExports =
		'module.exports = {\n  install,\n  ' +
		componentNames
			.map(function (componentName) {
				return '' + fsUtils_1.bigCamelize(componentName)
			})
			.join(',\n  ') +
		'\n}'
	var template =
		(modules === 'cjs' ? requires : imports) +
		'\n\n' +
		(modules === 'cjs' ? cssRequires : cssImports) +
		'\n\n' +
		install +
		'\n' +
		(modules === 'cjs' ? cjsExports : esExports) +
		'\n'
	fs_extra_1.writeFileSync(path_1.resolve(dir, 'index.js'), template, 'utf-8')
}
exports.compileLibraryEntry = compileLibraryEntry
