# 快速开始

本节将介绍如何在项目中使用 IMMUI

## 用法
main.ts中
```
import {createApp} from 'vue'
import App from './app.vue'
const app = createApp(App)
import immui from "imm-ui"
app.use(immui)
app.mount('#app')
```
组件中
```
<template>
  <Button>按钮</Button>
</template>

<script setup>

import { Button } from 'imm-ui'

</script>
```