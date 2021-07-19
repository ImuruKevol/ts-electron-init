/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const { app, BrowserWindow } = require('electron');
const isDev = process.env.mode === 'dev';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: __dirname + '/preload.js',
    },
  });

  if (!isDev) {
    win.loadFile(`${path.join(__dirname, '../build/index.html')}`);
  } else {
    win.loadURL('http://localhost:3000');
    win.webContents.openDevTools({ mode: 'detach' });
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
