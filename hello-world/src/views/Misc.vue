<template>
    <div>
        <h1>Miscellaneous</h1>
        <hr>
        <div>
            <h3>Conditional and Loops</h3>
            <div v-if="showHello">
                Hello
            </div>
            <button @click="showHello = !showHello">{{ showHello ? 'Hide' : 'Show' }}</button>
        </div>
        <hr>
        <div>
            <h3>List Rendering (for loop)</h3>
            <ol>
                <li v-for="todo in todos">
                    {{ todo.name }}
                </li>
            </ol>
        </div>
        <hr>
        <div>
            <h3>Composed Components</h3>
            <ol>
                <TodoItem v-for="item in students" :todo="item" :key="item.id"></TodoItem>
            </ol>
            <HelloWorldProp :helloText="helloWorld"></HelloWorldProp>
        </div>
        <hr>
        <div>
            <h3>Directives</h3>
            <div v-text="vtext"></div>
            <div v-show="showHello">{{ helloWorld }}</div>
        </div>
        <hr>
        <div>
            <h3>v-slot</h3>
            <TodoButton>
                Add Todo
            </TodoButton>
        </div>
    </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue'
import HelloWorldProp from '../components/HelloWorldProp.vue'
import TodoButton from '../components/TodoButton.vue'

export default {
    components: {
        TodoItem,
        HelloWorldProp,
        TodoButton
    },
    data() {
        return {
            helloWorld: 'Hello World!',
            showHello: true,
            todos: [
                { id: 1, name: 'Learn Javascript' },
                { id: 2, name: 'Learn Vue.JS' },
                { id: 3, name: 'Learn Typescript' }
            ],
            students: [
                { id: 1, name: 'Rick' },
                { id: 2, name: 'Morty' }
            ]
        }
    }
}
</script>