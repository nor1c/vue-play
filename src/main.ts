import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp({
  globalMixinHello: 'I come from global option (mixin)',
  custom: 'I am a custom option.',
  render: () => h(App)
})
app.config.optionMergeStrategies.custom = (toVal, fromVal) => {
  // I am a custom option., undefined
  // (new custom option value), I am a custom option (old value)
  return fromVal || toVal
}
app.mixin({
  custom: 'I am a new custom option value.',
  created() {
    const globalMixinHello = this.$options.globalMixinHello
    if (globalMixinHello) {
      console.log(globalMixinHello)
    }

    console.log(this.$options.custom)
  }
})
app.use(router)
app.mount('#app')
