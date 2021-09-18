<template>
  <div>
    <ShowButton :show="showHello" />
    <div v-if="showHello">Hello</div>
  </div>
</template>

<script>
import { ref, provide } from 'vue'
import ShowButton from './ShowButton.vue'

export default {
  components: {
    ShowButton
  },
  setup() {
    const showHello = ref(false)

    const changeHelloVisibility = () => {
      showHello.value = !showHello.value
    }
    provide('toggleHello', changeHelloVisibility)

    return {
      showHello
    }
  },
}
</script>