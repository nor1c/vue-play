<template>
  <div>
    <div><i>Wait 0.5s</i></div>
    <br>
    <input type="text" v-model="text">
    <div>{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { customRef, defineComponent } from 'vue'

function useDebounceRef (value: string, delay: number = 500) {
  let timeout: number
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue: string) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay);
      }
    }
  })
}

export default defineComponent({
  setup() {
    const text = useDebounceRef('hello')  

    return {
      text
    }
  },
})
</script>
