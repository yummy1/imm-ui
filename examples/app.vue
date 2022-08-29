<template>
    <div>
        <p>按钮</p>
        <div>
            <Button v-click="{ eventName: 'test1' }">默认按钮</Button>
            <Button type="primary">主要按钮</Button>
            <Button type="success">成功按钮</Button>
            <Button type="info">信息按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
        </div>
        <div>
            <Button size="medium">默认按钮</Button>
            <Button type="primary" size="small">主要按钮</Button>
            <Button type="success" size="mini">成功按钮</Button>
            <Button type="info">信息按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
        </div>
        <div>
            <Button plain>默认按钮</Button>
            <Button type="primary" plain>主要按钮</Button>
            <Button type="success" plain>成功按钮</Button>
            <Button type="info" plain>信息按钮</Button>
            <Button type="warning" plain>警告按钮</Button>
            <Button type="danger" plain>危险按钮</Button>
        </div>
        <div>
            <Button round>默认按钮</Button>
            <Button type="primary" round>主要按钮</Button>
            <Button type="success" round>成功按钮</Button>
            <Button type="info" round>信息按钮</Button>
            <Button type="warning" round>警告按钮</Button>
            <Button type="danger" round>危险按钮</Button>
        </div>
        <div>
            <Button icon="Edit">默认按钮</Button>
            <Button type="primary" icon="Love">主要按钮</Button>
            <Button type="success" icon="User">成功按钮</Button>
            <Button type="info" icon="Home">信息按钮</Button>
            <Button type="warning" icon="Setting">警告按钮</Button>
            <Button type="danger" icon="Delete" iconPosition="right">危险按钮</Button>
        </div>
        <div>
            <Button icon="Edit" circle></Button>
            <Button type="primary" icon="Love" circle></Button>
            <Button type="success" icon="User" circle></Button>
            <Button type="info" icon="Home" circle></Button>
            <Button type="warning" icon="Setting" circle></Button>
            <Button type="danger" icon="Delete" circle></Button>
        </div>
    </div>
    <div>
        <p>图标</p>
        <div class="icon-table">
            <div class="icon-cell" v-for="name in icons" :key="name">
                <Icon :name="name" color="#f00" size="24px"></Icon>
                <span>{{name}}</span>
            </div>
        </div>
    </div>
    <div>
        <p>链接</p>
        <Link type="primary" underline>主要链接</Link>
    </div>
</template>
<script lang="ts" setup>
import { Button, Link, Icon } from 'imm-ui'
import { getCurrentInstance } from 'vue';
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
</style>