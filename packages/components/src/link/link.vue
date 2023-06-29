<template>
    <a v-bind="attrs" class="imm-link" :class="styleClass">
        <slot />
    </a>
</template>
<script lang="ts">
// import './style/index.less'
import { linkProps } from './types'
import { defineComponent, useAttrs, computed } from 'vue'
export default defineComponent({
    name: 'imm-link',
    props: linkProps,
    setup(props) {
        const attrs = useAttrs()
        const styleClass = computed(() => {
            return {
                [`imm-link--${props.type}`]: props.type,
                'is-disabled': props.disabled,
                'is-underline': props.underline,
            }
        })
        return {
            attrs,
            styleClass
        }
    }
});
</script>
