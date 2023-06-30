<template>
    <a v-bind="attrs" class="imm-link" :class="styleClass">
        <Icon v-if="iconFont.iconName && iconFont.position != 'right'" :name="iconFont.iconName" />
        <span><slot /></span>
        <Icon v-if="iconFont.iconName && iconFont.position == 'right'" :name="iconFont.iconName" />
    </a>
</template>
<script lang="ts">
import { linkProps } from './types'
import { defineComponent, useAttrs, computed } from 'vue'
import Icon from '../icon/icon.vue'
export default defineComponent({
    name: 'imm-link',
    props: linkProps,
    components: { Icon },
    setup(props) {
        const attrs = useAttrs()
        const styleClass = computed(() => {
            return {
                [`imm-link--${props.type}`]: props.type,
                'is-disabled': props.disabled,
                'is-underline': props.underline,
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
            attrs,
            styleClass,
            iconFont
        }
    }
});
</script>
