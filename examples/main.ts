import {createApp} from 'vue'
import App from './app.vue'
const app = createApp(App)
import immUI from 'imm-ui'
import "imm-ui/lib/src/theme-chalk/index.css"
// import vTracking from '@imm-ui/tracking'
// app.use(vTracking, {
//     baseParams: {
//         uid: 123,
//         userAgent: "Chrome",
//     },
//     prefix: "app"
// })
app.use(immUI)
app.mount('#app')
