// Use Kits
const { resolve, vite, root } = require('./kit.js');

// Set Build as Promise
const build = async () => {
  // Get Vite Config
  const viteConfig = resolve('vite.config.js');

  // Set Builder
  vite.build({
    ...viteConfig,
    base: root,
    mode: `production`,
  });
};

// Building
build();
