<template>
    <div id="counter">
        <keep-alive>
            <div>Counter: {{ counter }}</div>
        </keep-alive>
    </div>
</template>

<script>
import { KeepAlive } from 'vue'
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