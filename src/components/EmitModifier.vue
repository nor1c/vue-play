<template>
  <input type="text" :value="modelValue" @input="capitalizeIt">
</template>

<script>
export default {
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  methods: {
    capitalizeIt(e) {
      let value = e.target.value
      if (this.modelModifiers.capitalize) {
        value = value.toUpperCase()
      }
      this.$emit('update:modelValue', value)
    }
  }
}
</script>