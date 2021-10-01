"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.props = exports.positionValidator = void 0;
function positionValidator(position) {
    var validPositions = ['left', 'center', 'right'];
    return validPositions.includes(position);
}
exports.positionValidator = positionValidator;
exports.props = {
    color: {
        type: String,
    },
    textColor: {
        type: String,
    },
    title: {
        type: String,
    },
    titlePosition: {
        type: String,
        default: 'left',
        validator: positionValidator,
    },
    elevation: {
        type: Boolean,
        default: true,
    },
};
