const { app, BrowserWindow, Menu } = require('electron');
const contextMenu = require('electron-context-menu');
const path = require('path');
const url = require('url');

// Initialize Electron remote module
require('@electron/remote/main').initialize();

function createWindow () {
    let mainWindow = new BrowserWindow({
      title: 'Thorium NetLog Viewer',
      resizable: true,
      maximizable: true,
      width: 1024,
      height: 768,
      icon: path.join(__dirname, 'icon64.png'),
      webPreferences: {
        nodeIntegration: false,
        nodeIntegrationInWorker: false,
        contextIsolation: false,
        sandbox: false,
        experimentalFeatures: true,
        webviewTag: true,
        devTools: true,
        javascript: true,
        plugins: true,
        enableRemoteModule: true,
        // Preload before renderer processes
        preload: path.join(__dirname, 'preload.js')
      }
    });
    require("@electron/remote/main").enable(mainWindow.webContents);

    // Load the index.html of the app.
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }));
    mainWindow.setMenuBarVisibility(true);
    mainWindow.setResizable(true);
}

contextMenu({
    showSelectAll: true,
    showCopyImage: true,
    showCopyImageAddress: true,
    showSaveImageAs: true,
    showCopyVideoAddress: true,
    showSaveVideoAs: true,
    showCopyLink: true,
    showSaveLinkAs: true,
    showInspectElement: true,
    showLookUpSelection: true,
    showSearchWithGoogle: true
});

app.whenReady().then(createWindow);
// app.commandLine.appendSwitch('enable-experimental-web-platform-features');
app.commandLine.appendSwitch('allow-file-access-from-files');
app.commandLine.appendSwitch('enable-local-file-accesses');
app.commandLine.appendSwitch('enable-quic');
app.commandLine.appendSwitch('enable-ui-devtools');
app.commandLine.appendSwitch('ignore-gpu-blocklist');
app.commandLine.appendSwitch('enable-gpu-rasterization');
