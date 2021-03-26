import { createApp } from 'vue'
import App from './App.vue'

import * as bossWMUi from 'boss-wm-ui'

const app = createApp(App)

app.use(bossWMUi)

app.mount('#app')
