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
exports.compileSFC = exports.injectRender = void 0;
var hash_sum_1 = __importDefault(require("hash-sum"));
var path_1 = require("path");
var fs_extra_1 = require("fs-extra");
var compiler_sfc_1 = require("@vue/compiler-sfc");
var fsUtils_1 = require("../shared/fsUtils");
var compileScript_1 = require("./compileScript");
var compileStyle_1 = require("./compileStyle");
var logger_1 = __importDefault(require("../shared/logger"));
var NORMAL_EXPORT_START_RE = /export\s+default\s+{/;
var DEFINE_EXPORT_START_RE = /export\s+default\s+defineComponent\s*\(\s*{/;
function injectRender(script, render) {
    if (DEFINE_EXPORT_START_RE.test(script.trim())) {
        return script.trim().replace(DEFINE_EXPORT_START_RE, "".concat(render, "\nexport default defineComponent({\n  render,    "));
    }
    if (NORMAL_EXPORT_START_RE.test(script.trim())) {
        return script.trim().replace(NORMAL_EXPORT_START_RE, "".concat(render, "\nexport default {\n  render,    "));
    }
    return script;
}
exports.injectRender = injectRender;
function compileSFC(sfc) {
    return __awaiter(this, void 0, void 0, function () {
        var sources, descriptor, script, scriptSetup, template, styles, hasScope, id, scopeId, render, content, code, index, style, file, _a, base, dir, dependencyPath, cssFile, code;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, fs_extra_1.readFile)(sfc, 'utf-8')];
                case 1:
                    sources = _b.sent();
                    descriptor = (0, compiler_sfc_1.parse)(sources, { sourceMap: false }).descriptor;
                    script = descriptor.script, scriptSetup = descriptor.scriptSetup, template = descriptor.template, styles = descriptor.styles;
                    if (scriptSetup) {
                        logger_1.default.warning("\n Varlet Cli does not support compiling script setup syntax       \n  The error in ".concat(sfc));
                        return [2 /*return*/];
                    }
                    hasScope = styles.some(function (style) { return style.scoped; });
                    id = (0, hash_sum_1.default)(sources);
                    scopeId = hasScope ? "data-v-".concat(id) : '';
                    if (!script) return [3 /*break*/, 6];
                    render = template &&
                        (0, compiler_sfc_1.compileTemplate)({
                            id: id,
                            source: template.content,
                            filename: sfc,
                            compilerOptions: {
                                scopeId: scopeId,
                            },
                        });
                    content = script.content;
                    if (render) {
                        code = render.code;
                        content = injectRender(content, code);
                    }
                    // script
                    return [4 /*yield*/, (0, compileScript_1.compileScript)(content, sfc)
                        // style
                    ];
                case 2:
                    // script
                    _b.sent();
                    index = 0;
                    _b.label = 3;
                case 3:
                    if (!(index < styles.length)) return [3 /*break*/, 6];
                    style = styles[index];
                    file = (0, fsUtils_1.replaceExt)(sfc, "Sfc".concat(index || '', ".").concat(style.lang || 'css'));
                    _a = (0, path_1.parse)(file), base = _a.base, dir = _a.dir;
                    dependencyPath = (0, compileStyle_1.normalizeStyleDependency)(base, compileStyle_1.STYLE_IMPORT_RE);
                    cssFile = (0, path_1.resolve)(dir, './style/index.js');
                    code = (0, compiler_sfc_1.compileStyle)({
                        source: style.content,
                        filename: file,
                        id: scopeId,
                        scoped: style.scoped,
                    }).code;
                    code = (0, compileStyle_1.extractStyleDependencies)(file, code, compileStyle_1.STYLE_IMPORT_RE);
                    (0, fs_extra_1.writeFileSync)(file, (0, compileStyle_1.clearEmptyLine)(code), 'utf-8');
                    (0, fsUtils_1.smartAppendFileSync)(cssFile, process.env.BABEL_MODULE === 'commonjs'
                        ? "require('".concat(dependencyPath, ".css')\n")
                        : "import '".concat(dependencyPath, ".css'\n"));
                    if (!(style.lang === 'less')) return [3 /*break*/, 5];
                    return [4 /*yield*/, (0, compileStyle_1.compileLess)(file)];
                case 4:
                    _b.sent();
                    _b.label = 5;
                case 5:
                    index++;
                    return [3 /*break*/, 3];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.compileSFC = compileSFC;
