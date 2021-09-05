<template>
    <div>
        <div>
            <h2>Handling User Input</h2>
            <p>{{ message }}</p>
            <button @click="reverseMessage">{{ reversed ? 'Restore' : 'Reverse' }}</button>
        </div>
        <div>
            <h2>Two-way Binding</h2>
            <p>{{ message }}</p>
            <input type="text" v-model="message">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'The message.',
            reversed: false,
        }
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message
                .split('')
                .reverse()
                .join('')
            this.reversed = !this.reversed
        }
    }
}
</script>