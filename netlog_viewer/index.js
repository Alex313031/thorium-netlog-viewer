const { app, BrowserWindow } = require('electron')
  const path = require('path')
  const url = require('url')
  
function createWindow () {
	let mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: './icon64.png',
    // Preload before renderer processes
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }
 });
  
    // Load the index.html of the app.
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }));
    mainWindow.setMenuBarVisibility(true);
    mainWindow.setResizable(true);
}

app.whenReady().then(createWindow);
app.commandLine.appendSwitch('enable-experimental-web-platform-features');
app.commandLine.appendSwitch('allow-file-access-from-files');
app.commandLine.appendSwitch('enable-local-file-accesses');
app.commandLine.appendSwitch('enable-quic');
app.commandLine.appendSwitch('enable-ui-devtools');
app.commandLine.appendSwitch('ignore-gpu-blocklist');
app.commandLine.appendSwitch('enable-gpu-rasterization');