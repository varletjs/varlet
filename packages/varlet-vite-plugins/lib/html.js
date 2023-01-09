import ejs from 'ejs';
export function html(options) {
    return {
        name: 'vite-plugin-varlet-html',
        transformIndexHtml: {
            order: 'pre',
            transform(html) {
                return ejs.render(html, options.data);
            },
        },
    };
}
