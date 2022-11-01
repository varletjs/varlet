"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var constant_1 = require("../shared/constant");
var path_1 = require("path");
var fs_extra_1 = require("fs-extra");
function getRootConfig() {
    var file = (0, path_1.resolve)(constant_1.CWD, 'jest.config.js');
    if ((0, fs_extra_1.pathExistsSync)(file)) {
        delete require.cache[require.resolve(file)];
        return require(file);
    }
    return {};
}
module.exports = __assign({ moduleNameMapper: {
        '^@config$': '<rootDir>/.varlet/site.config.json',
        '\\.(css|less)$': constant_1.JEST_STYLE_MOCK,
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': constant_1.JEST_MEDIA_MOCK,
    }, transform: {
        '\\.(vue)$': 'vue-jest',
        '\\.(js|jsx|ts|tsx)$': 'babel-jest',
    }, collectCoverage: true, collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx,vue}',
        "!**/".concat(constant_1.EXAMPLE_DIR_NAME, "/**"),
        "!**/".concat(constant_1.DOCS_DIR_NAME, "/**"),
        "!**/".concat(constant_1.TESTS_DIR_NAME, "/**"),
    ], moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'vue'], transformIgnorePatterns: [] }, getRootConfig());
