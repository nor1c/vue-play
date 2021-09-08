<template>
  <div ref="root">This is a root element.</div>
  {{ root }}
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const root = ref(null)

    onMounted(() => {
      console.log(root.value) // output: This is a root element.
    })

    return {
      root
    }
  }
}
</script>