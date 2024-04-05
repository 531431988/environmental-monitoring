import path from 'node:path'
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import UnoCSS from 'unocss/vite'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import postcsspxtoviewport from "postcss-px-to-viewport";
import {
  AntDesignVueResolver,
} from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig(async () => ({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins:
    [
      // https://github.com/posva/unplugin-vue-router
      VueRouter({
        extensions: ['.vue', '.md'],
        dts: 'src/typed-router.d.ts',
      }),
      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts({
      layoutsDirs: 'src/layouts', // 指定布局文件（Layout）的目录路径
      pagesDirs: 'src/pages',
      defaultLayout: 'default', //对应 src/layouts/default.vue
      importMode: () => 'sync'
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          'vue-router/auto': ['useLink'],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
      ],
      vueTemplate: true,
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
      resolvers: [AntDesignVueResolver({ importStyle: false, resolveIcons: true })],
    }),
      Vue(),
      UnoCSS()
    ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#14C0FF',
          'info-color': '#B7E6FF',
          'error-color': '#ee3f3f',
          'success-color': '#3fee62',
          'warning-color': '#fff821',
        },
        javascriptEnabled: true,
      },
    },
    /* postcss: {
      plugins: [
        postcsspxtoviewport({
          unitToConvert: "px", // 要转化的单位
          viewportWidth: 1920, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ["ignore-"], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          landscape: false, // 是否处理横屏情况
        }),
      ],
    }, */
},
  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
