"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._ContextComponent = void 0;
var vue_1 = require("vue");
var context = {
    locks: {},
    zIndex: 2000,
    touchmoveForbid: true,
};
exports._ContextComponent = vue_1.reactive(context);
exports.default = vue_1.reactive(context);
