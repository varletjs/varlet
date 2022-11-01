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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSiteEntry = exports.buildSiteSource = exports.buildPcSiteRoutes = exports.buildMobileSiteRoutes = exports.findRootLocales = exports.findRootDocs = exports.findComponentDocs = exports.findExamples = exports.getRootFilePath = exports.getRootRoutePath = exports.getRootDocRoutePath = exports.getComponentDocRoutePath = exports.getExampleRoutePath = void 0;
var constant_1 = require("../shared/constant");
var fs_extra_1 = require("fs-extra");
var slash_1 = __importDefault(require("slash"));
var fsUtils_1 = require("../shared/fsUtils");
var varlet_config_1 = require("../config/varlet.config");
var lodash_1 = require("lodash");
var EXAMPLE_COMPONENT_NAME_RE = /\/([-\w]+)\/example\/index.vue/;
var COMPONENT_DOCS_RE = /\/([-\w]+)\/docs\/([-\w]+)\.md/;
var ROOT_DOCS_RE = /\/docs\/([-\w]+)\.([-\w]+)\.md/;
var ROOT_LOCALE_RE = /\/pages\/([-\w]+)\/locale\/([-\w]+)\.ts/;
function getExampleRoutePath(examplePath) {
    var _a;
    return '/' + ((_a = examplePath.match(EXAMPLE_COMPONENT_NAME_RE)) === null || _a === void 0 ? void 0 : _a[1]);
}
exports.getExampleRoutePath = getExampleRoutePath;
function getComponentDocRoutePath(componentDocsPath) {
    var _a;
    var _b = __read((_a = componentDocsPath.match(COMPONENT_DOCS_RE)) !== null && _a !== void 0 ? _a : [], 3), routePath = _b[1], language = _b[2];
    return "/".concat(language, "/").concat(routePath);
}
exports.getComponentDocRoutePath = getComponentDocRoutePath;
function getRootDocRoutePath(rootDocsPath) {
    var _a;
    var _b = __read((_a = rootDocsPath.match(ROOT_DOCS_RE)) !== null && _a !== void 0 ? _a : [], 3), routePath = _b[1], language = _b[2];
    return "/".concat(language, "/").concat(routePath);
}
exports.getRootDocRoutePath = getRootDocRoutePath;
function getRootRoutePath(rootLocalePath) {
    var _a;
    var _b = __read((_a = rootLocalePath.match(ROOT_LOCALE_RE)) !== null && _a !== void 0 ? _a : [], 3), routePath = _b[1], language = _b[2];
    return "/".concat(language, "/").concat(routePath);
}
exports.getRootRoutePath = getRootRoutePath;
function getRootFilePath(rootLocalePath) {
    return rootLocalePath.replace(/locale\/.+/, constant_1.DIR_INDEX);
}
exports.getRootFilePath = getRootFilePath;
function findExamples() {
    return (0, fsUtils_1.glob)("".concat(constant_1.SRC_DIR, "/**/").concat(constant_1.EXAMPLE_DIR_NAME, "/").concat(constant_1.DIR_INDEX));
}
exports.findExamples = findExamples;
function findComponentDocs() {
    return (0, fsUtils_1.glob)("".concat(constant_1.SRC_DIR, "/**/").concat(constant_1.DOCS_DIR_NAME, "/*.md"));
}
exports.findComponentDocs = findComponentDocs;
function findRootDocs() {
    return (0, fsUtils_1.glob)("".concat(constant_1.ROOT_DOCS_DIR, "/*.md"));
}
exports.findRootDocs = findRootDocs;
function findRootLocales() {
    return __awaiter(this, void 0, void 0, function () {
        var defaultLanguage, userPages, baseLocales, userLocales, filterMap;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    defaultLanguage = (0, lodash_1.get)((0, varlet_config_1.getVarletConfig)(), 'defaultLanguage');
                    return [4 /*yield*/, (0, fsUtils_1.glob)("".concat(constant_1.ROOT_PAGES_DIR, "/*"))];
                case 1:
                    userPages = _a.sent();
                    return [4 /*yield*/, (0, fsUtils_1.glob)("".concat(constant_1.SITE, "/pc/pages/**/").concat(constant_1.LOCALE_DIR_NAME, "/*.ts"))];
                case 2:
                    baseLocales = _a.sent();
                    return [4 /*yield*/, userPages.reduce(function (userLocales, page) { return __awaiter(_this, void 0, void 0, function () {
                            var locales;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!(0, fsUtils_1.isDir)(page)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, (0, fsUtils_1.glob)("".concat(page, "/").concat(constant_1.LOCALE_DIR_NAME, "/*.ts"))];
                                    case 1:
                                        locales = _b.sent();
                                        if (!locales.length)
                                            locales.push("".concat(page, "/").concat(constant_1.LOCALE_DIR_NAME, "/").concat(defaultLanguage, ".ts"));
                                        return [4 /*yield*/, userLocales];
                                    case 2:
                                        (_a = (_b.sent())).push.apply(_a, __spreadArray([], __read(locales), false));
                                        _b.label = 3;
                                    case 3: return [2 /*return*/, userLocales];
                                }
                            });
                        }); }, Promise.resolve([]))
                        // filter
                    ];
                case 3:
                    userLocales = _a.sent();
                    filterMap = new Map();
                    baseLocales.forEach(function (locale) {
                        var _a;
                        var _b = __read((_a = locale.match(ROOT_LOCALE_RE)) !== null && _a !== void 0 ? _a : [], 3), routePath = _b[1], language = _b[2];
                        filterMap.set(routePath + language, (0, slash_1.default)("".concat(constant_1.SITE_PC_DIR, "/pages/").concat(routePath, "/locale/").concat(language, ".ts")));
                    });
                    userLocales.forEach(function (locale) {
                        var _a;
                        var _b = __read((_a = locale.match(ROOT_LOCALE_RE)) !== null && _a !== void 0 ? _a : [], 3), routePath = _b[1], language = _b[2];
                        filterMap.set(routePath + language, locale);
                    });
                    return [2 /*return*/, Promise.resolve(Array.from(filterMap.values()))];
            }
        });
    });
}
exports.findRootLocales = findRootLocales;
function buildMobileSiteRoutes() {
    return __awaiter(this, void 0, void 0, function () {
        var examples, routes, source;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, findExamples()];
                case 1:
                    examples = _a.sent();
                    routes = examples.map(function (example) { return "\n  {\n    path: '".concat(getExampleRoutePath(example), "',\n    // @ts-ignore\n    component: () => import('").concat(example, "')\n  }"); });
                    source = "export default [    ".concat(routes.join(','), "\n]");
                    return [4 /*yield*/, (0, fsUtils_1.outputFileSyncOnChange)(constant_1.SITE_MOBILE_ROUTES, source)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.buildMobileSiteRoutes = buildMobileSiteRoutes;
function buildPcSiteRoutes() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, componentDocs, rootDocs, rootLocales, rootPagesRoutes, componentDocsRoutes, rootDocsRoutes, layoutRoutes, source;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        findComponentDocs(),
                        findRootDocs(),
                        findRootLocales(),
                    ])];
                case 1:
                    _a = __read.apply(void 0, [_b.sent(), 3]), componentDocs = _a[0], rootDocs = _a[1], rootLocales = _a[2];
                    rootPagesRoutes = rootLocales.map(function (rootLocale) { return "\n  {\n    path: '".concat(getRootRoutePath(rootLocale), "',\n    // @ts-ignore\n    component: () => import('").concat(getRootFilePath(rootLocale), "')\n  }"); });
                    componentDocsRoutes = componentDocs.map(function (componentDoc) { return "\n      {\n        path: '".concat(getComponentDocRoutePath(componentDoc), "',\n        // @ts-ignore\n        component: () => import('").concat(componentDoc, "')\n      }"); });
                    rootDocsRoutes = rootDocs.map(function (rootDoc) { return "\n      {\n        path: '".concat(getRootDocRoutePath(rootDoc), "',\n        // @ts-ignore\n        component: () => import('").concat(rootDoc, "')\n      }"); });
                    layoutRoutes = "{\n    path: '/layout',\n    // @ts-ignore\n    component:()=> import('".concat((0, slash_1.default)(constant_1.SITE_PC_DIR), "/Layout.vue'),\n    children: [\n      ").concat(__spreadArray(__spreadArray([], __read(componentDocsRoutes), false), [rootDocsRoutes], false).join(','), ",\n    ]\n  }");
                    source = "export default [  ".concat(rootPagesRoutes.join(','), ",\n  ").concat(layoutRoutes, "\n]");
                    (0, fsUtils_1.outputFileSyncOnChange)(constant_1.SITE_PC_ROUTES, source);
                    return [2 /*return*/];
            }
        });
    });
}
exports.buildPcSiteRoutes = buildPcSiteRoutes;
function buildSiteSource() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, (0, fs_extra_1.copy)(constant_1.SITE, constant_1.SITE_DIR)];
        });
    });
}
exports.buildSiteSource = buildSiteSource;
function buildSiteEntry() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, varlet_config_1.getVarletConfig)(true);
                    return [4 /*yield*/, Promise.all([buildMobileSiteRoutes(), buildPcSiteRoutes(), buildSiteSource()])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.buildSiteEntry = buildSiteEntry;
