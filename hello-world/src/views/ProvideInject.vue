<template>
  <div>
    <div>
      {{ user }}
      {{ todoLength }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProvideInject',
  inject: ['user', 'todoLength'],
}
</script>