<template>
    <div>
        {{ key }}. {{ index }}. {{ item }}
    </div>
</template>

<script>
export default {
    props: ['key', 'index', 'item']
}
</script>