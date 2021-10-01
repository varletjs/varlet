"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.setThemes = exports.addRouteListener = exports.watchPlatform = exports.watchLang = exports.getHashSearch = exports.removeEmpty = exports.inIframe = exports.MenuTypes = exports.isPhone = exports.getPCLocationInfo = exports.bigCamelize = exports.camelize = void 0;
var vue_1 = require("vue");
var lodash_es_1 = require("lodash-es");
var elements_1 = require("./components/utils/elements");
__exportStar(require("./components/utils/components"), exports);
__exportStar(require("./components/utils/elements"), exports);
__exportStar(require("./components/utils/shared"), exports);
function StyleProvider(styleVars) {
    if (styleVars === void 0) { styleVars = {}; }
    var styles = elements_1.formatStyleVars(styleVars);
    Object.entries(styles).forEach(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        return document.documentElement.style.setProperty(key, value);
    });
}
function camelize(str) {
    return str.replace(/-(\w)/g, function (_, p) { return p.toUpperCase(); });
}
exports.camelize = camelize;
function bigCamelize(str) {
    return camelize(str).replace(str.charAt(0), str.charAt(0).toUpperCase());
}
exports.bigCamelize = bigCamelize;
function getPCLocationInfo() {
    var _a = __read(window.location.hash.split('/'), 3), language = _a[1], menuName = _a[2];
    return {
        language: language,
        menuName: menuName
    };
}
exports.getPCLocationInfo = getPCLocationInfo;
function isPhone() {
    return /Android|webOS|iPhone|iPod|BlackBerry|Pad/i.test(navigator.userAgent);
}
exports.isPhone = isPhone;
var MenuTypes;
(function (MenuTypes) {
    MenuTypes[MenuTypes["TITLE"] = 1] = "TITLE";
    MenuTypes[MenuTypes["COMPONENT"] = 2] = "COMPONENT";
    MenuTypes[MenuTypes["DOCUMENTATION"] = 3] = "DOCUMENTATION";
})(MenuTypes = exports.MenuTypes || (exports.MenuTypes = {}));
function inIframe() {
    return window.self !== window.top;
}
exports.inIframe = inIframe;
function removeEmpty(object) {
    if (object === void 0) { object = {}; }
    return Object.keys(object).reduce(function (record, key) {
        var value = object[key];
        value && (record[key] = value);
        return record;
    }, {});
}
exports.removeEmpty = removeEmpty;
function getHashSearch() {
    var href = window.location.href;
    var hashSearch = href.slice(href.indexOf('?'));
    return new URLSearchParams(hashSearch);
}
exports.getHashSearch = getHashSearch;
function watchLang(cb, platform) {
    if (platform === void 0) { platform = 'mobile'; }
    var handleHashchange = function () {
        var _a;
        var language = platform === 'mobile'
            ? ((_a = getHashSearch().get('language')) !== null && _a !== void 0 ? _a : 'zh-CN')
            : getPCLocationInfo().language;
        cb(language);
    };
    addRouteListener(handleHashchange);
    handleHashchange();
}
exports.watchLang = watchLang;
function watchPlatform(cb) {
    var handleHashchange = function () {
        var _a;
        var platform = (_a = getHashSearch().get('platform')) !== null && _a !== void 0 ? _a : 'mobile';
        cb(platform);
    };
    addRouteListener(handleHashchange);
    handleHashchange();
}
exports.watchPlatform = watchPlatform;
function addRouteListener(cb) {
    vue_1.onMounted(function () {
        window.addEventListener('hashchange', cb);
        window.addEventListener('popstate', cb);
    });
    vue_1.onUnmounted(function () {
        window.removeEventListener('hashchange', cb);
        window.removeEventListener('popstate', cb);
    });
}
exports.addRouteListener = addRouteListener;
function setThemes(config) {
    var themes = lodash_es_1.get(config, 'themes', {});
    Object.keys(themes).forEach(function (key) {
        var _a;
        var theme = themes[key];
        StyleProvider((_a = {},
            _a["--site-config-" + key] = theme,
            _a));
    });
}
exports.setThemes = setThemes;
