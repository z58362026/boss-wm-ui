import { createApp } from 'vue'
import App from './App.vue'

import * as bossWMUi from '../lib'

const app = createApp(App)

app.use(bossWMUi)

app.mount('#app')
