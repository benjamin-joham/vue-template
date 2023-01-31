import { defineConfig, splitVendorChunkPlugin, UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { webpack } from './package.json'; // TODO: rename config property in package.json.

export default defineConfig(({ command, mode }) => {
  const config: UserConfigExport = {
    plugins: [
      vue(),
      splitVendorChunkPlugin(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        'vue': 'vue/dist/vue.esm-bundler.js', // Was required because inline import of vue.esm-bundler.js resulted in TS issues.
      },
    },
    define: {
      // Was required to get rid of esm build warning for Vue-i18n.
      // @see https://vue-i18n.intlify.dev/guide/advanced/optimization.html#reduce-bundle-size-with-feature-build-flags
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
    },
  };

  switch (command) {
    case 'build': // @see https://vitejs.dev/config/build-options.html
      config.base = webpack.productionPath; // TODO: rename to buildBase.
      config.build = {
        outDir: webpack.buildPath, // TODO: rename to 'buildOutDir'
        assetsDir: webpack.outputAssetsFolder, // TODO: rename to 'buildAssetsDir'.
        assetsInlineLimit: 0, // TODO: check if it makes sense to increase this value.
        manifest: true,
        emptyOutDir: true,
        copyPublicDir: true,
        // TODO: watch?
        rollupOptions: {
          output: {
            assetFileNames: (assetInfo) => {
              const extType = assetInfo?.name?.split('.').at(1) || '';
              let assetsPath = 'assets';

              if ((/png|jpe?g|svg|gif|tiff|bmp|ico/i).test(extType)) {
                assetsPath += '/img';
              } else if ((/css|sass|scss/i).test(extType)) {
                assetsPath += '/css';
              } else if ((/woff|woff2|eot|ttf|otf/i).test(extType)) {
                assetsPath += '/fonts';
              }

              return `${assetsPath}/[name][extname]`;
            },
          },
        },
      };

      if (mode === 'profile') {
        if (!Array.isArray(config.plugins)) {
          config.plugins = [];
        }

        config.plugins.push(
          visualizer({ // NOTE: the sizes reported by this plugin relate to the source, not build size... @see https://github.com/btd/rollup-plugin-visualizer/issues/96
            filename: './stats/index.html',
            open: true,
            template: 'treemap',
          })
        );
      }

    // no default
  }

  return config;
});
