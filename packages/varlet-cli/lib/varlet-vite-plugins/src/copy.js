import fse from 'fs-extra';
const { copyFileSync } = fse;
export function copy(options) {
    return {
        name: 'vite-plugin-varlet-copy',
        buildStart() {
            options.paths.forEach((copyPath) => {
                try {
                    copyFileSync(copyPath.from, copyPath.to);
                }
                catch (e) {
                    this.warn(e);
                }
            });
        }
    };
}
