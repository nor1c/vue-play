<template>
  <div>
    <div>{{ collectionName }}: {{ readersNumber }} {{ book.title }}</div>
  </div>
</template>

<script>
import { ref, reactive, h } from 'vue'

export default {
  props: {
    collectionName: String
  },
  setup(props, context) {
    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })

    // expose to template
    return () => h('div', [readersNumber.value, book.title])
  }
}
</script>