// Use Path
const path = require('path');

// Use Electron
const { app, BrowserWindow } = require('electron');

// Check Dev Mode
const DEV = process.env.IS_DEV == 'true' ? true : false;

// Set Resolve
const resolve = url => path.join(__dirname, url);

// Set Create Window Func
function createWindow() {
  /**
   * 1. Default Port of Vite is 3000
   * 2. Build for Local Protocol as File
   * 3. Do not use `process.cwd()` instead of `path`
   * ========== =========== ==========
   */
  const link = DEV ? 'http://localhost:5173' : `file://${resolve('../dist/index.html')}`;

  // Create the browser window.
  const main = new BrowserWindow({
    width: 1440,
    height: 900,
    webPreferences: {
      preload: resolve('preload.js'),
      nodeIntegration: true,
    },
  });

  // Load the `index.html` of App
  main.loadURL(link);

  // Open the Tools in Dev Mode
  if (DEV) {
    main.webContents.openDevTools();
  }
}

// Any APIs must be used after this Event Occurs.
app.whenReady().then(() => {
  // Create Front Window
  createWindow();

  // On App Active
  app.on('activate', () => {
    // Only one Window Live
    if (!BrowserWindow.getAllWindows().length) {
      createWindow();
    }
  });
});

// Explicitly with `Command` + `Q`
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
