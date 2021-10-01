"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._ButtonComponent = void 0;
var Button_vue_1 = __importDefault(require("./Button.vue"));
Button_vue_1.default.install = function (app) {
    app.component(Button_vue_1.default.name, Button_vue_1.default);
};
exports._ButtonComponent = Button_vue_1.default;
exports.default = Button_vue_1.default;
