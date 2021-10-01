"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._CellComponent = void 0;
var Cell_vue_1 = __importDefault(require("./Cell.vue"));
Cell_vue_1.default.install = function (app) {
    app.component(Cell_vue_1.default.name, Cell_vue_1.default);
};
exports._CellComponent = Cell_vue_1.default;
exports.default = Cell_vue_1.default;
