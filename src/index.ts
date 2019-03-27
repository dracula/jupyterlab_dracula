
import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';


/**
 * A plugin for the Dracula
 */
const plugin: JupyterLabPlugin<void> = {
  id: 'jupyterlab_dracula:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
    manager.register({
      name: 'Dracula',
      isLight: false,
      load: function() {
        return manager.loadCSS('jupyterlab_dracula/index.css');
      },
      unload: function() {
        return Promise.resolve(void 0);
      }
    });
  },
  autoStart: true
};


export default plugin;
