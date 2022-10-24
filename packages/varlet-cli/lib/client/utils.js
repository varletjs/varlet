import { kebabCase } from '@varlet/shared';
import { onMounted, onUnmounted } from 'vue';
import { get } from 'lodash-es';
import config from '@config';
const mountedVarKeys = [];
export function StyleProvider(styleVars = {}) {
    mountedVarKeys.forEach((key) => document.documentElement.style.removeProperty(key));
    mountedVarKeys.length = 0;
    const styles = formatStyleVars(styleVars);
    Object.entries(styles).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
        mountedVarKeys.push(key);
    });
}
function formatStyleVars(styleVars) {
    return Object.entries(styleVars !== null && styleVars !== void 0 ? styleVars : {}).reduce((styles, [key, value]) => {
        const cssVar = key.startsWith('--') ? key : `--${kebabCase(key)}`;
        styles[cssVar] = value;
        return styles;
    }, {});
}
export function getPCLocationInfo() {
    const [, language, menuName] = window.location.hash.split('/');
    return {
        language,
        menuName,
    };
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
export function getHashSearch() {
    const { href } = window.location;
    const hashSearch = href.slice(href.indexOf('?'));
    return new URLSearchParams(hashSearch);
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
