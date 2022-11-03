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
exports.gen = void 0;
var logger_1 = __importDefault(require("../shared/logger"));
var inquirer_1 = require("inquirer");
var path_1 = require("path");
var fs_extra_1 = require("fs-extra");
var constant_1 = require("../shared/constant");
function syncVersion(name) {
    var file = (0, path_1.resolve)(constant_1.CWD, name, 'package.json');
    var pkg = JSON.parse((0, fs_extra_1.readFileSync)(file, 'utf-8'));
    var cliPkg = JSON.parse((0, fs_extra_1.readFileSync)(constant_1.CLI_PACKAGE_JSON, 'utf-8'));
    Object.keys(pkg.devDependencies).forEach(function (key) {
        if (key.startsWith('@varlet')) {
            pkg.devDependencies[key] = "^".concat(cliPkg.version);
        }
    });
    pkg.files = ['es', 'lib', 'umd', 'highlight', 'types'];
    (0, fs_extra_1.writeFileSync)(file, JSON.stringify(pkg, null, 2));
}
function gen(options) {
    return __awaiter(this, void 0, void 0, function () {
        var name, _a, dest, codeStyle, style, i18n, _b, dirName, base, configBase, code;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    logger_1.default.title('\n📦📦 Generate cli application ! \n');
                    if (!options.name) return [3 /*break*/, 1];
                    _a = options;
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, (0, inquirer_1.prompt)({
                        name: 'name',
                        message: 'Name of the generate application: ',
                        default: 'varlet-cli-app',
                    })];
                case 2:
                    _a = _c.sent();
                    _c.label = 3;
                case 3:
                    name = (_a).name;
                    dest = (0, path_1.resolve)(constant_1.CWD, name);
                    if ((0, fs_extra_1.pathExistsSync)(dest)) {
                        logger_1.default.error("".concat(name, " already exists and cannot be recreated..."));
                        return [2 /*return*/];
                    }
                    if (!(options.sfc || options.tsx)) return [3 /*break*/, 4];
                    codeStyle = options.sfc ? 'sfc' : 'tsx';
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, (0, inquirer_1.prompt)({
                        name: 'style',
                        type: 'list',
                        message: 'Please select your component library programming format',
                        choices: ['sfc', 'tsx'],
                    })];
                case 5:
                    style = (_c.sent()).style;
                    codeStyle = style;
                    _c.label = 6;
                case 6:
                    if (!options.i18n) return [3 /*break*/, 7];
                    _b = options;
                    return [3 /*break*/, 9];
                case 7: return [4 /*yield*/, (0, inquirer_1.prompt)({
                        name: 'i18n',
                        type: 'confirm',
                        message: 'Whether to use i18n?',
                        default: false,
                    })];
                case 8:
                    _b = _c.sent();
                    _c.label = 9;
                case 9:
                    i18n = (_b).i18n;
                    dirName = i18n ? 'i18n' : 'default';
                    base = (0, path_1.resolve)(constant_1.GENERATORS_DIR, 'base');
                    configBase = (0, path_1.resolve)(constant_1.GENERATORS_DIR, 'config', dirName, 'base');
                    code = (0, path_1.resolve)(constant_1.GENERATORS_DIR, 'config', dirName, codeStyle);
                    return [4 /*yield*/, (0, fs_extra_1.copy)(base, dest)];
                case 10:
                    _c.sent();
                    return [4 /*yield*/, (0, fs_extra_1.copy)(configBase, dest)];
                case 11:
                    _c.sent();
                    return [4 /*yield*/, (0, fs_extra_1.copy)(code, dest)];
                case 12:
                    _c.sent();
                    return [4 /*yield*/, (0, fs_extra_1.rename)((0, path_1.resolve)(dest, '_gitignore'), (0, path_1.resolve)(dest, '.gitignore'))];
                case 13:
                    _c.sent();
                    syncVersion(name);
                    logger_1.default.success('✨ Application generated successfully!');
                    logger_1.default.info("  cd ".concat(name, "\n  pnpm install\n  pnpm dev"));
                    logger_1.default.success("=======================\n  Good luck have fun\n=======================      ");
                    return [2 /*return*/];
            }
        });
    });
}
exports.gen = gen;
