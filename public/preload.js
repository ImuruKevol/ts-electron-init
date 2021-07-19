/* eslint-disable @typescript-eslint/no-var-requires */
let { ipcRenderer } = require('electron');

process.once('loaded', () => {
  window.ipcRenderer = ipcRenderer;
});
