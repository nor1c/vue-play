<template>
  <div>
    <div>
      <h3>Provide/Inject</h3>
      Todo length from parent: {{ todos.length }}
      <ProvideInject />
      <button @click="generateNewTodo">Create new Random Todo</button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

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
      todoLength: computed(() => this.todos.length)
    }
  },
  methods: {
    generateNewTodo() {
      this.todos.push(`New Todo ${this.todos.length+1}`)
    }
  }
}
</script>