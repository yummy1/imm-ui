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
/*因vitepress样式覆盖*/
    .imm-link--primary {
        color: #409eff !important;
    }
    .imm-link--primary:hover {
        color: #66b1ff !important;
    }
    .imm-link--primary.is-disabled {
      color: #a0cfff !important;
    }
    .imm-link--success {
        color: #67c23a !important;
    }
    .imm-link--success:hover {
        color: #85ce61 !important;
    }
    .imm-link--success.is-disabled {
      color: #b3e19d !important;
    }
    .imm-link--info {
        color: #909399 !important;
    }
    .imm-link--info:hover {
        color: #a6a9ad !important;
    }
    .imm-link--info.is-disabled {
      color: #c8c9cc !important;
    }
    .imm-link--warning {
        color: #e6a23c !important;
    }
    .imm-link--warning:hover {
        color: #ebb563 !important;
    }
    .imm-link--warning.is-disabled {
      color: #f3d19e !important;
    }
    .imm-link--danger {
        color: #f56c6c !important;
    }
    .imm-link--danger:hover {
        color: #f78989 !important;
    }
    .imm-link--danger.is-disabled {
      color: #fab6b6 !important;
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
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
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
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
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
</script>
```

</details>

## 图标

<div class="example">
    <div>
        <imm-link type="primary" icon="Edit">编辑</imm-link>
        <imm-link type="primary" icon="Remove" iconPosition="right">删除</imm-link>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <imm-link type="primary" icon="Edit">编辑</imm-link>
    <imm-link type="primary" icon="Remove" iconPosition="right">删除</imm-link>
  </div>
</template>
<script lang="ts" setup>
</script>
```

</details>

## Link属性
|    属性    | 说明                         | 类型         | 可选值                                       | 默认值 |
| --------- | ------------------------------------ | ------------------ | ----------------------------------------------------- | ------- |
| type      | 类型                                  | string             | primary / success / warning / danger / info / default | default |
| disabled  | 是否禁用                               | boolean            | —                                                     | false   |
| underline | 是否显示下划线                          | boolean            | —                                                     | false   |
| icon      | 图标组件                               | string             | —                                                     | -       |
| icon-position      | 图标位置                      | string             | left / right                                          | left    |
