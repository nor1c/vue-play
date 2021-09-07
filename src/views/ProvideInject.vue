<template>
  <div>
    <div>
      <p>{{ user }}</p>
      <p>Todo length from child: {{ todoLength }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProvideInject',
  inject: ['user', 'todoLength'],
}
</script>