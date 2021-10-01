"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.props = void 0;
var props_1 = require("../loading/props");
var components_1 = require("../utils/components");
function typeValidator(type) {
    return ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(type);
}
function sizeValidator(size) {
    return ['normal', 'mini', 'small', 'large'].includes(size);
}
exports.props = {
    type: {
        type: String,
        default: 'default',
        validator: typeValidator,
    },
    size: {
        type: String,
        default: 'normal',
        validator: sizeValidator,
    },
    loading: {
        type: Boolean,
        default: false,
    },
    round: {
        type: Boolean,
        default: false,
    },
    block: {
        type: Boolean,
        default: false,
    },
    text: {
        type: Boolean,
        default: false,
    },
    outline: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    ripple: {
        type: Boolean,
        default: true,
    },
    color: {
        type: String,
    },
    textColor: {
        type: String,
    },
    loadingRadius: {
        type: [Number, String],
        default: 12,
    },
    loadingType: components_1.pickProps(props_1.props, 'type'),
    loadingSize: components_1.pickProps(props_1.props, 'size'),
    onClick: {
        type: Function,
    },
    onTouchstart: {
        type: Function,
    },
};
