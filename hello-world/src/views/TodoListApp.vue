<template>
    <div>
        <form @submit.prevent="addNewTodo()">
            <input type="text" v-model="newTodoText" placeholder="New Todo">
            <button>Add</button>
        </form>
        <ul>
            <TodoListItem 
                v-for="(todo, index) in todos" 
                :key="index" 
                :item="todo"
                @remove="todos.splice(index, 1)"
            ></TodoListItem>
        </ul>
    </div>
</template>

<script>
import TodoListItem from '../components/TodoListItem.vue'

export default {
    components: {
        TodoListItem
    },
    data: () => ({
        newTodoText: '',
        todos: [
            { id: 1, name: 'Learn Vue.JS' },
            { id: 2, name: 'Learn Option API' },
            { id: 3, name: 'Learn Composition API' }
        ],
        nextTodoId: 4
    }),
    methods: {
        addNewTodo() {
            console.log(this.newTodoText)
            this.todos.push({
                id: this.nextTodoId++,
                name: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
}
</script>