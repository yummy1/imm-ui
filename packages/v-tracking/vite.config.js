import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
  build: {
    target: "modules",
    //压缩
    minify: true,
    rollupOptions: {
      input: ["index.js"],
      //忽略文件
      external: ["@vue/reactivity", "axios"],
      output: [
        {
          format: "es",
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: "[name].js",
          //配置打包根目录
          dir: resolve(__dirname, "./dist/es"),
        },
        {
          format: "cjs",
          //不用打包成.mjs
          entryFileNames: "[name].js",
          //配置打包根目录
          dir: resolve(__dirname, "./dist/lib"),
        },
      ],
    },
    lib: {
      entry: "./index.js",
      name: "vtrack",
    },
  },
});
