import { withInstall } from '@imm-ui/utils';
import * as components from './src/index'
export * from './src/index'
export default {
    install: () => {
        for (const comkey in components) {
            withInstall((components as any)[comkey])
        }
    }
}