// .vitepress/theme/index.js

import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import immUI from 'imm-ui'
import "imm-ui/lib/src/theme-chalk/index.css"

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(immUI)
    useComponents(ctx.app)
  }
};
