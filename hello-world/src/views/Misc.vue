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
                <li v-for="(todo, index) in todos" :key="index">
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
                {{ addButton }}
            </TodoButton>
        </div>

        <hr>
        <div>
            <h3>Base Layout with Named Slot</h3>
            <BaseLayout>
                <!-- placement doesn't matter -->
                Main content
                <template v-slot:header>
                    The header
                </template>
                <template #footer> <!-- # is a shorthand of v-slot: -->
                    The footer
                </template>
            </BaseLayout>
        </div>

        <hr>
        <div>
            <h3>Scoped Slot</h3>
            <TodoList>
                <template #default="slotProps"> <!-- default name can be anything -->
                    <span style="color:green">{{ slotProps.item }}</span>
                </template>
                <!-- 
                    same as:
                    <template v-slot:default>
                        **but if you want to consume the props here, you need to specify the slot name
                        default slot
                    </template>
                 -->
            </TodoList>

            <br>
            <h3>Lone Default Slots</h3>
            <TodoList #default="slotProps"> <!-- or just v-slot="slotProps" -->
                <span style="color:blue">{{ slotProps.item }}</span>
            </TodoList>

            <br>
            <h3>Multiple Slots</h3>
            <TodoList>
                <template #default="slotProps">
                    <span>{{ slotProps.item }}</span>
                </template>

                <template #other="otherSlotProps">
                    <span style="color:red">{{ otherSlotProps.item }}</span>
                </template>
            </TodoList>
        </div>
    </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue'
import HelloWorldProp from '../components/HelloWorldProp.vue'
import TodoButton from '../components/TodoButton.vue'
import BaseLayout from '../layouts/BaseLayout.vue'
import TodoList from '../components/TodoList.vue'

export default {
    components: {
        TodoItem,
        HelloWorldProp,
        TodoButton,
        BaseLayout,
        TodoList
    },
    data() {
        return {
            helloWorld: 'Hello World!',
            showHello: true,
            addButton: 'Add Todo',
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