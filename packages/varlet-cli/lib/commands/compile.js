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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compile = exports.runTask = exports.removeDir = void 0;
var ora_1 = __importDefault(require("ora"));
var logger_1 = __importDefault(require("../shared/logger"));
var fs_extra_1 = require("fs-extra");
var constant_1 = require("../shared/constant");
var compileModule_1 = require("../compiler/compileModule");
var compileTemplateHighlight_1 = require("../compiler/compileTemplateHighlight");
var compileTypes_1 = require("../compiler/compileTypes");
function removeDir() {
    return Promise.all([(0, fs_extra_1.remove)(constant_1.ES_DIR), (0, fs_extra_1.remove)(constant_1.LIB_DIR), (0, fs_extra_1.remove)(constant_1.HL_DIR), (0, fs_extra_1.remove)(constant_1.UMD_DIR)]);
}
exports.removeDir = removeDir;
function runTask(taskName, task) {
    return __awaiter(this, void 0, void 0, function () {
        var s, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    s = (0, ora_1.default)().start("Compiling ".concat(taskName));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, task()];
                case 2:
                    _a.sent();
                    s.succeed("Compilation ".concat(taskName, " completed!"));
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    s.fail("Compilation ".concat(taskName, " failed!"));
                    logger_1.default.error(e_1.toString());
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.runTask = runTask;
function compile(options) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    process.env.NODE_ENV = 'compile';
                    return [4 /*yield*/, removeDir()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, Promise.all([runTask('types', compileTypes_1.compileTypes), runTask('template highlight', compileTemplateHighlight_1.compileTemplateHighlight)])];
                case 2:
                    _b.sent();
                    process.env.TARGET_MODULE = 'module';
                    return [4 /*yield*/, runTask('module', compileModule_1.compileModule)];
                case 3:
                    _b.sent();
                    process.env.TARGET_MODULE = 'esm-bundle';
                    return [4 /*yield*/, runTask('esm bundle', function () { return (0, compileModule_1.compileModule)('esm-bundle'); })];
                case 4:
                    _b.sent();
                    process.env.TARGET_MODULE = 'commonjs';
                    return [4 /*yield*/, runTask('commonjs', function () { return (0, compileModule_1.compileModule)('commonjs'); })];
                case 5:
                    _b.sent();
                    process.env.TARGET_MODULE = 'umd';
                    _a = !options.noUmd;
                    if (!_a) return [3 /*break*/, 7];
                    return [4 /*yield*/, runTask('umd', function () { return (0, compileModule_1.compileModule)('umd'); })];
                case 6:
                    _a = (_b.sent());
                    _b.label = 7;
                case 7:
                    _a;
                    return [2 /*return*/];
            }
        });
    });
}
exports.compile = compile;
