<style scoped>
    .example{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px
    }
    .imm-link {
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

# Link 文字链接

## 基础用法

<div class="example">
    <div>
        <imm-link type="primary">默认链接</imm-link>
        <imm-link type="primary">主要链接</imm-link>
        <imm-link type="success">成功链接</imm-link>
        <imm-link type="info">信息链接</imm-link>
        <imm-link type="warning">警告链接</imm-link>
        <imm-link type="danger">危险链接</imm-link>
        <imm-link type="text">文字链接</imm-link>
    </div>

</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <imm-link type="primary">默认链接</imm-link>
    <imm-link type="primary">主要链接</imm-link>
    <imm-link type="success">成功链接</imm-link>
    <imm-link type="info">信息链接</imm-link>
    <imm-link type="warning">警告链接</imm-link>
    <imm-link type="danger">危险链接</imm-link>
    <imm-link type="text">文字链接</imm-link>
  </div>
</template>
<script lang="ts" setup>
import { imm-link } from "imm-ui";
</script>
<style>
.imm-link {
  margin-right: 10px;
}
</style>
```

</details>

## 禁用状态

<div class="example">
    <div>
        <imm-link type="primary" disabled>默认链接</imm-link>
        <imm-link type="primary" disabled>主要链接</imm-link>
        <imm-link type="success" disabled>成功链接</imm-link>
        <imm-link type="info" disabled>信息链接</imm-link>
        <imm-link type="warning" disabled>警告链接</imm-link>
        <imm-link type="danger" disabled>危险链接</imm-link>
        <imm-link type="text" disabled>文字链接</imm-link>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <imm-link type="primary" disabled>默认链接</imm-link>
    <imm-link type="primary" disabled>主要链接</imm-link>
    <imm-link type="success" disabled>成功链接</imm-link>
    <imm-link type="info" disabled>信息链接</imm-link>
    <imm-link type="warning" disabled>警告链接</imm-link>
    <imm-link type="danger" disabled>危险链接</imm-link>
    <imm-link type="text" disabled>文字链接</imm-link>
  </div>
</template>
<script lang="ts" setup>
import { imm-link } from "imm-ui";
</script>
<style>
.imm-link {
  margin-right: 10px;
}
</style>
```

</details>

## 下划线

<div class="example">
    <div>
        <imm-link type="primary">无下划线链接</imm-link>
        <imm-link type="primary" underline>有下划线链接</imm-link>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <imm-link type="primary">无下划线链接</imm-link>
    <imm-link type="primary" underline>有下划线链接</imm-link>
  </div>
</template>
<script lang="ts" setup>
import { imm-link } from "imm-ui";
</script>
<style>
.imm-link {
  margin-right: 10px;
}
</style>
```

</details>

## Button属性
|    属性    | 说明                         | 类型         | 可选值                                       | 默认值 |
| --------- | ------------------------------------ | ------------------ | ----------------------------------------------------- | ------- |
| type      | 类型                                  | string             | primary / success / warning / danger / info / default | default |
| disabled  | 是否禁用                               | boolean            | —                                                     | false   |
| underline | 是否显示下划线                          | boolean            | —                                                     | false   |
