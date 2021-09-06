<template>
    <ul>
        <li v-for="(item, index) in items" :key="index">
            <slot :item="item"></slot>
            <slot name="other" :item="item"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            items: ['Feed a cat', 'Feed a dog'],
        }
    }
}
</script>