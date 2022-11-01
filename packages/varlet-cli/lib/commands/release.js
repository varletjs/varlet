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
exports.release = void 0;
var ora_1 = __importDefault(require("ora"));
var execa_1 = __importDefault(require("execa"));
var logger_1 = __importDefault(require("../shared/logger"));
var semver_1 = __importDefault(require("semver"));
var glob_1 = __importDefault(require("glob"));
var inquirer_1 = require("inquirer");
var constant_1 = require("../shared/constant");
var path_1 = require("path");
var fs_extra_1 = require("fs-extra");
var changelog_1 = require("./changelog");
var releaseTypes = ['premajor', 'preminor', 'prepatch', 'major', 'minor', 'patch'];
function isWorktreeEmpty() {
    return __awaiter(this, void 0, void 0, function () {
        var ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, execa_1.default)('git', ['status', '--porcelain'])];
                case 1:
                    ret = _a.sent();
                    return [2 /*return*/, !ret.stdout];
            }
        });
    });
}
function publish(preRelease) {
    return __awaiter(this, void 0, void 0, function () {
        var s, args, ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    s = (0, ora_1.default)().start('Publishing all packages');
                    args = ['-r', 'publish', '--no-git-checks', '--access', 'public'];
                    preRelease && args.push('--tag', 'alpha');
                    return [4 /*yield*/, (0, execa_1.default)('pnpm', args)];
                case 1:
                    ret = _a.sent();
                    if (ret.stderr && ret.stderr.includes('npm ERR!')) {
                        throw new Error('\n' + ret.stderr);
                    }
                    else {
                        s.succeed('Publish all packages successfully');
                        ret.stdout && logger_1.default.info(ret.stdout);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function pushGit(version, remote) {
    if (remote === void 0) { remote = 'origin'; }
    return __awaiter(this, void 0, void 0, function () {
        var s, ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    s = (0, ora_1.default)().start('Pushing to remote git repository');
                    return [4 /*yield*/, (0, execa_1.default)('git', ['add', '.'])];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, execa_1.default)('git', ['commit', '-m', "v".concat(version)])];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, execa_1.default)('git', ['tag', "v".concat(version)])];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, execa_1.default)('git', ['push', remote, "v".concat(version)])];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, (0, execa_1.default)('git', ['push'])];
                case 5:
                    ret = _a.sent();
                    s.succeed('Push remote repository successfully');
                    ret.stdout && logger_1.default.info(ret.stdout);
                    return [2 /*return*/];
            }
        });
    });
}
function updateVersion(version) {
    var packageJsons = glob_1.default.sync('packages/*/package.json');
    packageJsons.push('package.json');
    packageJsons.forEach(function (path) {
        var file = (0, path_1.resolve)(constant_1.CWD, path);
        var config = require(file);
        config.version = version;
        (0, fs_extra_1.writeFileSync)(file, JSON.stringify(config, null, 2));
    });
}
function confirmRegistry() {
    return __awaiter(this, void 0, void 0, function () {
        var registry, name, ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, execa_1.default)('npm', ['config', 'get', 'registry'])];
                case 1:
                    registry = (_a.sent()).stdout;
                    name = 'Registry confirm';
                    return [4 /*yield*/, (0, inquirer_1.prompt)([
                            {
                                name: name,
                                type: 'confirm',
                                message: "Current registry is: ".concat(registry),
                            },
                        ])];
                case 2:
                    ret = _a.sent();
                    return [2 /*return*/, ret[name]];
            }
        });
    });
}
function confirmVersion(currentVersion, expectVersion) {
    return __awaiter(this, void 0, void 0, function () {
        var name, ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = 'Version confirm';
                    return [4 /*yield*/, (0, inquirer_1.prompt)([
                            {
                                name: name,
                                type: 'confirm',
                                message: "All packages version ".concat(currentVersion, " -> ").concat(expectVersion, ":"),
                            },
                        ])];
                case 1:
                    ret = _a.sent();
                    return [2 /*return*/, ret[name]];
            }
        });
    });
}
function confirmRefs(remote) {
    var _a;
    if (remote === void 0) { remote = 'origin'; }
    return __awaiter(this, void 0, void 0, function () {
        var stdout, reg, repo, branch, name, ret;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, execa_1.default)('git', ['remote', '-v'])];
                case 1:
                    stdout = (_b.sent()).stdout;
                    reg = new RegExp("".concat(remote, "\t(.*) \\(push"));
                    repo = (_a = stdout.match(reg)) === null || _a === void 0 ? void 0 : _a[1];
                    return [4 /*yield*/, (0, execa_1.default)('git', ['branch', '--show-current'])];
                case 2:
                    branch = (_b.sent()).stdout;
                    name = 'Refs confirm';
                    return [4 /*yield*/, (0, inquirer_1.prompt)([
                            {
                                name: name,
                                type: 'confirm',
                                message: "Current refs ".concat(repo, ":refs/for/").concat(branch),
                            },
                        ])];
                case 3:
                    ret = _b.sent();
                    return [2 /*return*/, ret[name]];
            }
        });
    });
}
function getReleaseType() {
    return __awaiter(this, void 0, void 0, function () {
        var name, ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = 'Please select release type';
                    return [4 /*yield*/, (0, inquirer_1.prompt)([
                            {
                                name: name,
                                type: 'list',
                                choices: releaseTypes,
                            },
                        ])];
                case 1:
                    ret = _a.sent();
                    return [2 /*return*/, ret[name]];
            }
        });
    });
}
function release(options) {
    return __awaiter(this, void 0, void 0, function () {
        var currentVersion, type, isPreRelease, expectVersion, _a, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 15, , 16]);
                    currentVersion = require((0, path_1.resolve)(constant_1.CWD, 'package.json')).version;
                    if (!currentVersion) {
                        logger_1.default.error('Your package is missing the version field');
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, isWorktreeEmpty()];
                case 1:
                    if (!(_b.sent())) {
                        logger_1.default.error('Git worktree is not empty, please commit changed');
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, confirmRefs(options.remote)];
                case 2:
                    if (!(_b.sent())) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, confirmRegistry()];
                case 3:
                    if (!(_b.sent())) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, getReleaseType()];
                case 4:
                    type = _b.sent();
                    isPreRelease = type.startsWith('pre');
                    expectVersion = semver_1.default.inc(currentVersion, type, "alpha.".concat(Date.now()));
                    expectVersion = isPreRelease ? expectVersion.slice(0, -2) : expectVersion;
                    return [4 /*yield*/, confirmVersion(currentVersion, expectVersion)];
                case 5:
                    if (!(_b.sent())) {
                        return [2 /*return*/];
                    }
                    updateVersion(expectVersion);
                    return [4 /*yield*/, publish(isPreRelease)];
                case 6:
                    _b.sent();
                    if (!!isPreRelease) return [3 /*break*/, 9];
                    return [4 /*yield*/, (0, changelog_1.changelog)()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, pushGit(expectVersion, options.remote)];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9:
                    logger_1.default.success("Release version ".concat(expectVersion, " successfully!"));
                    if (!isPreRelease) return [3 /*break*/, 14];
                    _b.label = 10;
                case 10:
                    _b.trys.push([10, 13, , 14]);
                    return [4 /*yield*/, (0, execa_1.default)('git', ['restore', '**/package.json'])];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, (0, execa_1.default)('git', ['restore', 'package.json'])];
                case 12:
                    _b.sent();
                    return [3 /*break*/, 14];
                case 13:
                    _a = _b.sent();
                    logger_1.default.error('Restore package.json has failed, please restore manually');
                    return [3 /*break*/, 14];
                case 14: return [3 /*break*/, 16];
                case 15:
                    error_1 = _b.sent();
                    logger_1.default.error(error_1.toString());
                    process.exit(1);
                    return [3 /*break*/, 16];
                case 16: return [2 /*return*/];
            }
        });
    });
}
exports.release = release;
