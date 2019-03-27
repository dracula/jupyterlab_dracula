"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apputils_1 = require("@jupyterlab/apputils");
/**
 * A plugin for the Dracula
 */
const plugin = {
    id: 'phazerlock:plugin',
    requires: [apputils_1.IThemeManager],
    activate: function (app, manager) {
        manager.register({
            name: 'Dracula',
            isLight: false,
            load: function () {
                return manager.loadCSS('phazerlock/index.css');
            },
            unload: function () {
                return Promise.resolve(void 0);
            }
        });
    },
    autoStart: true
};
exports.default = plugin;
