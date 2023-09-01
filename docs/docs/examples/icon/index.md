<style>
.icon-table {
  overflow: hidden;
  list-style: none;
  padding: 0!important;
  border-top: 1px solid #dcdfe6;
  border-left: 1px solid #dcdfe6;
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(7,1fr);
}
.icon-cell {
  text-align: center;
  color: #606266;
  height: 90px;
  font-size: 13px;
  border-right: 1px solid #dcdfe6;
  border-bottom: 1px solid #dcdfe6;
  transition: background-color .3s;
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>

# Icon 图标
提供了一套常用的图标集合。
## 基础用法
:::demo

```vue
<template>
<div class="icon-table">
    <div class="icon-cell" v-for="name in icons" :key="name">
        <imm-icon :name="name" color="#f00" size="24px"></imm-icon>
        <span>{{name}}</span>
    </div>
</div>
</template>
<script lang="ts" setup>
const icons = ['Edit', 'Love', 'User', 'Home', 'Setting', 'Delete', 'Refresh', 'Search', 'Remove', 'View', 'CirclePlus', 'CircleCheck', 'CircleClose']
</script>
```
:::

## 显示badge
:::demo

```vue
<template>
<div class="icon-table">
    <div class="icon-cell">
        <imm-icon name="User" color="#f00" size="24px" dot></imm-icon>
        <span>User</span>
    </div>
    <div class="icon-cell">
        <imm-icon name="Setting" color="#f00" size="24px" dot badge="10"></imm-icon>
        <span>Setting</span>
    </div>
</div>
</template>
```
:::

## Icon属性
|    属性    | 说明                         | 类型         | 可选值        | 默认值 |
| --------- | ------------------------------------ | ------------------ | ----------------------------- | ------- |
| name      | 图标名称                               | string            | —                              | default |
| size      | SVG 图标的大小，size x size             | string / number   | —                              |  -     |
| color     | svg 的 fill 颜色                       | string            | —                              |  -     |
| dot       | 是否显示badge                          | boolean           | —                              | false  |
| badge     | badge 数                              | string            | —                              |  -     |
