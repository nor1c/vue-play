<template>
  <div>
    <h3>Provide/Inject</h3>
    <ProvideInject />
  </div>
</template>

<script>
import ProvideInject from '../views/ProvideInject.vue'

export default {
  components: {
    ProvideInject
  },
  data: () => ({
    todos: ['Learn Vue.JS', 'Learn Composition API']
  }),
  provide() {
    return {
      user: 'John Doe',
      todoLength: this.todos.length
    }
  }
}
</script>