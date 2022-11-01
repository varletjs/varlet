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
exports.lint = void 0;
var execa_1 = __importDefault(require("execa"));
var ora_1 = __importDefault(require("ora"));
var constant_1 = require("../shared/constant");
var fsUtils_1 = require("../shared/fsUtils");
var path_1 = require("path");
function lint() {
    return __awaiter(this, void 0, void 0, function () {
        var spinner, stylelintPattern, hasPackages, eslintPatterns, stdout, type, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    spinner = (0, ora_1.default)('prettier starting...').start();
                    return [4 /*yield*/, (0, execa_1.default)('prettier', ['--write', '.'])];
                case 1:
                    _a.sent();
                    spinner.succeed('prettier success');
                    spinner = (0, ora_1.default)('stylelint starting...').start();
                    stylelintPattern = ['./src/**/*.vue', './src/**/*.css', './src/**/*.less'];
                    hasPackages = (0, fsUtils_1.isDir)((0, path_1.resolve)(constant_1.CWD, 'packages'));
                    hasPackages && stylelintPattern.push('./packages/**/*.vue', './packages/**/*.css', './packages/**/*.less');
                    return [4 /*yield*/, (0, execa_1.default)('stylelint', __spreadArray(__spreadArray([], __read(stylelintPattern), false), ['--fix'], false))];
                case 2:
                    _a.sent();
                    spinner.succeed('stylelint success');
                    spinner = (0, ora_1.default)('eslint starting...').start();
                    eslintPatterns = [
                        './src',
                        './packages/varlet-cli/src',
                        './packages/varlet-ui/src',
                        './packages/varlet-icons/lib',
                        './packages/varlet-markdown-vite-plugin',
                        './packages/varlet-touch-emulator',
                        './packages/varlet-vscode-extension/src',
                    ];
                    return [4 /*yield*/, (0, execa_1.default)('eslint', __spreadArray(__spreadArray([], __read(eslintPatterns.filter(function (pattern) { return (0, fsUtils_1.isDir)((0, path_1.resolve)(constant_1.CWD, pattern)); })), false), [
                            '--fix',
                            '--ext',
                            constant_1.ESLINT_EXTENSIONS.join(),
                        ], false))];
                case 3:
                    stdout = (_a.sent()).stdout;
                    type = stdout ? 'warn' : 'succeed';
                    spinner[type](stdout || 'eslint success');
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    spinner.fail(e_1.toString());
                    process.exit(1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.lint = lint;
