import {createApp} from 'vue'
import App from './app.vue'
const app = createApp(App)
import immui from "imm-ui"
app.use(immui)
app.mount('#app')