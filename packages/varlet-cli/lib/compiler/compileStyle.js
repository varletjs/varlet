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
exports.emitStyleEntry = exports.compileLess = exports.clearEmptyLine = exports.replaceStyleExt = exports.EMPTY_LINE_RE = exports.EMPTY_SPACE_RE = exports.REQUIRE_LESS_PATH_RE = exports.IMPORT_LESS_PATH_RE = void 0
var logger_1 = __importDefault(require('../shared/logger'))
var fs_extra_1 = require('fs-extra')
var less_1 = require('less')
var path_1 = require('path')
var fsUtils_1 = require('../shared/fsUtils')
exports.IMPORT_LESS_PATH_RE = /((?<!['"`])import\s+['"]\s*\.{1,2}\/.+\.)less(\s*['"`])(?!\s*['"`])/g
exports.REQUIRE_LESS_PATH_RE = /(?<!['"`]\s*)(require\s*\(\s*['"]\.{1,2}\/.+\.)less(\s*['"`]\))(?!\s*['"`])/g
exports.EMPTY_SPACE_RE = /[\s]+/g
exports.EMPTY_LINE_RE = /[\n\r]*/g
function replaceStyleExt(script) {
	var replacer = function (_, p1, p2) {
		return p1 + 'css' + p2
	}
	return script
		.replace(exports.IMPORT_LESS_PATH_RE, replacer)
		.replace(exports.REQUIRE_LESS_PATH_RE, replacer)
}
exports.replaceStyleExt = replaceStyleExt
function clearEmptyLine(style) {
	return style
		.replace(exports.EMPTY_LINE_RE, '')
		.replace(exports.EMPTY_SPACE_RE, ' ')
}
exports.clearEmptyLine = clearEmptyLine
function compileLess(path) {
	return __awaiter(this, void 0, void 0, function () {
		var source, css, e_1
		return __generator(this, function (_a) {
			switch (_a.label) {
				case 0:
					_a.trys.push([0, 2, , 3])
					source = fs_extra_1.readFileSync(path, 'utf-8')
					return [4 /*yield*/, less_1.render(source, { filename: path })]
				case 1:
					css = _a.sent().css
					fs_extra_1.writeFileSync(
						fsUtils_1.replaceExt(path, '.css'),
						clearEmptyLine(css),
						'utf-8'
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
exports.compileLess = compileLess
function emitStyleEntry(path, modules) {
	if (modules === void 0) {
		modules = false
	}
	var _a = path_1.parse(path),
		ext = _a.ext,
		dir = _a.dir,
		base = _a.base
	var styleDir = path_1.resolve(dir, './style')
	var styleIndex = path_1.resolve(dir, './style/index.js')
	var styleLess = path_1.resolve(dir, './style/less.js')
	!fs_extra_1.pathExistsSync(styleDir) && fs_extra_1.mkdirSync(styleDir)
	!fs_extra_1.pathExistsSync(styleIndex) &&
		fs_extra_1.writeFileSync(styleIndex, '', 'utf-8')
	!fs_extra_1.pathExistsSync(styleLess) &&
		fs_extra_1.writeFileSync(styleLess, '', 'utf-8')
	var emitPath = ext === '.css' ? styleIndex : styleLess
	var emitScript =
		modules === 'cjs'
			? "require('../" + base + "')\n"
			: "import '../" + base + "'\n"
	var currentScript = fs_extra_1.readFileSync(emitPath, 'utf-8')
	fs_extra_1.writeFileSync(emitPath, '' + currentScript + emitScript)
}
exports.emitStyleEntry = emitStyleEntry
