import { createApp } from 'vue'
import './styles/index.css'
import App from './App.vue'
import { pinia } from './store'

createApp(App).use(pinia).mount('#app').$nextTick(() => {
  // Use contextBridge
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
  })
})


