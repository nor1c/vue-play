<template>
  <div>
    <div>
      {{ user }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProvideInject',
  inject: ['user'],
}
</script>