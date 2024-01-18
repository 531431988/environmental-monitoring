import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:uno.css'
import { Layout, LayoutContent, LayoutHeader, Flex, Row, Col, Modal } from 'ant-design-vue'

createApp(App).use(Layout).use(LayoutContent).use(LayoutHeader).use(Flex).use(Row).use(Col).use(Modal).mount('#app').$nextTick(() => {
  // Remove Preload scripts loading
  postMessage({ payload: 'removeLoading' }, '*')

  // Use contextBridge
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
  })
})
