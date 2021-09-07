<template>
    <button @click="changeText()">Change</button>
</template>

<script>
export default {
    methods: {
        changeText: function () {
            this.$emit('changeText', 'It\'s changed!')
        }
    }
}
</script>