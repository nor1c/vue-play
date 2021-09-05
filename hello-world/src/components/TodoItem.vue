<template>
    <li>{{ todo.name }}</li>
</template>

<script>
export default {
    name: 'todo-item',
    props: ['todo']
}
</script>