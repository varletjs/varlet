"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVarletConfig = exports.mergeStrategy = exports.defineConfig = void 0;
var fs_extra_1 = require("fs-extra");
var lodash_1 = require("lodash");
var constant_1 = require("../shared/constant");
var fsUtils_1 = require("../shared/fsUtils");
var shared_1 = require("@varlet/shared");
function defineConfig(conf) {
    return conf;
}
exports.defineConfig = defineConfig;
function mergeStrategy(value, srcValue, key) {
    if (key === 'features' && (0, shared_1.isArray)(srcValue)) {
        return srcValue;
    }
}
exports.mergeStrategy = mergeStrategy;
function getVarletConfig(emit) {
    if (emit === void 0) { emit = false; }
    var config = {};
    if ((0, fs_extra_1.pathExistsSync)(constant_1.VARLET_CONFIG)) {
        delete require.cache[require.resolve(constant_1.VARLET_CONFIG)];
        config = require(constant_1.VARLET_CONFIG);
    }
    delete require.cache[require.resolve('../../varlet.default.config.js')];
    var defaultConfig = require('../../varlet.default.config.js');
    var mergedConfig = (0, lodash_1.mergeWith)(defaultConfig, config, mergeStrategy);
    if (emit) {
        var source = JSON.stringify(mergedConfig, null, 2);
        (0, fsUtils_1.outputFileSyncOnChange)(constant_1.SITE_CONFIG, source);
    }
    return mergedConfig;
}
exports.getVarletConfig = getVarletConfig;
