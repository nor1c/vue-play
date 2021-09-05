<template>
    <ul>
        <li v-for="item in items">
            <slot :item="item"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            items: ['Feed a cat', 'Feed a dog']
        }
    }
}
</script>