<template>
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
</template>
<script lang="ts" setup>
import { Button } from "imm-ui";
</script>
<style>
.imm-button {
  margin-right: 10px;
}
</style>