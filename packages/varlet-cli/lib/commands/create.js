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
exports.create = void 0;
var ejs_1 = __importDefault(require("ejs"));
var logger_1 = __importDefault(require("../shared/logger"));
var shared_1 = require("@varlet/shared");
var inquirer_1 = require("inquirer");
var fs_extra_1 = require("fs-extra");
var lodash_1 = require("lodash");
var path_1 = require("path");
var fsUtils_1 = require("../shared/fsUtils");
var varlet_config_1 = require("../config/varlet.config");
var constant_1 = require("../shared/constant");
function renderTemplates(componentFolder, componentFolderName, renderData) {
    return __awaiter(this, void 0, void 0, function () {
        var templates;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, fsUtils_1.glob)("".concat(componentFolder, "/**/*.ejs"))];
                case 1:
                    templates = _a.sent();
                    templates.forEach(function (template) {
                        var templateCode = (0, fs_extra_1.readFileSync)(template, { encoding: 'utf-8' });
                        var code = ejs_1.default.render(templateCode, renderData);
                        var file = template
                            .replace('[componentName]', (0, shared_1.camelize)(componentFolderName))
                            .replace('[ComponentName]', (0, shared_1.bigCamelize)(componentFolderName))
                            .replace('.ejs', '');
                        (0, fs_extra_1.writeFileSync)(file, code);
                        (0, fs_extra_1.removeSync)(template);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function create(options) {
    return __awaiter(this, void 0, void 0, function () {
        var namespace, renderData, name, _a, componentFolder, componentFolderName, locale, _b, style;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    logger_1.default.title('\n📦📦 Create a component ! \n');
                    namespace = (0, lodash_1.get)((0, varlet_config_1.getVarletConfig)(), 'namespace');
                    renderData = {
                        namespace: namespace,
                        bigCamelizeNamespace: (0, shared_1.bigCamelize)(namespace),
                        kebabCaseName: 'component-name',
                        bigCamelizeName: 'ComponentName',
                        camelizeName: 'componentName',
                        style: 'vue',
                    };
                    if (!options.name) return [3 /*break*/, 1];
                    _a = options;
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, (0, inquirer_1.prompt)({
                        name: 'name',
                        message: 'Name of the component created: ',
                        default: renderData.kebabCaseName,
                    })];
                case 2:
                    _a = _c.sent();
                    _c.label = 3;
                case 3:
                    name = (_a).name;
                    renderData.kebabCaseName = (0, shared_1.kebabCase)(name);
                    renderData.camelizeName = (0, shared_1.camelize)(name);
                    renderData.bigCamelizeName = (0, shared_1.bigCamelize)(name);
                    componentFolder = (0, path_1.resolve)(constant_1.SRC_DIR, renderData.kebabCaseName);
                    componentFolderName = renderData.kebabCaseName;
                    if ((0, fs_extra_1.pathExistsSync)(componentFolder)) {
                        logger_1.default.warning("".concat(componentFolderName, " already exist and cannot be recreated..."));
                        return [2 /*return*/];
                    }
                    if (!options.locale) return [3 /*break*/, 4];
                    _b = options;
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, (0, inquirer_1.prompt)({
                        name: 'locale',
                        type: 'confirm',
                        message: 'Whether to use i18n?',
                        default: false,
                    })];
                case 5:
                    _b = _c.sent();
                    _c.label = 6;
                case 6:
                    locale = (_b).locale;
                    renderData.locale = locale;
                    if (!(options.sfc || options.tsx)) return [3 /*break*/, 7];
                    renderData.style = options.sfc ? 'vue' : 'tsx';
                    return [3 /*break*/, 9];
                case 7: return [4 /*yield*/, (0, inquirer_1.prompt)({
                        name: 'style',
                        type: 'list',
                        message: 'Which style do you use to write your component ?',
                        choices: [
                            { name: 'sfc', value: 'vue' },
                            { name: 'tsx', value: 'tsx' },
                        ],
                        default: 'vue',
                    })];
                case 8:
                    style = (_c.sent()).style;
                    renderData.style = style;
                    _c.label = 9;
                case 9:
                    (0, fs_extra_1.copySync)((0, path_1.resolve)(__dirname, '../../template/create'), componentFolder);
                    return [4 /*yield*/, renderTemplates(componentFolder, componentFolderName, renderData)];
                case 10:
                    _c.sent();
                    if (!renderData.locale) {
                        (0, fs_extra_1.removeSync)((0, path_1.resolve)(componentFolder, '/example/locale'));
                    }
                    if (renderData.style !== 'vue') {
                        (0, fs_extra_1.removeSync)((0, path_1.resolve)(componentFolder, "".concat(renderData.bigCamelizeName, ".vue")));
                    }
                    if (renderData.style !== 'tsx') {
                        (0, fs_extra_1.removeSync)((0, path_1.resolve)(componentFolder, "".concat(renderData.bigCamelizeName, ".tsx")));
                    }
                    logger_1.default.success("Create ".concat(componentFolderName, " component success!"));
                    return [2 /*return*/];
            }
        });
    });
}
exports.create = create;
