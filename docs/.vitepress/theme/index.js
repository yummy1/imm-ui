// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme";
// 导入主题样式
import "vitepress-theme-demoblock/theme/styles/index.css"
// 导入插件的主题
import { registerComponents } from "./register-components.js"
import imm from 'imm-ui'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    app.use(imm)

    registerComponents(app);
  },
  markdown: {
    config: (md) => {
    const { demoBlockPlugin } = require("vitepress-theme-demoblock")
      md.use(demoBlockPlugin)
    }
  }
};
