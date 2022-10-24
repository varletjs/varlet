import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';
import { build, createServer } from 'vite';
export async function vite(mode) {
    const run = mode === 'build' ? build : createServer;
    const result = await run({
        plugins: [vue(), jsx()],
    });
    if (mode === 'dev') {
        await result.listen();
        result.printUrls();
    }
}
