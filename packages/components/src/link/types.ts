
import { ExtractPropTypes } from 'vue'

export const LinkType = ['primary', 'success', 'info', 'warning', 'danger']

export const IconPosition = ['left', 'right']


export const linkProps = {
    type: {
        type: String,
        validator(value: string) {
            return LinkType.includes(value)
        }
    },
    disabled: Boolean,
    underline: {
        type: Boolean,
    },
    icon: String,
    iconPosition: {
        type: String,
        validator(value: string) {
            return IconPosition.includes(value)
        }
    },
}

export type LinkProps = ExtractPropTypes<typeof linkProps>


