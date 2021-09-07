<template>
  <div :title="helloText">
      Hello world! Hover me to show the title attribute.
  </div>
</template>

<script>
export default {
  data() {
    return {
      helloText: 'the title!'
    }
  }
}
</script>