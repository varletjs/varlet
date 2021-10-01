"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._IconComponent = void 0;
var Icon_vue_1 = __importDefault(require("./Icon.vue"));
Icon_vue_1.default.install = function (app) {
    app.component(Icon_vue_1.default.name, Icon_vue_1.default);
};
exports._IconComponent = Icon_vue_1.default;
exports.default = Icon_vue_1.default;
