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
exports.compileSFC = exports.injectRender = void 0
var hash_sum_1 = __importDefault(require('hash-sum'))
var fs_extra_1 = require('fs-extra')
var compiler_sfc_1 = require('@vue/compiler-sfc')
var fsUtils_1 = require('../shared/fsUtils')
var compileScript_1 = require('./compileScript')
var compileStyle_1 = require('./compileStyle')
var NORMAL_EXPORT_START_RE = /export\s+default\s+{/
var DEFINE_EXPORT_START_RE = /export\s+default\s+defineComponent\s*\(\s*{/
function injectRender(script, render) {
	if (DEFINE_EXPORT_START_RE.test(script.trim())) {
		return script
			.trim()
			.replace(
				DEFINE_EXPORT_START_RE,
				render + '\nexport default defineComponent({\n  render,    '
			)
	}
	if (NORMAL_EXPORT_START_RE.test(script.trim())) {
		return script
			.trim()
			.replace(
				NORMAL_EXPORT_START_RE,
				render + '\nexport default {\n  render,    '
			)
	}
	return script
}
exports.injectRender = injectRender
function compileSFC(path, modules) {
	if (modules === void 0) {
		modules = false
	}
	return __awaiter(this, void 0, void 0, function () {
		var sources,
			descriptor,
			script,
			template,
			styles,
			hasScope,
			scopeId,
			render,
			content,
			code
		return __generator(this, function (_a) {
			switch (_a.label) {
				case 0:
					return [4 /*yield*/, fs_extra_1.readFile(path, 'utf-8')]
				case 1:
					sources = _a.sent()
					descriptor = compiler_sfc_1.parse(sources, { sourceMap: false })
						.descriptor
					;(script = descriptor.script),
						(template = descriptor.template),
						(styles = descriptor.styles)
					hasScope = styles.some(function (style) {
						return style.scoped
					})
					scopeId = hasScope ? 'data-v-' + hash_sum_1.default(sources) : ''
					if (!script) return [3 /*break*/, 5]
					render =
						template &&
						compiler_sfc_1.compileTemplate({
							source: template.content,
							filename: path,
							compilerOptions: {
								scopeId: scopeId,
							},
						})
					content = script.content
					if (!render) return [3 /*break*/, 3]
					code = render.code
					content = injectRender(content, code)
					// script
					return [
						4 /*yield*/,
						compileScript_1.compileScript(
							content,
							fsUtils_1.replaceExt(path, 'Sfc.ts'),
							modules
						),
						// style
					]
				case 2:
					// script
					_a.sent()
					// style
					styles.forEach(function (style, index) {
						var stylePath = fsUtils_1.replaceExt(
							path,
							'Sfc' + (index === 0 ? '' : index) + '.' + style.lang
						)
						var code = compiler_sfc_1.compileStyle({
							source: style.content,
							filename: stylePath,
							id: scopeId,
							scoped: style.scoped,
						}).code
						// less
						fs_extra_1.writeFileSync(
							stylePath,
							compileStyle_1.clearEmptyLine(code),
							'utf-8'
						)
						compileStyle_1.emitStyleEntry(stylePath, modules)
						// less -> css
						if (style.lang === 'less') {
							compileStyle_1.compileLess(stylePath).then(function () {
								return compileStyle_1.emitStyleEntry(
									fsUtils_1.replaceExt(stylePath, '.css'),
									modules
								)
							})
						}
					})
					_a.label = 3
				case 3:
					return [4 /*yield*/, fs_extra_1.remove(path)]
				case 4:
					_a.sent()
					_a.label = 5
				case 5:
					return [2 /*return*/]
			}
		})
	})
}
exports.compileSFC = compileSFC
