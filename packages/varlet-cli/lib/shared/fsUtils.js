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
var __spreadArrays =
	(this && this.__spreadArrays) ||
	function () {
		for (var s = 0, i = 0, il = arguments.length; i < il; i++)
			s += arguments[i].length
		for (var r = Array(s), k = 0, i = 0; i < il; i++)
			for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
				r[k] = a[j]
		return r
	}
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod }
	}
Object.defineProperty(exports, '__esModule', { value: true })
exports.camelize = exports.bigCamelize = exports.buildMobileSiteRoutes = exports.getMobileSiteExamplePaths = exports.convertMobileSiteExamplePathToComponentName = exports.replaceExt = exports.isTestsDir = exports.isExampleDir = exports.isLess = exports.isScript = exports.isSFC = exports.isDir = exports.getDirComponentNames = exports.accessProperty = void 0
var slash_1 = __importDefault(require('slash'))
var path_1 = require('path')
var fs_extra_1 = require('fs-extra')
var constant_1 = require('./constant')
var varlet_config_1 = require('../config/varlet.config')
function accessProperty(target, operator) {
	var keys = operator.split('.')
	return keys.reduce(function (value, key) {
		if (value === null || value === undefined) {
			return null
		}
		return value[key]
	}, target)
}
exports.accessProperty = accessProperty
function getDirComponentNames(dir) {
	return dir.filter(function (filename) {
		return !__spreadArrays(
			accessProperty(varlet_config_1.getVarletConfig(), 'componentsIgnores'),
			['index.js']
		).includes(filename)
	})
}
exports.getDirComponentNames = getDirComponentNames
function isDir(path) {
	return (
		fs_extra_1.pathExistsSync(path) && fs_extra_1.lstatSync(path).isDirectory()
	)
}
exports.isDir = isDir
function isSFC(path) {
	return fs_extra_1.pathExistsSync(path) && path_1.extname(path) === '.vue'
}
exports.isSFC = isSFC
function isScript(path) {
	return (
		(fs_extra_1.pathExistsSync(path) && path_1.extname(path) === '.js') ||
		path_1.extname(path) === '.ts'
	)
}
exports.isScript = isScript
function isLess(path) {
	return fs_extra_1.pathExistsSync(path) && path_1.extname(path) === '.less'
}
exports.isLess = isLess
function isExampleDir(path) {
	return (
		fs_extra_1.pathExistsSync(path) &&
		path_1.parse(path).dir.endsWith(constant_1.EXAMPLE_DIR_NAME)
	)
}
exports.isExampleDir = isExampleDir
function isTestsDir(path) {
	return (
		fs_extra_1.pathExistsSync(path) &&
		path_1.parse(path).dir.endsWith(constant_1.TESTS_DIR_NAME)
	)
}
exports.isTestsDir = isTestsDir
function replaceExt(path, ext) {
	return path.replace(path_1.extname(path), ext)
}
exports.replaceExt = replaceExt
function convertMobileSiteExamplePathToComponentName(path) {
	return path
		.replace('/' + constant_1.EXAMPLE_DIR_NAME + '/index.vue', '')
		.replace(/.*\//g, '')
}
exports.convertMobileSiteExamplePathToComponentName = convertMobileSiteExamplePathToComponentName
function getMobileSiteExamplePaths() {
	return __awaiter(this, void 0, void 0, function () {
		var varletConfig, srcDir
		return __generator(this, function (_a) {
			switch (_a.label) {
				case 0:
					varletConfig = varlet_config_1.getVarletConfig()
					return [4 /*yield*/, fs_extra_1.readdir(constant_1.SRC_DIR)]
				case 1:
					srcDir = _a.sent()
					return [
						2 /*return*/,
						srcDir
							.filter(function (filename) {
								return !accessProperty(varletConfig, 'siteIgnores').includes(
									filename
								)
							})
							.filter(function (filename) {
								return isDir(path_1.resolve(constant_1.SRC_DIR, filename))
							})
							.map(function (filename) {
								return path_1.resolve(constant_1.SRC_DIR, filename)
							})
							.filter(function (path) {
								return isDir(path_1.resolve(path, constant_1.EXAMPLE_DIR_NAME))
							})
							.map(function (path) {
								return path_1.resolve(path, constant_1.EXAMPLE_DIR_NAME)
							})
							.filter(function (path) {
								return fs_extra_1.pathExistsSync(
									path_1.resolve(path, constant_1.EXAMPLE_DIR_INDEX)
								)
							})
							.map(function (path) {
								return slash_1.default(
									path_1.resolve(path, constant_1.EXAMPLE_DIR_INDEX)
								)
							}),
					]
			}
		})
	})
}
exports.getMobileSiteExamplePaths = getMobileSiteExamplePaths
function buildMobileSiteRoutes() {
	return __awaiter(this, void 0, void 0, function () {
		var paths, routes
		return __generator(this, function (_a) {
			switch (_a.label) {
				case 0:
					if (!fs_extra_1.pathExistsSync(constant_1.SRC_DIR)) {
						fs_extra_1.writeFileSync(
							constant_1.SITE_MOBILE_ROUTES,
							'export default []'
						)
						return [2 /*return*/]
					}
					return [4 /*yield*/, getMobileSiteExamplePaths()]
				case 1:
					paths = _a.sent()
					routes = paths.map(function (path) {
						return (
							"\n  {\n    path: '/" +
							convertMobileSiteExamplePathToComponentName(path) +
							"',\n    component: () => import('" +
							path +
							"')\n  }"
						)
					})
					fs_extra_1.writeFileSync(
						constant_1.SITE_MOBILE_ROUTES,
						'export default [  ' + routes.join(',') + '\n]'
					)
					return [2 /*return*/]
			}
		})
	})
}
exports.buildMobileSiteRoutes = buildMobileSiteRoutes
function bigCamelize(str) {
	return camelize(str).replace(str.charAt(0), str.charAt(0).toUpperCase())
}
exports.bigCamelize = bigCamelize
function camelize(str) {
	return str.replace(/-(\w)/g, function (_, p) {
		return p.toUpperCase()
	})
}
exports.camelize = camelize
