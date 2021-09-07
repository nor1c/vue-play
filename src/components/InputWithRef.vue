<template>
  <input type="text" ref="input">
</template>

<script>
export default {
  methods: {
    focusIt() {
      this.$refs.input.focus()
    }
  }
}
</script>