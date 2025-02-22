/* eslint-disable @typescript-eslint/no-var-requires */
const os = require('os');
const path = require('path');

const homedir = os.homedir();
exports.build = (production) => {
  require('esbuild')
    .build({
      platform: 'node',
      target: 'node10.12',
      mainFields: ['main', 'module'],
      minify: production,
      sourcemap: !production,
      entryPoints: ['./src/index.ts'],
      bundle: true,
      external: ['coc.nvim'],
      outfile: path.resolve(os.homedir(), '.config/coc/extensions/node_modules/coc-floatinput', 'lib/index.js'),
    })
    // eslint-disable-next-line no-console
    .catch(console.error);
};

if (require.main === module) {
  exports.build(true);
  // eslint-disable-next-line no-console
  console.log('build done');
}
