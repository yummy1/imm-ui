<!-- button.vue -->
<template>
    <button class="imm-button" :class="styleClass">
        <Icon v-if="loading" name="Loading" />
        <Icon v-if="iconFont.iconName && iconFont.position != 'right' && !loading" :name="iconFont.iconName" />
        <span v-if="slotDefault"><slot /></span>
        <Icon v-if="iconFont.iconName && iconFont.position == 'right'" :name="iconFont.iconName" />
    </button>
</template>

<script lang="ts">
import { defineComponent, computed, useSlots } from 'vue'
import { buttonProps } from './types'
import Icon from '../icon/icon.vue'
export default defineComponent({
    name: 'imm-button',
    props: buttonProps,
    components: { Icon },
    setup(props) {

        const styleClass = computed(() => {
            return {
                [`imm-button--${props.type}`]: props.type,
                'is-plain': props.plain,
                'is-round': props.round,
                'is-circle': props.circle,
                'is-disabled': props.disabled,
                [`imm-button--${props.size}`]: props.size,
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

      //loading
        const loading = computed(() => {
          return props.loading
        })

        //判断<slot/>是否有传值
       const slotDefault = !!useSlots().default;

        return {
            styleClass,
            Icon,
            iconFont,
            slotDefault,
            loading
        };
    },
});
</script>
