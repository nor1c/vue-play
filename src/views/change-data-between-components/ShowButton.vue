<template>
  <div>
    <button @click="toggleHello">{{ showHideText }} Hello</button>
  </div>
</template>

<script>
import { inject, toRefs, computed } from 'vue'
export default {
  props: ['show'],
  setup(props) {
    const toggleHello = inject('toggleHello')

    const showHideText = computed(() => props.show ? 'Hide' : 'Show')

    return {
      toggleHello,
      showHideText
    }
  },
}
</script>