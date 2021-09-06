<template>
    <div>
        {{ hooks }}
    </div>
</template>

<script>
export default {
    data: () => ({
        hooks: 'Hooks'
    }),
    beforeCreate: () => {
        alert('Before create...')
    },
    created: () => {
        alert('Created!')
    },
    beforeMount: () => {
        alert('Before mount...')
    },
    mounted: () => {
        alert('Mounted!')
    },
    beforeUnmount: () => {
        alert('Before unmount...')
    },
    unmounted: () => {
        alert('Unmounted!')
    } 
}
</script>