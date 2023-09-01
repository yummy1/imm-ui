<style>
a.imm-link {
  color: inherit;
  text-decoration: none;
  margin-right: 10px;
}
</style>
# Link 文字链接

## 基础用法

:::demo

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

:::

## 禁用状态

:::demo

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

:::

## 下划线

:::demo

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

:::

## 图标

:::demo

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

:::

## Link属性
|    属性    | 说明                         | 类型         | 可选值                                       | 默认值 |
| --------- | ------------------------------------ | ------------------ | ----------------------------------------------------- | ------- |
| type      | 类型                                  | string             | primary / success / warning / danger / info / default | default |
| disabled  | 是否禁用                               | boolean            | —                                                     | false   |
| underline | 是否显示下划线                          | boolean            | —                                                     | false   |
| icon      | 图标组件                               | string             | —                                                     | -       |
| icon-position      | 图标位置                      | string             | left / right                                          | left    |
