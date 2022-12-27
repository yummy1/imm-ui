import {createApp} from 'vue'
import App from './app.vue'
const app = createApp(App)
import immui from 'imm-ui'
// import vTracking from '@imm-ui/tracking'
// app.use(vTracking, {
//     baseParams: {
//         uid: 123,
//         userAgent: "Chrome",
//     },
//     prefix: "app"
// })
app.use(immui)
app.mount('#app')
