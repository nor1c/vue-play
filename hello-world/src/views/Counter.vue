<template>
    <div id="counter">
        Counter: {{ counter }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    mounted() {
        this.counterval()
    },
    methods: {
        counterval: function () {
            setInterval(() => {
                this.counter++
            }, 200);
        }
    }
}
</script>