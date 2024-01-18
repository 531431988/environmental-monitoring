import { defineConfig } from 'vite'
import path from 'node:path'
import electron from 'vite-plugin-electron/simple'
import vue from '@vitejs/plugin-vue'
import { notBundle } from 'vite-plugin-electron/plugin'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  plugins: [
    vue(),
    UnoCSS(),
    electron({
      main: {
        // Shortcut of `build.lib.entry`.
        entry: 'electron/main.js',
      },
      vite: {
        plugins: [
          command === 'serve' && notBundle(/* NotBundleOptions */),
        ],
      },
      onstart({ reload }) {
        // Notify the Renderer process to reload the page when the Preload scripts build is complete, 
        // instead of restarting the entire Electron App.
        reload()
      },
      preload: {
        // Shortcut of `build.rollupOptions.input`.
        // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
        input: path.join(__dirname, 'electron/preload.ts'),
      },
      // Ployfill the Electron and Node.js built-in modules for Renderer process.
      // See 👉 https://github.com/electron-vite/vite-plugin-electron-renderer
      renderer: {},
    }),
  ],
}))
