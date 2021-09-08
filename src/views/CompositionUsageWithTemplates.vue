<template>
  <div>
    <div>{{ collectionName }}: {{ readersNumber }} {{ book.title }}</div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  props: {
    collectionName: String
  },
  setup(props, context) {
    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })

    // expose to template
    return {
      readersNumber,
      book
    }
  }
}
</script>