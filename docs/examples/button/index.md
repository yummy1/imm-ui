<style scoped>
    .example{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px
    }
    .imm-button {
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

# Button 按钮

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<div class="example">
    <div>
        <imm-button>默认按钮</imm-button>
        <imm-button icon="edit" type="primary">主要按钮</imm-button>
        <imm-button type="success">成功按钮</imm-button>
        <imm-button type="info">信息按钮</imm-button>
        <imm-button type="warning">警告按钮</imm-button>
        <imm-button type="danger">危险按钮</imm-button>
        <imm-button type="text">文字按钮</imm-button>
        <br>
        <br>
        <imm-button plain>朴素按钮</imm-button>
        <imm-button type="primary" plain>主要按钮</imm-button>
        <imm-button type="success" plain>成功按钮</imm-button>
        <imm-button type="info" plain>信息按钮</imm-button>
        <imm-button type="warning" plain>警告按钮</imm-button>
        <imm-button type="danger" plain>危险按钮</imm-button>
        <br>
        <br>
        <imm-button round>圆角按钮</imm-button>
        <imm-button type="primary" round>主要按钮</imm-button>
        <imm-button type="success" round>成功按钮</imm-button>
        <imm-button type="info" round>信息按钮</imm-button>
        <imm-button type="warning" round>警告按钮</imm-button>
        <imm-button type="danger" round>危险按钮</imm-button>
        <br>
        <br>
        <imm-button icon="Edit" circle></imm-button>
        <imm-button type="primary" icon="User" circle></imm-button>
        <imm-button type="success" icon="Delete" circle></imm-button>
        <imm-button type="info" icon="Search" circle></imm-button>
        <imm-button type="warning" icon="Home" circle></imm-button>
        <imm-button type="danger" icon="Setting" circle></imm-button>
    </div>

</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <imm-button>默认按钮</imm-button>
    <imm-button type="primary">主要按钮</imm-button>
    <imm-button type="success">成功按钮</imm-button>
    <imm-button type="info">信息按钮</imm-button>
    <imm-button type="warning">警告按钮</imm-button>
    <imm-button type="danger">危险按钮</imm-button>
    <imm-button type="text">文字按钮</imm-button>
    <br />
    <br />
    <imm-button plain>朴素按钮</imm-button>
    <imm-button type="primary" plain>主要按钮</imm-button>
    <imm-button type="success" plain>成功按钮</imm-button>
    <imm-button type="info" plain>信息按钮</imm-button>
    <imm-button type="warning" plain>警告按钮</imm-button>
    <imm-button type="danger" plain>危险按钮</imm-button>
    <br />
    <br />
    <imm-button round>圆角按钮</imm-button>
    <imm-button type="primary" round>主要按钮</imm-button>
    <imm-button type="success" round>成功按钮</imm-button>
    <imm-button type="info" round>信息按钮</imm-button>
    <imm-button type="warning" round>警告按钮</imm-button>
    <imm-button type="danger" round>危险按钮</imm-button>
    <br>
    <br>
    <imm-button icon="Edit" circle></imm-button>
    <imm-button type="primary" icon="User" circle></imm-button>
    <imm-button type="success" icon="Delete" circle></imm-button>
    <imm-button type="info" icon="Search" circle></imm-button>
    <imm-button type="warning" icon="Home" circle></imm-button>
    <imm-button type="danger" icon="Setting" circle></imm-button>
  </div>
</template>
<script lang="ts" setup>
import "imm-ui/lib/src/theme-chalk/index.css"
</script>
<style>
.imm-button {
  margin-right: 10px;
}
</style>
```

</details>

## 带图标的按钮

<div class="example">
    <div>
        <imm-button icon="Edit">默认按钮</imm-button>
        <imm-button type="primary" icon="Love">主要按钮</imm-button>
        <imm-button type="success" icon="User">成功按钮</imm-button>
        <imm-button type="info" icon="Home">信息按钮</imm-button>
        <imm-button type="warning" icon="Setting">警告按钮</imm-button>
        <imm-button type="danger" icon="Delete" iconPosition="right">危险按钮</imm-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <imm-button icon="Edit">默认按钮</imm-button>
    <imm-button type="primary" icon="Love">主要按钮</imm-button>
    <imm-button type="success" icon="User">成功按钮</imm-button>
    <imm-button type="info" icon="Home">信息按钮</imm-button>
    <imm-button type="warning" icon="Setting">警告按钮</imm-button>
    <imm-button type="danger" icon="Delete" iconPosition="right">危险按钮</imm-button>
  </div>
</template>
<script lang="ts" setup>
import { Button } from "imm-ui";
</script>
<style>
.imm-button {
  margin-right: 10px;
}
</style>
```

</details>

## 禁用状态

<div class="example">
    <div>
        <imm-button disabled>禁用按钮</imm-button>
        <imm-button type="primary" disabled>主要按钮</imm-button>
        <imm-button type="success" disabled>成功按钮</imm-button>
        <imm-button type="info" disabled>信息按钮</imm-button>
        <imm-button type="warning" disabled>警告按钮</imm-button>
        <imm-button type="danger" disabled>危险按钮</imm-button>
        <br>
        <br>
        <imm-button disabled>禁用按钮</imm-button>
        <imm-button type="primary" disabled plain>主要按钮</imm-button>
        <imm-button type="success" disabled plain>成功按钮</imm-button>
        <imm-button type="info" disabled plain>信息按钮</imm-button>
        <imm-button type="warning" disabled plain>警告按钮</imm-button>
        <imm-button type="danger" disabled plain>危险按钮</imm-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <imm-button disabled>禁用按钮</imm-button>
    <imm-button type="primary" disabled>主要按钮</imm-button>
    <imm-button type="success" disabled>成功按钮</imm-button>
    <imm-button type="info" disabled>信息按钮</imm-button>
    <imm-button type="warning" disabled>警告按钮</imm-button>
    <imm-button type="danger" disabled>危险按钮</imm-button>
    <br />
    <br />
    <imm-button disabled>禁用按钮</imm-button>
    <imm-button type="primary" disabled plain>主要按钮</imm-button>
    <imm-button type="success" disabled plain>成功按钮</imm-button>
    <imm-button type="info" disabled plain>信息按钮</imm-button>
    <imm-button type="warning" disabled plain>警告按钮</imm-button>
    <imm-button type="danger" disabled plain>危险按钮</imm-button>
  </div>
</template>
<script lang="ts" setup>
import { Button } from "imm-ui";
</script>
<style>
.imm-button {
  margin-right: 10px;
}
</style>
```

</details>

## 调整尺寸

<div class="example">
    <div>
        <imm-button>默认按钮</imm-button>
        <imm-button size="medium">中等按钮</imm-button>
        <imm-button size="small">小型按钮</imm-button>
        <imm-button size="mini">超小按钮</imm-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <imm-button>默认按钮</imm-button>
    <imm-button size="medium">中等按钮</imm-button>
    <imm-button size="small">小型按钮</imm-button>
    <imm-button size="mini">超小按钮</imm-button>
  </div>
</template>
<script lang="ts" setup>
import { Button } from "imm-ui";
</script>
<style>
.imm-button {
  margin-right: 10px;
}
</style>
```

</details>

## Button属性
|    属性    | 说明                         | 类型         | 可选值                                       | 默认值 |
| --------- | ------------------------------------ | ------------------ | ----------------------------------------------------- | ------- |
| type      | 类型                                  | string             | primary / success / warning / danger / info / default | default |
| size      | 尺寸                                  | string             | medium / small / mini                                 | medium  |
| plain     | 是否为朴素按钮                          | boolean            | —                                                     | false   |
| round     | 是否为圆角按钮                          | boolean            | —                                                     | false   |
| circle    | 是否为圆形按钮                          | boolean            | —                                                     | false   |
| icon      | 图标组件                               | string             | —                                                     | -       |
| icon-position      | 图标位置                      | string             | left / right                                          | left    |
