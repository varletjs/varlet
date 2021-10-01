"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.props = exports.sizeValidator = exports.typeValidator = void 0;
function typeValidator(type) {
    return ['circle', 'wave', 'cube', 'rect', 'disappear'].includes(type);
}
exports.typeValidator = typeValidator;
function sizeValidator(size) {
    return ['normal', 'mini', 'small', 'large'].includes(size);
}
exports.sizeValidator = sizeValidator;
exports.props = {
    // loading类型
    type: {
        type: String,
        default: 'circle',
        validator: typeValidator,
    },
    radius: {
        type: [String, Number],
        default: 15,
    },
    // loading尺寸
    size: {
        type: String,
        default: 'normal',
        validator: sizeValidator,
    },
    // loading颜色
    color: {
        type: String,
        default: 'currentColor',
    },
};
