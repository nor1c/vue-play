import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp({
  globalMixinHello: 'I come from global option (mixin)',
  render: () => h(App)
})
app.mixin({
  created() {
    const globalMixinHello = this.$options.globalMixinHello
    if (globalMixinHello) {
      console.log(globalMixinHello)
    }
  }
})
app.use(router)
app.mount('#app')
