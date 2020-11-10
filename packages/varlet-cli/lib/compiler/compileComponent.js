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
Object.defineProperty(exports, '__esModule', { value: true })
exports.compileFile = exports.compileComponent = void 0
var constant_1 = require('../shared/constant')
var fs_extra_1 = require('fs-extra')
var fsUtils_1 = require('../shared/fsUtils')
var compileSFC_1 = require('./compileSFC')
var path_1 = require('path')
var compileScript_1 = require('./compileScript')
var compileStyle_1 = require('./compileStyle')
function compileComponent(path, modules) {
	if (modules === void 0) {
		modules = false
	}
	return __awaiter(this, void 0, void 0, function () {
		var dirs
		return __generator(this, function (_a) {
			switch (_a.label) {
				case 0:
					return [4 /*yield*/, fs_extra_1.readdir(path)]
				case 1:
					dirs = _a.sent()
					return [
						4 /*yield*/,
						Promise.all(
							dirs.map(function (filename) {
								var filePath = path_1.resolve(path, filename)
								;[
									constant_1.TESTS_DIR_NAME,
									constant_1.EXAMPLE_DIR_NAME,
								].includes(filename) && fs_extra_1.removeSync(filePath)
								return compileFile(filePath, modules)
							})
						),
					]
				case 2:
					_a.sent()
					return [2 /*return*/]
			}
		})
	})
}
exports.compileComponent = compileComponent
function compileFile(path, modules) {
	if (modules === void 0) {
		modules = false
	}
	return __awaiter(this, void 0, void 0, function () {
		var _a, _b, _c, _d
		return __generator(this, function (_e) {
			switch (_e.label) {
				case 0:
					_a = fsUtils_1.isSFC(path)
					if (!_a) return [3 /*break*/, 2]
					return [4 /*yield*/, compileSFC_1.compileSFC(path, modules)]
				case 1:
					_a = _e.sent()
					_e.label = 2
				case 2:
					_a
					_b = fsUtils_1.isScript(path)
					if (!_b) return [3 /*break*/, 4]
					return [4 /*yield*/, compileScript_1.compileScriptFile(path, modules)]
				case 3:
					_b = _e.sent()
					_e.label = 4
				case 4:
					_b
					_c = fsUtils_1.isLess(path)
					if (!_c) return [3 /*break*/, 6]
					return [4 /*yield*/, compileStyle_1.compileLess(path)]
				case 5:
					_c = _e.sent()
					_e.label = 6
				case 6:
					_c
					_d = fsUtils_1.isDir(path)
					if (!_d) return [3 /*break*/, 8]
					return [4 /*yield*/, compileComponent(path)]
				case 7:
					_d = _e.sent()
					_e.label = 8
				case 8:
					_d
					return [2 /*return*/]
			}
		})
	})
}
exports.compileFile = compileFile
