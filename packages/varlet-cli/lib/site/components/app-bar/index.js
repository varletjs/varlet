"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._AppBarComponent = void 0;
var AppBar_vue_1 = __importDefault(require("./AppBar.vue"));
AppBar_vue_1.default.install = function (app) {
    app.component(AppBar_vue_1.default.name, AppBar_vue_1.default);
};
exports._AppBarComponent = AppBar_vue_1.default;
exports.default = AppBar_vue_1.default;
