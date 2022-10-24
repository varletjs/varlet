import config from '@config';
import AppType from './components/app-type';
import { onMounted, onUnmounted } from 'vue';
import { kebabCase } from '@varlet/shared';
import { get } from 'lodash-es';
const mountedVarKeys = [];
export function formatStyleVars(styleVars) {
    return Object.entries(styleVars !== null && styleVars !== void 0 ? styleVars : {}).reduce((styles, [key, value]) => {
        const cssVar = key.startsWith('--') ? key : `--${kebabCase(key)}`;
        styles[cssVar] = value;
        return styles;
    }, {});
}
export function StyleProvider(styleVars = {}) {
    mountedVarKeys.forEach((key) => document.documentElement.style.removeProperty(key));
    mountedVarKeys.length = 0;
    const styles = formatStyleVars(styleVars);
    Object.entries(styles).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
        mountedVarKeys.push(key);
    });
}
export function getPCLocationInfo() {
    const [, language, menuName] = window.location.hash.split('/');
    return {
        language,
        menuName,
    };
}
export function isPhone() {
    return /Android|webOS|iPhone|iPod|BlackBerry|Pad/i.test(navigator.userAgent);
}
export var MenuTypes;
(function (MenuTypes) {
    MenuTypes[MenuTypes["TITLE"] = 1] = "TITLE";
    MenuTypes[MenuTypes["COMPONENT"] = 2] = "COMPONENT";
    MenuTypes[MenuTypes["DOCUMENTATION"] = 3] = "DOCUMENTATION";
})(MenuTypes || (MenuTypes = {}));
export function inIframe() {
    return window.self !== window.top;
}
export function removeEmpty(object = {}) {
    return Object.keys(object).reduce((record, key) => {
        const value = object[key];
        value && (record[key] = value);
        return record;
    }, {});
}
export function getHashSearch() {
    const { href } = window.location;
    const hashSearch = href.slice(href.indexOf('?'));
    return new URLSearchParams(hashSearch);
}
export function watchLang(cb, platform = 'mobile') {
    const handleHashchange = () => {
        var _a;
        const language = platform === 'mobile' ? (_a = getHashSearch().get('language')) !== null && _a !== void 0 ? _a : 'zh-CN' : getPCLocationInfo().language;
        cb(language);
    };
    addRouteListener(handleHashchange);
    handleHashchange();
}
export function watchPlatform(cb) {
    const handleHashchange = () => {
        var _a;
        const platform = (_a = getHashSearch().get('platform')) !== null && _a !== void 0 ? _a : 'mobile';
        cb(platform);
    };
    addRouteListener(handleHashchange);
    handleHashchange();
}
export function addRouteListener(cb) {
    onMounted(() => {
        window.addEventListener('hashchange', cb);
        window.addEventListener('popstate', cb);
    });
    onUnmounted(() => {
        window.removeEventListener('hashchange', cb);
        window.removeEventListener('popstate', cb);
    });
}
export function setTheme(config, name) {
    const themeConfig = get(config, name, {});
    const styleVars = Object.entries(themeConfig).reduce((styleVars, [key, value]) => {
        styleVars[`--site-config-${key}`] = value;
        return styleVars;
    }, {});
    StyleProvider(styleVars);
}
export function utoa(data) {
    return btoa(unescape(encodeURIComponent(data)));
}
export { AppType };
export function watchTheme(cb, shouldUnmount = true) {
    const handleThemeChange = (event) => {
        const { data } = event;
        if (data.action === 'theme-change') {
            cb(data.data, data.from);
        }
    };
    window.addEventListener('message', handleThemeChange);
    if (shouldUnmount) {
        onUnmounted(() => {
            window.removeEventListener('message', handleThemeChange);
        });
    }
    cb(getBrowserTheme(), 'default');
}
export function getBrowserTheme() {
    var _a;
    const themeKey = get(config, 'themeKey');
    const darkThemeConfig = get(config, 'darkTheme');
    if (!darkThemeConfig) {
        return 'lightTheme';
    }
    const storageTheme = window.localStorage.getItem(themeKey);
    if (!storageTheme) {
        const preferTheme = ((_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, '(prefers-color-scheme: dark)').matches) ? 'darkTheme' : 'lightTheme';
        window.localStorage.setItem(themeKey, preferTheme);
        return preferTheme;
    }
    return storageTheme;
}
export function watchDarkMode(dark, cb) {
    watchTheme((theme) => {
        StyleProvider(theme === 'darkTheme' ? dark : null);
        cb === null || cb === void 0 ? void 0 : cb(theme);
    });
}
