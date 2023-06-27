<template>
    <div class="imm-upload">
        <input type="file" :multiple="props.multiple" :accept="props.accept" ref="kIpt" @change="getFiles"
            v-show="false">
        <div @click="fileUpload" v-if="!props.drag">
            <slot />
        </div>
        <Drager v-else @getFilesList="getFilesList" @fileUpload="fileUpload" />
        <div class="imm-upload-list">
            <div class="imm-upload-list_item" v-for="(item, index) in filesList" :key="index">
                <div class="imm-upload-list_item-name">
                    {{ item.name }}
                </div>
                <div class="imm-upload-list_item-status-label">
                    <Icon name="ashbin" @click="delFile(index)" />
                </div>
            </div>

        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'imm-upload'
});
</script>
<script setup lang="ts">
import './style/index.less'
import { ref } from 'vue'
import Icon from '../icon/icon.vue'
import { uoloadType } from './types'
import Drager from './dragger.vue'
const props = defineProps(uoloadType)
const kIpt = ref()
const emits = defineEmits(['getFilesList'])
const filesList = ref<File[]>([])
const fileUpload = () => {
    kIpt.value.click()
}

const getFiles = (e: Event) => {

    const files = (e.target as HTMLInputElement).files
    if (!files) return

    filesList.value.push(...Array.from(files))
    emits('getFilesList', filesList.value)
}

const delFile = (index: number) => {
    filesList.value.splice(index, 1)
    emits('getFilesList', filesList.value)
}

const getFilesList = (file: File[]) => {
    filesList.value = file
    emits('getFilesList', file)
}

</script>
