"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changelog = void 0;
var ora_1 = __importDefault(require("ora"));
var conventional_changelog_1 = __importDefault(require("conventional-changelog"));
var fs_extra_1 = require("fs-extra");
var path_1 = require("path");
var constant_1 = require("../shared/constant");
function changelog(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.releaseCount, releaseCount = _c === void 0 ? 0 : _c, _d = _b.file, file = _d === void 0 ? 'CHANGELOG.md' : _d;
    var s = (0, ora_1.default)().start("Generating changelog");
    return new Promise(function (resolve) {
        (0, conventional_changelog_1.default)({
            preset: 'angular',
            releaseCount: releaseCount,
        })
            .pipe((0, fs_extra_1.createWriteStream)((0, path_1.resolve)(constant_1.CWD, file)))
            .on('close', function () {
            s.succeed("Changelog generated success!");
            resolve();
        });
    });
}
exports.changelog = changelog;
