<template>
    <input type="text" :value="title" @input="$emit('update:title', $event.target.value)">
</template>

<script>
export default {
    props: ['title'],
    emit: ['update:title'],
}
</script>