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

            <br>
            <h3>Desctructing Slot Props</h3>
            <!-- ES2015 descrution -->
            <TodoList>
                <template v-slot="{ item, item: renamedProps }">
                    <span>{{ item }} {{ renamedProps }}</span>
                </template>
            </TodoList>

            <br>
            <h3>Define fallbacks</h3>
            <TodoList v-slot="{ item, undefinedItem = 'This is an undefined Value' }">
                <span>{{ item }} {{ undefinedItem }}</span>
            </TodoList>
        </div>

        <hr>
        <div>
            <h3>Raw HTML directive</h3>
            <p>{{ rawHtml }}</p>
            <p v-html="rawHtml"></p>
        </div>

        <hr>
        <div>
            <h3>Attributes</h3>
            <div :id="dynamicId">test</div> <!-- <div id="1".. -->
            <button :disabled="isButtonDisabled">Button</button> <!-- the button disabled -->
        </div>

        <hr>
        <div>
            <h3>Arguments</h3>
            <a :href="'https://google.com'">href url</a>
            <a href="#" @click="sayHello()">click me to print hello world</a>

            <div>
                <h3>Dynamic Argument</h3>
                <h2>{{ thisWillBeChanged }}</h2>
                <dynamic-argument @changeText="changeTheText($event)"></dynamic-argument>
            </div>
        </div>

        <hr>
        <div>
            <h1>Class & Style Binding</h1>
            <h3>BInding HTML Classes</h3>
            <div :class="{ textBold: isTextBold, 'text-danger': hasError }" @click="isTextBold = !isTextBold">
                Click to toggle font weight
            </div>
            <div :class="classObject">
                Class Object
            </div>
            <div :class="[boldClass, errorClass]">
                Bind Array Class
            </div>
            <div :class="[{ textBold: isTextBold }, errorClass]">
                Mix Array & Object
            </div>
        </div>

        <hr>
        <div>
            <h3>Binding Inline Styles</h3>
            <div :style="{ color: 'green', fontFamily: fontFamily }">
                Object Syntax
            </div>
            <div :style="styleObject">
                Bind Array Style Object
            </div>
            <div :style="[styleObject, textItalic]">
                Array Syntax
            </div>
            <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
                Multiple Values
            </div>
        </div>

        <hr>
        <div>
            <h3>List Rendering Object</h3>
            <ol>
                <li v-for="(item, name, index) in todos" :key="index">
                    {{ index }}. {{ name }}. {{ item }}
                </li>
            </ol>
        </div>

        <hr>
        <div>
            <h3>v-for with Component</h3>
            <VForComponent v-for="(todo, index) in todos" :key="index" :index="index" :item="todo"></VForComponent>
        </div>

        <hr>
        <div>
            <h3>Multiple Event Handlers</h3>
            <button @click="one('one'), two('two')">Click me</button>
        </div>

        <hr>
        <div>
            <h3>v-model.lazy</h3>
            <input type="text" v-model.lazy="msg">
            {{ msg }}

            <h3>v-model.number</h3>
            <input type="number" v-model.number="age">
            {{ age }}

            <h3>v-model.trim</h3>
            <input v-model.trim="msg">
        </div>

        <hr>
        <div>
            <h3>Dynamic Components</h3>
            <div>
                <button v-for="(tab, index) in tabs" :key="index" @click="currentTab = tab">
                    {{ tab }}
                </button>
                <component :is="currentTabComponent"></component>
            </div>

            <h3>Dynamic Components with keep-alive</h3>
            <div>
                <button v-for="(tab, index) in tabs" :key="index" @click="currentTab = tab">
                    {{ tab }}
                </button>
                <keep-alive>
                    <component :is="currentTabComponent"></component>
                </keep-alive>
            </div>
        </div>

        <hr>
        <div>
            <h3>Async Components</h3>
            <div>
                <async-component></async-component>
            </div>
        </div>

        <hr>
        <div>
            <h3>Select Option Attribute Inheritance</h3>
            <div>
                <DatePicker @change="showDatePickerChange"></DatePicker>
            </div>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

import TodoItem from '../components/TodoItem.vue'
import HelloWorldProp from '../components/HelloWorldProp.vue'
import TodoButton from '../components/TodoButton.vue'
import BaseLayout from '../layouts/BaseLayout.vue'
import TodoList from '../components/TodoList.vue'
import DynamicArgument from '../components/DynamicArgument.vue'
import VForComponent from '../components/VForComponent.vue'
import Tabhome from '../components/Tabhome.vue'
import Tabposts from '../components/Tabposts.vue'
import DatePicker from '../components/DatePicker.vue'
import AsyncComponent from '../components/AsyncComponent.vue'

export default {
    components: {
        TodoItem,
        HelloWorldProp,
        TodoButton,
        BaseLayout,
        TodoList,
        DynamicArgument,
        VForComponent,
        Tabhome, Tabposts,
        DatePicker,
        'async-component': defineAsyncComponent(() => (
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(import('../components/AsyncComponent.vue'))
                }, 500);
            })
        )),
        AsyncComponent
    },
    data: () => ({
        helloWorld: 'Hello World!',
        rawHtml: '<span style="color:red">This should be red</span>',
        showHello: true,
        addButton: 'Add Todo',
        thisWillBeChanged: 'This will be changed once you clicked this button below',
        msg: '',
        age: 0,
        todos: [
            { id: 1, name: 'Learn Javascript' },
            { id: 2, name: 'Learn Vue.JS' },
            { id: 3, name: 'Learn Typescript' }
        ],
        students: [
            { id: 1, name: 'Rick' },
            { id: 2, name: 'Morty' }
        ],
        dynamicId: 1,
        isButtonDisabled: true,
        isTextBold: true,
        hasError: true,
        boldClass: 'textBold',
        errorClass: 'text-danger',
        fontFamily: 'Poppins',
        styleObject: {
            color: 'blue',
            fontWeight: 'bold',
            fontFamily: 'Poppins'
        },
        textItalic: {
            fontStyle: 'italic',
        },
        currentTab: 'home',
        tabs: ['home', 'posts']
    }),
    computed: {
        classObject() {
            return {
                textBold: this.isTextBold,
                'text-danger': this.hasError
            }
        },
        currentTabComponent() {
            return 'Tab' + this.currentTab
        }
    },
    methods: {
        sayHello: function () {
            alert('hello world')
        },
        changeTheText: function (updatedText) {
            this.thisWillBeChanged = updatedText
        },
        one: function () {
            alert('one')
        },
        two: function () {
            alert('two')
        },
        showDatePickerChange(event) {
            alert(event.target.value)
        }
    }
}
</script>

<style scoped>
.textBold {
    font-weight: bold;
}
.text-danger {
    color: red;
}
</style>