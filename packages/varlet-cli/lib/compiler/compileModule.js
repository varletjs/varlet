"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileModule = exports.compileFile = exports.compileDir = exports.compileESMBundle = exports.compileUMD = void 0;
var vite_1 = require("vite");
var path_1 = require("path");
var fs_extra_1 = require("fs-extra");
var constant_1 = require("../shared/constant");
var fsUtils_1 = require("../shared/fsUtils");
var compileSFC_1 = require("./compileSFC");
var compileScript_1 = require("./compileScript");
var compileStyle_1 = require("./compileStyle");
var vite_config_1 = require("../config/vite.config");
var varlet_config_1 = require("../config/varlet.config");
var compileTypes_1 = require("./compileTypes");
function compileUMD() {
    return new Promise(function (resolve, reject) {
        var config = (0, vite_config_1.getUMDConfig)((0, varlet_config_1.getVarletConfig)());
        (0, vite_1.build)(config)
            .then(function () { return resolve(); })
            .catch(reject);
    });
}
exports.compileUMD = compileUMD;
function compileESMBundle() {
    return new Promise(function (resolve, reject) {
        var config = (0, vite_config_1.getESMBundleConfig)((0, varlet_config_1.getVarletConfig)());
        (0, vite_1.build)(config)
            .then(function () { return resolve(); })
            .catch(reject);
    });
}
exports.compileESMBundle = compileESMBundle;
function compileDir(dir) {
    return __awaiter(this, void 0, void 0, function () {
        var dirs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fs_extra_1.readdir)(dir)];
                case 1:
                    dirs = _a.sent();
                    return [4 /*yield*/, Promise.all(dirs.map(function (filename) {
                            var file = (0, path_1.resolve)(dir, filename);
                            [constant_1.TESTS_DIR_NAME, constant_1.EXAMPLE_DIR_NAME, constant_1.DOCS_DIR_NAME].includes(filename) && (0, fs_extra_1.removeSync)(file);
                            if ((0, fsUtils_1.isDTS)(file) || filename === constant_1.STYLE_DIR_NAME) {
                                return Promise.resolve();
                            }
                            return compileFile(file);
                        }))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.compileDir = compileDir;
function compileFile(file) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _a = (0, fsUtils_1.isSFC)(file);
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, compileSFC_1.compileSFC)(file)];
                case 1:
                    _a = (_e.sent());
                    _e.label = 2;
                case 2:
                    _a;
                    _b = (0, fsUtils_1.isScript)(file);
                    if (!_b) return [3 /*break*/, 4];
                    return [4 /*yield*/, (0, compileScript_1.compileScriptFile)(file)];
                case 3:
                    _b = (_e.sent());
                    _e.label = 4;
                case 4:
                    _b;
                    _c = (0, fsUtils_1.isLess)(file);
                    if (!_c) return [3 /*break*/, 6];
                    return [4 /*yield*/, (0, compileStyle_1.compileLess)(file)];
                case 5:
                    _c = (_e.sent());
                    _e.label = 6;
                case 6:
                    _c;
                    _d = (0, fsUtils_1.isDir)(file);
                    if (!_d) return [3 /*break*/, 8];
                    return [4 /*yield*/, compileDir(file)];
                case 7:
                    _d = (_e.sent());
                    _e.label = 8;
                case 8:
                    _d;
                    return [2 /*return*/];
            }
        });
    });
}
exports.compileFile = compileFile;
function compileModule(modules) {
    if (modules === void 0) { modules = false; }
    return __awaiter(this, void 0, void 0, function () {
        var dest, moduleDir, publicDirs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(modules === 'umd')) return [3 /*break*/, 2];
                    return [4 /*yield*/, compileUMD()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    if (!(modules === 'esm-bundle')) return [3 /*break*/, 4];
                    return [4 /*yield*/, compileESMBundle()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
                case 4:
                    process.env.BABEL_MODULE = modules === 'commonjs' ? 'commonjs' : 'module';
                    dest = modules === 'commonjs' ? constant_1.LIB_DIR : constant_1.ES_DIR;
                    return [4 /*yield*/, (0, fs_extra_1.copy)(constant_1.SRC_DIR, dest)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, (0, fs_extra_1.readdir)(dest)];
                case 6:
                    moduleDir = _a.sent();
                    return [4 /*yield*/, Promise.all(moduleDir.map(function (filename) {
                            var file = (0, path_1.resolve)(dest, filename);
                            (0, fsUtils_1.isDir)(file) && (0, fs_extra_1.ensureFileSync)((0, path_1.resolve)(file, './style/index.js'));
                            return (0, fsUtils_1.isDir)(file) ? compileDir(file) : null;
                        }))];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, (0, fsUtils_1.getPublicDirs)()];
                case 8:
                    publicDirs = _a.sent();
                    if (!(modules === 'commonjs')) return [3 /*break*/, 10];
                    return [4 /*yield*/, (0, compileScript_1.compileCommonJSEntry)(dest, publicDirs)];
                case 9:
                    _a.sent();
                    return [3 /*break*/, 12];
                case 10: return [4 /*yield*/, (0, compileScript_1.compileESEntry)(dest, publicDirs)];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12:
                    (0, compileTypes_1.generateReference)(dest);
                    return [2 /*return*/];
            }
        });
    });
}
exports.compileModule = compileModule;
