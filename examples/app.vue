<template>
    <div>
        <p>按钮</p>
        <Button type="primary" >搜索</Button>
    </div>
    <div>
        <p>图标</p>
        <Icon name="user" ></Icon>
    </div>
    <div>
        <p>链接</p>
        <Link type="primary" underline>主要链接</Link>
    </div>
</template>
<script lang="ts" setup>
import { Button, Link, Icon } from 'imm-ui'
</script>