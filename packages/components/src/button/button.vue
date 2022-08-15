<!-- button.vue -->
<template>
    <button class="m-button" :class="styleClass">
        <Icon class="icon" v-if="iconFont.iconName && iconFont.position != 'right'" :name="iconFont.iconName" />
        <slot />
        <Icon class="icon" v-if="iconFont.position == 'right' && iconFont.iconName" :name="iconFont.iconName" />
    </button>
</template>

<script lang="ts">
import './style/index.less'
import { defineComponent, computed } from 'vue'
import { buttonProps } from './types'
import Icon from '../icon/icon.vue'
export default defineComponent({
    name: 'm-button',
    props: buttonProps,
    components: { Icon },
    setup(props) {

        const styleClass = computed(() => {
            return {
                [`m-button--${props.type}`]: props.type,
                'is-plain': props.plain,
                'is-round': props.round,
                'is-disabled': props.disabled,
                [`m-button--${props.size}`]: props.size,
            }
        })

        //图标
        const iconFont = computed(() => {
            const iconName = props.icon
            const position = props.iconPosition
            return {
                iconName,
                position
            }
        })

        return {
            styleClass,
            Icon,
            iconFont
        };
    },
});
</script>
