<template>
    <div class="imm-icon">
        <svg class="icon" :style="style" aria-hidden="true">
            <use :xlink:href="iconName"></use>
        </svg>
        <div v-if="dot" class="imm-info" :class="styleDot">{{ badge }}</div>
    </div>
</template>
 <script lang="ts">
 
 import './style/index.less'
 import { defineComponent, computed, onMounted } from 'vue'
 import { iconProps } from './types'
 import type { CSSProperties } from 'vue'
 import { isUndefined, addUnit } from '@imm-ui/utils'

 export default defineComponent({
    name: 'imm-icon',
     props: iconProps,
     setup(props) {
         onMounted(() => {
             import('./font/iconfont.js' as any)
         })
         const iconName = computed(() => {
             return `#imm-${props.name}`
         })
         const styleDot = computed(() => {
             return {
                 [`imm-dot`]: props.dot && !props.badge
             }
         })
         const badge = computed(() => {
             return props.badge
         })
 
         const style = computed<CSSProperties>(() => {
            if (!props.size && !props.color) return {}

            return {
                fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
                '--color': props.color,
            }
        })
         return {
             iconName,
             styleDot,
             badge,
             style
         };
     },
 });
 </script>