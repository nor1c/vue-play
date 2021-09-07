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
    </div>
</template>

<script>
export default {
    emits: {
        submit: ({ email, password }) => {
            if (email && password) {
                alert(`Email: ${email}, Pass: ${password}`)
                return true
            } else {
                console.warn('Invalid submit event payload!')
                return false
            }
        }
    },
    data: () => ({
        form: {
            email: '',
            password: ''
        }
    }),
    methods: {
        submitForm() {
            this.$emit('submit', this.form)
        }
    }
}
</script>