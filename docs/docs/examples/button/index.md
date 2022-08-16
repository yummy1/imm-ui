<style scoped>
    .example{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px
    }
    .m-button {
        margin:10px 5px !important
    }
    
    details > summary:first-of-type {
        font-size: 10px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
    a {
      all: initial
    }
    a:hover {
      all: initial
    }
</style>

# m-button 按钮

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<div class="example">
    <div>
        <m-button>默认按钮</m-button>
        <m-button icon="edit" type="primary">主要按钮</m-button>
        <m-button type="success">成功按钮</m-button>
        <m-button type="info">信息按钮</m-button>
        <m-button type="warning">警告按钮</m-button>
        <m-button type="danger">危险按钮</m-button>
        <m-button type="text">文字按钮</m-button>
        <br>
        <br>
        <m-button plain>朴素按钮</m-button>
        <m-button type="primary" plain>主要按钮</m-button>
        <m-button type="success" plain>成功按钮</m-button>
        <m-button type="info" plain>信息按钮</m-button>
        <m-button type="warning" plain>警告按钮</m-button>
        <m-button type="danger" plain>危险按钮</m-button>
        <br>
        <br>
        <m-button round>圆角按钮</m-button>
        <m-button type="primary" round>主要按钮</m-button>
        <m-button type="success" round>成功按钮</m-button>
        <m-button type="info" round>信息按钮</m-button>
        <m-button type="warning" round>警告按钮</m-button>
        <m-button type="danger" round>危险按钮</m-button>
        <a>123</a>
    </div>

</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <m-button>默认按钮</m-button>
    <m-button type="primary">主要按钮</m-button>
    <m-button type="success">成功按钮</m-button>
    <m-button type="info">信息按钮</m-button>
    <m-button type="warning">警告按钮</m-button>
    <m-button type="danger">危险按钮</m-button>
    <m-button type="text">文字按钮</m-button>
    <br />
    <br />
    <m-button plain>朴素按钮</m-button>
    <m-button type="primary" plain>主要按钮</m-button>
    <m-button type="success" plain>成功按钮</m-button>
    <m-button type="info" plain>信息按钮</m-button>
    <m-button type="warning" plain>警告按钮</m-button>
    <m-button type="danger" plain>危险按钮</m-button>
    <br />
    <br />
    <m-button round>圆角按钮</m-button>
    <m-button type="primary" round>主要按钮</m-button>
    <m-button type="success" round>成功按钮</m-button>
    <m-button type="info" round>信息按钮</m-button>
    <m-button type="warning" round>警告按钮</m-button>
    <m-button type="danger" round>危险按钮</m-button>
  </div>
</template>
<script lang="ts" setup>
import { m-button } from "imm-ui";
</script>
<style>
.m-m-button {
  margin-right: 10px;
}
</style>
```

</details>

## 禁用状态

<div class="example">
    <div>
        <m-button disabled>禁用按钮</m-button>
        <m-button type="primary" disabled>主要按钮</m-button>
        <m-button type="success" disabled>成功按钮</m-button>
        <m-button type="info" disabled>信息按钮</m-button>
        <m-button type="warning" disabled>警告按钮</m-button>
        <m-button type="danger" disabled>危险按钮</m-button>
        <br>
        <br>
        <m-button disabled>禁用按钮</m-button>
        <m-button type="primary" disabled plain>主要按钮</m-button>
        <m-button type="success" disabled plain>成功按钮</m-button>
        <m-button type="info" disabled plain>信息按钮</m-button>
        <m-button type="warning" disabled plain>警告按钮</m-button>
        <m-button type="danger" disabled plain>危险按钮</m-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <m-button disabled>禁用按钮</m-button>
    <m-button type="primary" disabled>主要按钮</m-button>
    <m-button type="success" disabled>成功按钮</m-button>
    <m-button type="info" disabled>信息按钮</m-button>
    <m-button type="warning" disabled>警告按钮</m-button>
    <m-button type="danger" disabled>危险按钮</m-button>
    <br />
    <br />
    <m-button disabled>禁用按钮</m-button>
    <m-button type="primary" disabled plain>主要按钮</m-button>
    <m-button type="success" disabled plain>成功按钮</m-button>
    <m-button type="info" disabled plain>信息按钮</m-button>
    <m-button type="warning" disabled plain>警告按钮</m-button>
    <m-button type="danger" disabled plain>危险按钮</m-button>
  </div>
</template>
<script lang="ts" setup>
import { m-button } from "kitty-ui";
</script>
<style>
.m-m-button {
  margin-right: 10px;
}
</style>
```

</details>

## 调整尺寸

<div class="example">
    <div>
        <m-button>默认按钮</m-button>
        <m-button size="medium">中等按钮</m-button>
        <m-button size="small">小型按钮</m-button>
        <m-button size="mini">超小按钮</m-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <m-button>默认按钮</m-button>
    <m-button size="medium">中等按钮</m-button>
    <m-button size="small">小型按钮</m-button>
    <m-button size="mini">超小按钮</m-button>
  </div>
</template>
<script lang="ts" setup>
import { m-button } from "imm-ui";
</script>
<style>
.m-m-button {
  margin-right: 10px;
}
</style>
```

</details>
