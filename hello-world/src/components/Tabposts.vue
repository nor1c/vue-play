<template>
    <div>
        <p>Total post: {{ totalPost }}</p>
        <button @click="totalPost++">Increase</button>
    </div>
</template>

<script>
export default {
    data: () => ({
        totalPost: 2
    }),
}
</script>