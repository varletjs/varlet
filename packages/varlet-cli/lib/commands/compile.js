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
exports.compile = exports.handleFilesChange = exports.recompile = exports.removeDir = void 0
var logger_1 = __importDefault(require('../shared/logger'))
var ora_1 = __importDefault(require('ora'))
var compileES_1 = require('../compiler/compileES')
var fs_extra_1 = require('fs-extra')
var constant_1 = require('../shared/constant')
var compileCJS_1 = require('../compiler/compileCJS')
var chokidar_1 = require('chokidar')
var fsUtils_1 = require('../shared/fsUtils')
var compileComponent_1 = require('../compiler/compileComponent')
var path_1 = require('path')
var compileScript_1 = require('../compiler/compileScript')
var compileUMD_1 = require('../compiler/compileUMD')
function removeDir() {
	return Promise.all([
		fs_extra_1.remove(constant_1.ES_DIR),
		fs_extra_1.remove(constant_1.CJS_DIR),
		fs_extra_1.remove(constant_1.UMD_DIR),
	])
}
exports.removeDir = removeDir
function recompile(path) {
	return __awaiter(this, void 0, void 0, function () {
		var esPath, cjsPath, _a, ext, dir, esDir, cjsDir, dirs
		return __generator(this, function (_b) {
			switch (_b.label) {
				case 0:
					esPath = path.replace('src', 'es')
					cjsPath = path.replace('src', 'cjs')
					;(_a = path_1.parse(path)), (ext = _a.ext), (dir = _a.dir)
					esDir = path_1.parse(esPath).dir
					cjsDir = path_1.parse(cjsPath).dir
					if (!(ext === '.vue')) return [3 /*break*/, 4]
					// style deps collection
					return [
						4 /*yield*/,
						Promise.all([fs_extra_1.remove(esDir), fs_extra_1.remove(cjsDir)]),
					]
				case 1:
					// style deps collection
					_b.sent()
					return [
						4 /*yield*/,
						Promise.all([
							fs_extra_1.copy(dir, esDir),
							fs_extra_1.copy(dir, cjsDir),
						]),
					]
				case 2:
					_b.sent()
					return [
						4 /*yield*/,
						Promise.all([
							compileComponent_1.compileComponent(esDir),
							compileComponent_1.compileComponent(cjsDir, 'cjs'),
						]),
					]
				case 3:
					_b.sent()
					return [3 /*break*/, 7]
				case 4:
					return [
						4 /*yield*/,
						Promise.all([
							fs_extra_1.copy(path, esPath),
							fs_extra_1.copy(path, cjsPath),
						]),
					]
				case 5:
					_b.sent()
					return [
						4 /*yield*/,
						Promise.all([
							compileComponent_1.compileFile(esPath),
							compileComponent_1.compileFile(cjsPath, 'cjs'),
						]),
					]
				case 6:
					_b.sent()
					_b.label = 7
				case 7:
					return [
						4 /*yield*/,
						Promise.all([
							fs_extra_1.readdir(constant_1.ES_DIR),
							fs_extra_1.readdir(constant_1.CJS_DIR),
						]),
					]
				case 8:
					dirs = _b.sent()
					compileScript_1.compileLibraryEntry(
						constant_1.ES_DIR,
						fsUtils_1.getDirComponentNames(dirs[0])
					)
					compileScript_1.compileLibraryEntry(
						constant_1.CJS_DIR,
						fsUtils_1.getDirComponentNames(dirs[1]),
						'cjs'
					)
					return [2 /*return*/]
			}
		})
	})
}
exports.recompile = recompile
function handleFilesChange() {
	var _this = this
	chokidar_1.watch(constant_1.SRC_DIR).on('change', function (path) {
		return __awaiter(_this, void 0, void 0, function () {
			return __generator(this, function (_a) {
				switch (_a.label) {
					case 0:
						if (fsUtils_1.isExampleDir(path) || fsUtils_1.isTestsDir(path)) {
							return [2 /*return*/]
						}
						logger_1.default.info(path + ' has changed')
						return [4 /*yield*/, recompile(path)]
					case 1:
						_a.sent()
						return [2 /*return*/]
				}
			})
		})
	})
}
exports.handleFilesChange = handleFilesChange
function compile(cmd) {
	return __awaiter(this, void 0, void 0, function () {
		var s, err_1
		return __generator(this, function (_a) {
			switch (_a.label) {
				case 0:
					s = ora_1.default('Compile start for ES & CJS & UMD').start()
					_a.label = 1
				case 1:
					_a.trys.push([1, 5, , 6])
					return [4 /*yield*/, removeDir()]
				case 2:
					_a.sent()
					return [
						4 /*yield*/,
						Promise.all([compileES_1.compileES(), compileCJS_1.compileCJS()]),
					]
				case 3:
					_a.sent()
					return [4 /*yield*/, compileUMD_1.compileUMD()]
				case 4:
					_a.sent()
					s.succeed('Compile success!')
					if (cmd.watch) {
						handleFilesChange()
						logger_1.default.info('i will watching your files change')
					}
					return [3 /*break*/, 6]
				case 5:
					err_1 = _a.sent()
					logger_1.default.error(err_1.toString())
					s.fail('Compile fail!')
					return [3 /*break*/, 6]
				case 6:
					return [2 /*return*/]
			}
		})
	})
}
exports.compile = compile
