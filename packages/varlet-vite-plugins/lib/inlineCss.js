import fse from 'fs-extra';
const { pathExistsSync, writeFileSync, readFileSync } = fse;
export function inlineCss(options) {
    return {
        name: 'vite-plugin-varlet-inline-css',
        apply: 'build',
        closeBundle() {
            const { cssFile, jsFile, onEnd } = options;
            if (!pathExistsSync(cssFile)) {
                this.error('css file cannot found');
                return;
            }
            if (!pathExistsSync(jsFile)) {
                this.error('js file cannot found');
                return;
            }
            const cssCode = readFileSync(cssFile, 'utf-8');
            const jsCode = readFileSync(jsFile, 'utf-8');
            const injectCode = `;(function(){var style=document.createElement('style');style.type='text/css';\
style.rel='stylesheet';style.appendChild(document.createTextNode(\`${cssCode.replace(/\\/g, '\\\\')}\`));\
var head=document.querySelector('head');head.appendChild(style)})();`;
            writeFileSync(jsFile, `${injectCode}${jsCode}`);
            onEnd === null || onEnd === void 0 ? void 0 : onEnd();
        },
    };
}
