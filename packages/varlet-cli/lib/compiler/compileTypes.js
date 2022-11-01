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
exports.compileTypes = exports.generateReference = void 0;
var fs_extra_1 = require("fs-extra");
var constant_1 = require("../shared/constant");
var shared_1 = require("@varlet/shared");
var path_1 = require("path");
var varlet_config_1 = require("../config/varlet.config");
var lodash_1 = require("lodash");
function generateReference(moduleDir) {
    (0, fs_extra_1.writeFileSync)((0, path_1.resolve)(moduleDir, 'index.d.ts'), "export * from '".concat((0, path_1.relative)(moduleDir, constant_1.TYPES_DIR), "'\n"));
}
exports.generateReference = generateReference;
function compileTypes() {
    return __awaiter(this, void 0, void 0, function () {
        var varletConfig, namespace, name, dir, ignoreEntryDir, exports, declares, globalDeclares, template;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    varletConfig = (0, varlet_config_1.getVarletConfig)();
                    namespace = (0, lodash_1.get)(varletConfig, 'namespace');
                    name = require(constant_1.UI_PACKAGE_JSON).name;
                    return [4 /*yield*/, (0, fs_extra_1.ensureDir)(constant_1.TYPES_DIR)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, fs_extra_1.readdir)(constant_1.TYPES_DIR)];
                case 2:
                    dir = _a.sent();
                    ignoreEntryDir = dir.filter(function (filename) { return filename !== 'index.d.ts' && filename !== 'global.d.ts'; });
                    exports = [];
                    declares = [];
                    ignoreEntryDir.forEach(function (filename) {
                        var componentName = filename.slice(0, filename.indexOf('.d.ts'));
                        exports.push("export * from './".concat(componentName, "'"));
                        if (!componentName.startsWith(namespace)) {
                            declares.push("".concat((0, shared_1.bigCamelize)(namespace)).concat((0, shared_1.bigCamelize)(componentName), ": typeof import('").concat(name, "')['_").concat((0, shared_1.bigCamelize)(componentName), "Component']"));
                        }
                    });
                    globalDeclares = "declare module 'vue' {\n  export interface GlobalComponents {\n    ".concat(declares.join('\n    '), "\n  }\n}");
                    template = "import type { App } from 'vue'\n\nexport const install: (app: App) => void\n\n".concat(exports.join('\n'), "\n\n").concat(globalDeclares, "\n");
                    return [4 /*yield*/, Promise.all([(0, fs_extra_1.writeFile)((0, path_1.resolve)(constant_1.TYPES_DIR, 'index.d.ts'), template)])];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.compileTypes = compileTypes;
