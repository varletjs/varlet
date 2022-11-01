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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUMDConfig = exports.getESMBundleConfig = exports.getBuildConfig = exports.getDevConfig = void 0;
var plugin_vue_1 = __importDefault(require("@vitejs/plugin-vue"));
var markdown_vite_plugin_1 = __importDefault(require("@varlet/markdown-vite-plugin"));
var plugin_vue_jsx_1 = __importDefault(require("@vitejs/plugin-vue-jsx"));
var vite_plugin_html_1 = require("vite-plugin-html");
var constant_1 = require("../shared/constant");
var lodash_1 = require("lodash");
var shared_1 = require("@varlet/shared");
var path_1 = require("path");
var fs_extra_1 = require("fs-extra");
function getDevConfig(varletConfig) {
    var defaultLanguage = (0, lodash_1.get)(varletConfig, 'defaultLanguage');
    var host = (0, lodash_1.get)(varletConfig, 'host');
    return {
        root: constant_1.SITE_DIR,
        resolve: {
            extensions: constant_1.VITE_RESOLVE_EXTENSIONS,
            alias: {
                '@config': constant_1.SITE_CONFIG,
                '@pc-routes': constant_1.SITE_PC_ROUTES,
                '@mobile-routes': constant_1.SITE_MOBILE_ROUTES,
            },
        },
        server: {
            port: (0, lodash_1.get)(varletConfig, 'port'),
            host: host === 'localhost' ? '0.0.0.0' : host,
        },
        publicDir: constant_1.SITE_PUBLIC_PATH,
        plugins: [
            (0, plugin_vue_1.default)({
                include: [/\.vue$/, /\.md$/],
            }),
            (0, markdown_vite_plugin_1.default)({ style: (0, lodash_1.get)(varletConfig, 'highlight.style') }),
            (0, plugin_vue_jsx_1.default)(),
            (0, vite_plugin_html_1.injectHtml)({
                data: {
                    pcTitle: (0, lodash_1.get)(varletConfig, "pc.title['".concat(defaultLanguage, "']")),
                    mobileTitle: (0, lodash_1.get)(varletConfig, "mobile.title['".concat(defaultLanguage, "']")),
                    logo: (0, lodash_1.get)(varletConfig, "logo"),
                    baidu: (0, lodash_1.get)(varletConfig, "analysis.baidu", ''),
                },
            }),
        ],
    };
}
exports.getDevConfig = getDevConfig;
function getBuildConfig(varletConfig) {
    var devConfig = getDevConfig(varletConfig);
    return __assign(__assign({}, devConfig), { base: './', build: {
            outDir: constant_1.SITE_OUTPUT_PATH,
            reportCompressedSize: false,
            emptyOutDir: true,
            cssTarget: 'chrome61',
            rollupOptions: {
                input: {
                    main: (0, path_1.resolve)(constant_1.SITE_DIR, 'index.html'),
                    mobile: (0, path_1.resolve)(constant_1.SITE_DIR, 'mobile.html'),
                },
            },
        } });
}
exports.getBuildConfig = getBuildConfig;
function inlineCSS(fileName, dir) {
    return {
        name: 'varlet-inline-css-vite-plugin',
        apply: 'build',
        closeBundle: function () {
            var cssFile = (0, path_1.resolve)(dir, 'style.css');
            if (!(0, fs_extra_1.pathExistsSync)(cssFile)) {
                return;
            }
            var jsFile = (0, path_1.resolve)(dir, fileName);
            var cssCode = (0, fs_extra_1.readFileSync)(cssFile, 'utf-8');
            var jsCode = (0, fs_extra_1.readFileSync)(jsFile, 'utf-8');
            var injectCode = ";(function(){var style=document.createElement('style');style.type='text/css';style.rel='stylesheet';style.appendChild(document.createTextNode(`".concat(cssCode.replace(/\\/g, '\\\\'), "`));var head=document.querySelector('head');head.appendChild(style)})();");
            (0, fs_extra_1.writeFileSync)(jsFile, "".concat(injectCode).concat(jsCode));
            (0, fs_extra_1.copyFileSync)(cssFile, (0, path_1.resolve)(constant_1.LIB_DIR, 'style.css'));
            (0, fs_extra_1.removeSync)(cssFile);
        },
    };
}
function clear() {
    return {
        name: 'varlet-clear-vite-plugin',
        apply: 'build',
        closeBundle: function () {
            (0, fs_extra_1.removeSync)((0, path_1.resolve)(constant_1.CWD, 'dist'));
        },
    };
}
function getESMBundleConfig(varletConfig) {
    var name = (0, lodash_1.get)(varletConfig, 'name');
    var fileName = "".concat((0, shared_1.kebabCase)(name), ".esm.js");
    return {
        logLevel: 'silent',
        build: {
            emptyOutDir: true,
            lib: {
                name: name,
                formats: ['es'],
                fileName: function () { return fileName; },
                entry: (0, path_1.resolve)(constant_1.ES_DIR, 'umdIndex.js'),
            },
            rollupOptions: {
                external: ['vue'],
                output: {
                    dir: constant_1.ES_DIR,
                    exports: 'named',
                    globals: {
                        vue: 'Vue',
                    },
                },
            },
        },
        plugins: [clear()],
    };
}
exports.getESMBundleConfig = getESMBundleConfig;
function getUMDConfig(varletConfig) {
    var name = (0, lodash_1.get)(varletConfig, 'name');
    var fileName = "".concat((0, shared_1.kebabCase)(name), ".js");
    return {
        logLevel: 'silent',
        build: {
            emptyOutDir: true,
            lib: {
                name: name,
                formats: ['umd'],
                fileName: function () { return fileName; },
                entry: (0, path_1.resolve)(constant_1.ES_DIR, 'umdIndex.js'),
            },
            rollupOptions: {
                external: ['vue'],
                output: {
                    dir: constant_1.UMD_DIR,
                    exports: 'named',
                    globals: {
                        vue: 'Vue',
                    },
                },
            },
        },
        plugins: [inlineCSS(fileName, constant_1.UMD_DIR), clear()],
    };
}
exports.getUMDConfig = getUMDConfig;
