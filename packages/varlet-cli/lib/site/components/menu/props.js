"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.props = void 0;
function alignmentValidator(alignment) {
    return ['top', 'bottom'].includes(alignment);
}
exports.props = {
    show: {
        type: Boolean,
        default: false,
    },
    alignment: {
        type: String,
        default: 'top',
        validator: alignmentValidator,
    },
    offsetX: {
        type: [Number, String],
        default: 0,
    },
    offsetY: {
        type: [Number, String],
        default: 0,
    },
    teleport: {
        default: 'body',
    },
    onOpen: {
        type: Function,
    },
    onOpened: {
        type: Function,
    },
    onClose: {
        type: Function,
    },
    onClosed: {
        type: Function,
    },
    'onUpdate:show': {
        type: Function,
    },
};
