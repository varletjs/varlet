"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var _mobile_routes_1 = __importDefault(require("@mobile-routes"));
// @ts-ignore
var _config_1 = __importDefault(require("@config"));
var App_vue_1 = __importDefault(require("./App.vue"));
require("@varlet/touch-emulator");
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var icon_1 = __importDefault(require("../components/icon"));
var app_bar_1 = __importDefault(require("../components/app-bar"));
var button_1 = __importDefault(require("../components/button"));
var menu_1 = __importDefault(require("../components/menu"));
var cell_1 = __importDefault(require("../components/cell"));
var ripple_1 = __importDefault(require("../components/ripple"));
require("../components/styles/common.less");
require("../components/styles/elevation.less");
var lodash_es_1 = require("lodash-es");
var utils_1 = require("../utils");
var redirect = lodash_es_1.get(_config_1.default, 'mobile.redirect');
var defaultLanguage = lodash_es_1.get(_config_1.default, 'defaultLanguage');
redirect &&
    _mobile_routes_1.default.push({
        path: '/:pathMatch(.*)',
        redirect: redirect,
    });
_mobile_routes_1.default.push({
    path: '/home',
    component: function () { return Promise.resolve().then(function () { return __importStar(require('./components/AppHome.vue')); }); }
});
var router = vue_router_1.createRouter({
    history: vue_router_1.createWebHashHistory(),
    scrollBehavior: function (to, from, savedPosition) { return savedPosition || { left: 0, top: 0 }; },
    routes: _mobile_routes_1.default,
});
router.beforeEach(function (to, from) {
    var _a;
    var language = (_a = to.query.language) !== null && _a !== void 0 ? _a : defaultLanguage;
    var path = to.path;
    var replace = to.query.replace;
    if (!utils_1.isPhone() && !utils_1.inIframe()) {
        window.location.href = "./#/" + language + path;
    }
    if (!utils_1.isPhone() && utils_1.inIframe()) {
        // @ts-ignore
        window.top.onMobileRouteChange(path, language, replace);
    }
    // @ts-ignore
    if (window._hmt) {
        if (to.path) {
            // @ts-ignore
            window._hmt.push(['_trackPageview', "/#" + to.fullPath]);
        }
    }
});
// @ts-ignore
vue_1.createApp(App_vue_1.default)
    .use(router)
    // @ts-ignore
    .use(icon_1.default)
    // @ts-ignore
    .use(app_bar_1.default)
    // @ts-ignore
    .use(cell_1.default)
    .use(ripple_1.default)
    // @ts-ignore
    .use(button_1.default)
    // @ts-ignore
    .use(menu_1.default)
    .mount('#app');
