
import { ExtractPropTypes } from 'vue'
import { definePropType} from '@imm-ui/utils'
export const iconProps = {
    name: {
        type: String
    },
    dot: {
        type: Boolean
    },
    badge: {
        type: String
    },
    color: {
        type: String
    },
    size: {
        type: definePropType<number | string>([Number, String])
    }
}
export type IconProps = ExtractPropTypes<typeof iconProps>


