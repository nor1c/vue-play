<template>
    <li>
        {{ item }}
        <button @click="$emit('remove')">Remove</button>
    </li>
</template>

<script>
export default {
    props: ['item'],
}
</script>