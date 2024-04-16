import './styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
