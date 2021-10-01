"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_vue_1 = __importDefault(require("./App.vue"));
require("@varlet/touch-emulator");
// @ts-ignore
var _pc_routes_1 = __importDefault(require("@pc-routes"));
// @ts-ignore
var _config_1 = __importDefault(require("@config"));
var icon_1 = __importDefault(require("../components/icon"));
var cell_1 = __importDefault(require("../components/cell"));
var ripple_1 = __importDefault(require("../components/ripple"));
require("../components/styles/common.less");
require("../components/styles/elevation.less");
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var lodash_es_1 = require("lodash-es");
var useProgress_1 = require("../useProgress");
var defaultLanguage = lodash_es_1.get(_config_1.default, 'defaultLanguage');
var redirect = lodash_es_1.get(_config_1.default, 'pc.redirect');
var mobileRedirect = lodash_es_1.get(_config_1.default, 'mobile.redirect');
redirect &&
    _pc_routes_1.default.push({
        path: '/:pathMatch(.*)*',
        redirect: "/" + defaultLanguage + redirect,
    });
var router = vue_router_1.createRouter({
    history: vue_router_1.createWebHashHistory(),
    routes: _pc_routes_1.default,
});
var isEnd = true;
var _a = useProgress_1.useProgress(), start = _a.start, end = _a.end;
router.beforeEach(function (to, from) {
    if (to.path === from.path) {
        return false;
    }
    isEnd = false;
    setTimeout(function () { return !isEnd && start(); }, 200);
    // @ts-ignore
    if (window._hmt) {
        if (to.path) {
            // @ts-ignore
            window._hmt.push(['_trackPageview', "/#" + to.fullPath]);
        }
    }
});
router.afterEach(function () {
    isEnd = true;
    end();
});
Object.defineProperty(window, 'onMobileRouteChange', {
    value: function (path, language, replace) {
        if (path === mobileRedirect) {
            router.replace("/" + language + "/" + replace);
            return;
        }
        router.replace("/" + language + path);
    }
});
vue_1.createApp(App_vue_1.default)
    .use(router)
    // @ts-ignore
    .use(cell_1.default)
    .use(ripple_1.default)
    // @ts-ignore
    .use(icon_1.default)
    .mount('#app');
