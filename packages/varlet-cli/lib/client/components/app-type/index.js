import { defineComponent, h } from 'vue';
export default defineComponent({
    name: 'AppType',
    setup(props, { slots }) {
        return () => { var _a; return h('div', { class: 'app-type' }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]); };
    },
});
