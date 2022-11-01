"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var helper_plugin_utils_1 = require("@babel/helper-plugin-utils");
module.exports = (0, helper_plugin_utils_1.declare)(function () { return ({
    overrides: [
        {
            test: function (file) {
                if (/\.vue$/.test(file)) {
                    var code = (0, fs_1.readFileSync)(file, 'utf8');
                    return code.includes('lang="ts"') || code.includes("lang='ts'");
                }
                return false;
            },
            plugins: ['@babel/plugin-transform-typescript'],
        },
    ],
}); });
