<template>
  <div ref="root">This is a root element.</div>
  {{ root }}

  <hr>
  <div>
    <h3>Usage inside v-for</h3>
    <div v-for="(item, i) in list" :ref="el => { if (el) divs[i] = el }" :key="i">
      {{ item }}
    </div>
    <button @click="addItem">Add item</button>
  </div>
</template>

<script>
import { ref, onMounted, reactive, onBeforeUpdate, watchEffect } from 'vue'

export default {
  setup() {
    const root = ref(null)

    onMounted(() => {
      console.log(root.value) // output: This is a root element.
    })

    watchEffect(() => {
      // This effect runs before the DOM is updated, and consequently,
      // the template ref does not hold a reference to the element yet.
      console.log(root.value) // output: null
    })

    watchEffect(() => {
      console.log(root.value) // output: <div>This is a root element.</div>
    }, { flush: 'post' })

    // usage inside v-for
    const list = reactive([1, 2, 3])
    const divs = ref([])

    // make sure to reset the refs before each update
    onBeforeUpdate(() => {
      divs.value = []
      console.log(divs)
    })

    const addItem = () => {
      list.push(list.length)
    }

    return {
      root,
      list,
      divs,
      addItem
    }
  }
}
</script>