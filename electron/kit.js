// Use Join
const { join } = require('path');

// Use Vite
const vite = require('vite');

// Preset Root
const root = process.cwd();

// Set Resolve
const resolve = (path) => join(root, path);

// Exports
module.exports = {
  root,
  join,
  resolve,
  vite,
};
