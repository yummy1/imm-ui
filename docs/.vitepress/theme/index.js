// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme";
// 导入主题样式
import "vitepress-theme-demoblock/theme/styles/index.css"
// 导入插件的主题
import { registerComponents } from "./register-components.js"

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    import("imm-ui").then((module) => {
      app.use(module.Button);
      app.use(module.Icon);
      app.use(module.Link);
    });
    registerComponents(app);
  },
  markdown: {
    config: (md) => {
    const { demoBlockPlugin } = require("vitepress-theme-demoblock")
      md.use(demoBlockPlugin)
    }
  }
};
