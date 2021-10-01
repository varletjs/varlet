"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._MenuComponent = void 0;
var Menu_vue_1 = __importDefault(require("./Menu.vue"));
Menu_vue_1.default.install = function (app) {
    app.component(Menu_vue_1.default.name, Menu_vue_1.default);
};
exports._MenuComponent = Menu_vue_1.default;
exports.default = Menu_vue_1.default;
