// Use Join
const { join } = require('path');

// Use Electron
const { app, BrowserWindow, ipcMain } = require('electron');

// Use chalk
const { blueBright, redBright, white } = require('chalk');

// Get Env Mode
const development = process.env.NODE_ENV === 'development';

// Preset Root
const root = process.cwd();

// Set Resolve
const resolve = (path) => join(root, path);

// Set Message Logger
const logger = (mainMessage, subMessage) => {
  // Console Message with Colours
  console.log(blueBright(mainMessage) + (subMessage ? white(subMessage) : ''));
};

// Set Message Errorer
const errorer = (mainMessage, subMessage) => {
  // Console Message with Colours
  console.log(redBright(mainMessage) + (subMessage ? white(subMessage) : ''));
};

// Create Window
const creator = async () => {
  // Set Window Main
  const main = new BrowserWindow({
    width: 1440,
    height: 900,
    webPreferences: {
      preload: resolve('electron/preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Dev Mode
  if (development) {
    // Get Porter from Process
    const porter = process.argv[2];

    // Load Url as Vite Server
    main.loadURL(`http://localhost:${porter}`);

    // Open Dev Tools
    main.webContents.openDevTools();

    // Stop
    return;
  }

  // Load File as Index
  main.loadFile(resolve('index.html'));
};

// App Ready
app.whenReady().then(async () => {
  // Create Electron
  creator();

  // https://www.electronjs.org/zh/docs/latest/api/app#事件-activate-macos
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      creator();
    }
  });

  // Dev Mode
  if (development) {
    // Use Dev Tool
    const devTools = require('electron-devtools-installer');

    // Use Vue Dev Tool
    const { VUEJS3_DEVTOOLS } = devTools;

    // Use Extension Install
    const installExtension = devTools.default;

    // Using Extension Install
    await installExtension(VUEJS3_DEVTOOLS)
      .then((message) => logger(`Added Extension: ${message}`))
      .catch((error) => errorer(`${error}`));
  }
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('message', (event, message) => {
  logger(message);
});
