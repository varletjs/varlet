"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.props = void 0;
exports.props = {
    name: {
        type: String,
    },
    size: {
        type: [Number, String],
    },
    color: {
        type: String,
    },
    namespace: {
        type: String,
        default: 'var-icon',
    },
    transition: {
        type: [Number, String],
        default: 0,
    },
    onClick: {
        type: Function,
    },
};
