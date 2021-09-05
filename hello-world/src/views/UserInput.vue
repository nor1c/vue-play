<template>
    <div>
        <h2>Handling User Input</h2>
        <p>{{ message }}</p>
        <button @click="reverseMessage">{{ reversed ? 'Restore' : 'Reverse' }}</button>
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