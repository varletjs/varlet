"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (api, options) {
    if (options === void 0) { options = {}; }
    if (api) {
        api.cache.never();
    }
    var isCommonJS = process.env.NODE_ENV === 'test' || process.env.BABEL_MODULE === 'commonjs';
    return {
        presets: [
            [
                require.resolve('@babel/preset-env'),
                {
                    modules: isCommonJS ? 'commonjs' : false,
                    loose: options.loose,
                },
            ],
            require.resolve('@babel/preset-typescript'),
            require('./babel.sfc.transform'),
        ],
        plugins: [
            [
                require.resolve('@vue/babel-plugin-jsx'),
                {
                    enableObjectSlots: options.enableObjectSlots,
                },
            ],
        ],
    };
};
exports.default = module.exports;
