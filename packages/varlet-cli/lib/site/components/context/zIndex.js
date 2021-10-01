"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useZIndex = void 0;
var index_1 = __importDefault(require("./index"));
var vue_1 = require("vue");
function useZIndex(source, count) {
    var zIndex = vue_1.ref(index_1.default.zIndex);
    vue_1.watch(source, function (newValue) {
        if (newValue) {
            index_1.default.zIndex += count;
            zIndex.value = index_1.default.zIndex;
        }
    }, { immediate: true });
    return { zIndex: zIndex };
}
exports.useZIndex = useZIndex;
