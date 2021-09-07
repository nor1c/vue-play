<template>
  <input type="text" :value="description" @input="capitalizeDescription">
</template>

<script>
export default {
  props: ['description', 'descriptionModifiers'],
  emits: ['update:description'],
  methods: {
    capitalizeDescription(e) {
      let value = e.target.value
      if (this.descriptionModifiers.capitalize) {
        value = value.toUpperCase()
      }
      this.$emit('update:description', value)
    }
  }
}
</script>