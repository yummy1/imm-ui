<template>
    <div>
        <p>按钮</p>
        <div>
<!--            <Button v-click="{ eventName: 'test1' }">默认按钮</Button>-->
            <imm-button type="primary">主要按钮</imm-button>
            <imm-button type="success">成功按钮</imm-button>
            <imm-button type="info">信息按钮</imm-button>
            <imm-button type="warning">警告按钮</imm-button>
            <imm-button type="danger">危险按钮</imm-button>
        </div>
        <div>
            <imm-button size="medium">默认按钮</imm-button>
            <imm-button type="primary" size="small">主要按钮</imm-button>
            <imm-button type="success" size="mini">成功按钮</imm-button>
            <imm-button type="info">信息按钮</imm-button>
            <imm-button type="warning">警告按钮</imm-button>
            <imm-button type="danger">危险按钮</imm-button>
        </div>
        <div>
            <imm-button plain>默认按钮</imm-button>
            <imm-button type="primary" plain>主要按钮</imm-button>
            <imm-button type="success" plain>成功按钮</imm-button>
            <imm-button type="info" plain>信息按钮</imm-button>
            <imm-button type="warning" plain>警告按钮</imm-button>
            <imm-button type="danger" plain>危险按钮</imm-button>
        </div>
        <div>
            <imm-button round>默认按钮</imm-button>
            <imm-button type="primary" round>主要按钮</imm-button>
            <imm-button type="success" round>成功按钮</imm-button>
            <imm-button type="info" round>信息按钮</imm-button>
            <imm-button type="warning" round>警告按钮</imm-button>
            <imm-button type="danger" round>危险按钮</imm-button>
        </div>
        <div>
            <imm-button icon="Edit">默认按钮</imm-button>
            <imm-button type="primary" icon="Love">主要按钮</imm-button>
            <imm-button type="success" icon="User">成功按钮</imm-button>
            <imm-button type="info" icon="Home">信息按钮</imm-button>
            <imm-button type="warning" icon="Setting">警告按钮</imm-button>
            <imm-button type="danger" icon="Delete" iconPosition="right">危险按钮</imm-button>
        </div>
        <div>
            <imm-button icon="Edit" circle></imm-button>
            <imm-button type="primary" icon="Love" circle></imm-button>
            <imm-button type="success" icon="User" circle></imm-button>
            <imm-button type="info" icon="Home" circle></imm-button>
            <imm-button type="warning" icon="Setting" circle></imm-button>
            <imm-button type="danger" icon="Delete" circle></imm-button>
        </div>
    </div>
    <div>
        <p>图标</p>
        <div class="icon-table">
            <div class="icon-cell" v-for="name in icons" :key="name">
                <imm-icon :name="name" color="#f00" size="24px"></imm-icon>
                <span>{{name}}</span>
            </div>
        </div>
    </div>
    <div>
        <p>链接</p>
      <imm-link>默认链接</imm-link>
      <imm-link type="primary">主要链接</imm-link>
      <imm-link type="success">成功链接</imm-link>
      <imm-link type="info">信息链接</imm-link>
      <imm-link type="warning">警告链接</imm-link>
      <imm-link type="danger">危险链接</imm-link>

      <imm-link type="primary" disabled>默认链接</imm-link>
      <imm-link type="primary" disabled>主要链接</imm-link>
      <imm-link type="success" disabled>成功链接</imm-link>
      <imm-link type="info" disabled>信息链接</imm-link>
      <imm-link type="warning" disabled>警告链接</imm-link>
      <imm-link type="danger" disabled>危险链接</imm-link>

      <imm-link type="primary">无下划线链接</imm-link>
      <imm-link type="primary" underline>有下划线链接</imm-link>
    </div>
</template>
<script lang="ts" setup>
// import { Button, Icon, Link } from 'imm-ui'
// import { getCurrentInstance } from 'vue';
const icons = ['Edit', 'Love', 'User', 'Home', 'Setting', 'Delete', 'Refresh', 'Search', 'Remove', 'View', 'CirclePlus', 'CircleCheck', 'CircleClose']
// const { proxy } = getCurrentInstance()
// proxy.$vtrack({ eventName: 'test1' })
</script>
<style scope>
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
}
.imm-link {
  margin-right: 10px;
}
.imm-button {
  margin:10px 5px !important
}
</style>
