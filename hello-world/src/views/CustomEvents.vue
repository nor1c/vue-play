<template>
    <div>
        <div>
            <h3>Validate Emitted Events</h3>
            <div>
                <form @submit.prevent="submitForm">
                    <input type="email" v-model="form.email">
                    <input type="password" v-model="form.password">
                    <button type="submit">Submit Form</button>
                </form>
            </div>
        </div>

        <hr>
        <div>
            <h3>v-model Arguments</h3>
            <EmitCompOne v-model:title="bookTitle"></EmitCompOne>
            {{ bookTitle }}
        </div>
    </div>
</template>

<script>
import EmitCompOne from '../components/EmitCompOne.vue'

export default {
    components: {
        EmitCompOne
    },
    emits: {
        submit: ({ email, password }) => {
            if (email && password) {
                alert(`Email: ${email}, Pass: ${password}`)
                return true
            } else {
                console.warn('Invalid submit event payload!')
                return false
            }
        },
    },
    data: () => ({
        form: {
            email: '',
            password: ''
        },
        bookTitle: 'Learn Vue.JS',
    }),
    methods: {
        submitForm() {
            this.$emit('submit', this.form)
        }
    }
}
</script>