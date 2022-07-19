const path = require('path');
const rollupTypescript = require('@rollup/plugin-typescript');
const { uglify } = require('rollup-plugin-uglify');

/**
 * @type import('rollup').RollupOptions
 */
const config = {
  input: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    file: path.resolve(__dirname, 'dist', 'index.js'),
    format: 'cjs',
    banner: '#!/usr/bin/env node',
  },
  plugins: [
    rollupTypescript({
      tsconfig: path.resolve(__dirname, './tsconfig_prod.json'),
    }),
    uglify(),
  ],
  external: ['download-git-repo', 'fs', 'path', 'ora', 'inquirer', 'commander'],
};

/**
 * @type import('rollup').RollupOptions
 */
const saveConfig = {
  input: path.resolve(__dirname, 'src', 'localEntry.ts'),
  output: {
    file: path.resolve(__dirname, 'dist', 'save.js'),
    format: 'cjs',
    banner: '#!/usr/bin/env node',
  },
  plugins: [
    rollupTypescript({
      tsconfig: path.resolve(__dirname, './tsconfig_prod.json'),
    }),
    uglify(),
  ],
  external: ['download-git-repo', 'fs', 'path', 'ora', 'inquirer', 'commander'],
};

export default () => [config, saveConfig];
